import React, { useState } from 'react';
import style from './Desk.module.css';
import Target from '../Target/Target';

const Desk = (props) => {

    const [editMode, setEditMode] = useState(false);
   

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
        <section  onDrop={(evt) => dropHandler(evt)} 
                  onDragOver={(evt) => evt.preventDefault()} 
                  className={style.desk}>
            {editMode 
            ?        <div class="row #e6ee9c lime lighten-3">
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input onChange={onDeskNameChange} 
                                           value={props.deskName} 
                                           autoFocus={true} 
                                           onBlur={editModeOff} 
                                           type={"text"} 
                                           id={"autocomplete-input"} 
                                           class={"autocomplete"}/>
                                    <label class='black-text' 
                                           for="autocomplete-input">
                                        Desk name
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
            : <div class='#e6ee9c lime lighten-3'>
                <h1 className={style.deskName}>{props.deskName}</h1>
                <button className={style.deskNameEdit} 
                        onClick={()=>{editModeOn()}} 
                        aria-label='edit'>
                    <span className={style.editSpan}>
                        edit
                    </span>
                </button>
              </div>}
            <li>
                <button className={style.addTarget} 
                        onClick={() => { props.addTarget(props.deskId) }}>
                    <a class="waves-effect waves-light btn-small #558b2f light-green darken-3">
                        add target
                    </a>
                </button>
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
                <button className={style.deleteDesk} 
                        onClick={() => { props.deleteDesk(props.deskId) }}>
                    <a class="waves-effect waves-light btn-small #ff6d00 orange accent-4">
                        delete desk
                    </a>
                </button>
            </li>
        </section>
    )
}

export default Desk