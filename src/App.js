import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import ViewStud from './components/ViewStud';
import SearchStud from './components/SearchStud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/SearchStud' element={<SearchStud/>}/>
      <Route path='/ViewStud' element={<ViewStud/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
