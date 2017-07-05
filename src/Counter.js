import React from 'react';
 
/**
 *  * A counter button: tap the button to increase the count.
 *   */


/*  class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
*/


var Counter = React.createClass({
	getInitialState: function(){
		return {
			count:0,
		}

	},





/*  render() {
    return (

    <button onClick={() => {this.setState({ count: this.state.count + 1 });
        }}>
        Count: {this.state.count}
      </button> 
 

      
    );
  }
*/

handleChange: function(){
	this.setState({ count: this.state.count+1  })
},



render: function(){
	return(
		<div>
			<button onClick={this.handleChange}>
				Count: {this.state.count}
			</button>
		</div>		
		)
}



});


export default Counter;
