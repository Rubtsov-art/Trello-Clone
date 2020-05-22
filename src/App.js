import React from 'react';
import './App.css';
import { addDesk, deleteDesk, addTarget, deleteTarget, addTask, deleteTask, setDeskName, setTargetName, setTaskName, setTaskText, moveTarget } from './store/appReducer';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Desk from './components/Desk/Desk';

function App(props) {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <ul className='deskList'>
          {props.desks.map((d) => {
            return (
              <Desk 
                key={d.id}
                deskId={d.id}
                deskName={d.deskName}
                deleteDesk={props.deleteDesk}
                addTarget={props.addTarget}
                deleteTarget={props.deleteTarget}
                desks={props.desks}
                addTask={props.addTask}
                deleteTask={props.deleteTask}
                setDeskName={props.setDeskName}
                setTargetName={props.setTargetName}
                setTaskName={props.setTaskName}
                setTaskText={props.setTaskText}
                moveTarget={props.moveTarget}
              />)
          })}
        </ul>
        <button className='addDesk' onClick={props.addDesk}><a class="waves-effect waves-light btn-small #558b2f light-green darken-3">add desk</a></button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  desks: state.app.desks
})

const AppContainer = connect(mapStateToProps, {
  addDesk,
  deleteDesk,
  addTarget,
  deleteTarget,
  addTask,
  deleteTask,
  setDeskName,
  setTargetName,
  setTaskName,
  setTaskText,
  moveTarget
})(App);

export default AppContainer;
