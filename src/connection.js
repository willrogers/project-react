import {getSubRequest,getUnsubRequest} from './jsonStore';
console.log('in connection')
var connection = new WebSocket('ws://localhost:8080/ws');

export function startMalcolmComms(component){
    connection.onopen = function(){
        connection.send(getSubRequest());
    };

    connection.onmessage = function(event){
        var response = JSON.parse(event.data);
        component.receiveUpdate(response.value.value);
    };
}

export function killMalcolmComms(){
    connection.send(getUnsubRequest());
}

