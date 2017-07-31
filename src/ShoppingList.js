import React from 'react'

//Parent Component
var ShoppingList =  React.createClass({

    //Intialise an empty list called listItems
    getInitialState: function(){
        return{
            listItems: [],
        }
    },

    //Add a new item to the list
    addItem: function(item){
        this.setState({
            listItems: this.state.listItems.concat([item])
        })
    },

    //The parent component simply contains the two children
    render: function(){
        return(
            <div> Add an item to your List:
                <AddItem addNew={this.addItem} />
                <ShowList items={this.state.listItems} />
            </div>
        )
    }
})



//Child component
var AddItem = React.createClass ({

    //Initialise the new item as empty
    getInitialState: function(){
        return{
            newItem: ''
        }
    },

    //Set new item to user input
    updateNewItem: function(userInputNewItem){
        this.setState({
            newItem: userInputNewItem.target.value
        })
    },

    //Event handler for adding a new item. Pass the param then clear.
    handleAddNew: function(){
        this.props.addNew(this.state.newItem)
        this.setState({
            newItem:''
        })

    },



    //An input box that updates the new item string, and a button that sends it to
    //the handler function.
    render: function(){
        return(
            <div>
                <input type="text" value={this.state.newItem} onChange={this.updateNewItem} />
                <button onClick={this.handleAddNew}> Add item </button>
            </div>
        )

    }
})



//Child component, displays output from adding items.
var ShowList = React.createClass ({ 
    render: function(){
        var listElements = this.props.items.map(function(item){
            return <li> {item} </li>
        })

        return (
            <div>
                <h3>Shopping List</h3>
                <ul>
                    {listElements}
                </ul>
            </div>
        )
    }
})


export default ShoppingList
