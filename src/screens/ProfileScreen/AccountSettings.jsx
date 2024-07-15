import { View, Text, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';


const AccountSettings = () => {
  const [userProfile,setUserProfile]=useState(null);
  const choosePhoto= async()=>{
    const option={
      
    }
    const result = await launchImageLibrary(option)
    console.log(result.assets[0].uri);
    if (result.assets[0].uri) {
      console.log(result.assets[0].uri);
      setUserProfile(result)
    }
  }
  return (
    <View style={{
      paddingHorizontal:20
    }}>
      <View style={{
        marginTop:10,
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={choosePhoto}>

        <Image style={{
          width:90,
          height:90,
          borderRadius:50
        }} source={userProfile?{uri:userProfile.assets[0].uri}:require('../../assets/images/Profile.jpg')} resizeMode='cover' />
        </TouchableOpacity>
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'100%'
        }}>
          <TextInput
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your name'
          placeholderTextColor={'#000'}
          />
          <TextInput
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
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
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your Password'
          placeholderTextColor={'#000'}
          />
          <TextInput
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
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
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your Height'
          placeholderTextColor={'#000'}
          keyboardType='numeric'
          />
          <TextInput
          style={{
            width:'48%',
            borderRadius:10,
            paddingHorizontal:5,
            paddingVertical:10,
            shadowOpacity:0.5,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your weight'
          placeholderTextColor={'#000'}
          />
        </View>
        </View>
    </View>
  )
}

export default AccountSettings;