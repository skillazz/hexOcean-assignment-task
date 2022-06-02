import {Box, Container, Typography} from "@mui/material";

const Header = () => {

    return(
        <Container maxWidth='100vw' sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{padding: '1rem'}}>
                <img src="https://hexocean.com/static/img/logo.svg" alt="" width="290" height="auto"/>
                <Typography variant="h5" sx={{marginLeft: '3.2rem'}}>Assignment Task</Typography>
                <img src="https://hexocean.com/static/img/hexagons-section-bg.svg" alt="" width="310" height="auto"/>
            </Box>
        </Container>


    )
}

export default Header
