import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Splash from "../animationcomponents/splash/Splash";
import Test from "../Test";
import HomePage from "./home/HomePage";
import Experience from "./Experience/Experience";
export default function Main(propss) {
  return (
    <div>

      <BrowserRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <Splash theme={propss.theme} setTheme={propss.setTheme} />
            }
          />
          <Route
            path="/home"
            element={<HomePage theme={propss.theme} setTheme={propss.setTheme} />}
          />
          <Route
            path="/experience"
            element={
              <Experience theme={propss.theme} setTheme={propss.setTheme} />
            }
          />

          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


}
