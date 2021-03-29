import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const HomeClothing = ({clothingItem}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <div className="circle-top circle-top-left">
                    <div className="home-clothing-sale ui-letter-spacing-2"><br/> &nbsp; From*<br/><span> &nbsp; {clothingItem.sale}</span></div>
                </div>
                <CardActionArea>
                <div className="home-clothing-img-wrapper">
                        <img className="home-clothing-img" src={clothingItem.img} alt={clothingItem.img}/>
                    </div>
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">{clothingItem.title}</Typography>
                    <Typography gutterBottom variant="body1">{clothingItem.description}</Typography>
                    <div className="home-clothing-link-wrapper"><a href={clothingItem.link} className="home-clothing-link">{clothingItem.linkName}</a></div>
                    </CardContent>
                    {/* <CardMedia className={classes.media} image={clothingItem.img} title={clothingItem.title}/> */}
                </CardActionArea>
               

            </Card>
        </div>
    )
}

export default HomeClothing;
