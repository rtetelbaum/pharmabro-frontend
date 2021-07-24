import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, setUser } from '../Redux/actions';
import { Redirect } from 'react-router-dom';

function LogInComponent(props) {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const user = props.user
	const getUsers = props.getUsers

	useEffect(() => {
		if (!user) { getUsers() }
	}, [user, getUsers])

	const changeHandler = (e) => {
		switch (e.target.name) {
			case "username":
				setUsername(e.target.value)
				break
			case "password":
				setPassword(e.target.value)
				break
			default:
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()

		if (Object.keys(props.users).length > 0) {
			findUser()
		} else {
			alert("Something went wrong, please try again.")
		}

		setUsername("")
		setPassword("")

	}

	const findUser = () => {
		const foundUser = props.users.find(user => user.username === username)

		if (!foundUser) {
			alert("Username and/or password incorrect. Please try again.")
		} else if (foundUser.password === password) {
			localStorage.setItem('userID', foundUser.id)
			props.setUser(foundUser)
		} else {
			alert("Username and/or password incorrect. Please try again.")
		}
	}

	return (
		props.user
			?
			props.user.id
				?
				<Redirect to="/medications" />
				:
				<div>
					<h3>Loading Log In...</h3>
				</div>
			:
			props.users
				?
				Object.keys(props.users).length > 0
					?
					<div id="login-comp">

						<h3>Log In</h3>

						<form onSubmit={submitHandler}>
							<span>
								<label htmlFor="username">Username: </label>
								<input type="text" name="username" value={username} onChange={changeHandler} required />
							</span>
							<br />
							<span>
								<label htmlFor="password">Password: </label>
								<input type="password" name="password" value={password} onChange={changeHandler} required />
							</span>
							<br />
							<button type="submit">Log In</button>
						</form>

					</div>
					:
					<div>
						<h3>Loading Log In...</h3>
					</div>
				:
				<div>
					<h3>Loading Log In...</h3>
				</div>
	)
}

function msp(state) {
	return {
		user: state.user,
		users: state.users
	}
}

function mdp(dispatch) {
	return {
		getUsers: () => dispatch(getUsers()),
		setUser: userObj => dispatch(setUser(userObj))
	}
}

export default connect(msp, mdp)(LogInComponent)