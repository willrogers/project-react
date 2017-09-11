//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import {EPICSComponent} from './EPICSComponent.js';

export class WriterComponent extends EPICSComponent{

    //Props here are set by the instantation in main.js...
    constructor(props){

        //..call the parent constructor with these props, so that they are
        //accessible in parent object's methods.
        super(props);
        this.state = {inputValue: 3};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var newInput = event.target.value;
        this.setState({inputValue: newInput});
    }

    handleSubmit(event){
        event.preventDefault();
        super.writeToMalc(this.state.inputValue);
    }

    //React method: Return the following for application to the DOM
    render(){
        //Returns the EPICS Value specified by the parent class (taken from the props
        //specified in main.js), wrapped in a readonly input element
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}



