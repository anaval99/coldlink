import { MouseEventHandler, useState } from "react";
import { IOService } from "../services/IOService";

const labelClass='block mb-2 text-sm font-medium text-gray-900 dark:text-white';
const inputClass='block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';

export function Uploader({
  label = 'label',
  id = '',
  isDirectory = false,
}) {
  const [fileName, setFileName] = useState('');
  const onClick = async () => {
    const file = await IOService.chooseFile(isDirectory);
    setFileName(file);
  };
  return (
    <div className="p-5 flex">
      <button onClick={onClick} type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {label}
      </button>
      <div className="flex-1">
        <input readOnly={true} type="text"
          value={fileName}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>      
    </div> 
  );
}