import axios from "axios";

let updateUserMessage = (message)=>{
	return {
		type:"ADD_USER_MESSAGE",
		payload:{
			text:message
		}
	}
}

let fetchAgentResponse = (message)=>{
	return function(dispatch){
		axios({
			method:"GET",
			url:"https://api.api.ai/v1/query",
			headers:{Authorization: 'Bearer c33b12b0191c479f91fda1cb8964f34e'},
			params:{
				v:"20161230",
				query:message,
				timezone:"IST",
				lang:"en",
				sessionId:new Date().getTime()
			}
		})
		.then((response)=>{
			dispatch({
				type:"FETCH_AGENT_RESPONSE_FULFILLED",
				payload: response.data
			})
		})
		.catch((err)=>{
			dispatch({
				type:"FETCH_AGENT_RESPONSE_REJECTED",
				payload: err
			})
		})
	}
}

export default {
	updateUserMessage,
	fetchAgentResponse
}