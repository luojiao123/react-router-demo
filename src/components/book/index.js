import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

class Mybook extends Component{
	constructor() {
		super();
		this.state={
			msg:''
		}
	}
	componentDidMount(){
		$.ajax({
			url:'http://localhost:2139/book',
			data:{
				id:this.props.match.params.id
			},
			success:function(data){
				this.setState({msg:data.data});
			}.bind(this)
		})
	}
	componentDidUpdate(){
		$.ajax({
			url:'http://localhost:2139/book',
			data:{
				id:this.props.match.params.id
			},
			success:function(data){
				this.setState({msg:data.data});
			}.bind(this)
		})
	}
	render(){
		// console.log(this.props.match.params.id)
		
		return (<div dangerouslySetInnerHTML={{__html:this.state.msg}}></div>)
	}
}

class Book extends Component{
	render(){
		return(<Router><div>
			<Link to='/001'>田园辣妻萌包子</Link>
			<hr />
			<Link to='/002'>凤倾天下：逆天邪妃</Link>
			<hr />
			<Link to='/003'>楚先生的甜宠娇妻</Link>
			<hr />
			<Link to='/004'>绝色丹药师：鬼王妖妃</Link>
			<hr />
			
			<Route path='/:id' component={Mybook} />
		</div></Router>)
	}
}

export default Book;