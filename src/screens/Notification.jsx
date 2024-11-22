import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import NotificationCard from '../components/Cards/NotificationCard';

const notifications = Array(12).fill({
  title: 'This is your time for exercise',
  message: 'This is your time for gym at monster gym, let’s prepare yourself and don’t be late',
});

const Notification = () => {
  return (
    <View style={[GlobalStyles.container, styles.container]}>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()} // Replace with a unique ID if available
        renderItem={({ item }) => (
          <NotificationCard title={item.title} message={item.message} />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    alignItems: 'center', // Center all content horizontally
    flex: 1, // Ensure the container takes full screen height
  },
  contentContainer: {
    alignItems: 'center', // Center items in the FlatList
    paddingVertical: 10,
  },
});

export default Notification;
