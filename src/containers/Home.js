import React from 'react';
import ControlledCarousel from '../components/Corosel';
import QuoteSection from '../components/Quote';
function Home(props){
    return (
        <div className="carousel">
            <ControlledCarousel />
            <QuoteSection />
        </div>
    );
}

export default Home;