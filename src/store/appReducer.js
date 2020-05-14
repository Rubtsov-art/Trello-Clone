import {ADD_DESK, REMOVE_DESK, ADD_TARGET, REMOVE_TARGET, ADD_TASK, REMOVE_TASK, SET_DESK_NAME, SET_TARGET_NAME, SET_TASK_NAME} from './actionsTypes';
import randomId from '../helpers/idCreator/idCreator';

const initialState = {
    desks: [{
        deskName: 'New Desk',
        id: randomId(),
        targets: [{
            targetName: 'New Target',
            id: randomId(),
            tasks:[{
                taskName: 'New Task',
                id: randomId(),
            }]
        }]
    }]
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DESK: {
            const newDesk = {
                             deskName: 'New Desk',
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
                targetName: 'New Target',
                id: randomId(),
                tasks: []
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
                        targets: [...d.targets.filter((t)=>{return(t.id !== action.targetId)})]
                    }
                } return d})
            })
        }
        case ADD_TASK: {
            const newTask = {
                taskName: 'New Task',
                id: randomId()
            }

            return ({
                ...state,
                desks: state.desks.map((d)=> {if (d.id === action.deskId) {
                    return {
                        ...d,
                        targets: d.targets.map((t) => {if (t.id === action.targetId) {
                            return {
                                ...t,
                                tasks: [...t.tasks, newTask]
                            }
                        }
                            return t
                        
                       })
                    }
                } return d})
            })
        }
        case REMOVE_TASK: {
            return ({
                ...state,
                desks: state.desks.map((d)=> {if (d.id === action.deskId) {
                    return {
                        ...d,
                        targets: d.targets.map((t) => {if (t.id === action.targetId) {
                            return {
                                ...t,
                                tasks: [...t.tasks.filter((task) => {return task.id !== action.taskId})]
                            }
                        } return t})
                    }
                } return d})
            })
        }
        case SET_DESK_NAME: {
            return {
                ...state,
                desks: state.desks.map((d) => {if (d.id === action.deskId){
                    return {
                        ...d,
                        deskName: action.value
                    }
                }return d})
            }
        }
        case SET_TARGET_NAME: {
            return {
                ...state,
                desks: state.desks.map((d) => {if (d.id === action.deskId){
                    return {
                        ...d,
                        targets: d.targets.map((t)=> {if (t.id === action.targetId){
                            return {
                                ...t,
                                targetName: action.value
                            }
                        }return t})
                    }
                }return d})
            }
        }
        case SET_TASK_NAME: {
            return {
                ...state,
                desks: state.desks.map((d) => {if (d.id === action.deskId){
                    return {
                        ...d,
                        targets: d.targets.map((t)=> {if (t.id === action.targetId){
                            return {
                                ...t,
                                tasks: t.tasks.map((task) => {if (task.id === action.taskId){
                                    return {
                                        ...task,
                                        taskName: action.value
                                    }
                                }return task})
                            }
                        }return t})
                    }
                }return d})
            }
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

export const addTask = (deskId, targetId) => {
    return ({type: ADD_TASK, deskId, targetId})
}

export const deleteTask = (deskId, targetId, taskId) => {
    return ({type: REMOVE_TASK, deskId, targetId, taskId})
}

export const setDeskName = (value, deskId) => {
    return ({type: SET_DESK_NAME, value, deskId})
}

export const setTargetName = (value, deskId, targetId) => {
    return ({type: SET_TARGET_NAME, value, deskId, targetId})
}

export const setTaskName = (value, deskId, targetId, taskId) => {
    return ({type: SET_TASK_NAME, value, deskId, targetId,taskId})
}

export default appReducer;