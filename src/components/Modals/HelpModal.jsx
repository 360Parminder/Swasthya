import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, Touchable, TouchableOpacity } from 'react-native';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';
const HelpModal = ({ visible, setVisible }) => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        // Handle the submit action here
        console.log('Email:', email);
        console.log('Feedback:', feedback);
        setEmail('');
        setFeedback('');
        onClose();
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <View style={{ width: '100%', height: '10%', flexDirection: 'row', alignItems: 'center', borderRadius: 10, justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity onPress={() => setVisible(false)} style={{}}> <Icon style={{ fontWeight: '600' }} name="close-outline" color={GlobalColor.errorColor} size={30} /></TouchableOpacity>
                        <Text style={{ color: GlobalColor.textColor, fontSize: 20, fontWeight: '600' }}>Help</Text>
                        <View style={{ width: 50 }} />
                    </View>
                    <Text style={styles.title}>We’re here to help whenever you need us</Text>
                    <Text style={styles.subtitle}>Have a question? Send a message to 360.parminder@gmail.com at any time</Text>

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Support"
                        placeholderTextColor={GlobalColor.textColor}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.label}>Feedback:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Send a Feedback"
                        placeholderTextColor={GlobalColor.textColor}
                        value={feedback}
                        onChangeText={setFeedback}
                        multiline
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '100%',
        height: '70%',
        padding: 20,
        backgroundColor: GlobalColor.primaryColor,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        width: '80%',
        color: GlobalColor.textColor,
    },
    subtitle: {
        textAlign: 'center',
        width: '70%',
        marginVertical: 10,
        color: GlobalColor.textColor,
    },
    label: {
        width: '90%',
        fontSize: 16,
        marginBottom: 8,
        color: GlobalColor.textColor,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1.5,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingVertical: 5,
        color: GlobalColor.textColor,
    },
    button: {
        backgroundColor: GlobalColor.mainColor,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: '90%',
    },
    buttonText: {
        color: GlobalColor.textColor,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HelpModal;
