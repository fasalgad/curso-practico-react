/* eslint-disable no-case-declarations */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import md5 from 'md5';

const gravatar = (email) => {
	const base = 'https://gravatar.com/avatar/';
	console.log(email)
	const formatEmail = (email).trim().toLowerCase();
	const hash = md5(formatEmail, { encoding: 'binary' });
	return `${base}${hash}`;
};

export default gravatar;
