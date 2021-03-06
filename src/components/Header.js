import React from "react";

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			class:"fa fa-minus",
			minflag:false
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	minMaxToggle(){
		this.props.minMaxToggle();
		if(this.state.minflag){
			this.setState({
				class:"fa fa-minus",
				minflag:false
			});			
		}else{
			this.setState({
				class:"fa fa-plus",
				minflag:true
			});
		}
	}

	removeChat(){
		this.props.removeChat();
	}

	render() {
		return (
			<div class="box-header with-border">
				<h3 class="box-title">DirectChat</h3>
				<div class="box-tools pull-right">
					<span class="badge bg-yellow" data-toggle="tooltip" data-original-title="3 New Messages" >3</span>
					<button type="button" onClick={this.minMaxToggle.bind(this)} class="btn btn-box-tool" data-widget="collapse">
						<i class={this.state.class}></i>
					</button>
					<button type="button" class="hide btn btn-box-tool" data-widget="chat-pane-toggle" data--toggle="tooltip" data-original-title="Contacts">
						<i class="fa fa-comments"></i>
					</button>
					<button type="button" onClick={this.removeChat.bind(this)} class="btn btn-box-tool" data-widget="remove">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
		);
	}
};