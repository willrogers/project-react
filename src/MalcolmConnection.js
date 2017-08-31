//Authors: Benedict Wagnall & Will Rogers, Diamond Light Source

export default class MalcolmConnection{

    constructor(){
        //The WS connection of this instance of MalcolmConnection is created.
        this.connection = new WebSocket('ws://localhost:8080/ws');
    }

    //Called from EPICSComponent. Takes said EPICSComponent instance as a parameter
    //in order to access its methods and properties
    startComms(component){

        //Set the 'self' constant to refer to the MalcolmConnection instance so we can
        //access it from a different context later on.
        const self = this;

        //When the event listener 'onopen' is triggered on the WS connection associated
        //with this instance of MalcolmConnection...
        this.connection.onopen = function(){

            //...call the send method of this(websocket, because we are inside a nested
            //function and therefore 'this' refers to the global object) and pass it the
            //return of the generateSubscribe method as a parameter.
            //
            //Self refers to the current instance of MalcolmConnection, because we
            //assigned it when we still had access to the local object.
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

    //Generate the subscribe request JSON to send to malcolm
    generateSubscribeRequest(component){

        //Create the following JSON and convert it to a malcolm-friendly string
        //take the props of the component to dynamically generate the path.
        let subscribeRequest = JSON.stringify(
            {
                'typeid' : 'malcolm:core/Subscribe:1.0',
                'id' : 0,
                'path' : [ component.props.block, component.props.property ]
            }
        );
        return subscribeRequest;
    }

    //Return the unsubscribe request.
    getUnsubscribeRequest(){

        //Create the following JSON and convert it to a malcolm-friendly string
        let unsubscribeRequest = JSON.stringify(
            {
                'typeid': 'malcolm:core/Unsubscribe:1.0',
                'id': 0
            }
        );
        return unsubscribeRequest;
    }
}