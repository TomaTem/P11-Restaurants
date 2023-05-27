import React from 'react';
import {useState, useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function ChangingTask({task, taskEditStatus, id}) {
  const {dispatch} = useContext(globalContext);
  const [editTask, setEditTask] = useState(task);

  function handleSubmit2(event) {
    event.preventDefault();
    if (editTask.length > 0) {
      dispatch({
        type: 'SAVE_EDITED_TASK',
        payload: {
          id,
          editTask,
        },
      });
    } else {
      setEditTask(task);
    }
  }

  return (
    <>
      <div className={`form-check ${taskEditStatus ? '' : 'none'}`}>
        <form className='form-edit' onSubmit={handleSubmit2}>
          <input
            className='form-control form-control-sm'
            type='text'
            id='InputTask'
            onChange={event => setEditTask(event.target.value)}
            value={editTask}
          />
          <button type='submit' className='btn btn-outline-primary deleteBtn'>
            <i class='fa-solid fa-floppy-disk'></i>
          </button>
        </form>
      </div>
    </>
  );
}
