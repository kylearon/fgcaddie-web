
import { Container, Skeleton, Stack, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import { useFetchCoursesByTag } from '../../hooks/useFetch';
import ButtonDivForCourseNotesPage from '../../components/ButtonDivForCourseNotesPage/ButtonDivForCourseNotesPage';
import { useParams } from 'react-router-dom';


export interface CourseNotesByTagPageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function CourseNotesByTagPage({props} : {props: CourseNotesByTagPageProps}) {

    const { tag } = useParams();

    //load the courses data by tag
    const { coursesData, coursesDataError } = useFetchCoursesByTag(tag!!);
    
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
                        <ButtonDivForCourseNotesPage key={course.guid} props={{ course: course, route: "course/" + course.guid}} />
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