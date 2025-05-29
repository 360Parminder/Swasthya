import { Image, Modal, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";
import { useContext } from "react";
import { userDataContext } from "../../context/UserContext";
import { Icon } from "react-native-elements";

const ProfileModal = ({ visible, setVisible }) => {
  const { user } = useContext(userDataContext)
  console.log(user);
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center', backgroundColor: GlobalColor.primaryColor, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <View style={{ width: '100%', height: '10%', flexDirection: 'row', alignItems: 'center', borderRadius: 10, justifyContent: 'space-between', padding: 10 }}>
            <View style={{ width: 50 }} />
            <Text style={{ color: GlobalColor.textColor, fontSize: 20, fontWeight: '600' }}>Personal Details</Text>
            <TouchableOpacity onPress={() => setVisible(false)} style={{ padding: 10 }}><Text style={{ color: GlobalColor.mainColor }}><Icon name="chevron-down" color={GlobalColor.textColor} type="ionicon" size={32} style={{}}/></Text></TouchableOpacity>
          </View>
          <ScrollView style={{ width: '100%', height: '100%' }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Image style={{ width: 120, height: 120, borderRadius: 100 }}
                source={user?.picture
                  ? { uri: user?.picture }
                  : require('../../assets/images/Profile.jpg')} />
              <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', textTransform: 'capitalize', color: GlobalColor.textColor }}>{user?.username}</Text>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '400', textTransform: 'capitalize', color: GlobalColor.textColor }}>{user?.mobile}</Text>
            </View>


              {/* Personal Details */}
              <View style={styles.category}>
                            <Text style={styles.categoryTitle}>Personal Details</Text>

                            <View style={{ backgroundColor: GlobalColor.secondaryColor, padding: 10, borderRadius: 10 }}>
                                <Text style={styles.detailItem}>
                                    Name: {user?.username}
                                </Text>

                                <Text style={styles.detailItem}>
                                    Date of Birth: {user?.dob}
                                </Text>
                                <Text style={styles.detailItem}>
                                    Gender: {user?.gender}
                                </Text>
                                <Text style={styles.detailItem}>
                                    Food Preference: {user?.food_preference=="veg"?"Vegetarian":"Non-Vegetarian"}
                                </Text>
                                <Text style={styles.detailItem}>
                                    height: {user?.height}
                                </Text>
                                <Text style={styles.detailItem}>
                                    weight: {user?.weight}
                                </Text>
                            </View>

                        </View>
                         {/* Contact Details */}
                         <View style={styles.category}>
                            <Text style={styles.categoryTitle}>Contact</Text>
                            <View style={{ backgroundColor: GlobalColor.secondaryColor, padding: 10, borderRadius: 10 }}>
                                <Text style={styles.detailItem}>Email: {user?.email?user.email:"email not provided"}</Text>
                                <Text style={styles.detailItem}>Phone: {user?.mobile}</Text>
                            </View>
                        </View>
                         {/* family and friends Details */}
                         <View style={styles.category}>
                            <Text style={styles.categoryTitle}>Family and Friends Details</Text>
                            <View style={{ backgroundColor: GlobalColor.secondaryColor, padding: 10, borderRadius: 10 }}>
                               {
                                user?.relatives.map((relatives,index)=>{
                                    return(
                                        <Text style={styles.detailItem} key={index}>Name: {relatives.name} Relation: {relatives.relation}</Text>
                                    )
                                })
                               }
                            </View>
                        </View>

          </ScrollView>

        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  category: {
    marginBottom: 15,
    // backgroundColor: GlobalColors.secondary,
},
categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: GlobalColor.textColor
},
detailItem: {
    fontSize: 14,
    marginBottom: 3,
    marginLeft: 10,
    color: GlobalColor.textColor,
    textTransform: 'capitalize'

},
});
export default ProfileModal;