const connection = new WebSocket('ws://localhost:8080/ws');

//Called when the pages is loaded - sends a request to malcolm
export function startMalcolmComms(component){
    connection.onopen = function(){
        connection.send(generateSubscribeRequest());
    };

    //EventHandler that sends malcolms response to the component
    connection.onmessage = function(event){
        var response = JSON.parse(event.data);
        component.receiveUpdate(response.value.value);
    };
}

//Send a request to malcolm to stop sending us updates
export function killMalcolmComms(){
    connection.send(getUnsubscribeRequest());
}

//Generate the subscribe request JSON to send to malcolm
function generateSubscribeRequest(){
    var subscribeRequest = JSON.stringify({
       'typeid' : 'malcolm:core/Subscribe:1.0',
       'id' : 1,
       'path' : ['HELLO', 'signal']
    });

    return subscribeRequest;
}

//Return the unsu
function getUnsubscribeRequest(){
    var unsubscribeRequest = JSON.stringify({
        'typeid': 'malcolm:core/Unsubscribe:1.0',
        'id': 1
    });

    return unsubscribeRequest;
}

