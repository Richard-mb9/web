import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./LandingPage";
import Plans from "./Plans";
import Login from "./Login";
import Register from "./Register";
import StartUp from "./products/landingPages/StartUp";
import Store from "./products/stores/Store";


export default function PagesRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LandingPage/>} path='/' />
                <Route element={<Plans/>} path='/plans' />
                <Route element={<Login/>} path='/login' />
                <Route element={<Register/>} path='/register' />
                <Route element={<StartUp/>} path='/products/start-up' />
                <Route element={<Store/>} path='/products/store' />
            </Routes>
        </BrowserRouter>    
    )
}   