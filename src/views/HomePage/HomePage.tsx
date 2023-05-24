
import { Container, Stack, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import ButtonDivForHomePage from '../../components/ButtonDivForHomePage/ButtonDivForHomePage';


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

                <Stack spacing={2} 
                    sx={{ 
                        height: '100vh', 
                        width: 'fill',
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Header props={{ pagename: "", lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                    <ButtonDivForHomePage props={{ text: "Course Notes", route: "courses"}} />

                    <ButtonDivForHomePage props={{ text: "Rules", route: "rules"}} />

                </Stack>

        </Container>
    );
}