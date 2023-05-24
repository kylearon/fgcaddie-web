import { Stack, useTheme, Typography, Box } from '@mui/material';

import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../../hooks/useFetch';
import CourseScorecardView from '../CourseScorecardView/CourseScorecardView';

export interface ButtonDivForCourseNotesPageProps {
    course: CourseData;
    route: string;
}

export default function ButtonDivForCourseNotesPage({props} : {props: ButtonDivForCourseNotesPageProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    const onButtonDivClick: MouseEventHandler<HTMLDivElement> = (e) => {
        navigate("/" + props.route);
    }

    function getCourseYardage() {
        var yardage = 0;
        props.course.holes.forEach(hole => {
            yardage += hole.length;
        })
        return yardage;
    }

    function getCoursePar() {
        var par = 0;
        props.course.holes.forEach(hole => {
            par += hole.par;
        })
        return par;
    }

    return (

        <Stack 
            spacing={0}
            onClick={(e) => onButtonDivClick(e)}
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '420px',
                backgroundColor: theme.headerBody,
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '18px',
                cursor: 'pointer',
                borderRadius: '12px',
                "&:hover": {
                    backgroundColor: theme.headerBodyHover, 
                }
            }}>

                <Box 
                    sx={{ 
                        justifyContent: 'left' ,
                    }}>
                    <Typography
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: theme.text,
                            textAlign: 'left'
                        }}
                    >
                        {props.course.name}
                    </Typography>
                </Box>

                <Stack 
                    spacing={2}
                    direction={'row'}
                    sx={{
                    }}>

                    
                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: theme.text,
                                textAlign: 'left'
                            }}
                        >
                            {"PAR " + getCoursePar()}
                        </Typography>
                    </Box>


                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: theme.text,
                                textAlign: 'left'
                            }}
                        >
                            {getCourseYardage() + " yds"}
                        </Typography>
                    </Box>


                </Stack>

                <Stack 
                    spacing={2}
                    direction={'row'}
                    sx={{
                    }}>

                    
                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: theme.textLighter,
                                textAlign: 'left'
                            }}
                        >
                            {props.course.creator}
                        </Typography>
                    </Box>


                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: theme.textLighter,
                                textAlign: 'left'
                            }}
                        >
                            {props.course.date_created}
                        </Typography>
                    </Box>


                </Stack>

                <CourseScorecardView props={{holeStart: 1, course: props.course}}/>
                <CourseScorecardView props={{holeStart: 10, course: props.course}}/>

                

        </Stack>
        
    )
    
}