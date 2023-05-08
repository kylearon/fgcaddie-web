import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ButtonDivForHomePageProps {
    text: string;
    route: string;
}

export default function ButtonDivForHomePage({props} : {props: ButtonDivForHomePageProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    const onButtonDivClick: MouseEventHandler<HTMLDivElement> = (e) => {
        navigate("/" + props.route);
    }

    return (
        <Stack 
            direction="row" 
            spacing={0}
            
            sx={{
                cursor: 'pointer',
            }}>


            <Stack 
                direction="row" 
                spacing={2}
                onClick={(e) => onButtonDivClick(e)}
                sx={{
                    display: 'flex',
                    height: '64px',
                    width: '1088px',
                    backgroundColor: theme.headerBody,
                    paddingTop: '0px',
                    "&:hover": {
                        backgroundColor: theme.headerBodyHover, 
                    }
                }}>


                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        backgroundColor: theme.transparent,
                        paddingTop: '2px'
                    }}>

                    <Typography
                        textAlign="left"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '12px',
                            width: 'fill',
                            fontSize: '22px',
                            color: theme.text
                        }}
                    >
                        {props.text}
                    </Typography>
                

                </Stack>

            </Stack>


        </Stack>
        
    )
    
}