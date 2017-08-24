import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';


//Wrapper component
class App extends React.Component{
    render(){
        return(
            <div>
                Signal:
                <DivComponent block="SIGNAL" property="signal"/>
                ADC:
                <DivComponent block="ADC" property="adc"/>
            </div>
        );
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('mount'));
});

