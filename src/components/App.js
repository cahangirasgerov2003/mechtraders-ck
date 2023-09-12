import React from "react";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import SideBar from "./SideBar";
import Settings from "./Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SideBar />
        <div className="routerContent">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
