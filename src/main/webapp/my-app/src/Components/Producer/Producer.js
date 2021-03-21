import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProducerSignIn from './ProducerSignIn'
import ProducerRegister from './ProducerRegister';
class producer extends Component {
    state = {
        stage:0
    }
    signUp = () => {
        this.setState({
            stage: '1'
        })
    }
    getName = (name) =>{
        this.setState({
            name
        })
    }
    getEmail = (email) =>{
        this.setState({
            email
        })
    }
    getPass = (pass) =>{
        this.setState({
            pass
        })
    }
    getDOB = (dob) =>{
        this.setState({
            dob
        })
    }
    getBusiness = (business) =>{
        this.setState({
            business
        })
    }
    getDesc = (desc) =>{
        this.setState({
            desc
        })
    }
    getState = (state) =>{
        this.setState({
            state
        })
    }
    getCity = (city) =>{
        this.setState({
            city
        })
    }
    getPincode = (pincode) =>{
        this.setState({
            pincode
        })
    }
    getLevel = (level) =>{
        this.setState({
            level
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Header />{
                this.state.stage == '0' ?
                    <ProducerSignIn signUp = {this.signUp }/>
                :
                    <ProducerRegister 
                    getHeight = {(height)=>this.getHeight(height)} 
                    getName = {(name) => this.getName(name)}
                    getEmail = {(email) => this.getEmail(email)}
                    getPass = {(pass) => this.getPass(pass)}
                    getDOB = {(dob) => this.getDOB(dob)}
                    getBusiness = {(business) => this.getBusiness(business)}
                    getDesc = {(desc)=> this.getDesc(desc)}
                    getState = {(state) => this.getState(state)}
                    getCity = {(city) => this.getCity(city)}
                    getPincode = {(pincode) => this.getPincode(pincode)}
                    getLevel = {(level) =>this.getLevel(level)}
                    />
                }

            </div>
        );
    }
}

export default producer;