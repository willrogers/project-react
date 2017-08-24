//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

import React from 'react';
import {EPICSComponent} from './EPICSComponent.js'

export class DivComponent extends EPICSComponent{

    //Props here are set by the instantation in main...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in super methods.
        super(props);
    }

    //React method: Return the following for application to the DOM
    render(){

        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main), wrapped in a <div>
        return(<div> {this.state.EPICSValue} </div>);
    }
};



