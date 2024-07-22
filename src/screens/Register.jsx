
import React, { useState } from 'react';
import { Alert, Image, Pressable } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Path from '../../BackendPath/Path';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';

const Register = ({ navigation, route }) => {
  const {mobile}= route.params
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [foodPreference, setFoodPreference] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  console.log(foodPreference);
  const handleRegister = async () => {
    // console.log("Name:", name);
    // console.log("Password:", password);
    // console.log("DOB:", date);
    // console.log("Gender:", gender);
    // console.log("Food Preference:", foodPreference);
    // console.log("Height:", height);
    // console.log("Weight:", weight);
    try {
      if (name && password && date && gender && foodPreference && height && weight) {
        //work after backend  
        const response = await Path.post("/register", {
          username: name,
          mobile:mobile,
          password: password,
          weight: weight,
          height: height,
          dob: date,
          gender: gender,
          food_preference: foodPreference
        })
        if (response.data) {
          Alert.alert(response.data.message)
          console.log(response.data);
          navigation.navigate('Signin')

        }
        else {
          Alert.alert("error", "invalid credentials")
        }
      }
      else {
        Alert.alert("Please fill all the fields");
      }
    } catch (error) {
      console.log(error);
    }



  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/Register.png')}
        resizeMode="contain"
      />
      <Text style={styles.title}>Register to Heal</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
        placeholderTextColor={"#000"}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholderTextColor={"#000"}
      />
      <Pressable style={[
        styles.input,
        styles.DatePicker

      ]} onPress={() => setOpen(true)} >
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
          }}
        >{date ? date.toLocaleDateString() : 'Select Date'}</Text>
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
      <View style={[styles.input, { paddingLeft: 0, paddingTop: 0 }]}>
        <RNPickerSelect
          placeholder={{ label: 'Select a Gender...', value: null }}
          onValueChange={(value) => setGender(value)}
          selectedValue={gender}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'transMale' },
          ]}
        >
        </RNPickerSelect>
      </View>
      <View style={[styles.input, { paddingLeft: 0, paddingTop: 0 }]}>
        <RNPickerSelect

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
        style={styles.input}
        placeholder="Height (cm)"
        onChangeText={text => setHeight(text)}
        value={height}
        keyboardType="numeric"
        placeholderTextColor={"#000"}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        onChangeText={text => setWeight(text)}
        value={weight}
        keyboardType="numeric"
        placeholderTextColor={"#000"}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E2EE',
  },
  logo: {
    width: 250, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5D4FB3',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#000'
  },
  DatePicker: {
    backgroundColor: '#5D4FB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5D4FB3',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Register;
