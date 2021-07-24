import { React, useEffect } from 'react';
import { getMed, deleteMed } from '../Redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MedicationComponent(props) {

	const getMed = props.getMed
	const medID = props.match.params.id

	useEffect(() => getMed(medID), [getMed, medID])

	return(
		<div id="medication-comp">
			{
				props.med ?
					<>
						<h1>{props.med.name}</h1>
						<ul>
							{
								props.med.ingredients.map(ingredient => 
									<li key={ingredient.name}>
										{ingredient.name}
										<ul>
											<li>Aisle: {ingredient.aisle}</li>
											<li>Shelf: {ingredient.shelf}</li>
											<li>Column: {ingredient.column}</li>
											<li>Row: {ingredient.row}</li>
										</ul>
									</li>
								)
							}
						</ul>
					</>
					:
					null
			}
		</div>
	) 
}

function msp(state) {
	return {
		user: state.user,
		med: state.med
	}
}

function mdp(dispatch) {
	return {
		getMed: (medID) => dispatch(getMed(medID))
	}
}

export default connect(msp, mdp)(MedicationComponent)