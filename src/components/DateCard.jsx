import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const DateCard = ({ item }) => {
  const today = new Date();
  const currentDate = today.getDate().toString().padStart(2, '0');
  const currentMonth = today.toLocaleString('default', { month: 'short' }).toLowerCase();

 const isCurrentDate = item.date === currentDate && item.month === currentMonth
  return (
    <View style={[styles.card, isCurrentDate && styles.currentDateCard]}>
      <Text style={[styles.date,isCurrentDate && styles.currentDateCardtext]}>
        {item.date}
      </Text>
      <Text style={[styles.month,isCurrentDate && styles.currentDateCardtext]}>
        {item.month}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowOpacity: 0.1,
    elevation: 3,
    shadowRadius: 10
  },
  currentDateCard: {
    backgroundColor: '#ADD8E6',
   // Light blue for current date
  },
  currentDateCardtext:{
    color:'#fff' 
  },
  date: {
    textTransform: 'capitalize',
    fontSize: 23,
    fontWeight: '600',
    color: '#000'
  },
  currentDateCard: {
    backgroundColor: '#5d4fb3', // Light blue for current date
  },
  month: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#000'
  }
})

export default DateCard