import React, { useState } from 'react';

const Task = (props) => {

    const [editMode, setEditMode] = useState(true);
    const [editText, setEditText] = useState(true);

    const editModeOn = () => {
        setEditMode(true)
    };

    const editModeOff = () => {
        setEditMode(false)
    };

    const textInEdit = () => {
        setEditText(true)
    }

    const textComplete = () => {
        setEditText(false)
    }

    const onTaskNameChange = (e) => {
        props.setTaskName(e.currentTarget.value, props.deskId, props.targetId, props.taskId)
    };

    const onTaskTextChange = (e) => {
        props.setTaskText(e.currentTarget.value, props.deskId, props.targetId, props.taskId)
    };

    return (
        <li>
             {editMode 
            ?  <input onChange={onTaskNameChange} value={props.taskName} type={'text'} autoFocus={true} onBlur={editModeOff}/>
            : <div>
                <h3>{props.taskName}</h3>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            {editText
            ? <input onChange={onTaskTextChange} value={props.taskText} type={'text'} autoFocus={true} onBlur={textComplete}/>
            : <div>
                <p>{props.taskText}</p>
                <button onClick={textInEdit}>edit text</button>
              </div>
            }
            <button onClick={()=>{props.deleteTask(props.deskId, props.targetId, props.taskId)}}>deleteTask</button>
        </li>
    )
}

export default Task