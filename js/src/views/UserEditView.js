import * as React from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';

import useUserStore from '../stores/user';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Header from '../components/Header';

export const ADD_USER = -2;
export const LIST_USERS = -1;


export default function UserEditView({ userid, onClose }) {
    const { updateUser, addUser, users, deleteUser } = useUserStore();
    const [formData, setFormData] = React.useState(
        null
    );
    React.useEffect(() => {
        setFormData(users.find(_user => _user.id === userid) || {});
    }, []);
    if (!formData) {
        return;
    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            {formData.id
                ?
                <Header title="Edit team member" info="Edit contact info, location and role." />
                :
                <Header title="Add a team member" info="Set email, location and role." />
            }
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
                    defaultValue={formData.role}
                >

                    <FormControlLabel labelPlacement="start" value={2} control={<Radio />} label="Regular - Can't delete memebers." />
                    <Divider variant="middle" />
                    <FormControlLabel labelPlacement="start" value={1} control={<Radio />} label="Admin - Can delete members" />
                    <Divider variant="middle" />
                </RadioGroup>
                <Stack spacing={2} direction="row">
                    <Button variant="text"
                        onClick={() => {
                            onClose();
                        }}
                    >Back</Button>
                    {formData.id &&
                        <Button variant="contained" color="error"

                            onClick={() => {

                                deleteUser(formData.id);

                                onClose();
                            }}
                        >Delete</Button>
                    }
                    <Button variant="contained" color="primary"
                        onClick={() => {
                            if (formData.id === undefined) {
                                addUser(formData);
                            } else {
                                updateUser(formData);
                            }
                            onClose();
                        }}
                    >Save</Button>

                </Stack>


            </FormControl>
        </>)
}
