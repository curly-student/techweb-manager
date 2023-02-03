import './sb-admin-2.min.css';
import './table.css';
import React, { useState } from "react";
import  { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import './fontawesome-free/css/all.min.css';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';
import AuthContextProvider from './components/AuthContext';

const App = () => {  
  return (
    <AuthContextProvider>
      <HashRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route index exact="true" path="/" element={<Home/>}></Route>
          </Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/logout" element={<Login />}></Route>
        </Routes>
      </HashRouter>
      </AuthContextProvider>
  );
};

export default App;
