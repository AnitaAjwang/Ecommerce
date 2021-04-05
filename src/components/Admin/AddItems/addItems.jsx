import React from 'react';
import {Button, Paper, Grid, Typography, Container,TextField,MenuItem} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {Input} from '../../Input';
import {ProductCategory} from '../../../Data/data';
import useStyles from './styles';

const AddItems = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Add Product</Typography>
                <form>
                    <Grid container spacing={3}>
                        <Input name="productName" label="Product Name"/>
                        <div className="addItems-category">
                        <TextField
                            select
                            label="Product Category"
                            // value={currency}
                           // onChange={handleChange}
                            helperText="Please select item category"
                            variant="outlined"
                        >
                        {ProductCategory.map(({id,category})=>(
                            <MenuItem key={id} value={category}>{category}</MenuItem>
                        ))}

                        </TextField>
                        </div>
                        <Input name="productColor" label="Product Color" />
                        <div className="addItems-wrapper">
                        <h4 className="addItems-pricing-header"> Pricing</h4>
                        </div>

                        <Input name="currentPrice" label="Current Price" half/>
                        <Input name="originalPrice" label="Original Price" half/>
                        <div className="addItems-wrapper">
                        <h4 className="addItems-quantity-header"> Quantity and Sizes</h4>
                        </div>

                        <Input name="xsmallQuantity" label="Xs Quantity" type="number" half/>
                        <Input name="smallQuantity" label="Small Quantity" type="number" half />
                        <Input name="mediumQuantity" label="Medium Quantity"  type="number"half/>
                        <Input name="largeQuantity" label="Large Quantity" type="number" half />
                        <Input name="XlQuantity" label="XL Quantity" type="number" half/>
                        <Input name="XXlQuantity" label="XXL Quantity" type="number" half/>
  
                    </Grid>
                    <br/>
                    <div>
                        <h4>Upload Product Image</h4>
                        </div>
                   <div className={classes.fileInput}><FileBase type="file" multiple={false}/></div>
                    
                    <Button type="submit" fullWidth variant="contained" className={classes.submit} color="primary">
                        Add Product
                    </Button>
                </form>
            </Paper>


        </Container>
    )
}

export default AddItems;
