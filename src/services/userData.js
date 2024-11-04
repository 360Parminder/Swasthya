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
            if (response) {
                return response;
            }
        } catch (error) {
            console.log(error);
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
  
      fetchUserSteps:  async (token) => {
        try {
          const response = await Path.get('/step/view/daily',
            {
              headers: {
                'authorization': `Bearer ${token}`
              }
            }

          );
          return response;
        
        } catch (error) {
          console.log('userSteps', error);
        }
      },
};

export default userData;