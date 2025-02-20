import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';

const ActivityCard = ({ item }) => {
  return (
    <View style={styles.activityCard}>
      <View style={styles.timelineContainer}>
        <Text style={styles.activityTime}>{item.time}</Text>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>
      <View style={styles.activityContent}>
        <View style={styles.activityHeader}>
          <Text style={styles.activityName}>{item.activity}</Text>
          {item.completed ? (
            <Icon name="checkmark-circle" size={24} color={GlobalColor.successColor} />
          ) : (
            <Icon name="time" size={24} color={GlobalColor.warningColor} />
          )}
        </View>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color={GlobalColor.textColor} />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: GlobalColor.primaryColor,
  },
  timelineContainer: {
    alignItems: 'center',
    width: 60,
  },
  activityTime: {
    fontSize: 12,
    color: GlobalColor.textColor,
    marginBottom: 5,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: GlobalColor.mainColor,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: GlobalColor.borderColor,
    marginTop: 4,
  },
  activityContent: {
    flex: 1,
    backgroundColor: GlobalColor.secondaryColor,
    borderRadius: 12,
    padding: 15,
    marginLeft: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: GlobalColor.textColor,
    marginLeft: 5,
  },
});

export default ActivityCard;
  