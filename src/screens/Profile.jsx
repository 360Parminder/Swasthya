import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Path from "../services/Path";
import BorderCard from "../components/BorderCard";
import Icon from 'react-native-vector-icons/Ionicons';
import { userDataContext } from "../context/UserDataContext";


const Profile = ({ navigation }) => {

  const {userData} = useContext(userDataContext)
  console.log(userData);

  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const now = new Date();
    const ageDiff = now - dob;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const userAge = calculateAge(userData?.dob)

  const logout = async () => {
    const token = await AsyncStorage.getItem('userToken');
    const response = await Path.get("/logout", {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    if (response) {
      AsyncStorage.removeItem('userToken');
      navigation.navigate('AuthenticationNavigator');
    }
    else {
      alert("something went wrong")
    }
  }


  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

      }}>

        <Image source={userData?{uri:userData.picture}:require('../assets/images/Profile.jpg')} style={styles.profilePicture} resizeMode='cover' />
        <Text style={styles.name}>{userData?.username ? userData?.username : "User Name "}</Text>
        <Text style={{
          color: '#000'
        }}> {userData?.mobile ? userData?.mobile : "0000000000"}</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        gap: 10
      }}>

        <BorderCard logo={'⚖️'} value={userData?.weight} valueUnit={'kg'} />
        <BorderCard logo={'🧍'} value={userData?.height} valueUnit={'Cm'} />
        <BorderCard logo={'🎂'} value={userAge?userAge:'..'} valueUnit={'Yrs'} />


      </View>



      <View style={styles.card}>

        <Pressable onPress={()=>navigation.navigate('Profile Settings')}>
          <View style={styles.cardList}>

            <Text style={styles.cardText}>Account</Text>
            <Icon name="chevron-forward-outline" color="#000" Size={28} />
          </View>
        </Pressable>



        <Pressable >
          <View style={styles.cardList}>
            <Text style={styles.cardText}>All Workouts 🚀</Text>
            <Icon name="chevron-forward-outline" color="#000" Size={28} />
          </View>
        </Pressable>

        <Pressable>
          <View style={styles.cardList}>
            <Text style={styles.cardText}>Workout Reminders</Text>
            <Icon name="chevron-forward-outline" color="#000" Size={28} />
          </View>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate('Notification')}>
          <View style={[styles.cardList, { borderBottomWidth: 0 }]}>
            <Text style={styles.cardText}>Notifications </Text>
            <Icon name="chevron-forward-outline" color="#000" Size={28} />
          </View>
        </Pressable>
      </View>
      
        <Pressable onPress={()=>{logout()}} style={{
          backgroundColor:'#a3c4f3',
          padding: 10,
          borderRadius: 10,
          margin: 10,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,

        }}>
          <Text style={{
            color: '#000',
          }}>
            Logout
          </Text>
        </Pressable>
  

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f9fb',
    paddingHorizontal: 20,
    paddingTop: 16
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 20,
  },
  name: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'capitalize'
  },
  card: {
    marginTop: 26,
    backgroundColor: '#fff',
    borderRadius: 18,
    // height: 300,
    width: 350,
    gap: 10,
    // paddingBottom:20,
    shadowOpacity: 0.1,
    // shadowOffset:
    shadowRadius: 10,
    elevation: 3
  },
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF'
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  }
});

export default Profile;