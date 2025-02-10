import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';
import { userDataContext } from '../../context/UserContext';

const NetworkError = () => {
    const { onRetry } = useContext(userDataContext);
    return (
        <View style={[GlobalStyles.container,{justifyContent:'center'}]}>
            <Image 
                source={require('../../assets/images/network_error.png')} 
                style={styles.image} 
            />
            <Text style={GlobalStyles.text}>Network/Request Error</Text>
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    retryButton: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    retryText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default NetworkError;