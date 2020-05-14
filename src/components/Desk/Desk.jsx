import React, { useState } from 'react';
import Target from '../Target/Target';

const Desk = (props) => {

    const [editMode, setEditMode] = useState(true);

    const editModeOn = () => {
        setEditMode(true)
    };

    const editModeOff = () => {
        setEditMode(false)
    };

    const onDeskNameChange = (e) => {
        props.setDeskName(e.currentTarget.value, props.deskId)
    };

    debugger
    return (
        <section>
            {editMode 
            ?  <input onChange={onDeskNameChange} value={props.deskName} type={'text'} autoFocus={true} onBlur={editModeOff}/>
            : <div>
                <h1>{props.deskName}</h1>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            <li>
                <button onClick={() => { props.addTarget(props.deskId) }}>add target</button>
                <ul>
                    {props.desks.map(d => d.id === props.deskId && d.targets.map(t => <Target key={t.id} targetId={t.id} targetName={t.targetName} deskId={props.deskId} deleteTarget={props.deleteTarget} addTask={props.addTask} desks={props.desks} deleteTask={props.deleteTask} setTargetName={props.setTargetName} setTaskName={props.setTaskName} setTaskText={props.setTaskText}/>))}
                </ul>
                <button onClick={() => { props.deleteDesk(props.deskId) }}>delete desk</button>
            </li>
        </section>
    )
}

export default Desk