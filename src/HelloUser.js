import React from 'react';

//The HelloUser component: Displays the username in a Hello World.
var HelloUser = React.createClass({

    //Set the initial state: empty to begin with 
    getInitialState: function(){
        return {
            name:''
        };
    },

    //Sets the name prop/state to the supplied parameter - (e)
    handleChange: function(e){
        this.setState({
            name: e.target.value
        });
    },


    //Produces an input box that, when a user enters data, calls handleChange
    render:function(){
        return(
            <div> Hello {this.state.name} <br/>
        Enter Your name here:<br/>
                <input type="text" name={this.state.name} onChange={this.handleChange} />
            </div>

        );
    }
});

export default HelloUser;
