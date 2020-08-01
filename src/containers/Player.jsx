/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// useLayoutEffect es sincrónico
// useEffect es asincrónnico
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Player.scss';
// import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';

const Player = (props) => {
	const { id } = props.match.params;
	const hashPlaying = Object.keys(props.playing).length > 0;

	useLayoutEffect(() => {
		props.getVideoSource(id);
	}, []);

	return hashPlaying ? (
		<div className='Player'>
			<video controls autoPlay>
				<source src={props.playing.source} type='video/mp4' />
			</video>
			<div className='Player-back'>
				<button type='button' onClick={() => props.history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	) : (
		<NotFound />
	);
};

const mapStateToProps = (state) => {
	return {
		playing: state.playing,
	};
};
const mapDispatchToProps = {
	getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
