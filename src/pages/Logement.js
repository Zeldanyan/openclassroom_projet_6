import React, { useEffect, useState } from 'react';
import './Logement.scss';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import star1 from './../images/star_true.svg';
import star0 from './../images/star_false.svg';
import Error404 from './Error404';

const Logement = () => {
    const { id } = useParams();
    const [dataID, setDataID] = useState([]);

    useEffect(() => { //database logement
        fetch('/logements.json')
            .then(response => response.json())
            .then(res => setDataID(res.find(nyan => nyan.id === id)))
            .catch(error => console.error('Error data:', error));
    }, [id]);

    if (!dataID) {
        return (<Error404 />);
    }

    return (
        <div>
            <Header />
            {dataID?.id && (<main className='Logement'>
                <Slideshow IMGs={dataID.pictures} />
                <div className='Info1'>
                    <div className='titleID'>
                        <h1>{dataID.title}</h1>
                        <p>{dataID.location}</p>
                    </div>
                    <div className='host'>
                        <div className='hostname'>
                            <p>{dataID.host.name.split(' ')[0]}</p>
                            <p>{dataID.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={dataID.host.picture} alt={"photo de" + dataID.host.name} />
                    </div>
                </div>
                <div className='InfoTag'>
                    <div className='tags'>
                        <ul>
                            {dataID.tags.map((tag_) => (
                                <li key={tag_}>{tag_}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='stars'>
                        <img src={dataID.rating >= 1 ? star1 : star0} alt={dataID.rating + "/5 étoiles"} />
                        <img src={dataID.rating >= 2 ? star1 : star0} alt={dataID.rating + "/5 étoiles"} />
                        <img src={dataID.rating >= 3 ? star1 : star0} alt={dataID.rating + "/5 étoiles"} />
                        <img src={dataID.rating >= 4 ? star1 : star0} alt={dataID.rating + "/5 étoiles"} />
                        <img src={dataID.rating >= 5 ? star1 : star0} alt={dataID.rating + "/5 étoiles"} />
                        <div className='host'>
                            <div className='hostname'>
                                <p>{dataID.host.name.split(' ')[0]}</p>
                                <p>{dataID.host.name.split(' ')[1]}</p>
                            </div>
                            <img src={dataID.host.picture} alt={"photo de" + dataID.host.name} />
                        </div>
                    </div>

                </div>
                <div className='LogementCollapses'>
                    <Collapse
                        title={'Description'}
                        text={dataID.description} />
                    <Collapse
                        title={'Équipements'}
                        text={dataID.equipments}
                        list={true} />
                </div>
            </main>)}
            <Footer />
        </div>
    );
};

export default Logement;