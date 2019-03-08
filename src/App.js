import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom'
import Lead from './Components/Lead/lead'
import Agency from "./Routes/Agency/agency";
import Contact from "./Routes/Contact/contact";
import Works from "./Routes/Works/works";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Lead />
                    <Route path="/agency" component={Agency} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/works" component={Works} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
