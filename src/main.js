import React from 'react';
import ReactDOM from 'react-dom';
import {DivComponent} from './DivComponent';


//Wrapper component
class App extends React.Component{
    render(){
        return(
            <div>
                <DivComponent pvName="SR-DI-EBPM-01:MAXADC_PC" />
            </div>
        );
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App/>, document.getElementById('mount'));
});


//Test pv being used (CPU load on IOC):
//   SR-DI-EBPM-01:MAXADC_PC

