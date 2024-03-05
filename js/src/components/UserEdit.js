
import { FormControl } from '@mui/base/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




export default function UserEdit({ formData, handleChange }) {
    return (
        <FormControl>
            <Typography variant="h5" sx={{ mb: 2 }} component="div">
                Info
            </Typography>
            <InputLabel >First Name</InputLabel>

            <TextField
                sx={{ width: 300, m: 1.5 }}
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
            />
            <InputLabel > Last Name</InputLabel>

            <TextField
                sx={{ width: 300, m: 1.5 }}
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
            />
            <InputLabel >Email</InputLabel>

            <TextField
                sx={{ width: 300, m: 1.5 }}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <InputLabel >Phone</InputLabel>
            <TextField
                sx={{ width: 300, m: 1.5 }}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <Typography variant="h5" sx={{ mb: 2 }} component="div">
                Role
            </Typography>

            <RadioGroup
                sx={{ width: 300, m: 1.5 }}

                name="role"
                onChange={handleChange}
                defaultValue={formData.role || 2}
            >

                <FormControlLabel labelPlacement="start" value={2} control={<Radio />} label="Regular - Can't delete memebers." />
                <Divider variant="middle" />
                <FormControlLabel labelPlacement="start" value={1} control={<Radio />} label="Admin - Can delete members" />
                <Divider variant="middle" />
            </RadioGroup>



        </FormControl>
    )
}