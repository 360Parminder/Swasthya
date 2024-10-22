import React, { useEffect, useState, createContext, useContext } from "react";
import Path from "../services/Path";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userData from "../services/userData";
import { Alert } from "react-native";
import { AuthContext } from "./AuthContext";

export const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {token} = useContext(AuthContext)
  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        const response = await userData.getUserProfile(token)
        if (response.status === 200) {
          setUser(response.data.data);
        }
        else{
          Alert.alert("Error", "User not found");
        }
      }
    } catch (error) {
      Alert.alert("Error", "User not found");
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [token]);

  return (
    <userDataContext.Provider value={{ user }}>
      {children}
    </userDataContext.Provider>
  );
};
