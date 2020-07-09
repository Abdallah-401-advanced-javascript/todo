/* eslint-disable no-unused-vars */
import React from 'react';
// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import  SettingsContext  from './context/settings/context';
// Auth
import Auth from './context/auth/auth.js';
import Login from './context/auth/login.js';
import LoginContext from './context/auth/context.js';
// import the css file
import 'bootstrap/dist/css/bootstrap.min.css';

const EditLink = props => {
  return (
    <Auth capability="dance">
      <span>Fake Update Link </span>
    </Auth>
  );
};

const ReadLink = props => {
  return (
    <Auth capability="read">
      <Header/>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
      <Footer/>
    </Auth>
  );
};

const DeleteLink = props => {
  return (
    <Auth capability="delete">
      <span>Fake Delete Link </span>
    </Auth>
  );
};

function App (){
  return (
    <>
      <LoginContext>
        <Login />
        <hr />
        <EditLink />
        <DeleteLink />
        <ReadLink />
      </LoginContext>
      {/* <Header/>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
      <Footer/> */}

    </>
  );
}

export default App;