//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const canvasStyle ={border: '1px solid #000000',};

const defaultFill = '#000000';
const redFill= '#FF0000';
const yellowFill = '#FFFF00';
const greenFill = '#00FF00';
const errorFill = '#ff00cb';


export class LEDComponent extends EPICSComponent{

    //Props here are set by the instantation in main.js...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);
    }

    componentDidMount(){
        super.componentDidMount();
        this.drawCircle(defaultFill);
    }

    componentDidUpdate(){

        if(this.state.EPICSValue == 0){
            this.drawCircle(redFill);

        } else if(this.state.EPICSValue ==1){
            this.drawCircle(greenFill);

        } else if (this.state.EPICSValue ==2){
            this.drawCircle(yellowFill);

        } else {
            this.drawCircle(errorFill);

        }
    }

    drawCircle(colour){

        var canvas = this.refs.ledRef;
        var context = canvas.getContext('2d');

        context.beginPath();
        context.arc(75,75,60,0,2*Math.PI);
        context.fillStyle=colour;
        context.fill();

    }

    //React method: Return the following for application to the DOM
    render(){
        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main.js), wrapped in a readonly input element
        return(<canvas  ref="ledRef"
            width="150"
            height="150"
            style={canvasStyle}>
        </canvas>);
    }
}


