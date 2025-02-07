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
  const { token } = useContext(AuthContext)
  console.log("token from user data context", token);

  const fetchUserData = async () => {
    try {
      const response = await userData.getUserProfile(token)
      if (response.success) {
        setUser(response.data);
      }
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  const fetchUserSteps = async () => {
    try {

      const response = await userData.fetchUserSteps()
      if (response.success) {
        setDailySteps(response?.data?.record[0]?.steps == undefined ? 0 : response?.data?.record[0]?.steps);
        setDailyCalories(response?.data?.record[0]?.caloriesBurned == undefined ? 0 : response?.data?.record[0]?.caloriesBurned);
      }
      else {
        Alert.alert("Error", response.message);
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  }
  
  useEffect(() => {
    fetchUserData();
    fetchUserSteps();
  }, [token]);

  setInterval(() => {
    fetchUserSteps();
  }, 60000);

  return (
    <userDataContext.Provider value={{ user, dailySteps, dailyCalories }}>
      {children}
    </userDataContext.Provider>
  );
};
