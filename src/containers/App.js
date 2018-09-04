import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Containers
import Details from './Details';

class App extends Component {
    componentDidMount() {
            
    }

    render() {
        return(
            <div>
                <Header/>
                <Details/>
                <Footer/>
            </div>
        )
    }
}

export default App;