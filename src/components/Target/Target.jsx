import React, { useState } from 'react';
import Task from '../Task/Task';

const Target = (props) => {

    const [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true)
    };

    const editModeOff = () => {
        setEditMode(false)
    };

    const onTargetNameChange = (e) => {
        props.setTargetName(e.currentTarget.value, props.deskId, props.targetId)
    };

    return (
        <li>
            {editMode 
            ?  <input onChange={onTargetNameChange} value={props.targetName} type={'text'} autoFocus={true} onBlur={editModeOff}/>
            : <div>
                <h2>{props.targetName}</h2>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            <div>Target name</div>
            <ul>
                {props.desks.map((d)=> d.id===props.deskId && d.targets.map((t) => t.id === props.targetId && t.tasks.map((task) => <Task key={task.id} taskId={task.id} deskId={props.deskId} targetId={props.targetId} deleteTask={props.deleteTask} setTaskName={props.setTaskName} taskName={task.taskName}/>)))}
            </ul>
            <button onClick={()=>{props.addTask(props.deskId, props.targetId)}}>addTASK</button>
            <button onClick={()=>{props.deleteTarget(props.deskId, props.targetId)}}>delete target</button>
        </li>
    )
};

export default Target