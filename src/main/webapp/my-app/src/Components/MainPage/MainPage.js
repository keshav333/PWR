import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

class MainPage extends Component {
    render() {
        return (
            <div>
                <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>PWR</h1>
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </Container>
                </Jumbotron>
                </div>
            </div>
        );
    }
}

export default MainPage;