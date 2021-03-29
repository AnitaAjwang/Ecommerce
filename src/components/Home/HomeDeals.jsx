import React from 'react';
import {DealsData} from '../../Data/data';

const HomeDeals = () => {
    return (
        <section id="home-deals">
            <div className="home-deals-container">
                <h1 className="ui-text-center">SHOP FOR DEALS</h1>
                    <ul className="home-deals-list">
                    {DealsData.map(({id,dealdata})=>(
                        <a href="#" key={id}>                        
                        <div className="home-deals-circle">
                        <li className="home-deals-item"> &nbsp; &nbsp; UNDER <br/><span>{dealdata}</span></li> 
                       </div>
                       </a> ))}
                    </ul>
            </div>
        </section>
    )
}

export default HomeDeals
