import React from 'react';
import { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);
  const [editTaskList, seteditTaskList] = useState([null]);
  const [editText, seteditText] = useState('')

  const addTask = () => {

    if (task.trim() === '') return;
    setTasklist([...tasklist, task]);
    setTask('');
  };

  const deleteTask = (index, list, setList) => {
    const updatelist = list.filter((task, i) => i !== index);
    setList(updatelist)
  }
  const editTask = (e,index) => {
     const UpdateTask = [...tasklist];
     updatelist[index] = e.target.value;
     setTasklist(UpdateTask)
  }
  const saveEdit = () => {

  }

  return (
    <>
      <div className='justify-center align-center flex items-center h-full mt-20'>
        <input type="text" className='border-2 border-black' value={task} onChange={(e) => { setTask(e.target.value) }} />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="flex flex-col items-center h-full mt-10 w-full">
        <ul className="w-full max-w-md space-y-3">
          {tasklist.map((items, index) => (
            <li
              key={index}
              className="flex items-center justify-between  bg-white shadow-md rounded-lg px-4 py-2 border border-gray-200">
              <span className="text-base text-gray-800 break-words">{items}</span>
              <div className="justify-end flex">
             
               <button
                  className="ml-4 bg-blue-500   text-white rounded px-3 py-1 text-xs font-semibold transition-colors duration-150"
                   onClick={editTask}
                  title="Remove task">
                  Edit
                </button>
                <button
                  className="ml-4 bg-red-500  hover:bg-red-600 text-white rounded px-3 py-1 text-xs font-semibold transition-colors duration-150"
                  onClick={() => deleteTask(index, tasklist, setTasklist)}
                  title="Remove task" >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Todo