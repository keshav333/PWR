import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainPage />
                <Footer />
            </div>
        );
    }
}

export default HomePage;