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
    render() {
        return (
            <div>
                <Header />{
                this.state.stage == '0' ?
                    <ProducerSignIn signUp = {this.signUp }/>
                :
                    <ProducerRegister />
                }
                <Footer />
            </div>
        );
    }
}

export default producer;