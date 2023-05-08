import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { testTheme, darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';
import { LIGHT_MODE, DARK_MODE } from './utils/constants';
import HomePage from './views/HomePage/HomePage';
import CourseNotesPage from './views/CourseNotesPage/CourseNotesPage';
import RulesPage from './views/RulesPage/RulesPage';

function App() {

  
    const [lightDarkMode, setLightDarkMode] = useState(() => {
        //load the saved theme from the localStorage
        let lightDarkModeString = localStorage.getItem('theme') || DARK_MODE;
        if(lightDarkModeString === LIGHT_MODE) {
            return lightTheme;
        } else {
            return darkTheme;
        }
    });

    const navigate = useNavigate();

    const location = useLocation();


    return (
        <>
        <Routes>
            <Route
            path="/"
            element={
                <ThemeProvider 
                    theme={lightDarkMode}>
                    <HomePage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            // loader={() => { console.log("login page loader"); }}
            />
            <Route
            path="/courses"
            element={
                <ThemeProvider 
                    theme={lightDarkMode}>
                    <CourseNotesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />
            <Route
            path="/rules"
            element={
                <ThemeProvider 
                    theme={lightDarkMode}>
                    <RulesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />
        </Routes>
        </>
    );
}

export default App;
