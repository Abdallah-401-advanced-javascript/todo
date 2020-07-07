/* eslint-disable no-unused-vars */
import React from 'react';
// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import  SettingsContext  from './context/settings/context';
// import the css file
import 'bootstrap/dist/css/bootstrap.min.css';

function App (){
  return (
    <>

      <Header/>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
      <Footer/>

    </>
  );
}

export default App;