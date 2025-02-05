import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import GlobalColor from '../../Styles/GlobalColor';
import FloatingLabelInput from '../Inputs/FloatingLabelInput';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAuth from '../../services/UserAuth';


const ChangePassword = ({ visible, setVisible }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = async () => {
        try {
            const response = await UserAuth.updatePassword(oldPassword, newPassword);
            if (response.success) {
                Alert.alert('Success', 'Password changed successfully');
                setVisible(false);
                setOldPassword('');
                setNewPassword('');
            } else {
                Alert.alert('Error', response.message);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while changing password');
        }


    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ width: '100%', height: '10%', flexDirection: 'row', alignItems: 'center', borderRadius: 10, justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity onPress={() => setVisible(false)} style={{}}> <Icon style={{ fontWeight: '600' }} name="close-outline" color={GlobalColor.errorColor} size={30} /></TouchableOpacity>
                        <Text style={{ color: GlobalColor.textColor, fontSize: 20, fontWeight: '600' }}>Change Password</Text>
                        <View style={{ width: 50 }} />
                    </View>
                    <FloatingLabelInput
                        label="Old Password"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry={true}
                    />
                    <FloatingLabelInput
                        label="New Password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => handlePasswordChange()}
                    >
                        <Text style={styles.buttonText}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalView: {
        width: '100%',
        height: '70%',
        backgroundColor: GlobalColor.primaryColor,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: GlobalColor.mainColor,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonText: {
        color: GlobalColor.textColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ChangePassword;