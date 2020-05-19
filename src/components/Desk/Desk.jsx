import React, { useState } from 'react';
import style from './Desk.module.css';
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

    const dropHandler = (evt) => {
        evt.preventDefault()
  
        const [targetId, currentDeskId] = evt.dataTransfer.getData('targetId,deskId').split(',')
        
        props.moveTarget(Number(targetId), Number(currentDeskId), props.deskId)
    }

    return (
        <section className={style.desk}>
            {editMode 
            ?        <div class="row #ff6d00 orange accent-4">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input onChange={onDeskNameChange} value={props.deskName} autoFocus={true} onBlur={editModeOff} type={"text"} id={"autocomplete-input"} class={"autocomplete"}/>
                                    <label class='black-text' for="autocomplete-input">Desk name</label>
                                </div>
                            </div>
                        </div>
                    </div>
            : <div class='#ff6d00 orange accent-4'>
                <h1 className={style.deskName}>{props.deskName}</h1>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            <li>
                <button onClick={() => { props.addTarget(props.deskId) }}>add target</button>
                <div onDrop={(evt) => dropHandler(evt)} onDragOver={(evt) => evt.preventDefault()}>
                <ul className={style.targets}>
                    {props.desks.map(d => {
                        return (
                        d.id === props.deskId && d.targets.map(t => {
                        return (
                        <Target 
                            key={t.id} 
                            targetId={t.id}
                             targetName={t.targetName} 
                             deskId={props.deskId} 
                             deleteTarget={props.deleteTarget} 
                             addTask={props.addTask} 
                             desks={props.desks} 
                             deleteTask={props.deleteTask} 
                             setTargetName={props.setTargetName} 
                             setTaskName={props.setTaskName} 
                             setTaskText={props.setTaskText}/>
                       
                        )})
                    )})}
                </ul>
                </div>
                <button className={style.deleteDesk} onClick={() => { props.deleteDesk(props.deskId) }}><a class="waves-effect waves-light btn-small #ff6d00 orange accent-4">delete desk</a></button>
            </li>
        </section>
    )
}

export default Desk