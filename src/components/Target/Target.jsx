import React from 'react';
import Task from '../Task/Task';

const Target = (props) => {
    return (
        <li>
            <div>Target name</div>
            <ul>
                {props.desks.map((d)=> d.id===props.deskId && d.targets.map((t) => t.id === props.targetId && t.tasks.map((task) => <Task key={task.id} taskId={task.id} deskId={props.deskId} targetId={props.targetId} deleteTask={props.deleteTask}/>)))}
            </ul>
            <button onClick={()=>{props.addTask(props.deskId, props.targetId)}}>addTASK</button>
            <button onClick={()=>{props.deleteTarget(props.deskId, props.targetId)}}>delete target</button>
        </li>
    )
};

export default Target