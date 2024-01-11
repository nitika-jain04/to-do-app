import { TbPointFilled } from "react-icons/tb";
import { ImBin2 } from "react-icons/im";

export default function Tasks({ inputValue, handleDeleteToDo, taskColor }) {
  return (
    <div className="flex items-center border border-gray-600 justify-between px-5 py-10 w-80 mt-5 rounded-md duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:shadow-pink-500">
      <div className="flex gap-2">
        <TbPointFilled className="mt-1 text-gray-700" />
        <h1 className={`uppercase font-semibold ${taskColor}`}>{inputValue}</h1>
      </div>
      <ImBin2
        className="bg-gray-100 p-2 text-4xl rounded-full cursor-pointer text-slate-600 hover:bg-slate-400"
        onClick={handleDeleteToDo}
      />
    </div>
  );
}
