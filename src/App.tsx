import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/search/Search";
import Register from "./components/auth/Login";
import UserProfile from "./components/user/UserProfile";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import PaymentMethod from "./components/payment/PaymentMethod";
import NotFound from "./components/layout/NotFound";
import Invoice from "./components/invoice/Invoice";
import CarDetails from "./components/car/CarDetails";
import MyBookings from "./components/booking/MyBookings";
import Dashboard from "./components/admin/Dashboard";
import NewCar from "./components/admin/NewCar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/sample-id" element={<CarDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Register />} />
        <Route path="/me/profile" element={<UserProfile />} />
        <Route path="/payment" element={<PaymentMethod />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/me/bookings" element={<MyBookings />} />
        <Route path="/invoice" element={<Invoice />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/car/new" element={<NewCar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
