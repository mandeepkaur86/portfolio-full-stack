import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Master from './components/layout/Master';
import Login from './components/auth/Login';
import AddThemes from './components/admin/themes/AddThemes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='/admin' element={<AdminMaster/>}>
          <Route path='/admin/addTheme' element={<AddThemes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
