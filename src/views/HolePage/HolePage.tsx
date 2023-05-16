
import { Box, Container, Skeleton, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import { CourseData, HoleData, useFetchCourse } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';


export interface HolePageProps {
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function HolePage({props} : {props: HolePageProps}) {

    const theme = useTheme();

    function getDisableGutter(): boolean {
        return true;
    }

    const { courseId } = useParams();
    // console.log("courseId: ",  courseId );

    const [course, setCourse] = useState<CourseData>();
    const [hole, setHole] = useState<HoleData>();

    const { holeNumber } = useParams();
    // console.log("holeNumber: ",  holeNumber );
    
    //load the courses data
    const { courseData, courseDataError } = useFetchCourse(courseId!!);

    useEffect(() => {
        console.log("courseData changed");
        console.log(courseData);

        if(courseData) {
            setCourse(courseData);

            const holeToSet = courseData.holes.find(h =>  String(h.hole_number) === holeNumber );
            console.log("holeToSet: ", holeToSet);
            if(holeToSet) {
                setHole(holeToSet);
            }
        }
    },[courseData]);
    

    const iconHeight = "44px";
    const iconWidth = "32px";
    const iconPaddingTop = "4px";
    const iconPaddingLeft = "1px";

    const awsUrl = "https://fgcaddie.s3.us-east-2.amazonaws.com";

    const getImageUrl = (image: string) => {
        return awsUrl + "/" + image;
    }

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={getDisableGutter()}>

            <Container maxWidth="lg" sx={{  }} disableGutters={true}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    {
                        holeNumber
                        ?
                        <Header props={{ pagename: "Hole " + holeNumber, lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />
                        :
                        <Skeleton variant="rectangular" width={"100%"} height={60} />
                    }
                    
                    {
                        hole
                        ?
                        hole.shots_tee.map(shot => 
                            <Box
                                key={shot.guid}
                                component="img"
                                sx={{
                                    paddingTop: iconPaddingTop,
                                    paddingLeft: iconPaddingLeft,
                                    width: "100%", // Or whatever width you want
                                    height: "auto" // This will keep the aspect ratio
                                }}
                                src={getImageUrl(shot.image_markedup)}
                            />
                        )
                        :
                        <Stack spacing={2} >
                            <Skeleton variant="rectangular" width={"100%"} height={500} />
                            <Skeleton variant="rectangular" width={"100%"} height={500} />
                            <Skeleton variant="rectangular" width={"100%"} height={500} />
                            <Skeleton variant="rectangular" width={"100%"} height={500} />
                            <Skeleton variant="rectangular" width={"100%"} height={500} />
                        </Stack>
                    }



                </Stack>

            </Container>

        </Container>
    );
}