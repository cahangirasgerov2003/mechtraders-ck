import React from "react";
import "./app.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import SideBar from "./SideBar";
import Settings from "./Settings";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SideBar />
        <div className="routerContent w-100">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
