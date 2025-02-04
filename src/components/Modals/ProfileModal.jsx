import { Modal, Text, View } from "react-native";

const ProfileModal = (profileModal) => {
    return (
       <Modal
       animationType="slide"
       transparent={true}
       visible={profileModal}
       >
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>Profile Modal</Text>
        </View>
       </Modal>
    );
}
export default ProfileModal;