import { startConnection, killMalcolmComms } from './connection.js'
import React from 'react'
export default class SignalComponent extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={signal:0}
  }

  componentDidMount()
  {
    startConnection(this)
  }


  receiveUpdate(malcResponse)
  {
    console.log(malcResponse)
    this.setState({signal: malcResponse.value})
  }


  componentWillUnmount()
  {
    killMalcolmComms()
  }


  render()
  {
    return (
           <div>
              {
              this.signal
              }
           </div>
           )
  }
}


