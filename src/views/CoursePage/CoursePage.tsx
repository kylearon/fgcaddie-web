
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import ButtonDivForHomePage from '../../components/ButtonDivForHomePage/ButtonDivForHomePage';
import { CourseData, useFetchCourse } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';


export interface CoursePageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function CoursePage({props} : {props: CoursePageProps}) {

    const { courseId } = useParams();
    console.log("courseId: ",  courseId )

    const [course, setCourse] = useState<CourseData>();
    
    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
    }

    const [showLoading, setShowLoading] = useState<boolean>(true);

    //load the courses data
    const { courseData, courseDataError } = useFetchCourse(courseId!!);

    useEffect(() => {
        console.log("courseData changed");
        console.log(courseData);

        if(courseData) {
            setCourse(courseData);
        }

    },[courseData]);

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={getDisableGutter()}>

            <Container maxWidth="lg" sx={{  }} disableGutters={true}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ pagename: "COURSE", lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                    {
                        course
                        ?
                        course!!.holes.map(hole => 
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                }}
                            >
                                <ButtonDivForHomePage props={{ text: hole.hole_number, route: "#"}} />
                            </Box>
                        )
                        :
                        <></>
                    }


                </Stack>

            </Container>

        </Container>
    );
}