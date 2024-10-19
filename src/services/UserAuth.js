import Path from "./Path";

const UserAuth = {
    signIn: async (mobile, password,fcm_token) => {
        try {
            const response = await Path.post('/login', {
                mobile,
                password,
                fcm_token
            });
            if (response) {
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    },
    signUpWithEmailAndPassword: async (email, password) => {
        try {
            const response = await Path.post('/auth/register', {
                email,
                password,
            });
            if (response) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    },
    sendOtp: async (mobile) => {
        try {
            const response = await Path.post('/auth/sendOtp', {
                mobile,
            });
            if (response) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    },
    verifyOtp: async (mobile, otp) => {
        try {
            const response = await Path.post('/auth/verifyOtp', {
                mobile,
                otp,
            });
            if (response) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default UserAuth;