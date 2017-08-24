
//Inside startcomms
//This: refers to the websocket connection

//Self: refers to the class


export default class MalcolmConnection{

    constructor(){
        this.connection = new WebSocket('ws://localhost:8080/ws');
    }

    //Called when the pages is loaded - sends a request to malcolm
    startComms(component){
        console.log(this.connection);
        var self = this;
        this.connection.onopen = function(){
            console.log(self);
            this.send(self.generateSubscribeRequest(component));
        };

        //EventHandler that sends malcolms response to the component
        this.connection.onmessage = function(event){
            var response = JSON.parse(event.data);
            component.receiveUpdate(response.value.value);
        };
    }

    //Send a request to malcolm to stop sending us updates
    killComms(){
       this.connection.send(getUnsubscribeRequest());
    }

    //Generate the subscribe request JSON to send to malcolm
    generateSubscribeRequest(component){
        var subscribeRequest = JSON.stringify({
            'typeid' : 'malcolm:core/Subscribe:1.0',
            'id' : 1,
            'path' : [ component.props.block, component.props.property ]
        });
       return subscribeRequest;
    }

    //Return the unsubscribe request.
    getUnsubscribeRequest(){
        var unsubscribeRequest = JSON.stringify({
            'typeid': 'malcolm:core/Unsubscribe:1.0',
            'id': 1
        });
        return unsubscribeRequest;
    }
}