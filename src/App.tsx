
import './App.css';

import { useState } from 'react';

import { Routes, Route } from "react-router-dom";

import { darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';
import { LIGHT_MODE, DARK_MODE } from './utils/constants';
import HomePage from './views/HomePage/HomePage';
import CourseNotesPage from './views/CourseNotesPage/CourseNotesPage';
import RulesPage from './views/RulesPage/RulesPage';
import CoursePage from './views/CoursePage/CoursePage';
import HolePage from './views/HolePage/HolePage';


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

    return (
        <>
        <Routes>
            <Route
            path="/"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <CourseNotesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            // loader={() => { console.log("login page loader"); }}
            />

            <Route
            path="/courses"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <CourseNotesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />
            <Route
            path="/rules"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <RulesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />

            <Route
            path="/:tag"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <CourseNotesPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />

            <Route
            path="/course/:courseId"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <CoursePage props={{lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />

            <Route
            path="/course/:courseId/hole/:holeNumber"
            element={
                <ThemeProvider theme={lightDarkMode}>
                    <HolePage props={{lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                </ThemeProvider>
            }
            />

        </Routes>
        </>
    );
}

export default App;
