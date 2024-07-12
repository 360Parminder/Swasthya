import { View, Text, StyleSheet, ScrollView, Image, Pressable, Modal, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MedicineCard from '../../components/MedicineCard';
import Icon from 'react-native-vector-icons/Ionicons';

const MedicationDetail = ({ name, type, dosage, frequency }) => {
  return (
    <View style={styles.medicationDetail}>
      <Image style={styles.medicationImage} source={require('../../assets/images/capsule.jpg')} />
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
  const [medicationDosage, setMedicationDosage] = useState('');
  const [medicationFrequency, setMedicationFrequency] = useState('');
  const [medicationDetail, setMedicationDetail] = useState('');
  const [medicationImage, setMedicationImage] = useState('');
  const [medicationStrength,setMedicationStrength] = useState('');


  const screens = [
    <View key="screen1" style={styles.modalContent}>
      <Image style={{
        marginTop:40,
        width: 100,
        height: 100,
      }} source={require('../../assets/images/health-report.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Medication Name</Text>
      <TextInput 
      placeholder='Add Medication Name'
      style={styles.modalInput}
      placeholderTextColor={'#000'}
      onChangeText={text => setMedicationName(text)}
      />
      <Pressable style={styles.modalButton} onPress={() => setCurrentScreen(1)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </Pressable>
    </View>,
    <View key="screen2" style={styles.modalContent}>
      <Image style={{
        marginTop:40,
        width: 100,
        height: 100,
        }} source={require('../../assets/images/drugsbottle.gif')} resizeMode='contain'/>
      <Text style={styles.modalText}>Choose the Medication Type</Text>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // marginTop: 20,
        
        borderRadius:12,
        backgroundColor: '#fff',
        padding: 10,
        width: 380,
        // height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        gap:10
        
      }}>
        {/* <Text style={{}}>Common Form</Text> */}
        <Pressable style={{

        }} onPress={() => setMedicationType('capsule')}><Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          // borderBottomWidth:2,
          // borderBottomColor: '#000',
          padding: 10,
        }}>Capsule</Text></Pressable>
        <Pressable style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          // borderBottomWidth:2,
          // borderBottomColor: '#000',
          padding: 10,
        }} onPress={() => setMedicationType('tablet')}><Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          // borderBottomWidth:2,
          // borderBottomColor: '#000',
          // padding: 10,
        }}>Tablet</Text></Pressable>
        <Pressable style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          // borderBottomWidth:2,
          // borderBottomColor: '#000',
          padding: 10,
        }} onPress={() => setMedicationType('Liquid')}><Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          borderBottomWidth:2,
          borderBottomColor: '#000',
          // padding: 10,
        }}>Liqued</Text></Pressable>
        <Pressable style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          // borderBottomWidth:2,
          // borderBottomColor: '#000',
          padding: 10,
        }} onPress={() => setMedicationType('topical')}><Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          borderBottomWidth:2,
          borderBottomColor: '#000',
          // padding: 10,
        }}>Topical</Text></Pressable>
      </View>
      <Pressable style={styles.modalButton} onPress={() => setCurrentScreen(2)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </Pressable>
    </View>,
    <View key="screen3" style={styles.modalContent}>
      <Image style={{
        marginTop:40,
        width: 100,
        height: 100,
      }} source={require('../../assets/images/vaccine.gif')}/>
      <Text style={styles.modalText}>Add the Medication Strength</Text>
      <View>
        <TextInput
        style={styles.modalInput}
        placeholderTextColor={'#000'}
        placeholder="Add Strength"
        onChangeText={setMedicationStrength}
        value={medicationStrength}
        keyboardType='numaric'
        />
      </View>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // marginTop: 20,
        
        borderRadius:12,
        backgroundColor: '#fff',
        padding: 10,
        width: 380,
        // height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        gap:10
        
      }}>
       
        {/* <Text style={{}}>Common Form</Text> */}
        <Pressable style={{

        }} onPress={() => setMedicationType('mg')}><Text style={{
          color: '#000',
          fontSize: 16,
          fontWeight: '500',
          borderBottomWidth:2,
          borderBottomColor: '#000',
          padding: 10,
        }}>mg</Text></Pressable>
        <Pressable style={{}} onPress={() => setMedicationType('mcg')}><Text style={{
          color: '#000',
        }}>mcg</Text></Pressable>
        <Pressable style={{}} onPress={() => setMedicationType('g')}><Text style={{
          color: '#000',
        }}>g</Text></Pressable>
        <Pressable style={{}} onPress={() => setMedicationType('ml')}><Text style={{
          color: '#000',
        }}>ml</Text></Pressable>
        <Pressable style={{}} onPress={() => setMedicationType('%')}><Text style={{
          color: '#000',
        }}>%</Text></Pressable>
      </View>
      <Pressable style={styles.modalButton} onPress={() => setCurrentScreen(3)}>
        <Text style={styles.modalButtonText}>Next</Text>
      </Pressable>
    </View>,
    <View key="screen4" style={styles.modalContent}>
      <Image style={{
        marginTop:40,
        width: 100,
        height: 100,
      }} source={require('../../assets/images/calendar.gif')}/>
      <Text style={styles.modalText}>When will you take this?</Text>
      <View style={[styles.modalInput,{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 380,
        marginTop: 20,
        }]}>
          <Text style={{
            fontSize: 18,
            fontWeight: '500',
          }}>Frequency</Text>
          <Text style={{
            color: '#003566',
            fontSize: 18,
            fontWeight: '600',
            fontFamily:'Roboto-Black',
            
          }}>Every Day</Text>
        </View>
      <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
        <Text style={styles.modalButtonText}>Finish</Text>
      </Pressable>
    </View>
  ];

  return (
    <Modal
      animationType="slide"
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
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.logTitle}>Log</Text>
          <MedicineCard />
          <MedicineCard />
        </View>
        <View style={styles.asNeededContainer}>
          <Text style={styles.asNeededTitle}>As-Needed Medications</Text>
          <Icon style={styles.addIcon} name={'add'} color={'#000'} size={26} />
        </View>
        <View style={styles.yourMedicationsContainer}>
          <View style={styles.yourMedicationsHeader}>
            <Text style={styles.yourMedicationsTitle}>Your Medications</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" />
          <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" />
          <MedicationDetail name="Toprimate" type="Tablet" dosage="50 mg" frequency="Every Day" />
          <View style={styles.addMedicationContainer}>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text style={styles.addMedicationText}>Add Medication</Text>
            </Pressable>
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
    justifyContent: 'center',
  },
  logTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 20,
    marginTop: 20,
  },
  asNeededContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  asNeededTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addIcon: {
    fontWeight: '700',
    fontSize: 26,
  },
  yourMedicationsContainer: {
    // backgroundColor: '#fefae0',
    marginTop: 20,
  },
  yourMedicationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  yourMedicationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  editText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  medicationDetail: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medicationImage: {
    width: '40%',
    height: '100%',
  },
  medicationInfo: {
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  medicationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  addMedicationContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 8,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addMedicationText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#03045e',
    marginHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    // borderRadius: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding: 35,
    // alignItems: 'center',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop:30,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color:'#000',
  },
  modalButton: {
  //  marginTop:360,
  marginVertical:10,
    width:380,
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalInput:{
    width: 380,
    height: 50,
    backgroundColor: '#F0F0F0',
    color:'#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,

  },
});

export default Medication;
