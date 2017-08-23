import React from 'react';
import {EPICSComponent} from './EPICSComponent.js'

export class DivComponent extends EPICSComponent{

    constructor(props){
        super(props)
    }

    render(){
        return(<div> {this.state.EPICSValue} </div>);
    }
}