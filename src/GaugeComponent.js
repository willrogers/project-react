//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom'
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const canvasStyle =
    {
        border: '1px solid #000000',
    };

export class GaugeComponent extends EPICSComponent{
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);
    }  

    componentDidMount(){
        var context = this.refs.gaugeRef;
        console.log(context);
    }



    //React method: Return the following for application to the DOM
    render(){

        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main.js), wrapped in a <div>
        return(<canvas  ref="gaugeRef"
                        width="1000"
                        height="150"
                        style={canvasStyle}>
               </canvas>);
    }
}

