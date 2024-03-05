import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import useUserStore from '../stores/user';
import UserEditView from './UserEditView';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from '../components/Header';
import { ADD_USER, LIST_USERS } from './UserEditView';



export default function ListUsers() {
    const [editUser, setEditUser] = React.useState(-1);
    const [users, deleteUser, getUsers, version] = useUserStore((state) => [state.users, state.deleteUser, state.getUsers, state.version]);
    React.useEffect(() => {
        getUsers();
    }, [version]);
    return (

        editUser !== LIST_USERS
            ?
            (<UserEditView userid={editUser} onClose={() => setEditUser(LIST_USERS)} />)
            : (

                <>
                    <Header title="Team members" info={`You have ${users.length} team member${users.length != 1 ? "s" : ""}.`} />

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }
                    } >
                        {
                            users.map((user, index) => {
                                return <ListItem

                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user.id)} >
                                            <DeleteIcon />
                                        </IconButton>
                                    }>
                                    <ListItemAvatar onClick={() => setEditUser(user.id)}>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={`${user.first_name} ${user.last_name}`}
                                        onClick={() => setEditUser(user.id)}
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
                    <Fab color="primary" aria-label="add"
                        onClick={() => setEditUser(ADD_USER)}>
                        <AddIcon />


                    </Fab>
                </>)


    );
}