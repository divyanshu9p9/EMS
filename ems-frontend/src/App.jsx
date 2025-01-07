import './App.css'
import AddUpdateEmployee from './components/mainComponents/AddUpdateEmp-Component'
import ListEmployeeComponent from './components/mainComponents/ListEmployees-Component'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* // http://localhost:3000 */}
          <Route path='/' element = {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<AddUpdateEmployee/>}></Route>
          {/* // http://localhost:3000/update-employee/1 */}
          <Route path='/update-employee/:employeeId' element={<AddUpdateEmployee/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
