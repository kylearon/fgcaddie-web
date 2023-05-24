import { Stack, useTheme, Typography, Box } from '@mui/material';

import { CourseData } from '../../hooks/useFetch';

export interface CourseScorecardViewProps {
    holeStart: number,
    course: CourseData
}

export default function CourseScorecardView({props} : {props: CourseScorecardViewProps}) {

    const theme = useTheme();

    const fontSizeTitle = "16px";
    const fontSizeContent = "16px";

    var parId = 0;
    var yardsId = 0;

    function getHoleArray() {
        // return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

        if(props.holeStart == 1) {
            return [1,2,3,4,5,6,7,8,9];
        }
        else if(props.holeStart == 10) {
            return [10,11,12,13,14,15,16,17,18];
        }
        return[];
    }

    function getScorecardParArray() {
        const scorecardParArray: number[] = [];
        props.course.holes.forEach(hole => parseInt(hole.hole_number) >= props.holeStart && parseInt(hole.hole_number) < props.holeStart + 9  ? scorecardParArray.push(hole.par) : "")
        return scorecardParArray;
    }

    function getScorecardYardsArray() {
        const scorecardYardsArray: number[] = [];
        props.course.holes.forEach(hole => parseInt(hole.hole_number) >= props.holeStart && parseInt(hole.hole_number) < props.holeStart + 9 ? scorecardYardsArray.push(hole.length) : "")
        return scorecardYardsArray;
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
                spacing={1}
                direction={'row'}
                sx={{
                }}>

                    <Box 
                        sx={{ 
                            justifyContent: 'left' ,
                        }}>
                        <Typography
                            sx={{
                                fontSize: {fontSizeTitle},
                                fontWeight: 'bold',
                                color: theme.textLighter,
                                textAlign: 'left',
                                width: '55px'
                            }}
                        >
                            {"HOLE"}
                        </Typography>
                    </Box>

                    <Stack 
                        spacing={2}
                        direction={'row'}
                        sx={{
                            borderRadius: '12px',
                            paddingLeft: '8px',
                            paddingRight: '8px',
                            backgroundColor: props.course.color,
                        }}>

                        {
                            getHoleArray().map(num => 
                                <Box 
                                    key={num}
                                    sx={{ 
                                        justifyContent: 'center',
                                    }}>
                                    <Typography
                                        sx={{
                                            fontSize: {fontSizeContent},
                                            fontWeight: 'bold',
                                            color: theme.textWhite,
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
                                fontSize: {fontSizeTitle},
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
                        getScorecardParArray().map(par =>
                            <Box 
                                key={parId++}
                                sx={{ 
                                    justifyContent: 'center',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: {fontSizeContent},
                                        fontWeight: 'bold',
                                        color: theme.textLighter,
                                        textAlign: 'center',
                                        width: '20px',
                                    }}
                                >
                                    {par}
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
                                fontSize: {fontSizeTitle},
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
                        getScorecardYardsArray().map(yards =>
                            <Box 
                                key={yardsId++}
                                sx={{ 
                                    justifyContent: 'center',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: {fontSizeContent},
                                        fontWeight: 'bold',
                                        color: theme.textLighter,
                                        textAlign: 'center',
                                        width: '20px',
                                    }}
                                >
                                    {yards}
                                </Typography>
                            </Box>
                        )
                    }

            </Stack>
                

        </Stack>
    )

}