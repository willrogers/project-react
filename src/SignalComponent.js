import {getSubRequest, getUnsubRequest} from './jsonStore.js'
import { fireConnection, startMalcolmComms, killMalcolmComms } from './connection.js'
import React from 'react'
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
    fireConnection()
    startMalcolmComms(getSubRequest())
  }


  receiveUpdate(malcResponse)
  {
    this.setState
      ({
       signal: malcResponse.target.value
      })
  }


  componentWillUnmount()
  {
    killMalcolmComms(getUnsubRequest())
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


