import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./TodoForm.module.css";
import TodoList from "./TodoList";

const TodoForm = () => {
  const taskInput = useRef();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('to-do-list');
    if(!storedData){
    }else{
      setTasks([...storedData.split(',')]);
    }
  }, []);



  const submitTaskHandler = (event) => {
    event.preventDefault();

    if (!taskInput.current.value) {
      taskInput.current.focus();
    } else {
      setTasks((prevState) => {
        
        localStorage.setItem('to-do-list',[taskInput.current.value, ...prevState]); 

        return [taskInput.current.value, ...prevState];
      });
    }
  };

  const deleteTaskHandler = (value) => {
    setTasks((prevState) => {
      prevState.splice(prevState.indexOf(value), 1);

      localStorage.setItem('to-do-list',[...prevState]);

      return [...prevState];
    });
  };

  return (
    <Fragment>
      <form className={classes["add-task"]} onSubmit={submitTaskHandler}>
        <input
          id="task-input"
          className={classes["task-input"]}
          type="text"
          autoComplete="off"
          placeholder="Add New Task"
          ref={taskInput}
        />
        <input
          id="submit-task"
          className={classes["submit-task"]}
          type="submit"
          value=""
          // disabled={true}
          title="Add Task"
        />
      </form>
      <TodoList tasks={tasks} onDelete={deleteTaskHandler} />
    </Fragment>
  );
};

export default TodoForm;
