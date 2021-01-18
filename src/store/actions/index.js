import { ADD_NOMINATION, REMOVE_NOMINATION, SET_SEARCH_VALUE, SET_SEARCH_RESULTS } from './actionTypes';
import { authAxios } from '../../axiosUtils';

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

export const setSearchValue = data => {
	return {
		type: SET_SEARCH_VALUE,
		data
	};
}

export const setSearchResults = data => {
	return {
		type: SET_SEARCH_RESULTS,
		data
	};
}

export const clearSearch = () => {
	return dispatch => {
		dispatch(setSearchValue(""));
		dispatch(setSearchResults([]));
	};
}

export const search = search => {
	return dispatch => {
		dispatch(setSearchValue(search));
		authAxios.get('https://www.omdbapi.com/', {
			params: {
				s: search
			}
		})
		.then(({data}) => {
			dispatch(setSearchResults(data.Search));
		})
		.catch(err => {
			console.log(err);
		})
		// set search results
	};
}
