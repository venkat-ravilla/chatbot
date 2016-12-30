import React from "react";

export default class RightChatMessage extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	

	render() {
		let avatarPath = "src/img/avatar2.png";
		return (
			<div class="direct-chat-msg right">
				<div class="direct-chat-info clearfix">
					<span class="direct-chat-name pull-right">{this.props.message.username}</span>
					<span class="direct-chat-timestamp pull-left">{this.props.message.time}</span>
				</div>
				<img class="direct-chat-img" src={avatarPath} alt="message user image" />
				<div class="direct-chat-text">
                    {this.props.message.message}
				</div>
			</div>
		);
	}
};