

  function fireConnection()
  {
  var connection = new WebSocket('ws://localhost:8080/ws')
  }

  connection.onopen = function()
  {
    (console.log(this.connection))
  }

  function startMalcolmComms(subRequest){
    connection.send(subRequest)
  }

  function killMalcolmComms(unsubRequest){
    connection.send(unsubRequest)
  }

  connection.onMesssage = function(event)
  {
    var malcResponse = JSON.parse(event.data)

    SignalComponent.receive(response.value.meta.label)
    SignalComponent.receive(response.value.value)
  }
