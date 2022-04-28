import React, { useState } from 'react'

const Todoform = () => {
  const [input, setInput] = useState('');
  return (
    <form className='todo-form'>
      <input type='text'
        placeholder="Add a task"
        value={input} 
        name='text'
        className='todo-input' />
      <button className='todo-button'>Add Task</button>
    </form>
  );
};

export default Todoform;