import {startMalcolmComms, killMalcolmComms} from './connection.js';
import React from 'react';

class EPICSComponent extends React.Component{

    constructor(props){
        super(props)
        this.pvName = this.props.pvName
    }

    componentDidMount(){
        startMalcolmComms(this.);
    }


    render(){

    }

}