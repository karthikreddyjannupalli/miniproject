import { repeat } from 'lodash';
import React from 'react';

export default function QuoteSection(){
    const repeat=(i)=>{
        var buffer=[];
        while(i--!==0){
            buffer.push(React.createElement('br'));
        }
        return buffer;
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="offset-3 col">
                    <section style={{height: '500px'}}>
                        {repeat(10)}
                        <h1>
                            EXPECTED DISPLAY A QUOTE DAILY
                        </h1>
                    </section>
                </div>
            </div>
        </div>
    );
}