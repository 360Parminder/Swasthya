import React, { useEffect, useState, createContext, useContext } from "react";
import userData from "../services/userData";
import { Alert } from "react-native";
import { AuthContext } from "./AuthContext";

export const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dailySteps, setDailySteps] = useState(null);
  const [dailyCalories, setDailyCalories] = useState(null);
  const { token, setIsNetworkError, isNetworkError } = useContext(AuthContext)
  // console.log("token from user data context", token);

  const fetchUserData = async () => {

    const response = await userData.getUserProfile(token)
    if (response.success) {
      setUser(response.data);
    }
    else if (response?.error?.status == 'Network/Request Error') {
      setIsNetworkError(true);
    }
  };
  const fetchUserSteps = async () => {
    const response = await userData.fetchUserSteps()
    if (response.success) {
      setDailySteps(response?.data?.record[0]?.steps == undefined ? 0 : response?.data?.record[0]?.steps);
      setDailyCalories(response?.data?.record[0]?.caloriesBurned == undefined ? 0 : response?.data?.record[0]?.caloriesBurned);
    }
    else if (response?.error?.status == 'Network/Request Error') {
      setIsNetworkError(true);
    }
  }

  useEffect(() => {
    fetchUserData();
    fetchUserSteps();
  }, [token, !isNetworkError]);

  // setInterval(() => {
  //   fetchUserSteps();
  // }, 60000);
  const onRetry = async () => {
    await fetchUserData();
    await fetchUserSteps();
  }

  return (
    <userDataContext.Provider value={{ user, dailySteps, dailyCalories, onRetry }}>
      {children}
    </userDataContext.Provider>
  );
};
