import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import HelloUser from './HelloUser';

class App extends React.Component{
	
	render() {
		return(
			<div>
				<HelloUser name={this.props.name} />
				<Counter count={this.props.count} />
			</div>
		)
	}
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App/>,
	document.getElementById('mount')
  );
});

