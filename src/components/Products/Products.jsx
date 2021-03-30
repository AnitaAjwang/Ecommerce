import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product.jsx';
import {ProductData} from '../../Data/data';

const Products = () => {
    return (
        <section id="products">
            <div className="ui-text-center home-navigation">
                <p><Link to="/" className="ui-text-gray-5">Home</Link> &gt; <Link to="/products" className="ui-text-black">Products</Link></p>        
            </div>

            <Grid container justify="center" alignItems="center" spacing={3}>
                {ProductData.map((productItem)=>(
                    <Grid item key={productItem.id} xs={12} sm={6} md={3} lg={3}>
                        <Product productItem={productItem} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Products;
