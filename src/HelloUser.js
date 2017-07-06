import React from 'react';

var HelloUser = React.createClass({
	
	getInitialState: function(){
		return {
			name:'Benedict Wagnall'
		}
	},

	render:function(){
		return(
			<div> Hello, {this.state.name} </div>

		)		
	}
});

export default HelloUser;
