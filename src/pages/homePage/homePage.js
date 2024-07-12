import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Style from './homePage.module.css';

import Menu from "../../components/menu/menu";

import DashBoard from "../dashboard/dashboard";

export default function HomePage() {
    return (
      <Router>
        <div className={Style.homePage}>
            <Menu />

            <div>
                <Routes>
                    <Route path='/' element={<DashBoard />} />
                </Routes>
            </div>
        </div>
      </Router>
    );
}