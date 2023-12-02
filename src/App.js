import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Master from './components/layout/Master';
import Login from './components/auth/Login';
import AddThemes from './components/admin/themes/AddThemes';
import ManageThemes from './components/admin/themes/ManageThemes';
import AdminMaster from './components/layout/AdminMaster';
import Dashboard from './components/admin/Dashboard';
import UpdateThemes from "./components/admin/themes/UpdateThemes"
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
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/viewThemes' element={<ManageThemes/>}/>
          <Route path='/admin/addThemes' element={<AddThemes/>}/>
          <Route path='/admin/updateThemes/:id' element={<UpdateThemes/>}/>
          <Route path='/admin/addStory' element={<AddStory/>}/>
          <Route path='/admin/viewStory' element={<ManageStory/>}/>
          <Route path='/admin/updateStory/:id' element={<UpdateStory/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
