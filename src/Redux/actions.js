import {
	GET_USER,
	SET_USER,
	LOG_OUT_USER,
	GET_USERS
} from './actionTypes'

const BASE_URL = "http://localhost:8000/api"

export function getUser(userID) {
	return function (dispatch) {
		fetch(`${BASE_URL}/users/${userID}`)
			.then(r => r.json())
			.then(userObj => {
				dispatch({ type: GET_USER, payload: userObj })
			})
	}
}

export function setUser(userObj) {
	return function (dispatch) {
		dispatch({ type: SET_USER, payload: userObj })
	}
}

export function logOutUser() {
	return function (dispatch) {
		localStorage.removeItem('userID')
		dispatch({ type: LOG_OUT_USER })
		alert("Logged out!")
	}
}

export function getUsers() {
	return function (dispatch) {
		fetch(`${BASE_URL}/users`)
			.then(r => r.json())
			.then(userObjs => {
				dispatch({ type: GET_USERS, payload: userObjs })
			})
	}
}