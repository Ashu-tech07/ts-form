import { Grid } from '@mui/material';
import React, { Component } from 'react'
import ProductCard from './ProductCard';

interface IProps { }

interface IStates {
    items: {
        id:number,
        title:string,
        description:string,
        image:string,
        category:string,
        price:number,
        rating:{
            rate:number,
        },
    }[],
    loading: boolean,
}

export class Main extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [],
            loading: false,
        }
    }

    async componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    loading: true,
                })
                console.log(json);
            })
    }

    render() {
        // const{ items, loading} = this.state;
        return (
            <Grid container justifyContent={'space-evenly'} direction={'row'} >
                {this.state.items.map((element) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={2.5} key={element.id} margin={1}>
                           <ProductCard title={element.title?element.title.slice(0,20):''} 
                           description={element.description?element.description.slice(0,80):''} price={element.price}
                           category={element.category} imageUrl={element.image} rating={element.rating}/> 
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

export default Main
