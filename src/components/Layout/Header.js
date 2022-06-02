import {Box, Container, Typography} from "@mui/material";

const Header = () => {

    return(
        <Container maxWidth='lg'>
            <Box sx={{padding: '1rem'}}>
                <img src="https://hexocean.com/static/img/logo.svg" alt="" width="190" height="30.38"/>
                <Typography variant="subtitle1">Assignment Task</Typography>
                <img src="https://hexocean.com/static/img/hexagons-section-bg.svg" alt="" width="132" height="26"/>
            </Box>
        </Container>


    )
}

export default Header
