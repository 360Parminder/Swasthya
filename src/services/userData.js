import Path from "./Path";
import axios from "axios";

const userData = {
  getUserProfile: async () => {
    try {
      const response = await Path.get('/user/profile');
      if (response.status === 200) {
        return {
          success: true,
          data: response.data.user
        }
      }

      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
      return { success: false, message: "Please your Internet Connection", error: error }
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

  fetchUserSteps: async () => {
    try {
      const response = await Path.get('/step/view/daily');
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        };
      }
      else {
        return {
          success: false,
          message: "Something went wrong",
          data: null
        }
      }

    } catch (error) {
      return { success: false, message: "Please check your Internet Connection", error: error }
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
  fetchUserSleep: async (token) => {
    try {
      const response = await Path.get('/sleep/sleep/view/all');
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
      console.log('userSleep', error);
    }
  },
  fetchWeekMeal: async (protein, Calories, foodType) => {
    try {
      const response = await Path.get(`/meal/week/${protein}/${Calories}/${foodType}`);
      if (response.status === 200) {
        return response;
      }
      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
      console.log('weekMeal', error);
    }
  },
  fetchOneMeal: async (protein, Calories, foodType) => {
    try {
      const response = await Path.get(`/meal/getOneMeal?protein=${protein}&Calories=${Calories}&foodType=${foodType}`);
      if (response.status === 200) {
        return {
          success: true,
          data: response.data.data
        }
      }
      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
      console.log('oneMeal', error);
    }
  },
  fetchleaderboard: async (period) => {
    try {
      const response = await Path.post('/leaderboard/overall',
        { period: period }
      );
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
      return { success: false, message: "Please check your Internet Connection", error: error }
    }
  },
  fetchAllUsers: async () => {
    try {
      const response = await Path.get('/request/alluser');
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: "Something went wrong" }
      }
    } catch (error) {
      return { success: false, message: "Please check your Internet Connection", error: error }
    }
  },
  fetchAllConnections: async () => {
    try {
      const response = await Path.get('/request/allconnections');
      return response;
    } catch (error) {
      console.log('fetchAllConnections', error);
    }
  },
  sendConnectionRequest: async (userId) => {
    try {
      const response = await Path.post('/request/send_request', {
        receiverId: userId
      });
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: error.message, error: error }
    }
  },
  fetchMyConnections: async () => {
    try {
      const response = await Path.get('/relatives/my_connections');
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: error.message, error: error }
    }
  },
  fetchConnectionRequests: async () => {
    try {
      const response = await Path.get('/request/my_requests');
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: error.message, error: error }
    }
  },
  acceptConnectionRequest: async (userId) => {
    try {
      const response = await Path.post('/request/accept_request', {
        senderId: userId
      });
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: error.message, error: error }
    }
  },
  rejectConnectionRequest: async (userId) => {
    try {
      const response = await Path.post('/request/reject_request', {
        senderId: userId
      });
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
      }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: error.message, error: error }
    }
  },
  fetchMedication: async () => {
    try {
      const response = await Path.get('/medication/view/all');
      console.log(response.data);
      
      if (response.status === 200) {
        return {
          success: true,
          data: response.data
        }
        }
      else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      return { success: false, message: "Please check your Internet Connection", error: error }
    }
  },
  addMedication: async (medicationData) => {
    console.log(medicationData);
    
    try {
        const response = await Path.post('/medication/create', {
            medicine_name: medicationData.medicine_name,
            forms: medicationData.forms.toLowerCase(),
            strength: medicationData.strength,
            unit: medicationData.unit,
            frequency: {
                type: "As Needed"
                // We can add interval and specificDays if needed later
            },
            times: [
                {
                    dose: medicationData.dose || "1",
                    time: new Date(medicationData.time).toISOString()
                }
            ],
            start_date: medicationData.start_date.toISOString(),
            description: medicationData.description || `${medicationData.medicine_name} medication`,
        });

        if (response.status === 200) {
            return {
                success: true,
                data: response.data
            };
        } else {
            return { success: false, message: response.message };
        }
    } catch (error) {
        console.error('Error adding medication:', error);
        return { success: false, message: error.message, error: error };
    }
  }
};

export default userData;