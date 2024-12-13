import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import UserAuth from '../../services/UserAuth';

const ForgetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = async() => {
      const response = await UserAuth.forgetPassword(email, newPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Forget Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </Pressable>
            <View style={styles.footer}>
                <Text>Remember the password? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Log in</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    loginText: {
        color: '#007BFF',
    },
});

export default ForgetPassword;