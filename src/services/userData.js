import Path from "./Path";

const userData = {
  getUserProfile: async () => {
    try {
      const response = await Path.get('/user/profile');
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
fetchWeekMeal: async (protein,Calories,foodType)=>{
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
fetchOneMeal: async (protein,Calories,foodType)=>{
  try {
    const response = await Path.get(`/meal/getOneMeal?protein=${protein}&Calories=${Calories}&foodType=vegetarian`);
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
}

};

export default userData;