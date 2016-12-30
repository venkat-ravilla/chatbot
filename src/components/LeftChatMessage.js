import React from "react";

export default class LeftChatMessage extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		let avatarPath = "src/img/avatar.png";
		return (
			<div class="direct-chat-msg">
				<div class="direct-chat-info clearfix">
					<span class="direct-chat-name pull-left">{this.props.message.username}</span>
					<span class="direct-chat-timestamp pull-right">{this.props.message.time}</span>
				</div>
				<img class="direct-chat-img" src={avatarPath} alt="message user image" />
				<div class="direct-chat-text">
                    {this.props.message.message}
				</div>
			</div>
		);
	}
};

