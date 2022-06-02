import {Box, Container, Typography} from "@mui/material";



const MainSection = () => {

    return (
        <Container maxWidth='sm' >
            <Box sx={{display: 'flex', justifyContent: 'center', border: '2px dotted lightgrey', height: '15rem', borderRadius: '1rem'}}>
                <Typography variant="body2">Placeholder</Typography>
            </Box>
        </Container>

    )
}

export default MainSection;