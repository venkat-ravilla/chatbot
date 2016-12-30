export default function reducer(state={
	messages:[],
	error:false,
	messageCount:0
},action){
	switch(action.type){
		case "ADD_USER_MESSAGE":{
			let payLoadData = action.payload;
			let date=new Date();
			state.messages.push({
				id: state.messageCount,
				type:"user",
				message:payLoadData.text,
				time:date.toDateString()+" "+date.toLocaleTimeString(),
				username:"User"
			})
			state.messageCount=state.messageCount+1;
			return Object.assign({}, state);
		}
		case "FETCH_AGENT_RESPONSE_FULFILLED":{
			let payLoadData = action.payload;
			let date=new Date();
			state.messages.push({
				id: state.messageCount,
				type:"agent",
				message:payLoadData.result.parameters.simplified,
				time:date.toDateString()+" "+date.toLocaleTimeString(),
				username:"Agent"
			})
			state.messageCount=state.messageCount+1;
			return Object.assign({}, state);
		}
		case "FETCH_AGENT_RESPONSE_REJECTED":{
			return state
		}
	}
	return state;
}