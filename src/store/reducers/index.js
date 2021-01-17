import { ADD_NOMINATION, REMOVE_NOMINATION } from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    nominations: [],
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOMINATION:
            return addNomination(state, action);
        case REMOVE_NOMINATION:
            return removeNomination(state, action);
        default:
            return state;
    }
}

export default reducer;