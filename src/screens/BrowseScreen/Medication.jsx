import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../Styles/GlobalStyles';
import GlobalColor from '../../Styles/GlobalColor';
import AddMedication from '../../components/Modals/AddMedication';
import userData from '../../services/userData';
import MedicationCard from '../../components/Cards/MedicationCard';

const Medication = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMedications = async () => {
    try {
      const response = await userData.fetchMedication();
      if (response.success) {
        setMedications(response.data.allMedication[0].record || []);
      }
    } catch (error) {
      console.error('Error fetching medications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  const handleMedicationAdded = () => {
    fetchMedications();
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.title}>Medication</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logContainer}>
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          <View style={styles.logContent}>
            {loading ? (
              <Text style={styles.messageText}>Loading...</Text>
            ) : medications.length > 0 ? (
              medications.map((medication, index) => (
                <MedicationCard key={index} medication={medication} />
              ))
            ) : (
              <Text style={styles.messageText}>No Medication Scheduled</Text>
            )}
          </View>
        </View>

        <View style={styles.asNeededContainer}>
          <Text style={styles.sectionTitle}>As-Needed Medications</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name="add" color={GlobalColor.mainColor} size={26} />
          </TouchableOpacity>
        </View>

        <View style={styles.manageMedicationsContainer}>
          <View style={styles.manageMedicationsHeader}>
            <Text style={styles.sectionTitle}>Manage Your Medications</Text>
            <TouchableOpacity>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.addMedicationContainer}>
            <Text style={styles.addMedicationTitle}>Add a Medication</Text>
            <Text style={styles.addMedicationDescription}>
              Simplify your medication tracking by entering details quickly and setting up reminders.
              Ensure you never miss a dose with timely notifications.
            </Text>
            <TouchableOpacity 
              style={styles.addMedicationButton} 
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.addMedicationButtonText}>Add Medication</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <AddMedication
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onMedicationAdded={handleMedicationAdded}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 10,
  },
  logContainer: {
    marginTop: 10,
    padding: 20,
  },
  logContent: {
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  messageText: {
    fontSize: 16,
    color: GlobalColor.textColor,
    textAlign: 'center',
    padding: 10,
  },
  asNeededContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  manageMedicationsContainer: {
    padding: 20,
  },
  manageMedicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  editText: {
    fontSize: 16,
    color: GlobalColor.mainColor,
    fontWeight: '600',
  },
  addMedicationContainer: {
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 20,
  },
  addMedicationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 10,
  },
  addMedicationDescription: {
    fontSize: 14,
    color: GlobalColor.textColor,
    marginBottom: 20,
    lineHeight: 20,
  },
  addMedicationButton: {
    backgroundColor: GlobalColor.mainColor,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  addMedicationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalColor.buttonTextColor,
  },
});

export default Medication;