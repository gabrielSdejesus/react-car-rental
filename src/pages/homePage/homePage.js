import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Style from './HomePage.module.css';

import Menu from "../../components/menu/Menu";

import DashBoard from "../dashboard/Dashboard";

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