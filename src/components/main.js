import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import HelloUser from './HelloUser'
import ShoppingList from './ShoppingList'

//Wrapper component to contain the two children components, HelloUser and
// Counter. Default values are given here for initialisation.
class App extends React.Component{
	
    render() {
        return(
            <div>
                <HelloUser name={this.props.name} />	
                <Counter count={this.props.count} />
                <ShoppingList  /*SOME STUFF IN HERE*/ />
            </div>
        )
    }
}


//Event handler fires when actual DOM is loaded, upon which it calls the
//ReactDOM.render method, with the App component and the HTML element to
//load it to, in this case the div we have called 'mount'
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <App/>,
        document.getElementById('mount')
    )
})

