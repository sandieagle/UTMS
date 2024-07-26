import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
import PrivateRoute from './Components/PrivateRoute'
import Slider from './Components/Slider'
import Footer from './Components/Footer'
import About from './Components/About'
import Aboutcont from './Components/Aboutcont'
import Gallory from './Components/Gallory'
import Gallorycont from './Components/Gallorycont'
import Task from './Components/Task';
import AddTask from './Components/AddTask'
import EditTask from './Components/EditTask'
import More from './Components/More'




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/Slider' element={<Slider/>}></Route>
      <Route path='/gallory' element={<Gallory/>}></Route>
      <Route path='/gallorycont' element={<Gallorycont/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/aboutcont' element={<Aboutcont/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      <Route path='/adminlogin' element={<Login />}></Route>
      <Route path='/employee_login' element={<EmployeeLogin />}></Route>
      <Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
      <Route path='/more' element={<More />}></Route>
      <Route path='/dashboard' element={
        <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
        <Route path='' element={<Home />}></Route>
        <Route path='/dashboard/employee' element={<Employee />}></Route>
        <Route path='/dashboard/category' element={<Category />}></Route>
        <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
        <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
        <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
        <Route path="/dashboard/task" element={<Task />} />
        <Route path="/dashboard/add_task" element={<AddTask />} />
        <Route path="/dashboard/edit_task/:id" element={<EditTask />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
