import React from "react";

import LeftChatMessage from "./LeftChatMessage";
import RightChatMessage from "./RightChatMessage";

export default class Body extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		const messageCompArray = this.props.messages.map((messageObj)=>{
			if(messageObj.type == "user"){
				return (<RightChatMessage key={messageObj.id} message={messageObj}/>)
			}else{
				return (<LeftChatMessage key={messageObj.id} message={messageObj}/>)
			}
		})

		return (
			<div class="box-body">
				<div class="direct-chat-messages">
					{messageCompArray}
				</div>
			</div>
		);
	}
};