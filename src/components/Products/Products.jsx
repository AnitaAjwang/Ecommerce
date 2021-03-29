import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product.jsx';
import {ProductData} from '../../Data/data';

const Products = () => {
    return (
        <section id="products">
            <Grid container justify="center" spacing={1}>
                {ProductData.map((productItem)=>(
                    <Grid item key={productItem.id} xs={6} sm={6} md={3} lg={3}>
                        <Product productItem={productItem} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default Products;
