import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";
import { Icon } from "react-native-elements";

const ModalHeading = ({ title, setModalVisible }) => {
  return (
    <View style={styles.modalHeader}>
        <View style={{width:50}} />
      <Text style={styles.modalTitle}>{title}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
        <Icon name="chevron-down" type="ionicon" size={30} color={GlobalColor.textColor} />
      </TouchableOpacity>
    </View>
  );
}   

export default ModalHeading;

const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    modalTitle: {
        color: GlobalColor.textColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    closeButton: {
        
    },
    closeButtonText: {
        color: GlobalColor.mainColor,
        fontSize:20,
        fontWeight: 'bold',
    }
});