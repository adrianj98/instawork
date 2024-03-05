import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




export default function BottomButtons({ formData, onClose, addUser, updateUser, deleteUser}) {
    return (
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

        </Stack>)
}