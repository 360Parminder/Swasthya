import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import Path from "../services/Path";
import BorderCard from "../components/BorderCard";
import Icon from 'react-native-vector-icons/Ionicons';


const Profile = ({ navigation }) => {

  const [userData, setUserData] = useState(null)

    useEffect(() => {

      const fetchUserProfile= async()=>{

        const token = await AsyncStorage.getItem('userToken');
          console.log(token);
          const response = await Path.get("/profile",{
            headers: {
              'authorization': `Bearer ${token}`
            }
          })
          if (response) {
            console.log("response",response.data.data);
            setUserData(response.data.data)
            }


      }
      fetchUserProfile();

  }, [])
  // const date = userData?.dob?.toISOString()

  const logout = async () => {
    const token = await AsyncStorage.getItem('token');
    const response = Path.get("/logout", {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    if (response) {
      AsyncStorage.removeItem('token');
      navigation.navigate('Signin')
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

        <Image source={require('../assets/images/Profile.jpg')} style={styles.profilePicture} resizeMode='cover' />
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
        <BorderCard logo={'🎂'} value={'22'} valueUnit={'Yrs'} />


      </View>



      <View style={styles.card}>

        <Pressable>
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

        <Pressable>
          <View style={[styles.cardList, { borderBottomWidth: 0 }]}>
            <Text style={styles.cardText}>Notifications </Text>
            <Icon name="chevron-forward-outline" color="#000" Size={28} />
          </View>
        </Pressable>
      </View>

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