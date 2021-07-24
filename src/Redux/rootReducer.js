import { combineReducers } from 'redux'

const defaultState = {
	user: null,
	users: null
}

function userReducer(prevState = defaultState.user, action) {
	switch (action.type) {
		case "GET_USER":
			return action.payload
		case "SET_USER":
			return action.payload
		case "LOG_OUT_USER":
			return null
		default:
			return prevState
	}
}

function usersReducer(prevState = defaultState.users, action) {
	switch (action.type) {
		case "GET_USERS":
			return action.payload
		default:
			return prevState
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	users: usersReducer
})

export default rootReducer