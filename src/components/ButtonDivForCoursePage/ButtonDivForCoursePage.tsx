import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { HoleData } from '../../hooks/useFetch';

export interface ButtonDivForCoursePageProps {
    hole: HoleData,
    route: string
}

export default function ButtonDivForCoursePage({props} : {props: ButtonDivForCoursePageProps}) {

    const iconHeight = "44px";
    const iconWidth = "32px";
    const iconPaddingTop = "4px";
    const iconPaddingLeft = "1px";

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
                height: '64px',
                width: '100%',
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
                        justifyContent: 'center' ,
                        paddingTop: '12px',
                        paddingLeft: '12px',
                    }}>

                    <Stack 
                        direction="row" 
                        spacing={2}
                        sx={{
                            height: 'fit-content'
                        }}>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'normal',
                                color: theme.text,
                                textAlign: 'center'
                            }}
                        >
                            {props.hole.hole_number}
                        </Typography>

                        {
                        props.hole && props.hole.shots_tee
                        ?
                        props.hole!!.shots_tee.map(shot => 
                            <Box
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
                        <></>
                    }

                    </Stack>

                </Box>

        </Stack>
        
    )
    
}