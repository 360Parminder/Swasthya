import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { generateLastMonthDates, todayDate } from '../../utils/dateFunction';
import GlobalStyles from '../../Styles/GlobalStyles';
import GlobalColor from '../../Styles/GlobalColor';
const MedicationDetail = ({ name, type, dosage, frequency }) => {
  return (
    <View style={styles.medicationDetail}>
      <View style={styles.medicationImageContainer}>
        <View style={styles.medicationImage}></View>
      </View>
      <View style={styles.medicationInfo}>
        <Text style={styles.medicationName}>{name}</Text>
        <Text style={styles.medicationType}>{type}</Text>
        <Text style={styles.medicationDosage}>{dosage}</Text>
        <Text style={styles.medicationFrequency}><Icon name={'time-outline'} /> {frequency}</Text>
      </View>
    </View>
  );
};

const AddMedicationModal = ({ modalVisible, setModalVisible }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [medicationName, setMedicationName] = useState('');
  const [medicationType, setMedicationType] = useState('');
  const [medicationStrength, setMedicationStrength] = useState('');
  const [medicationFrequency, setMedicationFrequency] = useState('');

  const screens = [
    <View key="screen1" style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/health-report.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Medication Name</Text>
      <TextInput 
        placeholder='Add Medication Name'
        style={styles.modalInput}
        placeholderTextColor={'#666'}
        onChangeText={text => setMedicationName(text)}
      />
      <TouchableOpacity style={styles.modalButton} onPress={() => setCurrentScreen(1)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </TouchableOpacity>
    </View>,
    <View key="screen2" style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <TouchableOpacity style={styles.modalBackButton} onPress={() => setCurrentScreen(0)}>
          <Icon name={'chevron-back-outline'} color={'#3a86ff'} size={18}/>
          <Text style={styles.modalBackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.modalHeaderText}>{medicationName}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/drugsbottle.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Choose the Medication Type</Text>
      <View style={styles.medicationTypeContainer}>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('Capsule')}>
          <Text style={styles.medicationTypeText}>Capsule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('Tablet')}>
          <Text style={styles.medicationTypeText}>Tablet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('Liquid')}>
          <Text style={styles.medicationTypeText}>Liquid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('Topical')}>
          <Text style={styles.medicationTypeText}>Topical</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={() => setCurrentScreen(2)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </TouchableOpacity>
    </View>,
    <View key="screen3" style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <TouchableOpacity style={styles.modalBackButton} onPress={() => setCurrentScreen(1)}>
          <Icon name={'chevron-back-outline'} color={'#3a86ff'} size={18}/>
          <Text style={styles.modalBackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.modalHeaderText}>{medicationName}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/vaccine.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Add the Medication Strength</Text>
      <TextInput
        style={styles.modalInput}
        placeholderTextColor={'#666'}
        placeholder="Add Strength"
        onChangeText={setMedicationStrength}
        value={medicationStrength}
        keyboardType='numeric'
      />
      <View style={styles.medicationTypeContainer}>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('mg')}>
          <Text style={styles.medicationTypeText}>mg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('mcg')}>
          <Text style={styles.medicationTypeText}>mcg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('g')}>
          <Text style={styles.medicationTypeText}>g</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('ml')}>
          <Text style={styles.medicationTypeText}>ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicationTypeOption} onPress={() => setMedicationType('%')}>
          <Text style={styles.medicationTypeText}>%</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={() => setCurrentScreen(3)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </TouchableOpacity>
    </View>,
    <View key="screen4" style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <TouchableOpacity style={styles.modalBackButton} onPress={() => setCurrentScreen(2)}>
          <Icon name={'chevron-back-outline'} color={'#3a86ff'} size={18}/>
          <Text style={styles.modalBackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.modalHeaderText}>{medicationName}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/calendar.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>When will you take this?</Text>
      <View style={styles.frequencyContainer}>
        <Text style={styles.frequencyLabel}>Frequency</Text>
        <Text style={styles.frequencyValue}>Every Day</Text>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
        <Text style={styles.modalButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  ];

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          {screens[currentScreen]}
        </View>
      </View>
    </Modal>
  );
};

const Medication = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={GlobalStyles.container}>
        <Text style={styles.title}>Medication</Text>
      <ScrollView>

        <View style={styles.logContainer}>
          <Text style={styles.logTitle}>Log</Text>
          <View style={styles.logContent}>
            <Text style={styles.logText}>No Medication Scheduled</Text>
          </View>
        </View>
        <View style={styles.asNeededContainer}>
          <Text style={styles.asNeededTitle}>As-Needed Medications</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon name={'add'} color={'#3a86ff'} size={26} />
          </TouchableOpacity>
        </View>
        <View style={styles.yourMedicationsContainer}>
          <View style={styles.yourMedicationsHeader}>
            <Text style={styles.yourMedicationsTitle}>Manage Your Medications</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <View style={styles.addMedicationContainer}>
            <Text style={styles.addMedicationTitle}>Add a Medication</Text>
            <Text style={styles.addMedicationDescription}>
              Simplify your medication tracking by entering details quickly and setting up reminders. Ensure you never miss a dose with timely notifications.
            </Text>
            <TouchableOpacity style={styles.addMedicationButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.addMedicationButtonText}>Add Medication</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <AddMedicationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fb',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  logContainer: {
    marginTop: 10,
  },
  logTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 10,
  },
  logContent: {
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  logText: {
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  asNeededContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  asNeededTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  yourMedicationsContainer: {
    marginTop: 30,
  },
  yourMedicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  yourMedicationsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  editText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.mainColor,
  },
  medicationDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  medicationImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#3a86ff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7f0ff',
  },
  medicationImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3a86ff',
  },
  medicationInfo: {
    marginLeft: 20,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  medicationType: {
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  medicationDosage: {
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  medicationFrequency: {
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  addMedicationContainer: {
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  addMedicationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 10,
  },
  addMedicationDescription: {
    fontSize: 16,
    color: GlobalColor.textColor,
    marginBottom: 20,
  },
  addMedicationButton: {
    backgroundColor: '#3a86ff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  addMedicationButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  modalBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalBackText: {
    fontSize: 18,
    color: '#3a86ff',
  },
  modalCancelText: {
    fontSize: 18,
    color: '#3a86ff',
  },
  modalImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  modalInput: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  modalButton: {
    width: '100%',
    backgroundColor: '#3a86ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  medicationTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  medicationTypeOption: {
    width: '48%',
    backgroundColor: '#e7f0ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  medicationTypeText: {
    fontSize: 16,
    color: '#3a86ff',
  },
  frequencyContainer: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  frequencyLabel: {
    fontSize: 16,
    color: '#666',
  },
  frequencyValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Medication;