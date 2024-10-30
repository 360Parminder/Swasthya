import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';

const Help = () => {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        // Handle the submit action here
        console.log('Email:', email);
        console.log('Feedback:', feedback);
        setEmail('');
        setFeedback('');
    };

    return (
        <View style={[GlobalStyles.container,{justifyContent:'center',alignItems:'center'}]}>
            <Text style={{fontSize:30,fontWeight:'700',textAlign:'center',width:'80%'}}>We’re here to help whenever you need us</Text>
            <Text style={{textAlign:'center',width:'70%',marginVertical:10}}>Have a question? Send a message to 360.parminder@gmail.com at any time</Text>

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Email Support"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styles.label}>Feedback:</Text>
            <TextInput
                style={styles.input}
                placeholder="Send a Feedback"
                value={feedback}
                onChangeText={setFeedback}
                multiline
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    label: {
        width: '90%',
        fontSize: 16,
        marginBottom: 8,
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
    },
});

export default Help;