import './App.css';
import { React, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './Redux/actions';
import NavComponent from "./Components/NavComponent";
import LogInComponent from "./Components/LogInComponent";
import HomeComponent from "./Components/HomeComponent";
import MedicationContainer from "./Containers/MedicationContainer";
import IngredientContainer from "./Containers/IngredientContainer";
import MedicationComponent from "./Components/MedicationComponent";
import CreateMedComponent from "./Components/CreateMedComponent";
import IngredientComponent from "./Components/IngredientComponent";
import CreateIngComponent from "./Components/CreateIngComponent";

function App(props) {

	const getUser = props.getUser

	useEffect(() => {
		const userID = localStorage.getItem("userID")
		if (userID) { getUser(userID) }
	}, [getUser])

  return (
    <div id="App">

			<NavComponent />

			<div id="main-div">
				<Switch>
					<Route exact path="/login" component={LogInComponent} />
					<Route exact path="/medications/create" component={CreateMedComponent} />
					<Route exact path="/medications/:id" component={MedicationComponent} />
					<Route exact path="/medications" component={MedicationContainer} />
					<Route exact path="/ingredients/create" component={CreateIngComponent} />
					<Route exact path="/ingredients/:id" component={IngredientComponent} />
					<Route exact path="/ingredients" component={IngredientContainer} />
					<Route exact path="/" component={HomeComponent} />
					<Route exact path="/*"><Redirect to="/" /></Route>
				</Switch>
			</div>
      
    </div>
  );
}

function mdp(dispatch) {
	return {
		getUser: userID => dispatch(getUser(userID))
	}
}

export default connect(null, mdp)(App)
