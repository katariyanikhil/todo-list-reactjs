import classes from "./App.module.css";
import TodoForm from "./components/TodoList/TodoForm";

const App = () => {
  // localStorage.setItem('myKey', 'myValue');
  // const storedData = localStorage.getItem('myKey');
  // if(storedData){
  //   console.log(storedData);
  // }else{
  //   console.log('no data');
  // }
  return (
      <div className={classes["app-container"]}>
      <h1 className={classes["app-header"]}>TO DO LIST</h1>
      <TodoForm />
    </div>
  );
}

export default App;
