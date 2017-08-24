//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';

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

