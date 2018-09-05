import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import Containers
import Details from './Details';

class App extends Component {
    // Dynamic height to the stories list section
    componentDidMount() {
        // Get Header height
        let header = document
            .getElementById("header")
            .clientHeight;
        // Get footer height
        let footer = document
            .getElementById("footer")
            .clientHeight;
        // Calculate total height
        let detailsHeight = window.innerHeight - header - footer;
        document
            .getElementById("details")
            .style
            .minHeight = detailsHeight + 'px';
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