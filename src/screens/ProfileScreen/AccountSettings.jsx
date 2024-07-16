import { View, Text, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';


const AccountSettings = () => {
  const [userProfile,setUserProfile]=useState(null);
  const choosePhoto= async()=>{
    console.log('choose Photo function running');
    const option={
      mediaType: 'photo',
      quality: 1,
    }
    const result = await launchImageLibrary(option)
    console.log(result);
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
        marginTop:60,
        alignItems:'center'
      }}>
        <TouchableOpacity onPress={()=>{choosePhoto()}}>

        <Image style={{
          width:120,
          height:120,
          borderRadius:60
        }} source={userProfile?{uri:userProfile.assets[0].uri}:require('../../assets/images/Profile.jpg')} resizeMode='cover' />
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
          style={{
            fontSize:18,
            width:'48%',
            height:45,
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            shadowOpacity:0.1,
            elevation:1,
            backgroundColor:'#f1f2fc'
          }}
          placeholder='Enter your name'
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