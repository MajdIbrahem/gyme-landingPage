import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benifits from './components/Benifits';
function App() {
  const [selectedPage,setSelectedPage]=useState<string>("home")
  return (
    <div className="bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}></Home>
      <Benifits setSelectedPage={setSelectedPage}></Benifits>
    </div>
  );
}

export default App;
