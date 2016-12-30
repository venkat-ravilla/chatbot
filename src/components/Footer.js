import React from "react";

import userAction from "../actions/userAction"

export default class Footer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sendButtonStatus:true,
			inputText:""
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	sendButtonClickHandler(e){
		this.props.dispatchUserAction(userAction.updateUserMessage(this.state.inputText))
		this.props.dispatchUserAction(userAction.fetchAgentResponse(this.state.inputText))
		this.setState({
			sendButtonStatus:true,
			inputText:""
		})
	}

	inputChangeHandler(e){
		const inputVal = e.target.value;
		if (inputVal == "") {
			this.setState({
				sendButtonStatus:true,
				inputText:""
			})
		}else{
			this.setState({
				sendButtonStatus:false,
				inputText:inputVal
			})
		}
	}


	render() {
		return (
			<div class="box-footer">
				<form action="#" >
					<div class="input-group">
						<input type="text" value={this.state.inputText} name="message" onChange={this.inputChangeHandler.bind(this)} placeholder="Type Message ..." class="form-control" />
						<span class="input-group-btn">
							<button type="button" onClick={this.sendButtonClickHandler.bind(this)} class="btn btn-warning btn-flat" disabled={this.state.sendButtonStatus}>Send</button>
						</span>
					</div>
				</form>
			</div>
		);
	}
};