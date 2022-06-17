import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Login from './passanger/user-login/login.js';
import Signup from './passanger/user-signup/signup.js';
import List from './server/flight-list/list.js';
import AddFlight from './server/add-light/add-flight.js';
import Ticket from './passanger/user-booking/booking.js';
import View from './server/server-view/view.js';
//import { List } from '@mui/material';
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/ticket' element={<Ticket />}/>
    <Route path='/List' element={<List />}/>
    <Route path='/addflight' element={<AddFlight />}/>
    <Route path='/view' element={<View />}/>


    </Routes>
    </BrowserRouter>
  )
}
 
export default App;




