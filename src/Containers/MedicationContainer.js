import { React, useEffect } from 'react';
import { getMeds } from '../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MedicationContainer(props) {

	const getMeds = props.getMeds

	useEffect(() => getMeds(), [getMeds])
	
	const arrayOfMeds = () => {
		if (props.meds) {
			const userMeds = props.meds.filter(med => med.user_id === props.user.id)

			return userMeds.map(med => 
				<div className="med" key={med.id}>
					<Link to={`/medications/${med.id}`}>{med.name}</Link>
				</div>
			)
		} else {
			return <h3>You have no saved medications, please create one.</h3>
		}

	}

	return (
		props.user
			?
			props.user.id
				?
				<div id="medication-cont">
					<h1>Medications</h1>

					{arrayOfMeds()}

				</div>
				:
				<div>
					<h1>Please log in.</h1>
				</div>
			:
			<div>
				<h1>Please log in.</h1>
			</div>
	)
}

function msp(state) {
	return {
		user: state.user,
		meds: state.meds
	}
}

function mdp(dispatch) {
	return {
		getMeds: () => dispatch(getMeds())
	}
}

export default connect(msp, mdp)(MedicationContainer)