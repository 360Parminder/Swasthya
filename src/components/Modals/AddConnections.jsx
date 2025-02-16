import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,        
  Alert,
} from 'react-native';
import userData from '../../services/userData';
import GlobalColor from '../../Styles/GlobalColor';

const AddConnections = ({ isVisible, onClose }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userData.fetchAllUsers();
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const sendConnectionRequest = async (userId) => {
    try {
      const response = await userData.sendConnectionRequest(userId);
      if (response.success) {
        Alert.alert('Connection request sent successfully');
        fetchUsers();
      } else {
        Alert.alert('Error sending connection request:', response.message);
      }
    } catch (error) {
        Alert.alert('Error sending connection request:', error.message);
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const renderUserCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.userInfoContainer}>
        <Image
          source={
            item.picture
              ? { uri: item.picture }
              : require('../../assets/images/Profile.png')
          }
          style={styles.profileImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.userInfo}>
            Age: {calculateAge(item.dob)} | Gender: {item.gender}
          </Text>
          <Text style={styles.userId}>ID: {item._id}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => sendConnectionRequest(item._id)}>
        <Text style={styles.addButtonText}>Add Connection</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Connections</Text>
          
          <FlatList
            data={users}
            renderItem={renderUserCard}
            keyExtractor={(item) => item._id}
            contentContainerStyle={styles.listContainer}
          />

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: GlobalColor.primaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '90%',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: GlobalColor.textColor,
  },
  listContainer: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: GlobalColor.secondaryColor,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: GlobalColor.textColor,
  },
  userInfo: {
    fontSize: 14,
    color: GlobalColor.textColor,
    marginBottom: 2,
  },
  userId: {
    fontSize: 12,
    color: GlobalColor.textColor,
  },
  addButton: {
    backgroundColor: GlobalColor.buttonBackgroundColor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: GlobalColor.buttonTextColor,
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    backgroundColor: GlobalColor.errorColor,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  closeButtonText: {
    color: GlobalColor.buttonTextColor,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddConnections;
