/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
/* eslint-disable indent */
export const setFavorite = (payload) => ({
	type: 'SET_FAVORITE',
	payload,
});

export const deleteFavorite = (payload) => ({
	type: 'DELETE_FAVORITE',
	payload,
});

export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});
