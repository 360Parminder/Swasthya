import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';

const MuscleTargetModal = ({ visible, onClose }) => {
    const muscles = [
        { id: '1', name: 'Pectoralis (Chest)', icon: 'fitness' },
        { id: '2', name: 'Latissimus (Back)', icon: 'fitness' },
        { id: '3', name: 'Deltoids (Shoulders)', icon: 'fitness' },
        { id: '4', name: 'Biceps', icon: 'fitness' },
        { id: '5', name: 'Triceps', icon: 'fitness' },
        { id: '6', name: 'Quadriceps', icon: 'fitness' },
        { id: '7', name: 'Hamstrings', icon: 'fitness' },
        { id: '8', name: 'Abdominals', icon: 'fitness' },
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
            title="Target Muscles"
        >
            <FlatList
                data={muscles}
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

export default MuscleTargetModal; 