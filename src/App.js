import React from 'react';
import {Nav,SubNav,Home,Products,NotFound,ProductDetails} from './components/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App =()=> {
    return (
        <BrowserRouter>
            <div>
                <Nav /> 
                <SubNav />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/productdetails" component={ProductDetails}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;
