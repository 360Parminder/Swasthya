import { View, Text, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';
import Path from '../../services/Path';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AccountSettings = () => {
  const [userProfile,setUserProfile]=useState(null);
const [userName,setUserName]=useState();
const [userEmail,setUserEmail]=useState();
const [userPassword,setUserPassword]=useState();
const [userHeight,setUserHeight]=useState();
const [userWeight,setUserWeight]=useState();
const [userAge,setUserAge]=useState();



  const choosePhoto= async()=>{
    console.log('choose Photo function running');
    const option={
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

  const updateProfile= async()=>{
    const token= await AsyncStorage.getItem('userToken')
    if (userProfile) {
      const formData = new FormData();
      formData.append('file', {
        uri: userProfile.uri,
        type: userProfile.type,
        name: userProfile.fileName,
      });
   
    try {
      const response = await Path.post('/profile/picture',formData,{
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
  return (
    <View style={{
      paddingHorizontal:20
    }}>
      <View style={{
        marginTop:60,
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={()=>{choosePhoto()}}>

        <Image style={{
          width:120,
          height:120,
          borderRadius:60
        }} source={userProfile?{uri:userProfile.uri}:require('../../assets/images/Profile.jpg')} resizeMode='cover' />
        </TouchableOpacity>
        <View style={{
          marginTop:120,
          flexDirection:'column',
          gap:30
        }}>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%'
        }}>
          <TextInput
          value={userName}
          onChangeText={(text)=>setUserName(text)}
          style={{
            fontSize:18,
            width:'48%',
            height:45,
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,

            shadowOpacity:0.1,
            
            elevation:0.5,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your name'
          placeholderTextColor={'#000'}
          />
          <TextInput
          value={userEmail}
          onChangeText={(text)=>setUserEmail(text)}

          style={{
            fontSize:18,
            height:45,
            width:'48%',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your Email'
          placeholderTextColor={'#000'}
          keyboardType='email-address'
          />
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%'
        }}>
          <TextInput
          value={userPassword}
          onChangeText={(text)=>setUserPassword(text)}
          style={{
            fontSize:18,
            height:45,
            width:'48%',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Password'
          placeholderTextColor={'#000'}
          />
          <TextInput

          style={{
            fontSize:18,
            height:45,
            width:'48%',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Age'
          placeholderTextColor={'#000'}
          />
        </View>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%'
        }}>
          <TextInput
          value={userHeight}
          onChangeText={(text)=>setUserHeight(text)}
          style={{
            fontSize:18,
            height:45,
            width:'48%',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your Height'
          placeholderTextColor={'#000'}
          keyboardType='numeric'
          />
          <TextInput
          value={userWeight}
          onChangeText={(text)=>setUserWeight(text)}
          style={{
            fontSize:18,
            height:45,
            width:'48%',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your weight'
          placeholderTextColor={'#000'}
          />
        </View>
        </View>
        <View>
          <Pressable
          onPress={()=>updateProfile()}
          style={{
            marginTop:50,
            backgroundColor:'#7d79db',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:12,
            paddingHorizontal:30,
            paddingVertical:10
          }}
          >
            <Text style={{
              color:'#fff',
              fontSize:18,
              fontWeight:600
            }}>
              Save Changes
            </Text>
          </Pressable>
        </View>
        </View>
    </View>
  )
}

export default AccountSettings;