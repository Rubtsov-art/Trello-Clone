import React from 'react';
import './App.css';
import {addDesk} from './store/appReducer';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import DeskContainer from './components/Desk/DeskContainer';

function App(props) {
  return (
    <div className="App">
      <Header />
      <ul className='deskList'>
        {props.desks.map((d) => {return (<DeskContainer />)})}
      </ul>
      <button onClick={props.addDesk}>add</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  desks: state.app.desks
})

const AppContainer = connect(mapStateToProps, { addDesk }) (App);

export default AppContainer;
