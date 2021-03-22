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
                <CardActionArea>
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">{clothingItem.title}</Typography>
                    <Typography gutterBottom variant="body2">{clothingItem.description}</Typography>
                    <div className=""><Link href={clothingItem.link} color="inherit" variant="body2">{clothingItem.linkName}</Link></div>
                    
                    </CardContent>
                    <CardMedia className={classes.media} image={clothingItem.img} title={clothingItem.title}/>
                   
                    
                </CardActionArea>
               

            </Card>
        </div>
    )
}

export default HomeClothing;
