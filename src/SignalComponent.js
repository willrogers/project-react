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
    startConnection()
  }


  receiveUpdate(malcResponse)
  {
    this.setState({signal: malcResponse.target.value})
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


