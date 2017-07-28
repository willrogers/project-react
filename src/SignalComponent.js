
import React from 'react'

   var subscribeRequest = JSON.stringify
   ({
     "typeid": "malcolm:core/Subscribe:1.0",
     "id": 1,
     "path": ["HELLO","signal"],
   })

   var unsubscribeRequest = JSON.stringify
   ({
     "typeid": "malcolm:core/Unsubscribe:1.0",
     "id": 1,
   })


var connection = new WebSocket('ws://localhost:8080/ws')
connection.onopen = function() {  (console.log(this.connection))}



export default class SignalComponent extends React.Component{

  constructor(props)
  {
    super(props)
    this.state =
    {
      signal: 0
    };
  }

  componentDidMount()
  {
   connection.onopen(console.log(connection))
   connection.send(subscribeRequest)
   connection.onmessage = evt =>
   {
      handleUpdate(evt.data)
   }
  }


  handleUpdate(malcResponse)
  {
    this.setState
      ({
        signal: malcResponse.value.value
      })
  }


  componentWillUnmount()
  {
    connection.send(unsubscribeRequest)
  }


  render()
  {
    return (
           <div>
              {
              this.state.signal
              }
           </div>
           )
  }
}


