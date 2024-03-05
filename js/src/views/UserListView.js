import * as React from 'react';
import useUserStore from '../stores/user';
import UserEditView from './UserEditView';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from '../components/Header';
import { ADD_USER, LIST_USERS } from './UserEditView';
import ListUsers from '../components/UserList';



export default function ListUserView() {
    const [editUser, setEditUser] = React.useState(-1);
    const [users, deleteUser, getUsers, version] = useUserStore((state) => [state.users, state.deleteUser, state.getUsers, state.version]);
    React.useEffect(() => {
        getUsers();
    }, [version]);
    return (

        editUser !== LIST_USERS
            ?
            (<UserEditView userid={editUser} onClose={() => setEditUser(LIST_USERS)} />)
            : (<>
                <Header title="Team members" info={`You have ${users.length} team member${users.length != 1 ? "s" : ""}.`} />
                <ListUsers users={users} deleteUser={deleteUser} editUser={setEditUser} />

                <Fab color="primary" aria-label="add"
                    onClick={() => setEditUser(ADD_USER)}>
                    <AddIcon />
                </Fab>
            </>)


    );
}