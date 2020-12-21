import React from 'react';
import ControlledCarousel from '../components/Corosel';
import QuoteSection from '../components/Quote';
import Login from './Login'
import Content from './Content'
function Home(props){
    return (
        <div className="carousel" style={{height:1200}}>
            <ControlledCarousel />
            <br/><br/>
            <Content />
            <QuoteSection />
            <br/>
            <div style={{float:"right",marginRight:0, height:30,width:560}}>
                <Login />    
            </div>
        </div>
    );
}

export default Home;