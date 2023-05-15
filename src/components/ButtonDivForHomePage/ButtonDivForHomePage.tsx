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
                        paddingTop: '12px'
                    }}>

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'normal',
                            color: theme.text,
                            textAlign: 'center'
                        }}
                    >
                        {props.text}
                    </Typography>

                </Box>

        </Stack>
        
    )
    
}