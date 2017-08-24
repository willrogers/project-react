//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

import MalcolmConnection from './MalcolmConnection.js';
import React from 'react';

//ID Counter to avoid id conflicts with malcolm when making multiple requests
var last_id = 0;

export class EPICSComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {EPICSValue: ''};
        this.state = {MalcolmConnection: ''};

        this.malc = new MalcolmConnection(last_id);
        last_id++;
    }

    //Called when component mounts||TODO
    componentDidMount(){
        this.setState({MalcolmConnection: this.malc});
        this.malc.startComms(this);
    }

    //Called from MalcolmConnection - this applies the response from malcolm
    //to the component to allow us to display it 
    receiveUpdate(malcResponse){
        this.setState({EPICSValue: malcResponse});
    }

    //componentWillUnmount(){... (call killComms here) ...}

}
