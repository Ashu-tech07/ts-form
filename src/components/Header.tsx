import React, { Component } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Toolbar, Typography, Button} from '@mui/material'
import Modalform from './Modalform';

interface IProps{

}

interface IStates{
    open:boolean;
}

export class Header extends Component <IProps, IStates>{
    constructor(props:IProps){
        super(props);
        this.state={
            open:false,
        }

        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleOpen=()=>{
        this.setState({open:true});
    }
    handleClose=(event:any, reason:any)=>{
        if (reason !== 'backdropClick') {
            this.setState({open:false});
        }
    }

  render() {
    return (
      <>
         <AppBar className='header' position='sticky'
          sx={{ background:'white',
          boxShadow:'none'
          }}>
                <Toolbar>
                    <Typography variant='h5' gutterBottom flexGrow={1} sx={{color:'tomato', fontStyle:'bold'}}> Fakestore Commerce</Typography>
                    <Button variant="text" sx={{textTransform:'capitalize'}}>Home</Button>
                    <Button variant="text"  sx={{textTransform:'capitalize'}}>Wish Lists</Button>
                    <Button variant="text"  sx={{textTransform:'capitalize'}}>Cart</Button>
                    <Button variant="contained" color='primary' startIcon={<LoginIcon />} onClick={this.handleOpen}
                     sx={{textTransform:'capitalize'}}>Sign up</Button>
                    <Modalform status={this.state.open} handleClose={this.handleClose} />
                </Toolbar>
            </AppBar>
      </>
    )
  }
}

export default Header
