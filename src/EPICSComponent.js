//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

import MalcolmConnection from './MalcolmConnection.js';
import React from 'react';

export class EPICSComponent extends React.Component{

    //Create the object with the props passed up from the child component
    constructor(props){

        //Call the parent (React.Component) constructor and pass it the props,
        //which origniate from our child component instantiation in main.js
        super(props);

        //Create the MalcolmConnectio object that we plan to retain as a state
        this.malc = new MalcolmConnection();

        //Inititialse EPICSComponent state
        // -EPICSValue is passed down as props to the child
        // -MalcolmConnection is retained as state to obtain the EPICSValue from malcolm
        this.state = {EPICSValue: null, MalcolmConnection: this.malc};

        //Fire up the communication process in the held MalcolmConnection.
        this.malc.startComms(this);
    }

    //Called from MalcolmConnection - this applies the response from malcolm
    //to the component state to allow us to display it 
    receiveUpdate(malcResponse){
        this.setState({EPICSValue: malcResponse});
    }

    //Probably not the right way to do this
    render(){
        return (<p>{this.state.EPICSValue}</p>);
    }
}
