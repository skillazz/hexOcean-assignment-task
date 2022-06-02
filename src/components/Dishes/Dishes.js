import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Stack from '@mui/material/Stack';
import {useState} from "react";
import "./Dishes.css"

const defaultData = {
    name: "aaa",
    type: "",
    no_of_slices: 1,
    spiciness_scale: 1,
    slices_of_bread: 1

}

const Dishes = () => {
    const [type, setType] = useState('')
    const [preparation, setPreparation] = useState('');
    const [formData, setFormData] = useState(defaultData);



const handleTypeChange = (event) => {
    setType(event.target.value)
}

const handleInputChange = (event) => {
    const {name, value} = event.target.value;
    setFormData({
        ...formData,
        [name]: value
    })
}

const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(formData)
}

    return (
        <form onSubmit={formSubmissionHandler}>
        <Grid container justifyContent='center' direction='row' spacing='15' marginTop='1rem'>
            <Grid item>
                <TextField
                    required={true}
                    id="outlined-required"
                    label="Dish name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            views={['hours', 'minutes', 'seconds']}
                            inputFormat="HH:mm:ss"
                            mask="__:__:__"
                            label="Preparation time"
                            required
                            value={preparation}
                            onChange={(newPreparation) => {
                                setPreparation(newPreparation);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            </Grid>
            <Grid item>
            <FormControl>
                    <InputLabel id="type-label" sx={{marginTop: '0'}}>Dish type</InputLabel>
                    <Select
                labelId="type-label"
                id="type"
                sx={{width: '14.4rem', marginTop: '0'}}
                value={type}
                label="Dish type"
                onChange={handleTypeChange}
            >
                        <MenuItem value={'pizza'}>Pizza</MenuItem>
                        <MenuItem value={'soup'}>Soup</MenuItem>
                        <MenuItem value={'sandwich'}>Sandwich</MenuItem>
                    </Select>
            </FormControl>

            {type === 'pizza' &&
                <>
                        <Grid item >
                            <label htmlFor="diameter">Pizza size:</label>
                            <input id="diameter" type="number" step="0.01" placeholder="Diameter" onChange={handleInputChange} min="10" max="90" required/>
                        </Grid>
                        <Grid item>
                            <label htmlFor="quantity">Quantity:</label>
                            <input id="quantity" type="number" step="1" placeholder="Slices quantity" onChange={handleInputChange} min="1" max="10" required/>
                        </Grid>
                </>
                }
                {type === 'soup' &&
                        <Grid item>
                            <label htmlFor="spiciness">Spiciness scale:</label>
                            <input id="spiciness" type="number" step="1"  min="1" max="10" onChange={handleInputChange} required/>
                        </Grid>
                }
                {type === 'sandwich' &&
                    <Grid item>
                        <label htmlFor="breadslices">Slices of bread:</label>
                        <input id="breadslices" type="number" step="1"  min="1" max="10" onChange={handleInputChange}  required/>
                    </Grid>
                }
            </Grid>
        </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="contained" type="submit" sx={{marginTop: '3rem', width: '25rem'}}>Submit</Button>
            </Box>
        </form>
    )
}

export default Dishes;

