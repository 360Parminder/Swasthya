import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Path from "../services/Path";
import BorderCard from "../components/BorderCard";
import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import GlobalStyles from "../Styles/GlobalStyles";


const Profile = ({ navigation }) => {
  const {logout} = useContext(AuthContext)
  const {user} = useContext(userDataContext)
  console.log(user);

  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const now = new Date();
    const ageDiff = now - dob;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const userAge = calculateAge(user?.dob)

  // const logout = async () => {
  //   // const token = await AsyncStorage.getItem('userToken');
  //   // const response = await Path.get("/logout", {
  //   //   headers: {
  //   //     'authorization': `Bearer ${token}`
  //   //   }
  //   // })
  //   // if (response) {
  //   //   AsyncStorage.removeItem('userToken');
  //   //   navigation.navigate('AuthenticationNavigator');
  //   // }
  //   // else {
  //   //   alert("something went wrong")
  //   // }
  //   AsyncStorage.removeItem('userToken');
  // }


  return (
    <View style={GlobalStyles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#0e9fe9',
        // borderBottomLeftRadius: 25,
        borderBottomRightRadius: 100,
        paddingTop: 20,
        paddingBottom: 20,
      }}>

        <Image source={user?{uri:user.picture}:require('../assets/images/Profile.jpg')} style={styles.profilePicture} resizeMode='cover' />
        <Text style={styles.name}>{user?.username ? user?.username : "User Name "}</Text>
        <Text style={{
          color: '#fff',  fontSize: 16, fontWeight: '600'
        }}> {user?.mobile ? user?.mobile : "0000000000"}</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
        gap: 10
      }}>

        <BorderCard logo={'⚖️'} value={user?.weight} valueUnit={'kg'} />
        <BorderCard logo={'🧍'} value={user?.height} valueUnit={'Cm'} />
        <BorderCard logo={'🎂'} value={userAge?userAge:'..'} valueUnit={'Yrs'} />


      </View>



      <View style={styles.card}>
      
          <View style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{fontSize:20,backgroundColor:'#eaf4f4',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="call" color="#000" Size={40} />
          <Text style={styles.cardText}>Mobile Number</Text>
          </View>
            <Text style={styles.cardText}>8779112732</Text>
          </View>
          <View style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{fontSize:20,backgroundColor:'#eaf4f4',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="earth" color="#000" Size={40} />
          <Text style={styles.cardText}>Country</Text>
          </View>
            <Text style={styles.cardText}>india</Text>
          </View>

          <View style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{fontSize:20,backgroundColor:'#eaf4f4',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="call" color="#000" Size={40} />
          <Text style={styles.cardText}>Mobile Number</Text>
          </View>
            <Text style={styles.cardText}>8779112732</Text>
          </View>

          <View style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{fontSize:20,backgroundColor:'#eaf4f4',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="call" color="#000" Size={40} />
          <Text style={styles.cardText}>Mobile Number</Text>
          </View>
            <Text style={styles.cardText}>8779112732</Text>
          </View>
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
    paddingTop: 16
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'capitalize'
  },
  card: {
    width: '100%',
    marginTop: 26,
    gap: 10,
   
  },
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    textAlign:'left'
  }
});

export default Profile;