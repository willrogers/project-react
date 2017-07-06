import React from 'react';


var ShoppingList =  React.createClass({

	getInitialState: function(){
		return{
			listItems: [],
		}
	},

	addItem: function(item){
		this.setState({
			listItems: this.state.listItems.concat([item])		
		});
	},

	render: function(){
		return(
			<div> Add an item to your List:
				<AddItem addNew={this.addItem} />
				<ShowList items={this.state.listItems} />
			</div>
		)
	}
});


var AddItem = React.createClass ({
	getInitialState: function(){
		return{
			newItem: ''
		}
	},

	updateNewItem: function(userInputNewItem){
		this.setState({
			newItem: userInputNewItem.target.value
		});
	},
	
	handleAddNew: function(){
		this.props.addNew(this.state.newItem);
		this.setState({
			newItem:''
		});
	
	},

	render: function(){

		return(
			<div>
				<input type="text" value={this.state.newItem} onChange={this.updateNewItem} />
				<button onClick={this.handleAddNew}> Add item </button>
			</div>
		)

	}
});


var ShowList = React.createClass ({ 
	render: function(){
		var listElements = this.props.items.map(function(item){
			return <li> {item} </li>;
		});
		
		return (
			<div>
				<h3>Shopping List</h3>
				<ul>
					{listElements}
				</ul>
			</div>
		)
	}
});


export default ShoppingList;
