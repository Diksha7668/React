// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
// import { BrowserRoute, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import List from './List';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<List />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/Update/:id' element={<Update />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
