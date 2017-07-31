import {receiveUpdate} from './SignalComponent.js'


var subscribeRequest = JSON.stringify
   ({
     "typeid": "malcolm:core/Subscribe:1.0",
     "id":5,
     "path": ["HELLO","signal"]
   })

var unsubscribeRequest = JSON.stringify
   ({
     "typeid": "malcolm:core/Unsubscribe:1.0",
     "id":5 
   })


var connection = new WebSocket('ws://localhost:8080/ws')

  export function startConnection(component)
  {

    connection = new WebSocket('ws://localhost:8080/ws')


    connection.onopen = function()
    {
      console.log("onopen called")
      connection.send(subscribeRequest)
    }


    connection.onmessage = function(event)
    {

      var response = JSON.parse(event.data)
      console.log(response)
      component.receiveUpdate(response.value.value)
    }

  }

  export function killMalcolmComms()
  {
    connection.send(unsubscribeRequest)
  }

