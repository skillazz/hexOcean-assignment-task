import {Container} from "@mui/material";
import Dishes from "../Dishes/Dishes";



const MainSection = () => {

    return (
        <Container maxWidth='100vw' sx={{height: '15rem'}}>
                <Dishes/>
        </Container>

    )
}

export default MainSection;