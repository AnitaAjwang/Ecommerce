import {useState} from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Product = ({productItem}) => {
    const classes = useStyles();
    const [favorite,setFavorite] = useState(false);

    const wishlistHandler = () =>{
        setFavorite(!favorite);
    }
    
    return (
        <div className="product-div">
            <Card className={classes.root}>
                <CardActionArea>
                <div className="product-img-wrapper">
                      <Link to="/productdetails"><img className="product-img" src={productItem.img} alt=""/></Link> 
                      <div className="product-wishlist ui-text-center" onClick={wishlistHandler}>
                      <p className="product-wishlist-link">{favorite ? <FavoriteIcon fontSize="small" style={{ color:"#ff4747" }}/> : <FavoriteBorderIcon fontSize="small" style={{ color:"#ff4747" }}/> }</p>
                      </div>  
                 </div>

                    <CardContent className={classes.cardContent}>
            
                        <div className="product-title">
                        {productItem.thrifted ? (<h5 className="product-thrifted">Thrifted</h5>):null}
                        <h3>{productItem.title}</h3><br/>
                        </div>
                        
                        <p className="product-price-current ui-letter-spacing-2"><b>{productItem.priceCurrent}</b></p>
                        
                        {productItem.priceOriginal !== '' ? (                        
                            <div className="product-price-wrapper ui-letter-spacing-2">
                                <p className="product-price-original">{productItem.priceOriginal}</p>
                                <p className="product-price-discount">{productItem.priceDiscount}</p>
                            </div>):null}

                    </CardContent>
                    <div className="product-button ui-text-center">
                        {productItem.inCart ? (<p className="product-button-added">ADDED TO CART</p>):
                        (<p className="product-button-add">ADD TO CART</p>)}
                            
                            </div>
                </CardActionArea>
            </Card>
            
        </div>
    )
}

export default Product
