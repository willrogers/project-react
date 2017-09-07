//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';
import {InputComponent} from './InputComponent';
import {GaugeComponent} from './GaugeComponent';


//Wrapper component where we specify what kind of EPICSComponents we want, and set
//set their props.
class App extends React.Component{
    render(){
        return(
            <div>
                Signal:
                <DivComponent block="SIGNAL" property="signal"/>
                <br/>

                ADC:
                <DivComponent block="ADC" property="adc"/>
                <br/>

                Storage Ring Temperatures:
                <br/>
                <InputComponent block="TEMPERATURE1" property="temp1"/>degrees celcius<br/>
                <InputComponent block="TEMPERATURE2" property="temp2"/>degrees celcius<br/>
                <InputComponent block="TEMPERATURE3" property="temp3"/>degrees celcius<br/>
                <InputComponent block="TEMPERATURE4" property="temp4"/>degrees celcius<br/>

                <br/>
                <GaugeComponent block="COUNTDOWN" property="countdown"/>
            </div>

        );
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method.
//Takes the above wrapper component and applies it to the 'mount' location in
//./www/index.html
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('mount'));
});