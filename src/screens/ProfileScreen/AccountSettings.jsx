import { View, Text, Image, TouchableOpacity, TextInput, Pressable, Button, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import Path from '../../services/Path';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../../Styles/GlobalStyles';
import { userDataContext } from '../../context/UserContext';
import DateTimePicker from '@react-native-community/datetimepicker';

const AccountSettings = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userHeight, setUserHeight] = useState();
  const [userWeight, setUserWeight] = useState();
  const [userAge, setUserAge] = useState();
  const { user } = useContext(userDataContext)


  const choosePhoto = async () => {
    console.log('choose Photo function running');
    const option = {
      mediaType: 'photo',
      quality: 1,
    }
    const result = await launchImageLibrary(option)
    console.log(result);
    if (result.assets[0].uri) {
      // console.log(result.assets[0].uri);
      setUserProfile(result.assets[0])
    }
  }

  const updateProfile = async () => {
    const token = await AsyncStorage.getItem('userToken')
    if (userProfile) {
      const formData = new FormData();
      formData.append('file', {
        uri: userProfile.uri,
        type: userProfile.type,
        name: userProfile.fileName,
      });

      try {
        const response = await Path.post('/profile/picture', formData, {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            'authorization': `Bearer ${token}`
          },
        })
        if (response) {
          console.log(response.data);
        }

      } catch (error) {
        console.log(error);
      }
    }
  }
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [age, setAge] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // Calculate age
    const today = new Date();
    const age = today.getFullYear() - currentDate.getFullYear();
    const monthDifference = today.getMonth() - currentDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < currentDate.getDate())
    ) {
      setAge(age - 1);
    } else {
      setAge(age);
    }
  };

  const showDatePicker = () => {
    setShow(true);
  };
  return (

    <ScrollView>
      <View style={GlobalStyles.container}>
      <TouchableOpacity onPress={() => { choosePhoto() }}>
        <Image style={{
          width: 120,
          height: 120,
          borderRadius: 60
        }} source={userProfile ? { uri: userProfile.uri } : require('../../assets/images/Profile.jpg')} resizeMode='cover' />
      </TouchableOpacity>
      <View style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'column',
        gap: 5
      }}>
        <>
          <Text style={GlobalStyles.label}>Name</Text>
          <TextInput
            value={userName}
            onChangeText={(text) => setUserName(text)}
            style={GlobalStyles.input}
            placeholder={user?.username}
            placeholderTextColor={'#000'}

          />
        </>
        <>
          <Text style={GlobalStyles.label}>Email</Text>
          <TextInput
            value={userEmail}
            onChangeText={(text) => setUserEmail(text)}
            style={GlobalStyles.input}
            placeholder={user?.email}
            placeholderTextColor={'#000'}
            keyboardType='email-address'
          />
        </>
        <>
          <Text style={GlobalStyles.label}>Password</Text>
          <TextInput
            value={userPassword}
            onChangeText={(text) => setUserPassword(text)}
            style={GlobalStyles.input}
            placeholder={'Enter your password'}
            placeholderTextColor={'#000'}
          />
        </>
      
       <Text style={GlobalStyles.label}>Age</Text>
        <TextInput
          style={GlobalStyles.input}
          placeholder="Age"
          placeholderTextColor="#000"
          value={age.toString()}
          editable={false} // Makes input read-only
        />
        <Pressable style={GlobalStyles.button}  onPress={showDatePicker}> <Text style={GlobalStyles.buttonText}>Select Date of Birth</Text></Pressable>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
            maximumDate={new Date()} // Ensures the selected date is not in the future
          />
        )}

        <>
          <Text style={GlobalStyles.label}>Height</Text>
          <TextInput
            value={userHeight}
            onChangeText={(text) => setUserHeight(text)}
            style={GlobalStyles.input}
            placeholder={user?.height.toString()}
            placeholderTextColor={'#000'}
            keyboardType='numeric'
          />
        </>
        <>
          <Text style={GlobalStyles.label}>Weight</Text>
          <TextInput
            value={userWeight}
            onChangeText={(text) => setUserWeight(text)}
            style={GlobalStyles.input}
            placeholder='Enter your weight'
            placeholderTextColor={'#000'}
          />
        </>
      </View>
      <View>
        <Pressable
          onPress={() => updateProfile()}
          style={GlobalStyles.button}
        >
          <Text style={GlobalStyles.buttonText}>
            Save Changes
          </Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  )
}

export default AccountSettings;