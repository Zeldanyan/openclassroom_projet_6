import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/logements.json")
            .then((res) => setData(res.data));
    }, []);
    console.log(data);

    return (
        <div>
            <Banner />
            <main className='Home'>
                <div className='Section'>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='Gallery'>
                    {data.map((loge) => (
                        <Card key={loge.id} loge={loge} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;