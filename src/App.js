import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

import Contact from "./pages/contact/Contact";


function App() {
  const {user} = useContext(Context)
 

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/register" element = {user? <Home /> : <Register />} />
        <Route path="/login" element = {user? <Home /> : <Login />} />
        <Route path="/write" element = {user? <Write /> : <Register />} />
        <Route path="/settings" element = {user? <Settings /> : <Register />} />
        <Route path="/post/:postId" element = {<Single />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



//Completed => home, posts, post, singlepost, write(css), context, topbar(css), settings(css)

//post => css
//singlepost => css
//write => css
//topbar => css
//settings => css