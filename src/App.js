import React from 'react';
import {Nav,SubNav,Home,Products,NotFound,ProductDetails,AddItems,Orders,Inventory} from './components/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App =()=> {
    return (
        <BrowserRouter>
            <div>
                {/* <Route path="/user" component={Nav}/>
                <Route path="/user" component={SubNav}/> */}
                <Switch>
                    <Route path="/additems" exact component={AddItems} />
                    <div>
                    <Nav />
                    <SubNav />
                    <Route path="/" exact component={Home}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/productdetails" component={ProductDetails}/>
                    </div>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;
