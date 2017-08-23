//import {startMalcolmComms, killMalcolmComms} from './connection.js';
import React from 'react';

export default class SignalComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {signal: 0};
    }

    componentDidMount(){
        startMalcolmComms(this);
    }

    receiveUpdate(malcResponse){
        this.setState({signal: malcResponse});
    }

    componentWillUnmount(){
        killMalcolmComms();
    }

    render(){
        return (<div> {this.state.signal} </div>);
    }
}
