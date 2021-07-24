import { combineReducers } from 'redux'

const defaultState = {
	user: null,
	users: null,
	meds: null,
	med: null
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

function medsReducer(prevState = defaultState.meds, action) {
	switch (action.type) {
		case "GET_MEDS":
			return action.payload
		case "DELETE_MED":
			return { ...prevState, meds: [...prevState.meds.filter(med => med.id !== action.payload)] }
		default:
			return prevState
	}
}

function medReducer(prevState = defaultState.med, action) {
	switch (action.type) {
		case "GET_MED":
			return action.payload
		default:
			return prevState
	}
}

const rootReducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	meds: medsReducer,
	med: medReducer,
})

export default rootReducer