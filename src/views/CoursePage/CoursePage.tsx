
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import { CourseData, HoleData, useFetchCourse } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ButtonDivForCoursePage from '../../components/ButtonDivForCoursePage/ButtonDivForCoursePage';


export interface CoursePageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function CoursePage({props} : {props: CoursePageProps}) {

    const { courseId } = useParams();
    // console.log("courseId: ",  courseId )

    const [course, setCourse] = useState<CourseData>();
    
    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
    }

    //load the courses data
    const { courseData, courseDataError } = useFetchCourse(courseId!!);

    useEffect(() => {
        // console.log("courseData changed");
        // console.log(courseData);

        if(courseData) {
            setCourse(courseData);
        }

    },[courseData]);

    function getRouteForHole(hole: HoleData): string {
        if(course) {
            return "/course/" + course.guid + "/hole/" + hole.hole_number;
        }

        return "#";
    }

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={getDisableGutter()}>

            <Stack spacing={2} 
                sx={{ 
                    height: '100vh', 
                    width: 'fill',
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>

                {
                    course
                    ?
                    <Header props={{ pagename: course!!.name, lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />
                    :
                    <Skeleton variant="rectangular" width={"100%"} height={60} />
                }
                

                {
                    course && course.holes
                    ?
                    course.holes.map(hole => 
                        <ButtonDivForCoursePage key={hole.guid} props={{ hole: hole, route: getRouteForHole(hole), color: course.color }} />
                    )
                    :
                    <Stack spacing={2} >
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                        <Skeleton variant="rectangular" width={"100%"} height={72} />
                    </Stack>
                }


            </Stack>

        </Container>
    );
}