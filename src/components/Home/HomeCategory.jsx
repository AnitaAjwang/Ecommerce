import Grid from '@material-ui/core';

const products = [
    {id:1,
     name:'Shoes', 
     description:'Running Shoes'},
    {id:2,
     name:'Dress', 
     description:'Slip Dress'}
];
const HomeCategory = () => {
    return(
    <main>
        <Grid container justify="center" spacing={3}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Clothing/>
                    </Grid>
            ))}
        </Grid>
    </main>
    )
}
export default HomeCategory;