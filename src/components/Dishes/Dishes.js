import {Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";


const Dishes = () => {
    const [type, setType] = useState('')

const handleChange = (event) => {
    setType(event.target.value)
}

const clickHandler = event => {
        console.log('clicked a button')
}

const formSubmissionHandler = event => {
        console.log('form submitted')
}

    return (
        <>
        <Container>
            <FormControl onSubmit={formSubmissionHandler}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <InputLabel id="type-label">Dish type</InputLabel>
                    <Select
                labelId="type-label"
                id="type"
                value={type}
                label="Dish type"
                onChange={handleChange}
            >
                        <MenuItem value={'pizza'}>Pizza</MenuItem>
                        <MenuItem value={'soup'}>Soup</MenuItem>
                        <MenuItem value={'sandwich'}>Sandwich</MenuItem>
                    </Select>
                    <TextField
                        sx={{marginTop: '1rem'}}
                        required={true}
                        id="outlined-required"
                        label="Name"
                        defaultValue="Dish name"
                    />
                    <TextField
                        sx={{marginTop: '1rem'}}
                        required={true}
                        id="outlined-required"
                        label="Preparation time"
                        defaultValue="00:00:00"
                        type="datetime"
                    />
                    <Box sx={{paddingTop: '1.5rem'}}>
                    <Button variant="contained" type="submit" onClick={clickHandler}>Submit</Button>
                    </Box>
            </Box>
            </FormControl>
        </Container>
    <Container >
        <Box>
            {type === 'pizza' && <p>Render pizza component</p>}
            {type === 'soup' && <p>Render soup component</p>}
            {type === 'sandwich' && <p>Render sandwich component</p>}
        </Box>
    </Container>
        </>
    )
}

export default Dishes;

