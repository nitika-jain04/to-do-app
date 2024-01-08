import { MdOutlineLightMode } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import NoTodo from "./NoTodo";
import Tasks from "./Tasks";

export default function HomePage() {
  const [isLight, setIsLight] = useState(true);
  const [addTask, setAddTask] = useState(false);
  //   const [myData, setMyData] = useState(
  //     localStorage.getItem("myData") || "defaultValue"
  //   );

  //   const handleTaskClick = () => {
  //     const updatedData = myData === "completed" ? "pending" : "completed";
  //     setMyData(updatedData);
  //   };
  //   useEffect(() => {
  //     localStorage.setItem("myData", myData);
  //   }, [myData]);

  //   const handleDelete = () => {
  //     setMyData("defaultValue");
  //   };

  function handleClick() {
    setIsLight(!isLight);
  }

  function handleSubmission() {
    setAddTask(!addTask);
  }

  const bgColor = isLight ? "bg-white" : "bg-slate-900";
  const Icon = isLight ? MdOutlineLightMode : IoIosMoon;

  return (
    <div className={`h-screen ${bgColor} transition duration-500 ease-in-out`}>
      <div className="flex justify-end">
        <button>
          <Icon
            className="text-4xl m-10 font-extrabold rounded-full bg-gray-100 p-1"
            onClick={handleClick}
          />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-center text-4xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome To My To-Do App
          </h1>
        </div>

        {!addTask ? <NoTodo /> : <Tasks />}

        <div className="flex gap-4 justify-center mt-10">
          <input
            type="text"
            placeholder="What do you want to do?"
            className="w-72 text-lg tracking-wide bg-gray-100 p-3 rounded-md"
          />
          <button
            className="bg-pink-400 uppercase text-lg tracking-wider p-3 rounded-md"
            onClick={handleSubmission}
          >
            <Link href="/tasks">Add Todo</Link>
          </button>
        </div>

        {/* {task === "" && (
          <div className="fixed bottom-0 justify-center flex gap-2 bg-red-400 p-1 rounded m-2">
            <div className="flex items-center gap-1 justify-between ml-2">
              <CgDanger className="text-xl" />
              <p>ToDo cannot be empty</p>
            </div>
            <IoMdClose className="text-xl mb-4" />
          </div>
        )} */}
      </div>
    </div>
  );
}
