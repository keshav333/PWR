import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import './Producer.css'
import Industry from '../../assets/images/Industries.jpg'
import props from 'prop-types';

class ProducerSignIn extends Component {
    signUp = (event) => {
        console.log("reaching here");
        this.props.signUp()
        
      }
    render(props) {
        return (
            <div>
                
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <img id="imgStyle" src = {Industry}></img>
                        </div>
                        <div class="col">
                            <div class = "formPosition"> 
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <small id = "smallStyle"> Not a member yet ?</small>
                                    <Button 
                                    variant="contained" 
                                    style={{backgroundColor:'black', color:'white', borderWidth:1, borderColor:'black', width:100}}
                                    onClick={()=>this.signUp()}>Sign Up</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProducerSignIn;