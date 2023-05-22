
import { Stack, useTheme } from '@mui/material';

import { useNavigate } from 'react-router-dom';


import Typography from '@mui/material/Typography';

export interface NoteBoxProps {
    note: string
}


export default function NoteBox({props} : {props: NoteBoxProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Stack 
            direction="row" 
            spacing={1}
            sx={{
                height: 'fit-content',
                width: '100%',
                bgcolor: theme.headerBody,
                
            }}>

            
            <Typography
                sx={{
                    fontSize: '20px',
                    fontWeight: 'normal', 
                    paddingTop: '8px',
                    paddingLeft: '12px',
                    width: 'fill',
                    color: theme.text
                }}
            >
                {props.note}
            </Typography>
    
        </Stack>
        
    )
}