import * as React from 'react';

import useUserStore from '../stores/user';
import UserEdit from '../components/UserEdit';
import BottomButtons from '../components/BottomButtons';
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
            <UserEdit formData={formData} handleChange={handleChange} />
            <BottomButtons
                formData={formData}
                onClose={onClose}
                addUser={addUser}
                updateUser={updateUser}
                deleteUser={deleteUser} />
        </>)
}
