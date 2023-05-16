
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import { useFetchCourses } from '../../hooks/useFetch';
import ButtonDivForCourseNotesPage from '../../components/ButtonDivForCourseNotesPage/ButtonDivForCourseNotesPage';


export interface CourseNotesPageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function CourseNotesPage({props} : {props: CourseNotesPageProps}) {
    
    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
    }

    //load the courses data
    const { coursesData, coursesDataError } = useFetchCourses();

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={getDisableGutter()}>

            <Container maxWidth="lg" sx={{  }} disableGutters={true}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ pagename: "Courses", lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                    {
                        coursesData
                        ?
                        coursesData.map(course => 
                            <Box 
                                key={course.guid}
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                }}
                            >
                                <ButtonDivForCourseNotesPage props={{ course: course, route: "course/" + course.guid}} />
                            </Box>
                        )
                        :
                        <Stack spacing={2} >
                            <Skeleton variant="rectangular" width={"100%"} height={72} />
                            <Skeleton variant="rectangular" width={"100%"} height={72} />
                            <Skeleton variant="rectangular" width={"100%"} height={72} />
                            <Skeleton variant="rectangular" width={"100%"} height={72} />
                            <Skeleton variant="rectangular" width={"100%"} height={72} />
                        </Stack>
                    }

                </Stack>

            </Container>

        </Container>
    );
}