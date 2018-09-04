import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default App;