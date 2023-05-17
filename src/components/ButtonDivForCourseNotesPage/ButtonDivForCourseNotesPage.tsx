import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../../hooks/useFetch';

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

    return (

        <Stack 
            spacing={0}
            onClick={(e) => onButtonDivClick(e)}
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '720px',
                backgroundColor: theme.headerBody,
                paddingTop: '6px',
                paddingBottom: '6px',
                paddingLeft: '24px',
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
        
    )
    
}