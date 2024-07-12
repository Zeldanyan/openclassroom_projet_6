import React, { useEffect, useState } from 'react';
import './Home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Banner from '../components/Banner';

const Home = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/logements.json')
            .then(response => response.json())
            .then(res => setData(res))
            .catch(error => console.error('Error data:', error));
    }, []);

    return (
        <div>
            <Header />
            <main className='Home'>
                <Banner img={require('./../images/sectionHome.png')} text={"Chez vous, partout et ailleurs"} opacity={0.6} />
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