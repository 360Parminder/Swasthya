import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../Styles/GlobalStyles'
import GlobalColor from '../../Styles/GlobalColor'
import Icon from 'react-native-vector-icons/Ionicons'
import ActivityCard from '../../components/Cards/ActivityCard'

const Activity = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Generate dates for the current month
  const getDates = () => {
    const dates = []
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i)
      dates.push(date)
    }
    return dates
  }

  // Sample activity data
  const activities = [
    {
      id: '1',
      time: '08:30 AM',
      activity: 'Morning Run',
      location: 'Central Park',
      completed: true,
    },
    {
      id: '2',
      time: '02:00 PM',
      activity: 'Gym Workout',
      location: 'Fitness Hub',
      completed: false,
    },
    {
      id: '3',
      time: '05:30 PM',
      activity: 'Evening Walk',
      location: 'Riverside',
      completed: true,
    },
  ]

  const renderDateItem = ({ item }) => {
    const isSelected = selectedDate.toDateString() === item.toDateString()
    const dayName = item.toLocaleDateString('en-US', { weekday: 'short' })
    const date = item.getDate()

    return (
      <View
        style={[
          styles.dateCard,
          isSelected && styles.selectedDateCard,
        ]}
        onTouchEnd={() => setSelectedDate(item)}
      >
        <Text style={[styles.dayName, isSelected && styles.selectedText]}>
          {dayName}
        </Text>
        <Text style={[styles.date, isSelected && styles.selectedText]}>
          {date}
        </Text>
      </View>
    )
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.monthText}>
          {selectedDate.toLocaleDateString('en-US', { month: 'long' })}
        </Text>
      </View>

      <View style={styles.calendarContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={getDates()}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.toISOString()}
          contentContainerStyle={styles.dateList}
        />
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <FlatList
          data={activities}
          renderItem={({ item }) => <ActivityCard item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.activitiesList}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: GlobalColor.borderColor,
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  calendarContainer: {
    marginVertical: 10,
  },
  dateList: {
    paddingHorizontal: 20,
  },
  dateCard: {
    width: 60,
    height: 80,
    backgroundColor: GlobalColor.secondaryColor,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  selectedDateCard: {
    backgroundColor: GlobalColor.mainColor,
  },
  dayName: {
    fontSize: 14,
    color: GlobalColor.textColor,
    marginBottom: 5,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  selectedText: {
    color: GlobalColor.buttonTextColor,
  },
  activitiesContainer: {
    flex: 1,
    backgroundColor: GlobalColor.primaryColor,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 15,
  },
  activitiesList: {
    paddingBottom: 20,
  },
})

export default Activity