import { create } from 'zustand'

let useUserStore = create((set) => ({
    users: [],
    version: 0,
    getUsers: async () => {
        try {
            const response = await fetch("./users/api/Users/");
            const data = await response.json();
            set({ users: data });
        } catch (error) {
            console.log(error);
        }
    },
    addUser: async (user) => {
        try {
            const response = await fetch("./users/api/Users/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log('Form submitted successfully!');
            } else {
                console.error('Form submission failed!');
            }
            set({ version: Date.now() });
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (user) => {
        try {
            const response = await fetch(`./users/api/Users/${user.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log('User updated successfully!');
            } else {
                console.error('User updation failed!');
            }
            set({ version: Date.now() });
        } catch (error) {
            console.log(error);
        }
    },
    deleteUser: async (id) => {
        try {
            const response = await fetch(`./users/api/Users/${id}/`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('User deleted successfully!');
            } else {
                console.error('User deletion failed!');
            }
            set({ version: Date.now() });
        } catch (error) {
            console.log(error);
        }

    },
}))

export default useUserStore;