
import './App.css';

import { useState } from 'react';

import { Routes, Route, useNavigate } from "react-router-dom";

import { darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';
import { LIGHT_MODE, DARK_MODE } from './utils/constants';
import HomePage from './views/HomePage/HomePage';
import CourseNotesPage from './views/CourseNotesPage/CourseNotesPage';
import RulesPage from './views/RulesPage/RulesPage';
import CoursePage from './views/CoursePage/CoursePage';
import HolePage from './views/HolePage/HolePage';
import CourseNotesByTagPage from './views/CourseNotesByTagPage/CourseNotesByTagPage';
import RedirectComponent from './components/RedirectComponent/RedirectComponent';


function App() {

    const navigate = useNavigate();
  
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
                    <RedirectComponent props={{to:"/wc2023"}} />
                </ThemeProvider>
            }
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
                    <CourseNotesByTagPage props={{ lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
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
