import React from 'react';

/**
 *  * A counter button: tap the button to increase the count.
 *   */


//Constructor, intiialises counter as 0
var Counter = React.createClass({
    getInitialState: function(){
        return {
            count:0,
        };

    },



    //Eventhandler for button click, increases the count property by 1
    handleClick: function(){
        this.setState({ count: this.state.count+1  });
    },



    //Render the button with the count dispayed inside
    render: function(){
        return(
            <div>
                <button onClick={this.handleClick}>
          Count: {this.state.count}
                </button>
            </div>
        );
    }
});

export default Counter;
