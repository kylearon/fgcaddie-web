import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseData, HoleData } from '../../hooks/useFetch';

export interface CourseScorecardViewProps {
    holeStart: number,
    course: CourseData
}

export default function CourseScorecardView({props} : {props: CourseScorecardViewProps}) {

    const theme = useTheme();

    function getHoleArray() {
        return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

        // if(props.holeStart == 1) {
        //     return [1,2,3,4,5,6,7,8,9];
        // }
        // else if(props.holeStart == 10) {
        //     return [10,11,12,13,14,15,16,17,18];
        // }
        // return[];
    }

    return (
        <Stack 
            spacing={0}
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '720px',
                paddingTop: '8px',
                cursor: 'pointer',
                borderRadius: '12px',
            }}>


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
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: theme.textLighter,
                                textAlign: 'left',
                                width: '55px'
                            }}
                        >
                            {"HOLE"}
                        </Typography>
                    </Box>

                    {
                        getHoleArray().map(num => 
                            <Box 
                                sx={{ 
                                    justifyContent: 'center',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: theme.textLighter,
                                        textAlign: 'center',
                                        width: '20px',
                                    }}
                                >
                                    {num}
                                </Typography>
                            </Box>
                        )
                    }

            </Stack>


            <Stack 
                spacing={2}
                direction={'row'}
                sx={{
                    width: '100px'
                }}>

                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: theme.textLighter,
                                textAlign: 'left',
                                width: '55px'
                            }}
                        >
                            {"PAR"}
                        </Typography>
                    </Box>

                    {
                        props.course.holes.map(hole =>
                            <Box 
                                sx={{ 
                                    justifyContent: 'center',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: theme.textLighter,
                                        textAlign: 'center',
                                        width: '20px',
                                    }}
                                >
                                    {hole.par}
                                </Typography>
                            </Box>
                        )
                    }

            </Stack>


            <Stack 
                spacing={2}
                direction={'row'}
                sx={{
                    width: '100px'
                }}>

                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: theme.textLighter,
                                textAlign: 'left',
                                width: '55px'
                            }}
                        >
                            {"YARDS"}
                        </Typography>
                    </Box>

                    {
                        props.course.holes.map(hole =>
                            <Box 
                                sx={{ 
                                    justifyContent: 'center',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: theme.textLighter,
                                        textAlign: 'center',
                                        width: '20px',
                                    }}
                                >
                                    {hole.length}
                                </Typography>
                            </Box>
                        )
                    }

            </Stack>
                

        </Stack>
    )

}