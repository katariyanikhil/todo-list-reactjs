import classes from "./TodoList.module.css";

const ListItem = (props) => {

  return (
    <ul className={classes["task-list"]}>
      {props.tasks.map((task) => {
        return (
          <li key={Math.random().toString()} className={classes["task-list-item"]}>
            <label className={classes["task-list-item-label"]}>
              <input id={task} type="checkbox" />
              <span>{task}</span>
            </label>
            <button
              className={classes["delete-btn"]}
              title="Delete Task"
              value={task}
              onClick={(event) => props.onDelete(event.target.value)}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
