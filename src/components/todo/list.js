/* eslint-disable no-unused-vars */
import React, { useContext,useEffect } from 'react';
import {SettingsContext} from '../../context/settings/context';
import  SettingsContex1 from '../../context/settings/context';
function TodoList (props) {
  const context = useContext(SettingsContext);
  return (
    <>
      <ul>
        <input type="Number" name='pages'  placeholder={'number pages'} />
        <button class='btn-primary'  onClick={() => context.pages(props.list)}>Number of element</button>
        {props.list.sort((a,b) => (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0)).slice(context.start,context.count).map((item,i) => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            <span >{'Difficulty: '+item.difficulty}</span>
            <button onClick={() => props.handleDelete(item._id)}>Delete </button>
            <button onClick={() => props.handleUpdate(i)}>Update </button>
            <input type="text" name={i}  placeholder={'Update text '+item.text} />
          </li>           
        ))}    
      </ul>
      <ul id="btn1">    
        {context.array.map((item,i) => (
          <li
            key={item}
          >
            <button  onClick={() => context.view(i)}>{i+1}</button>
          </li>
        ))}
      </ul>
      <div>
        <SettingsContex1 list={props.list} />
      </div>
    </>
  );
}

export default TodoList;
