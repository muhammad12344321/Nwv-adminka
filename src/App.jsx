import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Report from "./Pages/Report/Report";
import Teachers from "./Pages/Teachers/Teachers";
import Students from "./Pages/Students/Students";
import AddTeacher from './Pages/Teachers/AddTeacher';


export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/report/*" element={<Report />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />

        <Route path="/teachers/add" element={<AddTeacher />} />
      </Routes>
    </div>
  );
}
