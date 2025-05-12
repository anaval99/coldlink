import './App.css';
import "tailwindcss/tailwind.css";
import { Uploader } from './components/Uploader';
import { Toggler } from './components/Toggler';
import { useState } from 'react';

export default function App() {
  const [isDirectory, setIsDirectory] = useState(false);
  return (
    <div className="dark h-screen bg-gray-800">
      <div className="container mx-auto pt-12">
        <Toggler value={isDirectory} onChange={isTrue => setIsDirectory(isTrue)} />
        <Uploader isDirectory={isDirectory} id='link-target' label='Link Target' />
        <Uploader id='link-source' label='Link Source' />
      </div>
    </div>
  );
}
