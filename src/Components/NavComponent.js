import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../Redux/actions';
import { Link } from 'react-router-dom';

function NavComponent(props) {
	return(
		<div id="nav-comp">
			<Link to="/">Home</Link>

			{
				props.user
					?
					props.user.id
					?
					<>
						<Link to="/medications">Medications</Link>
						<Link to="/ingredients">Ingredients</Link>
						<Link to="/home" onClick={() => props.logOutUser()}>Log Out</Link>
					</>
						:
						<Link to="/login">Log In</Link>
					:
					<Link to="/login">Log In</Link>
			}

		</div>
	) 
}

function msp(state) {
	return {
		user: state.user
	}
}

function mdp(dispatch) {
	return {
		logOutUser: () => dispatch(logOutUser())
	}
}

export default connect(msp, mdp)(NavComponent)