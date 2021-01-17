import { ADD_NOMINATION, REMOVE_NOMINATION } from '../actions/actionTypes';

export const addNomination = data => {
	return {
		type: ADD_NOMINATION,
		data
	};
};

export const removeNomination = data => {
	return {
		type: REMOVE_NOMINATION,
		data
	};
};
