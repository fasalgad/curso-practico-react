/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
	<section className='carousel'>
		<div className='carousel__container'>{children}</div>
	</section>
);
export default Carousel;
