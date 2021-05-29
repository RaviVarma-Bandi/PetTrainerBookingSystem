import React from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect,} from 'react-router-dom';
import Login from './components/login.js';
import Register from './components/Register.js';
import Admin from './components/Admin.js';
import PetOwners from './components/PetOwners';
import AddBooking from "./components/AddBooking";
import Trainers from "./components/Trainers";




function App() {
  const requestOptions = {
    method: 'POST',
};
  return (
    <div>
<Router>
        <scrollToTop/>
      <Switch> 
    <Route exact path='/trainer/booking' component={Trainers} />
       <Route exact path='/booking' component={AddBooking} />
       <Route exact path='/trainer' component={PetOwners} />
        <Route exact path='/Admin/' component={Admin}/>  
        <Route exact path='/signup' component={Register}/>
        {/* <Route exact path='/home' component={Home}/> */}
        <Route exact path='/' component={Login} />
         <Route path="*" component={Login} />
        </Switch>
      </Router>
    </div>

  
  );
  

}

export default App;

