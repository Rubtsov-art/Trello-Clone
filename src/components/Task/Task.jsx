import React, { useState } from 'react';

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true)
    };

    const editModeOff = () => {
        setEditMode(false)
    };

    return (
        <li>
            <div>TaskNAME</div>
            123
            <button onClick={()=>{props.deleteTask(props.deskId, props.targetId, props.taskId)}}>deleteTask</button>
        </li>
    )
}

export default Task