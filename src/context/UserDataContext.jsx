import React, { useEffect, useState, createContext } from "react";
import Path from "../services/Path";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const response = await Path.get('/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (response) {
            setUserData(response.data.data);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <userDataContext.Provider value={{ userData }}>
      {children}
    </userDataContext.Provider>
  );
};
