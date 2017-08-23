import React from 'react';
import {EPICSComponent} from './EPICSComponent.js'

export class DivComponent extends EPICSComponent{

    constructor(props){
        console.log("I am the DivComponent Constructor")

        super(props)
        this.pvName = this.props.pvName
    }


    // render(){
    //     return(
    //         <div>
    //             {this.props.pvName}
    //         </div>
    //     );
    // }
    

}