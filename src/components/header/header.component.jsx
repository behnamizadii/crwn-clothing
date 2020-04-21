import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link to='/shop' className='options'>
				SHOP
			</Link>
			<Link to='/shop' className='options'>
				CONTACT
			</Link>
		</div>
	</div>
);

export default Header;
