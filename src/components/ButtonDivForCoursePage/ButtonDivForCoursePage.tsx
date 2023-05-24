import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { HoleData } from '../../hooks/useFetch';

export interface ButtonDivForCoursePageProps {
    hole: HoleData,
    route: string,
    color: string
}

export default function ButtonDivForCoursePage({props} : {props: ButtonDivForCoursePageProps}) {

    const iconHeight = "88px";
    const iconWidth = "64px";
    const iconPaddingTop = "0px";
    const iconPaddingLeft = "0px";

    const awsUrl = "https://fgcaddie.s3.us-east-2.amazonaws.com";

    const getImageUrl = (image: string) => {
        return awsUrl + "/" + image;
    }

    const theme = useTheme();

    const navigate = useNavigate();

    const onButtonDivClick: MouseEventHandler<HTMLDivElement> = (e) => {
        navigate(props.route);
    }

    return (

        <Stack 
            spacing={2}
            onClick={(e) => onButtonDivClick(e)}
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth: '420px',
                height: 'fit-content',
                backgroundColor: theme.headerBody,
                paddingTop: '0px',
                cursor: 'pointer',
                borderRadius: '12px',
                "&:hover": {
                    backgroundColor: theme.headerBodyHover, 
                }
            }}>


                <Box 
                    sx={{ 
                        width: '420px',
                        justifyContent: 'center' ,
                        paddingTop: '6px',
                        paddingBottom: '6px',
                        paddingLeft: '12px',
                        
                    }}>

                    <Stack 
                        direction="row" 
                        spacing={2}
                        sx={{
                            height: 'fit-content'
                        }}>
                        

                        <Stack 
                            direction="column" 
                            spacing={0}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '60px'
                            }}>

                            <Typography
                                sx={{
                                    fontSize: '26px',
                                    fontWeight: 'normal',
                                    color: theme.textWhite,
                                    textAlign: 'center',
                                    borderRadius: '12px',
                                    backgroundColor: props.color
                                }}
                            >
                                {props.hole.hole_number}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 'normal',
                                    color: theme.textLighter,
                                    textAlign: 'center'
                                }}
                            >
                                {"Par " + props.hole.par}
                            </Typography>

                            
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: 'normal',
                                    color: theme.textLighter,
                                    textAlign: 'center'
                                }}
                            >
                                {props.hole.length + " yds"}
                            </Typography>



                        </Stack>

                        {
                        props.hole && props.hole.shots_tee
                        ?
                        props.hole!!.shots_tee.map(shot => 
                            <Box
                                key={shot.guid}
                                component="img"
                                sx={{
                                    height: iconHeight,
                                    width: iconWidth,
                                    paddingTop: iconPaddingTop,
                                    paddingLeft: iconPaddingLeft
                                }}
                                src={getImageUrl(shot.image_markedup)}
                            />
                        )
                        :
                        <Box 
                            sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '280px'
                            }}>
                            <Typography
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: theme.textLighter,
                                    textAlign: 'center',
                                }}
                            >
                                no photos
                            </Typography>
                        </Box>
                    }

                    </Stack>

                </Box>

        </Stack>
        
    )
    
}