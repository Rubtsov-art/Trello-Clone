import React, { useState } from 'react';
import style from './Target.module.css';
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

    const startDragHandler = (evt, id) => {
        evt.dataTransfer.setData('targetId,deskId', `${props.targetId},${props.deskId}`)
    }

    return (
        <li draggable="true" onDragStart={(evt) => startDragHandler(evt, props.id)} className={style.target}>
            {editMode
                ?
                
                <div class="row #afb42b lime darken-2">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input onChange={onTargetNameChange} value={props.targetName} type={'text'} autoFocus={true} onBlur={editModeOff} type={"text"} id={"autocomplete-input"} class={"autocomplete"}/>
                                    <label class='black-text' for="autocomplete-input">Target name</label>
                                </div>
                            </div>
                        </div>
                    </div>

                : <div className={style.nameWrapper}>
                    <h2 className={style.targetName}>{props.targetName}</h2>
                    <button className={style.targetNameEdit} onClick={() => { editModeOn() }} aria-label='edit target name'><span className={style.editSpan}>edit</span></button>
                    <button className={style.deleteTarget} onClick={() => { props.deleteTarget(props.deskId, props.targetId) }} aria-label='delete target'>X</button>
                </div>}
            <ul className={style.tasks}>
                {props.desks.map((d) => d.id === props.deskId && d.targets.map((t) => t.id === props.targetId && t.tasks.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            taskId={task.id}
                            deskId={props.deskId}
                            targetId={props.targetId}
                            deleteTask={props.deleteTask}
                            setTaskName={props.setTaskName}
                            taskName={task.taskName}
                            taskText={task.taskText}
                            setTaskText={props.setTaskText}
                        />)
                }
                )))}
            </ul>
            <button className={style.addTarget} onClick={() => { props.addTask(props.deskId, props.targetId) }}><a class="waves-effect waves-light btn-small #558b2f light-green darken-3">ADD TASK</a></button>
            
        </li>
    )
};

export default Target