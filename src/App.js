import './App.css';
import FooterPart from './components/footer/Footer';
import About from './pages/about/About';
import NavigationBar from './components/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import ContactComp from './pages/contact/Contact';
import Shop from './pages/shop/Shop';






function App() {
  return (
    <div>
      
      
        <NavigationBar/>
      <Routes>
      

        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Contact" element={<ContactComp/>}/>
        <Route path="Shop" element={<Shop/>}/>
         
       </Routes>
      <FooterPart/>
     
     
     
      
    </div>
  );
}

export default App;
