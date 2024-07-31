import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import MedicineCard from '../../components/MedicineCard';
import Icon from 'react-native-vector-icons/Ionicons';
import { generateLastMonthDates, todayDate } from '../../utils/dateFunction';

const MedicationDetail = ({ name, type, dosage, frequency }) => {
  return (
    <View style={styles.medicationDetail}>
      <View style={styles.medicationImageContainer}>
        <View style={styles.medicationImage}></View>
      </View>
      <View style={styles.medicationInfo}>
        <Text style={styles.medicationName}>{name}</Text>
        <Text>{type}</Text>
        <Text>{dosage}</Text>
        <Text><Icon name={'time-outline'} /> {frequency}</Text>
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
const {date, month}= todayDate()
// console.log(date,month);
const dateArray = generateLastMonthDates();
// console.log(dateArray);

  const screens = [
    <View key="screen1" style={styles.modalContent}>
        <View style={[styles.modalHeader,{justifyContent:''}]}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/health-report.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Medication Name</Text>
      <TextInput 
        placeholder='Add Medication Name'
        style={styles.modalInput}
        placeholderTextColor={'#000'}
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
        <Text style={[styles.modalHeaderText,{fontSize:18,color:'#000'}]}>{medicationName}</Text>
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
        <Text style={[styles.modalHeaderText,{fontSize:18,color:'#000'}]}>{medicationName}</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.modalImage} source={require('../../assets/images/vaccine.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Add the Medication Strength</Text>
      <TextInput
        style={styles.modalInput}
        placeholderTextColor={'#000'}
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
        <Text style={[styles.modalHeaderText,{fontSize:18,color:'#000'}]}>{medicationName}</Text>
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
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth());
  console.log(oneMonthAgo);
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{
        marginTop:10,
        flexDirection:'row',
        gap:5
      }}>
      <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
        <View style={{
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>
            W
          </Text>
          <View style={{
            backgroundColor:'#000',
            width:30,
            height:30,
            borderRadius:50
          }}>
          </View>
        </View>
      </View>
        <View>
          <Text style={styles.logTitle}>Log</Text>
          <View style={{
            borderRadius:10,
            backgroundColor:'#fff',
            paddingHorizontal:10,
            paddingVertical:20,
            shadowOpacity:0.1,
            shadowRadius:10,
            marginHorizontal:2,
          }}>
            <Text style={{
              fontSize:18,
            }}>
              No Medication Scheduled
            </Text>
          </View>
          {/* <MedicineCard />
          <MedicineCard /> */}
        </View>
        <View style={styles.asNeededContainer}>
          <Text style={styles.asNeededTitle}>As-Needed Medications</Text>
          <Icon style={styles.addIcon} name={'add'} color={'#000'} size={26} />
        </View>
        <View style={styles.yourMedicationsContainer}>
          <View style={styles.yourMedicationsHeader}>
            <Text style={styles.yourMedicationsTitle}>Manage Your Medications</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>

          {/* <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" />
          <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" />
          <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" /> */}
          <View style={styles.addMedicationContainer}>
            <Text style={{
             fontSize:18,
             fontWeight:'500',
             marginBottom:5
            }}>
            Add a Medication
            </Text>
            <Text style={{
              fontSize:16,
              marginBottom:15
            }}>
           Simplify your medication tracking by entering details quickly and setting up reminders. Ensure you never miss a dose with timely notifications.
            </Text>
            <TouchableOpacity style={{
              alignItems:'center',
            }}  onPress={() => setModalVisible(true)}>
              <Text style={styles.addMedicationText}>Add Medication</Text>
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
  logTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b6b6b',
    marginTop: 40,
    marginBottom:20
  },
  asNeededContainer: {
    marginTop: 30,
    justifyContent:'space-between',
    backgroundColor:'#fff',
    borderRadius:10,
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:10

  },
  asNeededTitle: {
    fontSize: 18,
    color: '#000814',
  },
  // addIcon: {
  //   alignSelf: 'flex-end',
  // },
  yourMedicationsContainer: {
    marginTop: 30,
  },
  yourMedicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yourMedicationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b6b6b',
  },
  editText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a86ff',
  },
  medicationDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  medicationImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#3a86ff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7f0ff',
  },
  medicationImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#3a86ff',
  },
  medicationInfo: {
    marginLeft: 20,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addMedicationContainer: {
    borderRadius:10,
    backgroundColor: '#fff',
    marginTop: 20,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal:10,
    paddingVertical:20,
    shadowOpacity:0.1,
    shadowRadius:10,
    shadowColor:'#000',

  },
  addMedicationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3a86ff',
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalInput: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
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
    color: 'white',
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
    color: '#000',
  },
  frequencyValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Medication;
