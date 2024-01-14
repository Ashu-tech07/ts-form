import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React, { Component } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IProps {
    title: string,
    price: number,
    category: string,
    description: string,
    imageUrl: string,
    rating:{
        rate:number,
    },
}

export class ProductCard extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Box>
            <Card elevation={12} sx={{
                width: '100%', borderRadius: '15px', borderColor: 'black', borderStyle: 'solid',
                borderWidth: '2px',
            }}>
                <CardMedia
                    component='img'
                    sx={{
                        width: '120px',
                        height:'150px',
                        objectFit: 'contain',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '8px'
                    }}
                    image={this.props.imageUrl}
                    title={this.props.title}
                    
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.title}...
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        {this.props.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.description}...
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        ₹{this.props.price}
                    </Typography>
                    <Typography component='legend' variant='body2'>Rating: </Typography>
                    <Rating size='small' value={this.props.rating.rate}></Rating>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={'space-between'} marginBottom={1}>
                    <Button variant='contained' size="small" startIcon={<ShoppingCartIcon/>}>Buy</Button>
                    <Button variant='contained' size="small" startIcon={<FavoriteBorderIcon/>}>Add to wishlist</Button>
                    </Grid>
                </CardActions>
            </Card>
                    </Box>
        )
    }
}

export default ProductCard
