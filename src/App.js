import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';

import './App.css';
import SignInAndSignUp from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import { auth } from './firebase/firebase.utils';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE </h1>
	</div>
);

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
