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
		this.state={
			showChat:true,
			minMaxToggle:true
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	dispatchUserAction(action){
		this.props.dispatch(action);
	}

	minMaxToggle(){
		if (this.state.minMaxToggle) {
			this.setState({
				showChat:true,
				minMaxToggle:false
			})
		}else{
			this.setState({
				showChat:true,
				minMaxToggle:true
			})
		}
		
	}

	removeChat(){
		this.setState({
			showChat:false,
			minMaxToggle:true
		})
	}

	render() {
		const body = <Body  messages={this.props.messages}/>
		const footer = <Footer dispatchUserAction={this.dispatchUserAction.bind(this)} />
		const classString = (this.state.showChat?"":"hide ")+"box box-warning direct-chat direct-chat-warning"
		return (
			<div class={classString}>
				<Header minMaxToggle={this.minMaxToggle.bind(this)} removeChat={this.removeChat.bind(this)} />
				{this.state.showChat && this.state.minMaxToggle?body:null}
				{this.state.showChat && this.state.minMaxToggle?footer:null}
			</div>
		);
	}
};