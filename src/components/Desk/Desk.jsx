import React from 'react';
import Target from '../Target/Target';

const Desk = (props) => {
    debugger
    return (
        <li>
            <button onClick={()=>{props.addTarget(props.deskId)}}>add target</button>
            <ul>
                {props.desks.map((d) => d.targets.map((t)=> {return <Target/>}))}
            </ul>
            <button onClick={()=>{props.deleteDesk(props.deskId)}}>delete desk</button>
        </li>
    )
}

export default Desk