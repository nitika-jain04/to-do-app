import { TbPointFilled } from "react-icons/tb";
import { ImBin2 } from "react-icons/im";

export default function Tasks({ inputValue }) {
  return (
    <div className="flex items-center border border-gray-500 justify-between px-5 py-10 w-80 mt-5 rounded-md">
      <div className="flex gap-2">
        <TbPointFilled className="mt-1 text-gray-400" />
        <h1 className="text-gray-400">{inputValue}</h1>
      </div>
      <ImBin2 className="bg-gray-100 p-2 text-4xl rounded-full cursor-pointer" />
    </div>
  );
}
