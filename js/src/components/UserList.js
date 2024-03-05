import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


export default function ListUsers({ users, deleteUser, editUser }) {
    return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
    } >
        {
            users.map((user, index) => {
                return <ListItem

                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user.id)} >
                            <DeleteIcon />
                        </IconButton>
                    }>
                    <ListItemAvatar onClick={() => editUser(user.id)}>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${user.first_name} ${user.last_name}`}
                        onClick={() => editUser(user.id)}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ width: '100%' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {user.email}
                                </Typography>
                                {user.phone}
                            </React.Fragment>
                        } />

                    <Divider variant="middle" />

                </ListItem>

            })
        }


    </List >
}