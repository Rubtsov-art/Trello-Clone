import React from 'react';
import './App.css';
import {addDesk, deleteDesk, addTarget, deleteTarget} from './store/appReducer';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import DeskContainer from './components/Desk/DeskContainer';

function App(props) {

  return (
    <div className="App">
      <Header />
      <ul className='deskList'>
        {props.desks.map((d) => {return (<DeskContainer key={d.id} deskId={d.id} deleteDesk={props.deleteDesk} addTarget={props.addTarget} deleteTarget={props.deleteTarget} desks={props.desks}/>)})}
      </ul>
      <button onClick={props.addDesk}>add</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  desks: state.app.desks,
})

const AppContainer = connect(mapStateToProps, { addDesk, deleteDesk, addTarget, deleteTarget }) (App);

export default AppContainer;
