import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('daily');
  const [scope, setScope] = useState('global');

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
          style={[styles.button, timeframe === 'daily' && styles.selectedButton]}
          onPress={() => setTimeframe('daily')}
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
      <View style={styles.leaderboardContainer}>
        {renderLeaderboardData()}
      </View>
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
  },
  buttonText: {
    color: '#000',
  },
  leaderboardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Leaderboard;
