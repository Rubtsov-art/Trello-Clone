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

    const dropHandler = (evt, targetId) => {
        evt.preventDefault()
  
        const [recivedTask, recivedList] = evt.dataTransfer.getData('targetId,deskId').split(',')
        
        props.moveTarget(Number(recivedTask), Number(recivedList), props.deskId, props.id)
    }

    return (
        <section className={style.desk}>
            {editMode 
            ?  <div className={style.nameWrapper}><input onChange={onDeskNameChange} value={props.deskName} type={'text'} autoFocus={true} onBlur={editModeOff}/></div>
            : <div className={style.nameWrapper}>
                <h1 className={style.deskName}>{props.deskName}</h1>
                <button onClick={()=>{editModeOn()}}>edit</button>
              </div>}
            <li>
                <button onClick={() => { props.addTarget(props.deskId) }}>add target</button>
                <ul className={style.targets}>
                    {props.desks.map(d => {
                        return (
                        d.id === props.deskId && d.targets.map(t => {
                        return (
                        <div onDrop={(evt) => dropHandler(evt, t.id)} onDragOver={(evt) => evt.preventDefault()} key={t.id}>
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
                        </div>
                        )})
                    )})}
                </ul>
                <button onClick={() => { props.deleteDesk(props.deskId) }}>delete desk</button>
            </li>
        </section>
    )
}

export default Desk