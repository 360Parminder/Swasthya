import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';

const BodyPartModal = ({ visible, onClose }) => {
    const bodyParts = [
        { id: '1', name: 'Chest', icon: 'body' },
        { id: '2', name: 'Back', icon: 'body' },
        { id: '3', name: 'Shoulders', icon: 'body' },
        { id: '4', name: 'Arms', icon: 'body' },
        { id: '5', name: 'Legs', icon: 'body' },
        { id: '6', name: 'Core', icon: 'body' },
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
            title="Body Part Exercises"
        >
            <FlatList
                data={bodyParts}
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

export default BodyPartModal; 