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
        }
    }, [id, nav, dataID]);

    return (
        <div>
            <Header />
            <main className='Logement'>
                <Slideshow />
            </main>
            <div className='LogementCollapses'>
                <Collapse
                    title={'Description'}
                    text={dataID.description} />
                <Collapse
                    title={'Équipements'}
                    text={dataID.equipments} />
            </div>
            <Footer />
        </div>
    );
};

export default Logement;