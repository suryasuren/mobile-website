import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form-style.css';
import {
    Link
  } from "react-router-dom";

//import {signInWithGoogle} from '../Firebase/firebase.utils'
import { auth, signInWithGoogle } from '../Firebase/firebase.utils';


class Signing extends React.Component {
    constructor() {
        super()

        this.state = {
            password : '',
            email: '', 
        }
    }

/*     handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: '',
            password : ''
           
        })
    } */

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
          await auth.signInWithEmailAndPassword(email, password)
          this.setState({ email: '', password: '' });
        }catch(error){
            alert("You didn't have an account here! Please sign up.");
        }

      };

    render() {

        return(
            <React.Fragment>
                <div className="form-style link-ups">
                    <Form className="form-login" onSubmit={this.handleSubmit}>
                        <FormGroup className="FormGroup">
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" onChange={(event) => {this.setState({email:event.target.value})}} value={this.state.email} id="email" placeholder="Enter Your Email" required />
                        </FormGroup>

                        <FormGroup className="FormGroup">
                            <Label for="password">Password</Label>
                            <Input type="password" onChange={(event) => {this.setState({password:event.target.value})}} value={this.state.password} name="password" id="password" placeholder="Enter Your Password" required/>
                        </FormGroup>
                        <div>
                            <Button type="submit" color="primary">Sign In</Button>
                            <Button className="Gbutton" type="button" color="primary" onClick={signInWithGoogle}>Google</Button>
                        </div>
                        
                    </Form>
                 
                        <p className="link-up">I don't have an account yet! <Link className="link-style" to={'SignUp'} >SIGN UP</Link></p>

                </div>

            </React.Fragment>
        )
    }
}

export default Signing;