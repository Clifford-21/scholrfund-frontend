//import logo from './logo.svg';
//import './App.css';
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

//component import
//import Navigation from './components/Navigation';

//pages imports
import Login from "./pages/Login.js";
import CreateApplicaion from "./pages/CreateApplication.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <div className="App">

      <BrowserRouter >

        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/apply" element={<CreateApplicaion />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
