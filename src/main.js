import React from 'react'
import ReactDOM from 'react-dom'
import SignalComponent from './SignalComponent'

//Wrapper component
class App extends React.Component{
    render(){
        return(
            <div>
                <SignalComponent state={this.props.state} />
            </div>
        )
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>, document.getElementById('mount')
    )
})
