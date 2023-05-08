
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'


export interface HomePageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function HomePage({props} : {props: HomePageProps}) {
    
    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
    }

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={getDisableGutter()}>

            <Container maxWidth="lg" sx={{  }} disableGutters={true}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                </Stack>

            </Container>

        </Container>
    );
}