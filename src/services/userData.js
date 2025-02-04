import AsyncStorage from "@react-native-async-storage/async-storage";
import Path from "./Path";

const userData = {
  getUserProfile: async (token) => {
    try {
      const response = await Path.get('/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        return{
          success: true,
          data: response.data.user
        }
      }
      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
     return { success: false, message: "Please your Internet Connection" }
    }
  },
  fetchUserRank: async (date) => {
    try {
      const response = await Path.post('/leaderboard/overall/ranking',
        { date: date },
        { headers: { 'authorization': `Bearer ${token}` } }
      );
      return response;

    } catch (error) {
      console.log('userRank', error);
    }
  },

  fetchUserSteps: async (token) => {
    try {
      const response = await Path.get('/step/view/daily',
        {
          headers: {
            'authorization': `Bearer ${token}`
          }
        }

      );
      if (response.status === 200) {
        return response;

      }
      else {
        return { success: false, message: "Something went wrong" }
      }

    } catch (error) {
      console.log('userSteps', error);
    }
  },
  fetchUserWater: async (token) => {
    try {
      const response = await Path.get('/water',
        {
          headers: {
              Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          return response;
        }
        else if (response.status === 401) {
          return { success: false, message: "Unauthorized" }
        }
        else {
          return { success: false, message: "Something went wrong" }
        }
  }
  catch (error) {
    console.log('userWater', error);
  }
},

};

export default userData;