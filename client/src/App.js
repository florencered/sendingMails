
import './App.css'; 
import Forget_Password from './pages/Forget_Password'; 
import Home from './pages/Home'; 
import Change_Password from './pages/Change_Password';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Routes>
      <Route path='/' element={<Home/>}/>  
        {/* <Route path='/Forget_Password' element={<Forget_Password/>}/> 
        <Route path='/Change_Password' element={<Change_Password/>}/>  */}
      </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
