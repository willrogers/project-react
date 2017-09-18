//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';


export class GaugeComponent extends EPICSComponent{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //definitions()
        //drawGauge()
        this.svg = this.refs.radialRef;
    }

    componentDidUpdate(){
        //drawNeedle()    }


    drawGauge(){

    }

    render(){}
        return(<svg ref='radialRef'>


            </svg>)
}