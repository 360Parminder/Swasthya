import { useContext, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import BorderCard from "../components/BorderCard";
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import GlobalStyles from "../Styles/GlobalStyles";
import GlobalColor from "../Styles/GlobalColor";
import ProfileModal from "../components/Modals/ProfileModal";
import ChangePassword from "../components/Modals/ChangePassword";
import HelpModal from "../components/Modals/HelpModal";


const Profile = ({ navigation }) => {
  const { logout } = useContext(AuthContext)
  const { user } = useContext(userDataContext)
  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    const now = new Date();
    const ageDiff = now - dob;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  const userAge = calculateAge(user?.dob)
  const [profileModal,setProfileModal] = useState(false)
  const [changePassword,setChangePassword] = useState(false)
  const [helpModal,sethelpModal] = useState(false)
  return (
    <View style={GlobalStyles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: GlobalColor.primaryColor,
        borderRadius: 16,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
      }}>
        <Image source={user?.picture ? { uri: user.picture } : require('../assets/images/Profile.jpg')} style={styles.profilePicture} resizeMode='cover' />
        <View style={{ flexDirection: 'column',marginLeft:20,width:'70%' }}>
          <Text style={styles.name}>{user?.username ? user?.username : "User Name "}</Text>
          <Text style={{ color: GlobalColor.textColor, fontSize: 16, fontWeight: '500',textTransform:'capitalize' }}>{user?.email?user.email:user?.mobile}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Pressable onPress={() => setProfileModal(true)} style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#2e53b97a' }} name="person-outline" color={GlobalColor.mainColor} size={35} />
            <Text style={styles.cardText}>Personal Details</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </Pressable>
        <Pressable onPress={() => setChangePassword(true)} style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#2e53b97a' }} name="lock-closed-outline" color={GlobalColor.mainColor} size={35} />
            <Text style={styles.cardText}>Change Password</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Notification')} style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#2e53b97a' }} name="notifications-outline" color={GlobalColor.mainColor} size={35} />
            <Text style={styles.cardText}>Notification</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </Pressable>
        <Pressable onPress={() => sethelpModal(true)} style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#2e53b97a' }} name="help-outline" color={GlobalColor.mainColor} size={35} />
            <Text style={styles.cardText}>Help</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </Pressable>

        <View style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#2e53b97a' }} name="trash" color={GlobalColor.mainColor} size={35} />
            <Text style={styles.cardText}>Delete account</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </View>

        <Pressable onPress={() => { logout() }} style={styles.cardList}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Icon style={{ padding:10, borderRadius: 100,backgroundColor:'#b92e2e42' }} name="power" color='red' size={30} />
            <Text style={[styles.cardText, { color: 'red' }]}>Log out</Text>
          </View>
          <Icon name="chevron-forward" color={GlobalColor.iconColor} size={35} />
        </Pressable>
      </View>
      <ProfileModal visible={profileModal} setVisible={setProfileModal} />
      <ChangePassword visible={changePassword} setVisible={setChangePassword} />
      <HelpModal visible={helpModal} setVisible={sethelpModal} />
    </View>

  );
}

const styles = StyleSheet.create({
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 80,
  },
  name: {
    color: GlobalColor.textColor,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 2,
    textTransform: 'capitalize'
  },
  card: {
    borderRadius: 10,
    borderWidth: 2,
    width: '90%',
    marginTop: 26,
    gap: 18,
    elevation: 1,
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  cardList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  cardText: {
    color: GlobalColor.textColor,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left'
  }
});

export default Profile;