import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
      
           <Login />
       
          }
        ></Route>
        
        <Route path="/signup" element={
         
          <SignUp />
        
        }>
        </Route>
        <Route path="/dashboard" element={
          <Dashboard />
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
