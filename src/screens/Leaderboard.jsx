import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Path from '../services/Path';
import LeaderboardList from '../components/LeaderboardList';
import LoadingWave from '../components/LoadingWave';
import LoaderLine from '../components/LoaderLine';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import userData from '../services/userData';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('today');
  const [scope, setScope] = useState('global');
  const [date,setDate]=useState(new Date())
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loader,setLoader]=useState(false);
// console.log("leaderboardData",leaderboardData);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoader(true)
       const response = await userData.fetchleaderboard(timeframe);
       if (response.success) {
        setLeaderboardData(response.data.leaderboard);
        setLoader(false)
      }
    };

    fetchLeaderboard();
}, [timeframe]); 
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, timeframe === 'today' && styles.selectedButton]}
          onPress={() => setTimeframe('today')}
        >
          <Text style={[styles.buttonText,timeframe === 'today' && styles.selectedtext]}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, timeframe === 'weekly' && styles.selectedButton]}
          onPress={() => setTimeframe('weekly')}
        >
          <Text style={[styles.buttonText,timeframe === 'weekly' && styles.selectedtext]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, timeframe === 'monthly' && styles.selectedButton]}
          onPress={() => setTimeframe('monthly')}
        >
          <Text style={[styles.buttonText,timeframe === 'monthly' && styles.selectedtext]}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, scope === 'global' && styles.selectedButton]}
          onPress={() => setScope('global')}
        >
          <Text style={[styles.buttonText,timeframe === 'global' && styles.selectedtext]}>Global</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scope === 'group' && styles.selectedButton]}
          onPress={() => setScope('group')}
        >
          <Text style={[styles.buttonText,timeframe === 'group' && styles.selectedtext]}>My Group</Text>
        </TouchableOpacity>
      </View>
      {
        loader?<LoaderLine/>:(
          <FlatList
          style={{width:'90%'}}
          data={leaderboardData}
          renderItem={({ item,index }) => (<LeaderboardList userRank={index+1} userName={item.username} userStep={item.totalSteps} userCalories={item.totalCalories}/>)}
          />
        )
      }
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: GlobalColor.primaryColor,
    borderRadius:8
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalColor.tertiaryColor,
  },
  selectedButton: {
    backgroundColor: GlobalColor.secondaryColor,
    color:GlobalColor.textColor
  },
  buttonText: {
    color: GlobalColor.textColor,
  },
  selectedtext:{
    color:GlobalColor.textColor
  }

});

export default Leaderboard;
