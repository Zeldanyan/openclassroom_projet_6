import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div>
                <Banner />
                <main className='About'>
                    <div className='Section'></div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default About;