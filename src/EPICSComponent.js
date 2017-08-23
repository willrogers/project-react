//import {startMalcolmComms, killMalcolmComms} from './connection.js';
import React from 'react';

export class EPICSComponent extends React.Component{

    constructor(props){
        console.log("I am the EPICSComponent Constructor")
        super(props)
        this.props
    }

    componentDidMount(){
        //startMalcolmComms(this);
    }


    render(){
        return(
            <div>
                {this.props.pvName}
            </div>
        );
    }

}
//this.props.children}