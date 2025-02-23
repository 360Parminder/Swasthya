import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    TouchableOpacity,
    FlatList,
    Alert,
} from 'react-native';
import userData from '../../services/userData';
import GlobalColor from '../../Styles/GlobalColor';
import RequestCard from '../Cards/RequestCard';

const MyConnectionsRequests = ({ isVisible, onClose }) => {
    const [receivedRequests, setReceivedRequests] = useState([]);
    const [sentRequests, setSentRequests] = useState([]);
    const [activeTab, setActiveTab] = useState('received');

    useEffect(() => {
        if (isVisible) {
            fetchRequests();
        }
    }, [isVisible]);

    const fetchRequests = async () => {
        try {
            const response = await userData.fetchConnectionRequests();
            console.log("response",response);
            
            if (response.success) {
                setReceivedRequests(response.data.receivedRequests);
                setSentRequests(response.data.sentRequests);
            } else {
                Alert.alert('Error', response.message);
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
            } else {
                Alert.alert('Error', response.message);
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
            } else {
                Alert.alert('Error', response.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to reject request');
        }
    };

    const EmptyListComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No {activeTab} requests</Text>
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
                    
                    <View style={styles.tabContainer}>
                        <TouchableOpacity 
                            style={[styles.tab, activeTab === 'received' && styles.activeTab]}
                            onPress={() => setActiveTab('received')}
                        >
                            <Text style={[styles.tabText, activeTab === 'received' && styles.activeTabText]}>
                                Received
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.tab, activeTab === 'sent' && styles.activeTab]}
                            onPress={() => setActiveTab('sent')}
                        >
                            <Text style={[styles.tabText, activeTab === 'sent' && styles.activeTabText]}>
                                Sent
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={activeTab === 'received' ? receivedRequests : sentRequests}
                        renderItem={({ item }) => (
                            <RequestCard
                                item={activeTab === 'received' ? item.sender : item.receiver}
                                type={activeTab}
                                onAccept={handleAcceptRequest}
                                onReject={handleRejectRequest}
                            />
                        )}
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: GlobalColor.primaryColor,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
    tabContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        padding: 5,
    },
    tab: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 8,
    },
    activeTab: {
        backgroundColor: GlobalColor.mainColor,
    },
    tabText: {
        fontSize: 16,
        color: GlobalColor.textColor,
        fontWeight: '500',
    },
    activeTabText: {
        color: GlobalColor.buttonTextColor,
        fontWeight: '600',
    },
    listContainer: {
        flexGrow: 1,
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
