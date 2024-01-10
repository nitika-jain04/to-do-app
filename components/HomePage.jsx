import { MdOutlineLightMode } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";
import NoTodo from "./NoTodo";
import Tasks from "./Tasks";

function getLocalTaskItems() {
  let taskItems = localStorage.getItem("Tasks");
  console.log(taskItems);

  if (taskItems) {
    return JSON.parse(localStorage.getItem("Tasks"));
  } else {
    return [];
  }
}

export default function HomePage() {
  const [isLight, setIsLight] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const [tasks, setTasks] = useState(getLocalTaskItems());

  // function addTaskItem() {
  //   if (!inputValue) {
  //   } else {
  //     setTasks([...tasks, inputValue]);
  //     setInputValue("");
  //   }
  // }

  // function deleteTaskItem(id) {
  //   console.log(id);
  //   const updatedTaskItems = tasks.filter((ele, index) => {
  //     return index !== id;
  //   });

  //   setTasks(updatedTaskItems);
  // }

  // useEffect(() => {
  //   localStorage.setItem("Tasks", JSON.stringify(tasks));
  // }, [tasks]);

  function handleDisplay() {
    setIsLight(!isLight);
  }

  function handleButtonClick() {
    setButtonClicked(!buttonClicked);
  }

  function handleAddToDo() {
    let newToDoItem = {
      inputValue: inputValue,
    };

    let updatedToDoArray = [...tasks];
    updatedToDoArray.push(newToDoItem);

    setTasks(updatedToDoArray);
    setInputValue("");

    localStorage.setItem("tasks", JSON.stringify(updatedToDoArray));
  }

  useEffect(() => {
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const bgColor = isLight ? "bg-white" : "bg-slate-900";
  const Icon = isLight ? MdOutlineLightMode : IoIosMoon;

  return (
    <div className={`h-screen ${bgColor} transition duration-500 ease-in-out`}>
      <div className="flex justify-end">
        <button>
          <Icon
            className="text-4xl m-10 font-extrabold rounded-full bg-gray-100 p-1"
            onClick={handleDisplay}
          />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-center text-4xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome To My To-Do App
          </h1>
        </div>

        {inputValue === "" && buttonClicked && (
          <div className="fixed bottom-0 justify-center flex gap-2 bg-red-400 p-1 rounded m-2 transition duration-300 ease-in">
            <div className="flex items-center gap-1 justify-between ml-2">
              <CgDanger className="text-xl" />
              <p>ToDo cannot be empty</p>
            </div>
            <IoMdClose className="text-xl mb-4" />
          </div>
        )}

        <div className="flex gap-4 justify-center mt-10">
          <input
            id="userInput"
            type="text"
            placeholder="What do you want to do?"
            className="w-72 text-lg tracking-wide bg-gray-100 p-3 rounded-md"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="bg-pink-400 uppercase text-lg tracking-wider p-3 rounded-md"
            onClick={handleAddToDo}
          >
            Add Todo
          </button>
        </div>

        {tasks.length === 0 ? (
          <NoTodo />
        ) : (
          tasks.map((task, index) => {
            return <Tasks key={index} inputValue={task.inputValue} />;
          })
        )}
      </div>
    </div>
  );
}
