import {startMalcolmComms, killMalcolmComms} from './connection.js';
import React from 'react';

export class EPICSComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {EPICSValue: ''}
    }

    componentDidMount(){
        startMalcolmComms(this); 
    }

    receiveUpdate(malcResponse){
        this.setState({EPICSValue: malcResponse});
    }

}
