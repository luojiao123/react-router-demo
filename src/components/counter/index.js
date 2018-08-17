import React, { Component } from 'react';

class Counter extends Component{
	minus(){
		this.props.store.dispatch({type:'minus'});
	}
	add(){
		this.props.store.dispatch({type:'to'});
	}
	render(){
		console.log(this.props.store.getState())
		return(<div>
			<input type="button" value="-" onClick={this.minus.bind(this)} />
			<span>{this.props.store.getState().counter}</span>
			<input type="button" value="+" onClick={this.add.bind(this)} />
		</div>)
	}
}

export default Counter;