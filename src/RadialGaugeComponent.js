//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

const EMin = null;
const EMax = null;
const radialDegreeRange = 300;
const oneHundred = 100;

export class RadialGaugeComponent extends EPICSComponent{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //definitions()
        //drawGauge()
        this.svg = this.refs.radialRef;

    }

    componentDidUpdate(){
        drawNeedle(calculateNeedleLocation());
    }


    drawGauge(){

    }

    drawNeedle(){

    }

    //Take the incoming epics value and convert it to a point on the
    // dial. Converts the percentage of the max of the given epicsVal,
    // as a percentage value of the radialGauge.
    calculateNeedleLocation(epicsVal){

        //Calculate the difference between the lower and upper bounds.
        //Lower bound will typically be zero.
        var epicsRange = (EMax-EMin);

        //Calculate one percent of the epicsValue range.
        var onePercent = (ERange/oneHundred);

        //Convert the supplied epics value into a percentage
        //of the epicsValue range. 
        var epicsValAsPercentage = (epicsVal/onePercent);

        //Figure out one percent of the radial gauge
        var radialOnePercent = (radialDegreeRange/oneHundred);

        //Calculate the needle location.
        var needleLocation = (radialOnePercent*epicsValAsPercentage);

        return needleLocation;
    }



    render(){
        return( <svg ref={'radialRef'}
                    width={400}
                    height={400}
                    clipPath={'url(#myClip)'}>


                <defs>

                    <line   id={'pip'}
                            x1={200} 
                            y1={50} 
                            x2={200} 
                            y2={70}
                            stroke={'black'}
                            strokeWidth={5}></line>

                    <line   id={'bigPip'}
                            x1={200} 
                            y1={50} 
                            x2={200} 
                            y2={80}
                            stroke={'black'}
                            strokeWidth={10}></line>
                </defs>

                <circle     cx={200}
                            cy={200}
                            r={150}
                            fill={'none'}
                            stroke={'black'}
                            strokeWidth={6}/>

                <polygon points={'200,200 115,360 285,360'} style={{fill:'white'}}/>


                <circle     cx={200} 
                            cy={200} 
                            r={18} 
                            fill={'red'}/>
                <circle     cx={200} 
                            cy={200} 
                            r={12} 
                            fill={'white'}/>
                <circle     cx={200} 
                            cy={200} 
                            r={10} 
                            fill={'black'}/>

                <g  id={'pips'}>
                    <use className={'pip'} href={'#pip'}></use>

                    <use className={'pip'} href={'#pip'} transform={"rotate(-30 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(-60 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(-90 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(-120 200 200)"}></use>
                    <use className={'bigPip'} href={'#bigPip'} transform={"rotate(-150 200 200)"}></use>
                    
                    <use className={'pip'} href={'#pip'} transform={"rotate(30 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(60 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(90 200 200)"}></use>
                    <use className={'pip'} href={'#pip'} transform={"rotate(120 200 200)"}></use>
                    <use className={'bigPip'} href={'#bigPip'} transform={"rotate(150 200 200) "}></use>
                </g>
              

            </svg>
        );
    }
}