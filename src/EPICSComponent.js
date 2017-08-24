import MalcolmConnection from './MalcolmConnection.js';
import React from 'react';

var last_id = 0;

export class EPICSComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {EPICSValue: ''};
        this.state = {MalcolmConnection: ''};

        this.malc = new MalcolmConnection(last_id);
        last_id++;
    }

    componentDidMount(){
        this.setState({MalcolmConnection: this.malc});
        this.malc.startComms(this);
    }

    receiveUpdate(malcResponse){
        this.setState({EPICSValue: malcResponse});
    }

}
