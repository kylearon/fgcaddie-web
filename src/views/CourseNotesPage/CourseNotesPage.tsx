
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import ButtonDivForHomePage from '../../components/ButtonDivForHomePage/ButtonDivForHomePage';
import { useFetchCourses } from '../../hooks/useFetch';


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

                    <Header props={{ pagename: "COURSE NOTES", lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                    {
                        coursesData
                        ?
                        coursesData.map(entry => 
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                }}
                            >
                                <ButtonDivForHomePage props={{ text: entry.name, route: "course/" + entry.guid}} />
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