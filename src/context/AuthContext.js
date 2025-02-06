import { createContext, useEffect, useState } from "react";
import UserAuth from "../services/UserAuth";
import { Alert } from "react-native";
import EncryptedStorage from 'react-native-encrypted-storage';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState();
    const [fcm_token, setFcmToken] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

   useEffect(() => {
    const getToken = async () => {
        setIsLoading(true);
      try {
        const savedToken = await EncryptedStorage.getItem('userToken');
        console.log('Token retrieved from Encrypted data :', savedToken);
        setToken(savedToken);
        setIsAuthenticated(!!savedToken); 
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching token", error);
        setIsLoading(false);
      }
    };
    getToken();
  }, []);

    const login = async (mobile, password) => {
        setIsLoading(true);
        try {
            const response = await UserAuth.signIn(mobile, password,fcm_token);
            if (response?.status === 200) {
                await EncryptedStorage.setItem('userToken', response.data.token);
                setToken(response.data.token);
                setIsLoading(false);
                setIsAuthenticated(true);
                return response.data;
            }
            else {
                Alert.alert("Error", "Invalid Credentials");
                setIsLoading(false);
            }
        } catch (error) {
            Alert.alert("Error", "Invalid Credentials");
            setIsLoading(false);
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
        <AuthContext.Provider value={{ isLoading, login, token,logout,isAuthenticated,fcm_token }}>
            {children}
        </AuthContext.Provider>
    )
}