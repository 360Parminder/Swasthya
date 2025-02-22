import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';

const SquareBox = ({ title, onPress, icon, style }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]} 
            onPress={onPress}
        >
            {icon && (
                <Icon 
                    name={icon} 
                    size={24} 
                    color={GlobalColor.textColor} 
                    style={styles.icon}
                />
            )}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: 150,
        backgroundColor: GlobalColor.primaryColor,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    buttonText: {
        color: GlobalColor.textColor,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8,
    },
    icon: {
        marginBottom: 8,
    }
});

export default SquareBox;
