import React from 'react';
import { deleteTarget } from '../../store/appReducer';

const Target = (props) => {
    debugger
    return (
        <li>
            <div>Target name</div>
            <div>Task</div>
            <button onClick={()=>{deleteTarget(props.deskId, props.targetId)}}>delete target</button>
        </li>
    )
};

export default Target