import React from 'react';
import { Divider, Typography } from '@mui/material';



export default function Header({ title, info }) {
    return (
        <><Typography variant="h4" sx={{ mb: 3 }} component="div">
            {title}
        </Typography><Typography sx={{ mb: 4 }} color="text.secondary">
                {info}
            </Typography>
            <Divider variant="middle" sx={{ mb: 2 }} />
        </>
    )
}