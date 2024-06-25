import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import Signup from "./Pages/Signup/Signup";

import SingleView from "./Pages/SingleView/SingleView";
import Write from "./Pages/Write/Write";
import Sidebar from "./Component/Sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {

  const {user}=useContext(Context)

  return (
    <p>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/view/:id" element={user ?<SingleView/> :<Login/>}/>
      : <Route path="/write" element={user ? <Write/>:<Login/> }/>
        <Route path="/profileSettings" element={user ? <Settings/>:<Login/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<Sidebar/>}/>
      </Routes>
    </p>
  );
}

export default App;
