import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benifits from './components/Benifits';
import OurClasses from './components/OurClasses';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  const [selectedPage,setSelectedPage]=useState<string>("home")
  return (
    <div className="bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage}></Home>
      <Benifits setSelectedPage={setSelectedPage}></Benifits>
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer></Footer>
    </div>
  );
}

export default App;
