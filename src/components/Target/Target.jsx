import React from 'react';

const Target = (props) => {
    debugger
    return (
        <li>
            <div>Target name</div>
            <div>Task</div>
            <button onClick={()=>{props.addTask(props.deskId, props.targetId)}}>addTASK</button>
            <button onClick={()=>{props.deleteTarget(props.deskId, props.targetId)}}>delete target</button>
        </li>
    )
};

export default Target