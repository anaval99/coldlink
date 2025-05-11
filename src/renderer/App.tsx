import './App.css';
import "tailwindcss/tailwind.css";
import { Uploader } from './components/Uploader';

export default function App() {
  return (
    <div className="dark h-screen bg-gray-800">
      <div className="container m-auto">
        <Uploader id='link-target' label='Link Target' />
        <Uploader id='link-source' label='Link Source' />
      </div>
    </div>
  );
}
