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
            console.log(response.data);
            
            if (response.status === 200) {
                return {
                    success: true,
                    data: response.data,
                    message: response.data.message,
                }
            }
            else{
                return {
                    success: false,
                    message: response.data.message,
                }
            }
        } catch (error) {
           return {
                success: false,
                message: "Error Occured while Registering User"
           }
        }
    },
    sendOtp: async (mobile) => {
        try {
            const response = await Path.post('/sendOtp', {
                mobile:`+358${mobile}`,
            });
            if (response.status === 200) {
                return {
                    success: true,
                    data: response.data,
                    message: response.data.message,
                };
            }
            else{
                return {
                    success: false,
                    data: response.data,
                    message: response.message,
                };
            }
        } catch (error) {
            return{
                success: false,
                message: "Error Occured while sending OTP"
            }
        }
    },
    verifyOtp: async (mobile, otp) => {
        try {
            const response = await Path.post('/verifyOtp', {
                mobile: `+358${mobile}`,
                otp: Number(otp),
            });
            
            if (response.status === 200) {
                return response.data;
            }
            else{
                return {
                    success: false,
                    message: response.data.message,
                };
            }
        } catch (error) {
            return{
                success: false,
                message: "Error Occured while verifying OTP"
            }
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
    updatePassword: async (oldPassword, newPassword) => {
        try {
            const response = await Path.post('/updatePassword', {
                oldPassword,
                newPassword,
            });
            console.log(response.data);
            
            if (response.status === 200) {
                return response.data;
               
            }
        } catch (error) {
            console.log(error);
        }
    },
};

export default UserAuth;