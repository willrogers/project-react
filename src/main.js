import React from 'react'
import ReactDOM from 'react-dom'
import SignalComponent from './SignalComponent'
//import Counter from './Counter'
//import HelloUser from './HelloUser'
//import ShoppingList from './ShoppingList'



//Wrapper component
class App extends React.Component{
    render(){
        return(<div>
            <SignalComponent state={this.props.state} />
        </div>)
    }
}

//Event handler fires when actual DOM is loaded, calls the ReactDOM.render method
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>, document.getElementById('mount')
    )
})


{/*
<HelloUser name={this.props.name} />
<Counter count={this.props.count} />
<ShoppingList />
*/}

