import { useContext} from "react";
import { View, Text, Image, StyleSheet,Pressable } from "react-native";
import BorderCard from "../components/BorderCard";
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import GlobalStyles from "../Styles/GlobalStyles";
import GlobalColor from "../Styles/GlobalColor";


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
  return (
    <View style={GlobalStyles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        position: 'relative',
      }}>
        <Image source={user?{uri:user.picture}:require('../assets/images/Profile.jpg')} style={styles.profilePicture} resizeMode='cover' />
        <Text style={styles.name}>{user?.username ? user?.username : "User Name "}</Text>
        <Text style={{ color: GlobalColor.darkTextColor, fontSize: 16, fontWeight: '500' }}>{"parminder@gmail.com"}</Text>
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
          <Pressable onPress={()=>navigation.navigate('Personal Details')} style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{backgroundColor:'#FFEEDD',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="person-circle-outline" color={GlobalColor.iconColor} size={25} />
          <Text style={styles.cardText}>Personal Details</Text>
          </View>
            <Icon name="chevron-forward" color={GlobalColor.iconColor} size={25} />
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('Help')} style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{backgroundColor:'#FFEEDD',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="help-circle-outline" color={GlobalColor.iconColor} size={25} />
          <Text style={styles.cardText}>Help</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={25} />
          </Pressable>

          <View style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{backgroundColor:'#FFEEDD',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="trash-outline" color={GlobalColor.iconColor} size={25} />
          <Text style={styles.cardText}>Delete account</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={25} />
          </View>

          <Pressable onPress={()=>{logout()}} style={styles.cardList}>
          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          <Icon style={{backgroundColor:'#FFEEDD',paddingHorizontal:16,paddingVertical:12,borderBottomRightRadius:10,borderTopRightRadius:10}} name="power-outline" color='red' size={25} />
          <Text style={[styles.cardText,{color:'red'}]}>Log out</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={25} />
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
    paddingTop: 16
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 80,
    marginBottom: 20,
  },
  name: {
    color: GlobalColor.darkTextColor,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'capitalize'
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalColor.borderColor,
    width: '90%',
    marginTop: 26,
    paddingVertical: 10,
    gap: 10,
   
  },
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginEnd: 15,
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