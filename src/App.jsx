import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Teachers from "./Pages/Teachers/Teachers";
import AddTeacher from './Pages/Teachers/AddTeacher';
import Reviews from "./Pages/Reviews/Reviews";
import ReviewsAdd from "./Pages/Reviews/ReviewsAdd";
import Advantages from "./Pages/Advantages/Advantages";


export default function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/add" element={<ReviewsAdd />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/advantages/add" element={<ReviewsAdd />} />
        <Route path="/teachers/add" element={<AddTeacher />} />
      </Routes>
    </div>
  );
}
