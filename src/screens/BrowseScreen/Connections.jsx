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
import SquareBox from '../../components/Button/SquareBox';

const Connections = () => {
    const [isAddModalVisible, setAddModalVisible] = useState(false);
    const [isViewModalVisible, setViewModalVisible] = useState(false);
    const [isRequestsModalVisible, setRequestsModalVisible] = useState(false);

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={styles.buttonContainer}>
                <SquareBox
                    title="Add Connection"
                    icon="person-add"
                    onPress={() => setAddModalVisible(true)}
                />
                <SquareBox
                    title="My Connections"
                    icon="people"
                    onPress={() => setViewModalVisible(true)}
                />
                <SquareBox
                    title="Show My Requests"
                    icon="mail-unread"
                    onPress={() => setRequestsModalVisible(true)}
                />
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
        gap: 10,
    },
});

export default Connections;
