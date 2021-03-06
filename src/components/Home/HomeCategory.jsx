import {Grid} from '@material-ui/core';
import HomeClothing from './Clothing/HomeClothing.jsx';
import {Clothing} from '../../Data/data';

const HomeCategory = () => {
    return(
    <section id="home-category">
        <Grid container justify="center" spacing={1}>
            {Clothing.map((clothingItem)=>(
                <Grid item key={clothingItem.id} xs={12} sm={6} md={4} lg={4}>
                    <HomeClothing clothingItem = {clothingItem} />
                    </Grid>
            ))}
        </Grid>
    </section>
    )
}
export default HomeCategory;