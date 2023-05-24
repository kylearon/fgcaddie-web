
import { Container, Skeleton, Stack, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import { useFetchCourses, useFetchCoursesByTag } from '../../hooks/useFetch';
import ButtonDivForCourseNotesPage from '../../components/ButtonDivForCourseNotesPage/ButtonDivForCourseNotesPage';


export interface CourseNotesPageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function CourseNotesPage({props} : {props: CourseNotesPageProps}) {

    //load all the courses
    const { coursesData, coursesDataError } = useFetchCourses();
    
    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
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
            

                <Header props={{ pagename: "Courses", lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                {
                    coursesData
                    ?
                    coursesData.map(course => 
                        <ButtonDivForCourseNotesPage props={{ course: course, route: "course/" + course.guid}} />
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
    );
}