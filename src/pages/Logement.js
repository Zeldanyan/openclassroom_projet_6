import React, { useEffect, useState } from 'react';
import './Logement.scss';
import { useParams, useNavigate } from 'react-router-dom';

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

        </div>
    );
};

export default Logement;