import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GlobalColor from '../../Styles/GlobalColor';

const RequestCard = ({ item, type, onAccept, onReject }) => {
    console.log("item",item);
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }; 

    return (
        <View key={item._id} style={styles.card}>
            <View style={styles.userInfoContainer}>
                <Image
                    source={
                        item.picture
                            ? { uri: item.picture }
                            : require('../../assets/images/Profile.png')
                    }
                    style={styles.profileImage}
                />
                <View style={styles.userDetails}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.userInfo}>
                        Age: {calculateAge(item.dob)} | Gender: {item.gender}
                    </Text>
                    <Text style={styles.userId}>ID: {item._id}</Text>
                </View>
            </View>

            {type === 'received' && (
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={[styles.actionButton, styles.acceptButton]}
                        onPress={() => onAccept(item._id)}
                    >
                        <Text style={styles.actionButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.actionButton, styles.rejectButton]}
                        onPress={() => onReject(item._id)}
                    >
                        <Text style={styles.actionButtonText}>Reject</Text>
                    </TouchableOpacity>
                </View>
            )}

            {type === 'sent' && (
                <View style={styles.statusContainer}>
                    <Text style={styles.pendingText}>Pending</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    userInfoContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    userDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: GlobalColor.textColor,
    },
    userInfo: {
        fontSize: 14,
        color: GlobalColor.textColor,
        marginBottom: 2,
    },
    userId: {
        fontSize: 12,
        color: GlobalColor.textColor + '80',
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    acceptButton: {
        backgroundColor: GlobalColor.successColor,
    },
    rejectButton: {
        backgroundColor: GlobalColor.errorColor,
    },
    actionButtonText: {
        color: GlobalColor.buttonTextColor,
        fontSize: 16,
        fontWeight: '600',
    },
    statusContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    pendingText: {
        color: GlobalColor.warningColor,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default RequestCard;
