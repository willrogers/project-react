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
        const canvas = this.refs.gaugeRef;
        const context = canvas.getContext('2d');
        const quarterMark = (canvas.width*0.25);
        const halfMark = (canvas.width*0.5);
        const threeQaurterMark = (canvas.width*0.75);
        const pipSize = (canvas.width/200);    

        for(var i=0 ; i<canvas.width ; i+=pipSize){

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
    
          
    }

    


    annotateMarker(annoLoc, ctx){
console.log("annotate called");
        ctx.fillText(""+(annoLoc*0.2)+"", annoLoc, 140);
    }

    drawPip(pipLoc, ctx){
console.log("draw pip called");
        ctx.beginPath();
        ctx.lineWidth="0.5";
        ctx.strokeStyle="#000000";
        ctx.moveTo(pipLoc, 100);
        ctx.lineTo(pipLoc, 130);
        ctx.stroke();
    }

    drawMarker(markerLoc, ctx){
console.log("draw marker called");
        ctx.beginPath();
        ctx.lineWidth="1";
        ctx.strokeStyle="#000000";
        ctx.moveTo(markerLoc, 50);
        ctx.lineTo(markerLoc, 130);
        ctx.stroke();
    }

    updateNeedle(epicsVal, ctx){
console.log("update needle called");
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
        return(<canvas  ref="gaugeRef"
                        width="1000"
                        height="150"
                        style={canvasStyle}>
               </canvas>);
    }
}

