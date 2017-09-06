//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';


export class GaugeComponent extends EPICSComponent{

    //Props here are set by the instantation in main.js...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);


        var ctx = this.refs.gaugeCanvas.getContext('2d');
        const quarterMark = (canvas.width*0.25);
        const halfMark = (canvas.width*0.5);
        const threeQaurterMark = (canvas.width*0.75);
        const pipSize = (canvas.width/200);
    }

    componentDidMount(){
        this.drawGauge();
    }

    drawGauge(){
        for(var i=0 ; i<canvas.width ; i+=pipSize){

            if(i==quarterMark){
                drawMarker(i);
                annotateMarker(i);

            } else if (i==halfMark){
                drawMarker(i);
                annotateMarker(i);

            } else if (i==threeQaurterMark){ 
                drawMarker(i);
                annotateMarker(i);

            } else {
                drawPip(i);
            }
        }
    }

    annotateMarker(i){
        ctx.fillText(""+(i*0.2)+"", i, 140);
    }

    drawPip(pipLocation){
        ctx.beginPath();
        ctx.lineWidth="0.5";
        ctx.strokeStyle="#000000";
        ctx.moveTo(i, 100);
        ctx.lineTo(i, 130);
        ctx.stroke();
    }

    drawMarker(markerLocation){
        ctx.beginPath();
        ctx.lineWidth="1";
        ctx.strokeStyle="#000000";
        ctx.moveTo(i, 50);
        ctx.lineTo(i, 130);
        ctx.stroke();
    }

    updateNeedle(epicsVal){
        ctx.beginPath();
        ctx.lineWidth="3";
        ctx.strokeStyle="#ff0000";
        ctx.moveTo((epicsVal*5), 130);
        ctx.lineTo((epicsVal*5), 10);
        ctx.stroke();
    }



    //React method: Return the following for application to the DOM
    render(){

        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main.js), wrapped in a <div>
        return(<canvas  ref={gaugeCanvas} 
                        width="1000"
                        height="150"
                        style="border:1px solid #000000">
               </canvas>);
    }
}

