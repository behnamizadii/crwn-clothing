import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';

import './App.css';
import SignInAndSignUp from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE </h1>
	</div>
);

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
