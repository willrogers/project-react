//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const canvasStyle ={border: '1px solid #000000',};

export class GaugeComponent extends EPICSComponent{

    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        const canvas = this.refs.gaugeRef;
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        this.drawGauge();
    }

    drawGauge(){

        var canvas = this.refs.gaugeRef;
        var context = canvas.getContext('2d');
        //
        var quarterMark = (canvas.width * 0.25);
        var halfMark = (canvas.width * 0.5);
        var threeQaurterMark = (canvas.width * 0.75);
        //
        var annotationBuffer = canvas.height * 0.1;
        //
        var pipTopCoord = (canvas.height * 0.2);
        var pipBaseCoord = (canvas.height - annotationBuffer);
        //
        var markerTopCoord = (canvas.height * 0.5);
        var markerBaseCoord = (canvas.height - annotationBuffer);
        //
        var needleTopCoord = (canvas.height * 0.9);
        var needleBaseCoord = (canvas.height - annotationBuffer);
        //
        var pipSize = (canvas.width / 200);

        for(var i = 0 ; i < canvas.width ; i += pipSize){

            if(i==quarterMark){
                this.drawMarker(i, context);
                this.annotateMarker(i, context);

            } else if (i==halfMark){
                this.drawMarker(i, context);
                this.annotateMarker(i, context);

            } else if (i==threeQaurterMark){
                this.drawMarker(i, context);
                this.annotateMarker(i, context);

            } else {
                this.drawPip(i, context);
            }
        }

        this.drawNeedle(this.state.EPICSValue, context);

    }

    annotateMarker(annoLoc, ctx){
        ctx.fillText(''+(annoLoc)+'', annoLoc, 140);
    }

    drawPip(pipLoc, ctx){
        ctx.beginPath();
        ctx.lineWidth='0.5';
        ctx.strokeStyle='#0f0f0f';
        ctx.moveTo(pipLoc, 100);
        ctx.lineTo(pipLoc, 130);
        ctx.stroke();
    }



    drawMarker(markerLoc, ctx){
        ctx.beginPath();
        ctx.lineWidth='1';
        ctx.strokeStyle='#000000';
        ctx.moveTo(markerLoc, 50);
        ctx.lineTo(markerLoc, 130);
        ctx.stroke();
    }



    drawNeedle(epicsVal, ctx){
        ctx.beginPath();
        ctx.lineWidth='3';
        ctx.strokeStyle='#ff0000';
        ctx.moveTo((epicsVal), 130);
        ctx.lineTo((epicsVal), 10);
        ctx.stroke();
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

