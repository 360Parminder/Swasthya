import AsyncStorage from "@react-native-async-storage/async-storage";
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
    register: async (name,mobile,password,weight,height,date,gender,foodPreference) => {
        console.log(name,mobile,password,weight,height,date);
        try {
            const response = await Path.post('/register', {
                username: name,
                mobile: mobile,
                password: password,
                weight: Number(weight),
                height: Number(height),
                dob: date,
                gender:gender,
                food_preference:foodPreference
            });  
            if (response) {
                return response;
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
    logout: async () => {
        const token = AsyncStorage.getItem('userToken');
        try {
            await Path.get('/logout',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    },
    forgetPassword: async (email, newPassword) => {
        try {
            const response = await Path.post('/auth/forgetPassword', {
                email,
                newPassword,
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