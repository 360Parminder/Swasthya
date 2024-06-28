import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const DateCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>
        {item.date}
      </Text>
      <Text style={styles.month}>
        {item.month}
      </Text>

    </View>
  )
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
  date: {
    textTransform: 'capitalize',
    fontSize: 23,
    fontWeight: '600',
    color: '#000'
  },
  month: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#000'
  }
})

export default DateCard