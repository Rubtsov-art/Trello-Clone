import React, { useState } from 'react';

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true)
    };

    const editModeOff = () => {
        setEditMode(false)
    };

    const onTaskNameChange = (e) => {
        props.setTaskName(e.currentTarget.value, props.deskId, props.targetId, props.taskId)
    };

    return (
        <li>
             {editMode 
            ?  <input onChange={onTaskNameChange} value={props.taskName} type={'text'} autoFocus={true} onBlur={editModeOff}/>
            : <div>
                <h3>{props.taskName}</h3>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            123
            <button onClick={()=>{props.deleteTask(props.deskId, props.targetId, props.taskId)}}>deleteTask</button>
        </li>
    )
}

export default Task