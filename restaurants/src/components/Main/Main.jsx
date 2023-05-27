import Task from '../Task/Task';
import ToDoList from '../ToDoList/ToDoList';

export default function Main() {

  return (
    <main className='container my-5 py-5 main'>
      <Task />
      <ToDoList />
    </main>
  );
}