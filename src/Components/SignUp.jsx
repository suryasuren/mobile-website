import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form-style.css';
import SelectGender from './Gender';

import { auth, createUserProfileDocument } from '../Firebase/firebase.utils';

import {
    Link
  } from "react-router-dom";
class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password : '',
            name: '',
            age: '',
            gender: '',
            confirmPassword: ''
        }

        //this.handleSubmit = this.handleSubmit.bind(this)
    }

/*     handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: '',
            password : '',
            name: '',
            age: '',
            gender: '',
            tickCheck: false
        })
    } */


    handleSubmit = async event => {
        event.preventDefault();
    
        const { name, confirmPassword, email, password } = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password,
            
          );
    
          await createUserProfileDocument(user, { name });
    
          this.setState({
            email: '',
            password : '',
            name: '',
            age: '',
            gender: '',
            confirmPassword: '',
            tickCheck: false
          });
        } catch (error) {
          console.error(error);
        }
      };
    
     /*  handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      }; */

    render() {
        return(
            <React.Fragment>
                
                <div className="form-style">
                    <Form className="form-login" onSubmit={this.handleSubmit}>
                        <FormGroup className="FormGroup">
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" required onChange={(event) => {this.setState({name:event.target.value})}} value={this.state.name} id="name" placeholder="Enter Your Name" />
                        </FormGroup>

                        <FormGroup className="FormGroup">
                            <Label for="age">Age</Label>
                            <Input type="number" name="age" max="60" required onChange={(event) => {this.setState({age:event.target.value})}} value={this.state.age} id="age" placeholder="Enter Your Age" />

                        </FormGroup>

                        <FormGroup className="FormGroup">
                            <Label for="gender">Gender</Label>
                            <div>
                            <SelectGender name="gender" required value={this.state.gender} handleChange= { (event) => {this.setState({gender:event.target.value})}} id="gender" ></SelectGender>

                            </div>
                        </FormGroup>


                        <FormGroup className="FormGroup">
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" required onChange={(event) => {this.setState({email:event.target.value})}} value={this.state.email} id="email" placeholder="Enter Your Email" />
                        </FormGroup>

                        <FormGroup className="FormGroup">
                            <Label for="password">Password</Label>
                            <Input type="password" required onChange={(event) => {this.setState({password:event.target.value})}} value={this.state.password} name="password" id="password" placeholder="Enter Your Password" />
                        </FormGroup>

                        <FormGroup className="FormGroup">
                            <Label for="password">Password Again</Label>
                            <Input type="password" required onChange={(event) => {this.setState({confirmPassword:event.target.value})}} value={this.state.confirmPassword} name="password" id="password" placeholder="Enter Your Password" />
                        </FormGroup>
                        
                        <div className="declaration-head">
                        <Input className="declaration" type="checkbox" value={this.state.tickCheck}></Input>
                        <p className="declaration">I Hereby Aggreing Terms and Conditions</p>
                        </div>
                        

                        <div>
                            <Button  color="primary" type="submit" >Sign Up</Button>
                        </div>
                        
                    </Form>
                    <p className="undertext">I have an account! <Link className="link-style" to={'Signing'} >SIGN IN</Link></p>
                    
                </div>

                


            </React.Fragment>
        )
    }
}

export default SignUp;