//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';
import {InputComponent} from './InputComponent';
import {GaugeComponent} from './GaugeComponent';
import {LEDComponent} from './LEDComponent';



//Wrapper component where we specify what kind of EPICSComponents we want, and set
//set their props.
class App extends React.Component{
    render(){
        return(
            <div>

                <div id ='left'>
                    Signal:
                    <DivComponent block="SIGNAL" property="signal"/>
                    <br/>

                    ADC:
                    <DivComponent block="ADC" property="adc"/>
                    <br/>
                </div>

                <div id='right'>
                    Storage Ring Temperatures:
                    <br/>
                    <InputComponent block="TEMPERATURE1" property="temp1"/>&deg;C<br/>
                    <InputComponent block="TEMPERATURE2" property="temp2"/>&deg;C<br/>
                    <InputComponent block="TEMPERATURE3" property="temp3"/>&deg;C<br/>
                    <InputComponent block="TEMPERATURE4" property="temp4"/>&deg;C<br/>

                </div>

                <br/>
                <GaugeComponent block="COUNTDOWN" property="countdown"/>

                <LEDComponent block="TESTLED" property="testled" />
                <br/>

                
                
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