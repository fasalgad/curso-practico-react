/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className='App'>
		<Header />
		{children}
		<Footer />
	</div>
);
export default Layout;
