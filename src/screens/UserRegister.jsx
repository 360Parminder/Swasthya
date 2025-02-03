import React, { useState } from 'react';
import { Alert, Image, Pressable, View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import { formatDate } from '../utils/dateFunction';
import UserAuth from '../services/UserAuth';



const UserRegister = ({navigation, route }) => {

  const { mobile } = route.params;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleRegister = async () => {
    try {
      if (name && password && date && gender && foodPreference && height && weight) {
        const response = await UserAuth.register(name, mobile, password, weight, height, formatDate(date),gender,foodPreference);
          if (response.status === 200) {
            Alert.alert("User Registered Successfully");
            navigation.navigate('SignIn');
          }
       
      } else {
        Alert.alert("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(name, password,formatDate(date),gender,foodPreference,height,weight);
  };

  return (
    <View style={[GlobalStyles.container]}>
      <Text style={GlobalStyles.title}>Getting Started</Text>
      <Text style={{
        marginBottom: 20,
        color: '#343a40',
        fontSize: 16
      }}>Create a account to continue!</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
        placeholderTextColor={"#000"}
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholderTextColor={"#000"}
      />
      <Pressable
        style={[GlobalStyles.input,styles.datePicker]}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.dateText}>
          {date ? date.toLocaleDateString("en-US", options) : 'Select Date'}
        </Text>
      </Pressable>
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

     <View style={{width:'80%',marginBottom: 15}}>
     <RNPickerSelect
        style={pickerSelectStyles}
        placeholderTextColor={"#000"}
        placeholder={{ label: 'Select your Gender', value: null }}
        onValueChange={(value) => setGender(value)}
        selectedValue={gender}
        items={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'transMale' },
        ]}
      />
     </View>
     <View style={{width:'80%',marginBottom: 15,}}>
     <RNPickerSelect
        style={pickerSelectStyles}
        placeholderTextColor={'#000'}
        placeholder={{ label: 'Select Food Preference', value: null }}
        onValueChange={(itemValue, itemIndex) =>
          setFoodPreference(itemValue)
        }
        items={[
          { label: 'Vegetarian', value: 'veg' },
          { label: 'Non-vegetarian', value: 'nonVeg' },
          { label: 'Vegan', value: 'vegan' },
        ]}
      />
     </View>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Height (cm)"
        onChangeText={text => setHeight(text)}
        value={height}
        keyboardType="numeric"
        placeholderTextColor={"#000"}
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Weight (kg)"
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
        placeholderTextColor={"#000"}
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={handleRegister}>
        <Text style={GlobalStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
const pickerSelectStyles = {
  inputIOS: {
      width: "100%",
      borderRadius: 5,
      borderColor: 'gray',
      borderWidth: 1,
      height: 50,
      fontSize: 16,
      paddingLeft: 10,
      backgroundColor: "white",
      color: "#000",
      marginBottom: 15,
  },
  placeholder: {
    color: '#000',
  },
  inputAndroid: {
      width: "100%",
      height: 50,
      fontSize: 16,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 10,
      backgroundColor: GlobalColor.backgroundColor,
      color: GlobalColor.textColor,
      paddingRight: 30,
      marginBottom: 10,
  },
};

const styles = StyleSheet.create({

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  datePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 18,
    color: GlobalColor.textColor,
  },
});

export default UserRegister;
