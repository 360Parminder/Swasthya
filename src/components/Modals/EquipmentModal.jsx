import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';

const EquipmentModal = ({ visible, onClose }) => {
    const equipment = [
        { id: '1', name: 'assisted', icon: 'fitness' },
        { id: '2', name: 'band', icon: 'ribbon' },
        { id: '3', name: 'barbell', icon: 'barbell' },
        { id: '4', name: 'body weight', icon: 'body' },
        { id: '5', name: 'bosu ball', icon: 'fitness' },
        { id: '6', name: 'cable', icon: 'fitness' },
        { id: '7', name: 'dumbbell', icon: 'barbell' },
        { id: '8', name: 'elliptical machine', icon: 'fitness' },
        { id: '9', name: 'ez barbell', icon: 'barbell' },
        { id: '10', name: 'hammer', icon: 'hammer' },
        { id: '11', name: 'kettlebell', icon: 'barbell' },
        { id: '12', name: 'leverage machine', icon: 'fitness' },
        { id: '13', name: 'medicine ball', icon: 'fitness' },
        { id: '14', name: 'olympic barbell', icon: 'barbell' },
        { id: '15', name: 'resistance band', icon: 'ribbon' },
        { id: '16', name: 'roller', icon: 'fitness' },
        { id: '17', name: 'rope', icon: 'fitness' },
        { id: '18', name: 'skierg machine', icon: 'fitness' },
        { id: '19', name: 'sled machine', icon: 'fitness' },
        { id: '20', name: 'smith machine', icon: 'fitness' },
        { id: '21', name: 'stability ball', icon: 'fitness' },
        { id: '22', name: 'stationary bike', icon: 'bicycle' },
        { id: '23', name: 'stepmill machine', icon: 'fitness' },
        { id: '24', name: 'tire', icon: 'fitness' },
        { id: '25', name: 'trap bar', icon: 'barbell' },
        { id: '26', name: 'upper body ergometer', icon: 'fitness' },
        { id: '27', name: 'weighted', icon: 'barbell' },
        { id: '28', name: 'wheel roller', icon: 'fitness' },
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
                horizontal
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
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        padding: 10,
    },
    itemContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    itemText: {
        color: GlobalColor.textColor,
        fontSize: 16,
        marginLeft: 15,
    },
});

export default EquipmentModal; 