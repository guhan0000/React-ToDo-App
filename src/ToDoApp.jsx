import React, { useState } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ToDoApp = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  function addTask() {
    if (task.trim() === "") {
      alert("please enter a task");
      return;
    }

    setTaskList([...taskList, task]);
    setTask("");
  }
  function displayTask() {
    taskList.map((task) => {
      console.log(task);
    });
  }
  function removeTask(index) {
    const myTaskList = [...taskList];
    myTaskList.splice(index, 1);
    setTaskList(myTaskList);
    setCheckedList(checkedList.filter((i) => i !== index));
  }
  function toggleCheckBox(index) {
    if (checkedList.includes(index)) {
      // If already checked → remove it
      setCheckedList(checkedList.filter((i) => i !== index));
    } else {
      // If not checked → add it
      setCheckedList([...checkedList, index]);
    }
  }

  return (
    <div>
      <h2>To do App</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button onClick={addTask}>AddTask</button>
      <h2>MyTasks</h2>
      {taskList.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        <ul className={styles.list}>
          {taskList.map((task, index) => (
            <li
              key={index}
              className={checkedList.includes(index) ? styles.checked : ""}
            >
              <input
                type="checkbox"
                checked={checkedList.includes(index)}
                onChange={() => {
                  toggleCheckBox(index);
                }}
              ></input>
              {task}
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "red" }}
                onClick={() => {
                  removeTask(index);
                }}
              />
            </li>
          ))}
        </ul>
      )}
      {/* <button onClick={removeTask(task)}>RemoveTask</button> */}
    </div>
  );
};

export default ToDoApp;
