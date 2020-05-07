import {ADD_DESK} from './actionsTypes';

const initialState = {
    desks: [{
        id: 1,
        targets: [{}],
    }]
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DESK: {
            const newDesk = {
                             id: Date.now(),
                            targets: [{}],
                            }
            return ({
                ...state,
                desks: [...state.desks, newDesk]
            })
        };
        default: return state;
    }
};

export const addDesk = () => {
    return ({type: ADD_DESK})
}

export default appReducer;