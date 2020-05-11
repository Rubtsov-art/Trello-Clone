import {ADD_DESK, REMOVE_DESK, ADD_TARGET, REMOVE_TARGET} from './actionsTypes';
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
            };

            return {
                    ...state,
                    desks: state.desks.map(desk => {
                       if(desk.id === action.deskId) {
                        return {
                            ...desk,
                            targets: [...desk.targets, newTarget]
                          }
                       } 
                        return desk;
                      })
                    }
         }
        case REMOVE_TARGET: {
            return ({
                ...state,
                desks: state.desks.map((d)=> {if (d.id === action.deskId) {
                    return {
                        ...d,
                        targets: [d.targets.filter(t=> t.id !== action.targetId)]
                    }
                } return d})
            })
        }
        default: {
            return {...state}
        }
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

export const deleteTarget = (deskId, targetId) => {
    return ({type: REMOVE_TARGET, deskId, targetId})
}

export default appReducer;