//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

export default class MalcolmConnection{

    constructor(){
        //The connection attribute of this instance of MalcolmConnection is
        //created with a new websocket.
        this.connection = new WebSocket('ws://localhost:8080/ws');
    }

    //Called from EPICSComponent. Takes said EPICSComponent instance as a parameter 
    //in order access 
    startComms(component){

        //Set the 'self' variable to refer to the MalcolmConnection instance
        var self = this;

        //When the event listener 'onopen' is triggered on the connection associated
        //with this instance of Malcolm...
        this.connection.onopen = function(){

            //...call the send method of this(the websocket) and pass it the return of
            //the generate subscribe method as a parameter. Self refers to the current 
            //instance of MalcolmConnection, allowing us to access the desired method
            this.send(self.generateSubscribeRequest(component));
        };

        //When the event listener 'onmessage' is triggered on the connection associated
        //with this instance of Malcolm...
        this.connection.onmessage = function(event){
            
            //...parse the JSON recieved (accessed as event.data) and put it in the
            //var: response. Then...
            var response = JSON.parse(event.data);

            //...call the receiveUpdate method on current component, sending it the
            //value properties of the JSON received from Malcolm, which contains the pv
            //data.
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