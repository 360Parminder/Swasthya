import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GlobalColor from '../Styles/GlobalColor';


const DateCard = ({ item }) => {
  // console.log(item);
  
  const today = new Date();
  const currentDate = today.getDate().toString().padStart(2, '0');
  const currentMonth = today.toLocaleString('default', { month: 'short' }).toLowerCase();

 const isCurrentDate = item.date === currentDate && item.month === currentMonth
  return (
    <View style={[styles.card, isCurrentDate && styles.currentDateCard]}>
      <Text style={[styles.date,isCurrentDate && {color:GlobalColor.buttonBackgroundColor}]}>
        {item.day}
      </Text>
     <View style={{backgroundColor:'#fff',padding:5,borderRadius:25}}>
     <Text style={[styles.month,isCurrentDate && styles.currentDateCardtext,{}]}>
        {item.date}
      </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 80,
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
    color:GlobalColor.buttonBackgroundColor 
  },
  date: {
    textTransform: 'capitalize',
    fontSize: 23,
    fontWeight: '600',
    color: '#000'
  },
  currentDateCard: {
    backgroundColor: GlobalColor.fadedColor, // Light blue for current date
  },
  month: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#000'
  }
})

export default DateCard