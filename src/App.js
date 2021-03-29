import React from 'react';
import {Nav,SubNav,HomeSlider,HomeCategory,HomeDeals,Products} from './components/index';

const App =()=> {
    return (
        <div>
            
           <Nav /> 
           <SubNav />
           <HomeSlider />
           <HomeCategory />
           <HomeDeals />
           <Products />
        </div>
    )
}
export default App;
