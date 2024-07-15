import React, { useEffect, useState } from 'react';
import './Logement.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const Logement = () => {
    const { id } = useParams();
    const [dataID, setDataID] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(res => setDataID(res.find(nyan => nyan.id === id)))
            .catch(error => console.error('Error data:', error));
        if (!dataID) {
            nav('/404');
            console.log("404");
        }
    }, [id, nav, dataID]);

    if (!dataID) {
        return (nav('/404'));
    }

    console.log(dataID);

    return (
        <div>
            <Header />
            <main className='Logement'>
                <Slideshow />
                <div className='Info1'>
                    <div className='titleID'>
                        <h1>{dataID.title}</h1>
                        <p>{dataID.location}</p>
                    </div>
                    <div className='host'>
                        {/* <p>{dataID.host.name}</p>
                        <img src={dataID.host.picture} alt={"photo de" + dataID.host.name} /> */}
                    </div>
                </div>
                <div className='InfoTag'>
                    <div className='tags'>
                        <ul>

                        </ul>
                    </div>
                    <div className='stars'>

                    </div>
                </div>
                <div className='LogementCollapses'>
                    <Collapse
                        title={'Description'}
                        text={dataID.description} />
                    <Collapse
                        title={'Équipements'}
                        text={dataID.equipments} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Logement;