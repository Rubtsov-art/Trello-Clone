import React, { useState } from 'react';
import style from './Task.module.css';

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(false);

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
        <li className={style.task}>
            {editMode
                ? <input onChange={onTaskNameChange} value={props.taskName} type={'text'} autoFocus={true} onBlur={editModeOff} />
                : <div className={style.taskNameWrapper}>
                    <h3 className={style.taskName}>{props.taskName}</h3>
                    <button className={style.taskNameEdit} onClick={() => { editModeOn() }} aria-label='edit task name'><span className={style.editSpan}>edit</span></button>
                    <button className={style.deleteTask} onClick={() => { props.deleteTask(props.deskId, props.targetId, props.taskId) }} aria-label='delete task'>X</button>
                </div>}
            {editText
                ? <input onChange={onTaskTextChange} value={props.taskText} type={'text'} autoFocus={true} onBlur={textComplete} />
                : <div className={style.textWrapper}>
                    <p>{props.taskText}</p>
                    <button className={style.editText} onClick={textInEdit} aria-label='edit task text'><span className={style.editSpan}>edit</span></button>
                 </div>
            }
            
        </li>
    )
}

export default Task