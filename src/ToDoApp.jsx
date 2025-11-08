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
    <div className={`container p-5 bg-dark text-white${styles.list}`}>
      <h2 className="text-center text-white">To do App</h2>
      <input
        type="text"
        placeholder="Enter Task"
        className="m-5"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button onClick={addTask} className="btn btn-success">
        AddTask
      </button>
      <h2 className="text-white ms-5">MyTasks</h2>
      {taskList.length === 0 ? (
        <p className="text-danger ms-5">No Tasks Found</p>
      ) : (
        <ul>
          {taskList.map((task, index) => (
            <li
              key={index}
              className={`${
                checkedList.includes(index) ? styles.checked : styles.normal
              } text-white lead ms-2`}
              style={{
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "200px", // adjust width as per your layout
                marginBottom: "10px",
              }}
            >
              <input
                type="checkbox"
                className="form-check-input large-checkbox m-2"
                checked={checkedList.includes(index)}
                onChange={() => {
                  toggleCheckBox(index);
                }}
              ></input>
              {task}
              <FontAwesomeIcon
                className=""
                icon={faCircleXmark}
                style={{
                  color: "red",
                  fontSize: "20px",
                  left: "150px",
                  position: "relative",
                }}
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

// import React from "react";

// const ToDoApp = () => {
//   return (
//     <div>
//       <button className="btn btn-secondary">Click</button>
//     </div>
//   );
// };

// export default ToDoApp;
