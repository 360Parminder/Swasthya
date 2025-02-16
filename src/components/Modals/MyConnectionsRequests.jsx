import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    FlatList,
    Image,
    Alert,
} from 'react-native';
import userData from '../../services/userData';
import GlobalColor from '../../Styles/GlobalColor';

const MyConnectionsRequests = ({ isVisible, onClose }) => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await userData.fetchConnectionRequests();
            if (response.success) {
                setRequests(response.data.data);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch connection requests');
            console.error('Error fetching requests:', error);
        }
    };

    const handleAcceptRequest = async (userId) => {
        try {
            const response = await userData.acceptConnectionRequest(userId);
            if (response.success) {
                Alert.alert('Success', 'Connection request accepted');
                fetchRequests();
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to accept request');
        }
    };

    const handleRejectRequest = async (userId) => {
        try {
            const response = await userData.rejectConnectionRequest(userId);
            if (response.success) {
                Alert.alert('Success', 'Connection request rejected');
                fetchRequests();
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to reject request');
        }
    };

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

    const renderRequestCard = ({ item }) => (
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
            <View style={styles.actionButtons}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.acceptButton]}
                    onPress={() => handleAcceptRequest(item._id)}
                >
                    <Text style={styles.actionButtonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionButton, styles.rejectButton]}
                    onPress={() => handleRejectRequest(item._id)}
                >
                    <Text style={styles.actionButtonText}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const EmptyListComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No connection requests</Text>
        </View>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Connection Requests</Text>
                    <FlatList
                        data={requests}
                        renderItem={renderRequestCard}
                        keyExtractor={(item) => item._id}
                        contentContainerStyle={styles.listContainer}
                        ListEmptyComponent={EmptyListComponent}
                    />

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Close</Text>
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
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: GlobalColor.primaryColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '90%',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: GlobalColor.textColor,
    },
    listContainer: {
        paddingVertical: 10,
    },
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
        color: GlobalColor.textColor,
        marginBottom: 2,
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
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: GlobalColor.textColor,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: GlobalColor.errorColor,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
    },
    closeButtonText: {
        color: GlobalColor.buttonTextColor,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default MyConnectionsRequests;
