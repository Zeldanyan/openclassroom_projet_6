import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(res => setData(res))
            .catch(error => console.error('Error data:', error));
    }, []);
    console.log(data);

    return (
        <div>
            <Header />
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