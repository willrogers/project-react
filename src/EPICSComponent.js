//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
import MalcolmConnection from './MalcolmConnection.js';
import React from 'react';

//Init the components current id as 0
var currentId = 0;

//Define the websocket address.
const webSockAddress = 'ws://localhost:8080/ws';

export class EPICSComponent extends React.Component{

    //Create the object with the props passed up from the child component
    constructor(props){

        //Update the id for this instance of EPICSComponent. Update currentId
        //for the next component
        let id = currentId;
        currentId++;

        //Call the parent (React.Component) constructor and pass it the props,
        //which origniate from our child component instantiation in main.js
        super(props);

        //Create the MalcolmConnectio object that we plan to retain as a state
        this.malc = new MalcolmConnection(id, webSockAddress);

        //Inititialse EPICSComponent state
        // -EPICSValue is passed down as props to the child
        // -MalcolmConnection is retained as state to obtain the EPICSValue from malcolm
        this.state = {EPICSValue: null, MalcolmConnection: this.malc};

        //Fire up the communication process in the held MalcolmConnection.
        this.malc.startComms(this);
    }

    //Called from MalcolmConnection - this applies the response from malcolm
    //to the component state to allow us to display it.
    receiveUpdate(malcResponse){
        this.setState({EPICSValue: malcResponse});
    }

    //We don't want to return anything here as the render is handled in the subclass.
    //We do need a render method to keep Enzyme happy.
    render(){
        return null;
    }
}
