import {useState} from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Product = ({productItem}) => {
    const classes = useStyles();
    const [thrifted, setThrifted] = useState(false);
    return (
        <div className="product-div">
            <Card className={classes.root}>
                <CardActionArea>
                <div className="product-img-wrapper">
                        <img className="product-img" src={productItem.img} alt=""/>
                 </div>

                    <CardContent className={classes.cardContent}>
            
                        <div className="product-title">
                        {productItem.thrifted === 'true' ? (<h5 className="product-thrifted">Thrifted</h5>):null}
                        <h3>{productItem.title}</h3><br/>
                        </div>
                        
                        <p className="product-price-current ui-letter-spacing-2"><b>{productItem.priceCurrent}</b></p>
                        
                        {productItem.priceOriginal !== '' ? (                        
                            <div className="product-price-wrapper ui-letter-spacing-2">
                                <p className="product-price-original">{productItem.priceOriginal}</p>
                                <p className="product-price-discount">{productItem.priceDiscount}</p>
                            </div>):null}

                    </CardContent>
                </CardActionArea>
            </Card>
            
        </div>
    )
}

export default Product
