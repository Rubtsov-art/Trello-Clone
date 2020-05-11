import React from 'react';
import Target from '../Target/Target';

const Desk = (props) => {
    return (
        <li>
            <button onClick={()=>{props.addTarget(props.deskId)}}>add target</button>
            <ul>
                {props.desks.map(d=> d.id === props.deskId? d.targets.map(t=> <Target key={t.id} targetId={t.id} deskId={props.deskId} deleteTarget={props.deleteTarget}/>): null)}
            </ul>
            <button onClick={()=>{props.deleteDesk(props.deskId)}}>delete desk</button>
        </li>
    )
}

export default Desk