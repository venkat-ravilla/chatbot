import React from "react";
import {connect} from "react-redux"

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

@connect((store)=>{
	return {
		messages:store.userReducer.messages,
		error: store.userReducer.error,
		messageCount:store.userReducer.messageCount
	}
})
export default class Layout extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	dispatchUserAction(action){
		this.props.dispatch(action);
	}

	render() {
		return (
			<div class="box box-warning direct-chat direct-chat-warning">
				<Header />
				<Body  messages={this.props.messages}/>
				<Footer dispatchUserAction={this.dispatchUserAction.bind(this)} />
			</div>
		);
	}
};