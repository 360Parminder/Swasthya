import { createContext, useEffect, useState } from "react";
import UserAuth from "../services/UserAuth";
import { Alert } from "react-native";
import EncryptedStorage from 'react-native-encrypted-storage';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState('');
    const [fcm_token, setFcmToken] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isNetworkError, setIsNetworkError] = useState(false);

    
   useEffect(() => {
    const getToken = async () => {
        setIsLoading(true);
      try {
        const savedToken = await EncryptedStorage.getItem('userToken');
        console.log('Token retrieved from Encrypted data :', savedToken);
        if (savedToken) {
            setToken(savedToken);
            setIsAuthenticated(true); 
            setIsLoading(false); 
        } else {
            setIsAuthenticated(false);
            setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching token", error);
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    };
    getToken();
  }, []);

    const login = async (mobile, password,fcm_token) => {
        setIsLoading(true);
        try {
            const {data} = await UserAuth.signIn(mobile, password,fcm_token);
            console.log('data in login', data);
            if (data.success) {
                await EncryptedStorage.setItem('userToken',data.token);
                setToken(data.token);
                setIsLoading(false);
                setIsAuthenticated(true);
                return data.token;
            }
            else {
                console.log('data in else', data);
                Alert.alert("Error", data.message);
                setIsLoading(false);
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log('Error in login catch', error);
            Alert.alert("Error", error.message);
            setIsLoading(false);
            setIsAuthenticated(false);
        }
    };
    const logout = async () => {
        try {
            await UserAuth.logout();
            await EncryptedStorage.removeItem('userToken');
            setToken(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
            setToken(null);
            await EncryptedStorage.removeItem('userToken');
        }
    };

    return (
        <AuthContext.Provider value={{ isLoading, login, token,logout,isAuthenticated,fcm_token,setFcmToken,isNetworkError,setIsNetworkError }}>
            {children}
        </AuthContext.Provider>
    )
}