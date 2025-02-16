import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';
import AddConnections from '../../components/Modals/AddConnections';
import MyConnections from '../../components/Modals/MyConnections';
import MyConnectionsRequests from '../../components/Modals/MyConnectionsRequests';
import GlobalColor from '../../Styles/GlobalColor';

const Connections = () => {
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const [isOtherModalVisible, setOtherModalVisible] = useState(false);
    const [isRequestsModalVisible, setRequestsModalVisible] = useState(false);

    const renderModal = (isVisible, setVisible, title, content) => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <Text style={styles.modalText}>{content}</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setAddModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Add Friend and Family</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setViewModalVisible(true)}
                >
                    <Text style={styles.buttonText}>View My Connections</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setRequestsModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Show My Requests</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setOtherModalVisible(true)}
                >
                    <Text style={styles.buttonText}>Other</Text>
                </TouchableOpacity>
            </View>

            <AddConnections
                isVisible={isAddModalVisible}
                onClose={() => setAddModalVisible(false)}
            />

            <MyConnections
                isVisible={isViewModalVisible}
                onClose={() => setViewModalVisible(false)}
            />

            <MyConnectionsRequests
                isVisible={isRequestsModalVisible}
                onClose={() => setRequestsModalVisible(false)}
            />

            {renderModal(
                isOtherModalVisible,
                setOtherModalVisible,
                'Other Options',
                'Additional options and settings'
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        width: '48%',
        height: 100,
        backgroundColor: GlobalColor.buttonBackgroundColor,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: GlobalColor.buttonTextColor,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Connections;
