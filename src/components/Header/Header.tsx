
import { Stack, Box, useTheme, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


import React, { MouseEventHandler, useState } from 'react';

import Typography from '@mui/material/Typography';
import { DARK_MODE, LIGHT_MODE } from '../../utils/constants';
import { darkTheme, lightTheme } from '../../theme/Theme';
import { useViewport } from '../../hooks/useViewport';

export interface HeaderProps {
    lightDarkMode: string
    setLightDarkMode: Function
    pagename: string
}


export default function Header({props} : {props: HeaderProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    const onHomeButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        navigate("/wc2023");
    }

    const [mode, setMode] = useState(props.lightDarkMode);

    const toggleMode = () => {
      const newMode = mode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
      setMode(newMode);
    
      if (newMode === LIGHT_MODE) {
        props.setLightDarkMode(lightTheme);
      } else {
        props.setLightDarkMode(darkTheme);
      }
    };

    const onLightDarkToggleChange: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement;
        // console.log(target);
        if(target.value === LIGHT_MODE) {
            props.setLightDarkMode(lightTheme);
        } else {
            props.setLightDarkMode(darkTheme);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                bgcolor: theme.headerBody,
            }}>

            <Stack 
                direction="row" 
                spacing={1}
                sx={{
                    height: 'fit-content',
                    bgcolor: theme.headerBody,
                    width: '420px'
                }}>

                <Button
                    onClick={(e) => onHomeButtonClicked(e)}
                    sx={{
                        fontSize: '16px',
                        fontWeight: 'bold', 
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        paddingRight: '0px',
                        paddingLeft: '0px',
                        width: '100px',
                        minWidth: '100px',
                        color: theme.text,
                        "&:hover": {
                            backgroundColor: theme.headerBodyHover, 
                        }
                    }}
                >
                    fgcaddie
                </Button>

            
                <Typography
                    sx={{
                        fontSize: '24px',
                        fontWeight: 'normal', 
                        paddingTop: '8px',
                        paddingLeft: '8px',
                        width: '240px',
                        minWidth: '240px',
                        color: theme.text
                    }}
                >
                    {props.pagename}
                </Typography>
            
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        paddingBottom: '4px'
                    }}>
                    
                    <Button
                        onClick={toggleMode}
                        sx={{
                            height: '50px',
                            width: '50px',
                        }}
                        >
                        {mode === LIGHT_MODE ? (
                            <LightModeOutlined
                            sx={{
                                pointerEvents: 'none',
                                color: theme.text,
                            }}
                            />
                        ) : (
                            <DarkModeOutlined
                            sx={{
                                pointerEvents: 'none',
                                color: theme.text,
                            }}
                            />
                        )}


                    </Button>

                </Box> 

            </Stack>
        </Box>
        
    )
}