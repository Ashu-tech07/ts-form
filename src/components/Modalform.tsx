
import React, { Component } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Typography, Button, Modal, TextField, Grid, Paper, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Avatar } from '@mui/material'

interface option{
    label:string,
    value:string
}
const options:Array<option> = [
    { label: "Computer Programmer", value: "Computer_programmer" },
    { label: "Web Developer", value: "web_developer" },
    { label: "User Experience Designer", value: "user_experience_designer" },
    { label: "Systems Analyst", value: "systems_analyst" },
    { label: "Quality Assurance Tester", value: "quality_assurance_tester" },
]

interface IStates{
    fname?: string,
    lname?: string,
    email?: string,
    password?: string,
    dob?: string,
    phone?: string,
    occupation?: string,
    city?: string,
    gender?: string,
    isChecked?: boolean, 
}
interface IProps{
    status?:boolean,
    handleClose?: any
}

export class Modalform extends Component<IProps, IStates> {
    constructor(props:IProps) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            dob: '',
            phone: '',
            occupation: '',
            city: '',
            gender: '',
            isChecked: false,
        }
    }
    handleChange = (e:any) => {
        if (e.target.name === 'isChecked') {
            // debugger
            this.setState({ [e.target.name]: e.target.checked });
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    handleSubmit = (e:any) => {
        console.log(this.state);
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }

    render() {
        return (
            <Modal
                open={this.props.status || false}
                onClose={this.props.handleClose}
                aria-labelledby='login-modal'
                aria-describedby='login-modal-details'
               
            >
                <Grid container>
                    <Paper sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        height: '550px',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        pt: 2,
                        px: 4,
                        pb: 3,
                        overflowY: 'auto'

                    }} >
                        <Grid item display={'flex'} justifyContent={'center'} direction={'column'}>    
                            <Avatar sx={{ bgcolor: 'red', alignSelf: 'center' }}>
                                <LockOpenIcon />
                            </Avatar>
                            <Typography variant='h4' alignSelf={'center'} sx={{ margin: 1 }}>Registration Form</Typography>
                        </Grid>
                        <form onSubmit={(e) => { this.handleSubmit(e) }} >
                            <TextField fullWidth label='First Name' placeholder="Enter your first name" margin='normal'
                                name='fname' value={this.state.fname} onChange={(e) => { this.handleChange(e) }} required />
                            <TextField fullWidth label='Last Name' placeholder="Enter your last name" margin='normal'
                                name='lname' value={this.state.lname} onChange={(e) => { this.handleChange(e) }} required />
                            <TextField fullWidth label='Email' type='email' placeholder="Enter your email" margin='normal'
                                name='email' value={this.state.email} onChange={(e) => { this.handleChange(e) }} required />
                            <TextField fullWidth label='Password' type='password' placeholder="Create your password" margin='normal'
                                name='password' value={this.state.password} onChange={(e) => { this.handleChange(e) }} required />
                            <TextField fullWidth label='Date of Birth' type='date' margin='normal'
                                name='dob' value={this.state.dob} onChange={(e) => { this.handleChange(e) }} required />
                            <TextField fullWidth label='Phone Number' type='number' placeholder="Enter your phone number" margin='normal'
                                name='phone' value={this.state.phone} onChange={(e) => { this.handleChange(e) }} required />
                            <FormControl fullWidth variant="outlined">
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Occupation"
                                    onChange={this.handleChange}
                                    value={this.state.occupation}
                                    name="occupation">
                                    <MenuItem>None</MenuItem>
                                    {options.map((item) => (
                                        <MenuItem key={item.value} value={item.value}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField fullWidth label='City' placeholder="Enter your city" margin='normal'
                                name='city' value={this.state.city} onChange={(e) => { this.handleChange(e) }} required />
                            <FormControl component="fieldset" style={{ marginTop: 5 }}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}
                                    value={this.state.gender} onChange={(e) => { this.handleChange(e) }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Others" />
                                </RadioGroup>
                            </FormControl>

                            <FormControlLabel
                                control={<Checkbox name="isChecked" color='secondary'
                                    checked={this.state.isChecked} onClick={(e) => { this.handleChange(e) }} />}
                                label="I accept the terms and conditions."
                            />
                            <Button type='submit' variant='contained' color='secondary'>Sign up</Button> 
                            <Button variant='contained' color='secondary' onClick={this.props.handleClose} sx={{ ml:25}}>Close</Button>
                        </form>
                    </Paper>
                </Grid>
            </Modal>
        )
    }
}

export default Modalform;
