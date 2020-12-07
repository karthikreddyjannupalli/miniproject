import React from 'react';
import ControlledCarousel from '../components/Corosel';
import QuoteSection from '../components/Quote';
import Login from './Login'
function Home(props){
    return (
        <div className="carousel" style={{height:1000}}>
            <ControlledCarousel />
            <QuoteSection />
            <br/>
            <div style={{float:"right",marginRight:0, height:30,width:560}}>
                <h3 style={{textAlign:"center",color:"slateblue"}}>Already CodeX User Login Here</h3>
                <Login />    
            </div>
        </div>
    );
}

export default Home;