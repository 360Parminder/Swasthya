import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';

const EquipmentModal = ({ visible, onClose }) => {
    const equipment = [
        { id: '1', name: 'Dumbbells', icon: 'barbell' },
        { id: '2', name: 'Barbells', icon: 'barbell' },
        { id: '3', name: 'Machines', icon: 'fitness' },
        { id: '4', name: 'Resistance Bands', icon: 'ribbon' },
        { id: '5', name: 'Bodyweight', icon: 'body' },
        { id: '6', name: 'Kettlebells', icon: 'barbell' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Icon name={item.icon} size={24} color={GlobalColor.mainColor} />
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <BaseExerciseModal
            visible={visible}
            onClose={onClose}
            title="Equipment Exercises"
        >
            <FlatList
                data={equipment}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
        </BaseExerciseModal>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemText: {
        color: GlobalColor.textColor,
        fontSize: 16,
        marginLeft: 15,
    },
});

export default EquipmentModal; 