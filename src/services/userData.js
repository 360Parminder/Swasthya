import Path from "./Path";

const userData = {
    getUserProfile: async (token) => {
        try {
            const response = await Path.get('/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response) {
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default userData;