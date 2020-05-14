import React from 'react';

const Task = (props) => {
    return (
        <li>
            <div>TaskNAME</div>
            123
            <button onClick={()=>{props.deleteTask(props.deskId, props.targetId, props.taskId)}}>deleteTask</button>
        </li>
    )
}

export default Task