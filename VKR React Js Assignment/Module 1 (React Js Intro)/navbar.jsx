import React from 'react';
import { 
    BrowserRouter as Router,
        Route,
        Link, 
        Routes} 
        from "react-router-dom";
import Map from './10_Q';
import FuncCounter from './11_Q'



function Navbar(props) {
    return (<Router>
        
    
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
  {/* <a class="navbar-brand" href="#"><img src={require('./logo.png')} height='60px'/></a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to={'Map'}>List view</Link>
        </li>

        <li class="nav-item">
        <Link className="nav-link active" aria-current="page" to={'funccounter'}>Function Counter</Link>
        </li>
        
        
     
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/Map' element={<Map/>}/>
    <Route path='/funccounter' element={<FuncCounter/>}/>

   


</Routes>
</Router>
    );
}

export default Navbar;