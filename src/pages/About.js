import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const About = () => {
    return (
        <div>
            <Header />
            <main className='About'>
                <Banner img={require('./../images/sectionAbout.png')} text={"Chez vous, partout et ailleurs"} opacity={0.3} />
            </main>
            <Footer />
        </div>
    );
};

export default About;