import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Cart from "./component/Cart";

function App() {
  return (
    <>    
    <Navbar />
    <Routes>      
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    
    
    </>
  );
}

export default App;
