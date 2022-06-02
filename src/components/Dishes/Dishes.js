import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import "./Dishes.css"

let defaultData = {
    name: "",
    type: "",
    no_of_slices: 1,
    preparation_time: "",
    diameter: 10.1,
    spiciness_scale: 1,
    slices_of_bread: 1,
}

const Dishes = () => {
    const [formData, setFormData] = useState(defaultData);
    const [order, setOrder] = useState({});


const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData,
        [name]: value
    })
}

const createBody = () => {
    if (formData.type === 'pizza') {
        return {
            name: formData.name,
            preparation_time: formData.preparation_time,
            type: formData.type,
            no_of_slices: parseInt(formData.no_of_slices),
            diameter: parseFloat(formData.diameter),
        }

    }
    if (formData.type === 'soup') {
        return {
            name: formData.name,
            preparation_time: formData.preparation_time,
            type: formData.type,
            spiciness_scale: parseInt(formData.spiciness_scale),
        }

    }
    if (formData.type === 'sandwich') {
        return {
            name: formData.name,
            preparation_time: formData.preparation_time,
            type: formData.type,
            slices_of_bread: parseInt(formData.slices_of_bread),
        }
    }
}

const formSubmissionHandler = event => {
    event.preventDefault();
    const body = createBody();

    axios
        .post('https://frosty-wood-6558.getsandbox.com:443/dishes ', body, {})
        .then((response) => {
            setOrder(response.data)
            console.log(response.data)
            console.log(order)
        })
        .catch((error) => {
            console.log(error)
            alert(error.message)
        })
}

    return (
        <form onSubmit={formSubmissionHandler}>
        <Grid container justifyContent='center' direction='row' spacing='15' marginTop='1rem'>
            <Grid item>
                <TextField
                    required={true}
                    id="dish-name"
                    label="Dish name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    required={true}
                    id="preparation_time"
                    label="Preparation time"
                    name="preparation_time"
                    type="text"
                    placeholder="__:__:__"
                    value={formData.preparation_time}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
            <FormControl>
                    <InputLabel id="type-label" sx={{marginTop: '0'}}>Dish type</InputLabel>
                    <Select
                labelId="type-label"
                id="type"
                name="type"
                required={true}
                sx={{width: '14.4rem', marginTop: '0'}}
                value={formData.type}
                label="Dish type"
                onChange={handleInputChange}
            >
                        <MenuItem key="pizza" value={'pizza'}>Pizza</MenuItem>
                        <MenuItem key="soup" value={'soup'}>Soup</MenuItem>
                        <MenuItem key="sandwich" value={'sandwich'}>Sandwich</MenuItem>
                    </Select>
            </FormControl>

            {formData.type === 'pizza' &&
                <>
                        <Grid item >
                            <label htmlFor="diameter">Pizza size:</label>
                            <input name="diameter" id="diameter" type="number" step="0.01" placeholder="Diameter" onChange={handleInputChange} min="10" max="90" required/>
                        </Grid>
                        <Grid item>
                            <label htmlFor="no_of_slices">Quantity:</label>
                            <input name="no_of_slices" id="no_of_slices" type="number" step="1" placeholder="Slices quantity" onChange={handleInputChange} min="1" max="10" required/>
                        </Grid>
                </>
                }
                {formData.type === 'soup' &&
                        <Grid item>
                            <label htmlFor="spiciness_scale">Spiciness scale:</label>
                            <input name="spiciness_scale" id="spiciness_scale" type="number" step="1"  min="1" max="10" onChange={handleInputChange} required/>
                        </Grid>
                }
                {formData.type === 'sandwich' &&
                    <Grid item>
                        <label htmlFor="slices_of_bread">Slices of bread:</label>
                        <input name="slices_of_bread" id="slices_of_bread" type="number" step="1"  min="1" max="10" onChange={handleInputChange}  required/>
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

