import { React, useEffect } from 'react';
import { getMed, deleteMed } from '../Redux/actions';
import { connect } from 'react-redux';

function MedicationComponent(props) {

	const getMed = props.getMed
	const medID = props.match.params.id

	useEffect(() => getMed(medID), [getMed, medID])

	const deleteMedHandler = () => {
		props.deleteMed(medID)
	}

	return(
		<div id="medication-comp">
			{
				props.med ?
					<>
						<h1>{props.med.name}</h1>
						<button onClick={() => deleteMedHandler(medID)}>DELETE</button>
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

function mdp(dispatch, ownProps) {
	return {
		getMed: (medID) => dispatch(getMed(medID)),
		deleteMed: (medID) => dispatch(deleteMed(medID, ownProps))
	}
}

export default connect(msp, mdp)(MedicationComponent)