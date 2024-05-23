import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css';
import Home from './CRUD/Home';
import store from './store';
import { Provider } from 'react-redux';
import Register from './CRUD/Register';
import EditData from './CRUD/Update';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App /> */}
    

     <Provider store={store}>
         {/* <Home/>
         <Register/> */}
         <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Register' element={<Register/>}></Route> 
            <Route path='/update/:id' element={<EditData/>}></Route>
          </Routes>
         </Router>
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
