const labelClass='block mb-2 text-sm font-medium text-gray-900 dark:text-white';
const inputClass='block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';

export function Uploader({
  label = 'label',
  id = '',
}) {

  return (
    <div className="p-5">
      <label className={labelClass} htmlFor={id}>{label}</label>
      <input className={inputClass} id={id} type="file" />
    </div> 
  );
}