export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return {...state, toDoList: [...state.toDoList, newTask]};
    }
    case 'CHECK_TASK': {
      const id = action.payload;
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.taskCheckStatus = !el.taskCheckStatus;
        }
        return {...el};
      });
      return {...state, toDoList: newPosts}
    }
    case 'DELETE_TASK': {
      const id = action.payload;
      let reducedToDoList = state.toDoList.filter(
        el => id !== el.id
      );
      return {...state, toDoList: reducedToDoList}
    }
    case 'EDIT_TASK': {
      const id = action.payload;
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.taskEditStatus = !el.taskEditStatus;
        }
        return {...el};
      });
      return {...state, toDoList: newPosts}
    }
    case 'SAVE_EDITED_TASK': {
      const {id, editTask: task} = action.payload;
      let newPosts = state.toDoList.map(el => {
        if (id === el.id) {
          el.task = task;
          el.taskCheckStatus = false;
          el.taskEditStatus = false;
        }
        return {...el};
      });
      return {...state, toDoList: newPosts}
    }
    case 'ADD_ITEM': {
      const newItem = action.payload;
      return {...state, list: [...state.list, newItem]};
    } 
    case 'DELETE_ITEM': {
      const id = action.payload;
      let reducedList = state.list.filter(
        el => id !== el.id
      );
      return {...state, list: reducedList}
    }
    default: {
      return state
    }
  }
}
