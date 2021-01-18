import { ADD_NOMINATION, REMOVE_NOMINATION, SET_SEARCH_VALUE, SET_SEARCH_RESULTS } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    nominations: [],
    searchValue: "",
    searchResults: [],
}

const addNomination = (state, action) => {
    let nominations = [...state.nominations];
    
    if (!nominations.find(o => o.imdbID === action.data.imdbID)) {
        nominations.push(action.data);
    }
    return updateObject(state, {
        nominations
    });
}

const removeNomination = (state, action) => {
    let nominations = [...state.nominations];
    
    nominations = nominations.filter(o => o.imdbID !== action.data.imdbID);
    return updateObject(state, {
        nominations
    });
}

const setSearchValue = (state, action) => {
    return updateObject(state, {
        searchValue: action.data
    });
}

const setSearchResults = (state, action) => {
    return updateObject(state, {
        searchResults: action.data
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOMINATION:
            return addNomination(state, action);
        case REMOVE_NOMINATION:
            return removeNomination(state, action);
        case SET_SEARCH_VALUE:
            return setSearchValue(state, action);
        case SET_SEARCH_RESULTS:
            return setSearchResults(state, action);
        default:
            return state;
    }
}

export default reducer;