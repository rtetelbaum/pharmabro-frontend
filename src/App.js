import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavComponent from "./Components/NavComponent";
import LogInComponent from "./Components/LogInComponent";
import HomeComponent from "./Components/HomeComponent";
import MedicationContainer from "./Containers/MedicationContainer";
import IngredientContainer from "./Containers/IngredientContainer";
import MedicationComponent from "./Components/MedicationComponent";
import CreateMedComponent from "./Components/CreateMedComponent";
import IngredientComponent from "./Components/IngredientComponent";
import CreateIngComponent from "./Components/CreateIngComponent";

function App() {
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

export default App;
