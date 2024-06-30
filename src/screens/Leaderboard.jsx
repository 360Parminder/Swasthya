import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Path from '../services/Path';
import LeaderboardList from '../components/LeaderboardList';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('today');
  const [scope, setScope] = useState('global');
  const [date,setDate]=useState(new Date())
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (token) {
                const response = await Path.post(
                    "/leaderboard/overall",
                    {
                      period: timeframe,
                    },
                    {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response) {
                    console.log("response", response.data.data);
                    setLeaderboardData(response?.data?.data);
                }
            }
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
            
        }
    };

    fetchLeaderboard();
}, [timeframe]); 
  const renderLeaderboardData = () => {
    // Logic to fetch and display leaderboard data based on timeframe and scope
    return (
      <View>
        <Text style={{
            color:'#000'
        }}>{`Displaying ${scope} leaderboard for ${timeframe}`}</Text>
        {/* Replace with actual leaderboard data */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, timeframe === 'today' && styles.selectedButton]}
          onPress={() => setTimeframe('today')}
        >
          <Text style={styles.buttonText}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, timeframe === 'weekly' && styles.selectedButton]}
          onPress={() => setTimeframe('weekly')}
        >
          <Text style={styles.buttonText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, timeframe === 'monthly' && styles.selectedButton]}
          onPress={() => setTimeframe('monthly')}
        >
          <Text style={styles.buttonText}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, scope === 'global' && styles.selectedButton]}
          onPress={() => setScope('global')}
        >
          <Text style={styles.buttonText}>Global</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, scope === 'group' && styles.selectedButton]}
          onPress={() => setScope('group')}
        >
          <Text style={styles.buttonText}>My Group</Text>
        </TouchableOpacity>
      </View>
      <FlatList
      data={leaderboardData}
      renderItem={({ item,index }) => (<LeaderboardList userRank={index+1} userName={item.username} userStep={item.totalSteps}/>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor:'#E6E2EE',
    borderRadius:8
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    width:100,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
  },
  selectedButton: {
    backgroundColor: '#5D4FB3',
    color:'#fff'
  },
  buttonText: {
    color: '#fff',
  },
});

export default Leaderboard;
