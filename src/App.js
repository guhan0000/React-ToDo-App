import React, { useState } from "react";
import styles from "./style.module.css";

const ToDoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
  }

  function removeTask(index) {
    const newList = [...taskList];
    newList.splice(index, 1);
    setTaskList(newList);

    // also remove it from completed tasks if checked
    setCompletedTasks(completedTasks.filter((i) => i !== index));
  }

  function toggleComplete(index) {
    if (completedTasks.includes(index)) {
      // uncheck
      setCompletedTasks(completedTasks.filter((i) => i !== index));
    } else {
      // check
      setCompletedTasks([...completedTasks, index]);
    }
  }

  return (
    <div>
      <h2>To Do App</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h2>My Tasks</h2>
      {taskList.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        <ul className={styles.list}>
          {taskList.map((task, index) => (
            <li
              key={index}
              className={completedTasks.includes(index) ? styles.checked : ""}
            >
              <input
                type="checkbox"
                checked={completedTasks.includes(index)}
                onChange={() => toggleComplete(index)}
              />
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoApp;
