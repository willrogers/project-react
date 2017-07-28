var connection = new WebSocket('ws://localhost:8080/ws')

  export function fireConnection()
  {
  console.log("helloooooooooo")
  connection = new WebSocket('ws://localhost:8080/ws')
  }

//  connection.onopen = function()
//  {
//    (console.log(this.connection))
//  }

  export function startMalcolmComms(msg){
    console.log(connection )
//  connection.send 
  }

  export function killMalcolmComms(msg){
    connection.send(msg)
  }

  connection.onMesssage = function(event)
  {
    var response = JSON.parse(event.data)
    // SignalComponent.receiveUpdate(response.value.meta.label)
    SignalComponent.receiveUpdate(response.value.value)
  }
