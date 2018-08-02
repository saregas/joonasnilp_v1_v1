import React from 'react';

import minuPilt from "../assets/images/lisa/lisa2.jpg";


export default props =>{

    return(
        <section id='about'>
        <div className="container">
                <hr className='white-color' />
            <h3 className='white-color'>Kes ma olen?</h3>
            
                
                <div className="row valign-wrapper">
                    <div className="minuPilt">
                        <img src={minuPilt} alt="Mina" className='circle responsive-img z-depth-1' />
                    </div>
                </div>
                <div className="row valign-wrapper">
                    <div className="">
                        {/* <p className='text-faded'>Täiendamisel</p> */}
                    </div>
                </div>
            
                
        </div>
        </section>
    );
}