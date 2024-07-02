import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
    return (
        <div>
            <Banner />
            <main className='Home'>
                <div className='Section'>
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <div className='Gallery'>
                    <Card />
                    <p>test</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;