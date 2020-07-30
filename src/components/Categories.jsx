/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
	<div className='categories'>
		<h3 className='categories__title'>{title}</h3>
		{children}
	</div>
);

export default Categories;
