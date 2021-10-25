import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Mars.css'

class Mars extends Component {
    state = {
        message: ""
    };

    componentDidMount() {
        this.setMessage();
    };

    setMessage = () => {
        this.setState({ message: "Subgreennit does not exist. Would you like to start one?" });
   
    render() {
        return (
            <div className="container">
                <div>
                    <p className="pt-3">{this.state.message}</p>
                </div>
            </div>
        );
    };
};

export default Mars;