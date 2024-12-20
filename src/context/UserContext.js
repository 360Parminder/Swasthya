import React, { useEffect, useState, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userData from "../services/userData";
import { Alert } from "react-native";
import { AuthContext } from "./AuthContext";

export const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dailySteps, setDailySteps] = useState(null);
  const [dailyCalories, setDailyCalories] = useState(null);
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
  const fetchUserSteps = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {      
        const response = await userData.fetchUserSteps(token)
        if (response.status === 200) {
          setDailySteps(response?.data?.record[0]?.steps==undefined?0:response?.data?.record[0]?.steps);
          setDailyCalories(response?.data?.record[0]?.calories==undefined?0:response?.data?.record[0]?.calories);
        }
        else{
          Alert.alert("Error", response.message);
        }
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }
  useEffect(() => {
    fetchUserData();
    fetchUserSteps();
  }, [token]);

  return (
    <userDataContext.Provider value={{ user,dailySteps,dailyCalories }}>
      {children}
    </userDataContext.Provider>
  );
};
