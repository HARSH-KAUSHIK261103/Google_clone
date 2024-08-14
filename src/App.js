import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homecomp from './pages/Homecomp';
import Searchpage from './pages/Searchpage';


function App() {
  return (
   <Routes>
     <Route path='/' element={<Homecomp />}></Route>
     <Route path='/search' element={<Searchpage />}></Route>
   </Routes>
   
  );
}

export default App;
