import {ADD_DESK, REMOVE_DESK, ADD_TARGET} from './actionsTypes';
import randomId from '../helpers/idCreator/idCreator';

const initialState = {
    desks: [{
        id: randomId(),
        targets: []
    }]
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DESK: {
            const newDesk = {
                             id: randomId(),
                             targets: []
                            }
            return ({
                ...state,
                desks: [...state.desks, newDesk]
            })
        };
        case REMOVE_DESK: {
            return ({
                ...state,
                desks: state.desks.filter((d)=> {return (d.id !== action.deskId)})
            })
        }
        case ADD_TARGET: {
            const newTarget = {
                id: randomId()
            }

            if (state.desks.map((d)=> {return (d.id !== action.deskId)})) {
                return ({
                    ...state
                })
            } else {
                return ({
                ...state,
                ...state.desks,
                //fix it !!!
                desks: state.desks.map((d) => d.targets.newTarget = newTarget)
            })}
        }
        default: return state;
    }
};

export const addDesk = () => {
    return ({type: ADD_DESK})
}

export const deleteDesk = (deskId) => {
    return ({type: REMOVE_DESK, deskId})
}

export const addTarget = (deskId) => {
    return ({type: ADD_TARGET, deskId})
}

export default appReducer;