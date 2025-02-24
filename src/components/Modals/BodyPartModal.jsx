import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import ExerciseCard from '../Cards/ExerciseCard';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../../services/userData';

const BodyPartModal = ({ visible, onClose }) => {
    const [exercises, setExercises] = useState([]);
    const [selectedBodyPart, setSelectedBodyPart] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [loading, setLoading] = useState(false);

    const bodyParts = [
        { id: '1', name: 'back', icon: 'body' },
        { id: '2', name: 'cardio', icon: 'body' },
        { id: '3', name: 'chest', icon: 'body' },
        { id: '4', name: 'lower arms', icon: 'body' },
        { id: '5', name: 'lower legs', icon: 'body' },
        { id: '6', name: 'shoulders', icon: 'body' },
        { id: '7', name: 'upper arms', icon: 'body' },
        { id: '8', name: 'upper legs', icon: 'body' },
        { id: '9', name: 'waist', icon: 'body' },
    ];

    useEffect(() => {
        const fetchExercises = async () => {
            if (selectedBodyPart) {
                setLoading(true);
                const response = await userData.getExerciseBodyPart(selectedBodyPart);
                setExercises(response.data);
                setLoading(false);
            }
        };
        fetchExercises();
    }, [selectedBodyPart]);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={[
                styles.itemContainer,
                selectedBodyPart === item.name && styles.selectedItem
            ]} 
            onPress={() => setSelectedBodyPart(item.name)}
        >
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
                horizontal
                data={bodyParts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
            <View style={styles.exercisesContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color={GlobalColor.mainColor} />
                ) : (
                    exercises?.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            onBookmark={setSelectedExercise}
                        />
                    ))
                )}
            </View>
        </BaseExerciseModal>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    exercisesContainer: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    selectedItem: {
        backgroundColor: GlobalColor.mainColor + '40',
    },
    itemText: {
        textTransform: 'capitalize',
        color: GlobalColor.textColor,
        fontSize: 16,
        marginLeft: 15,
    },
});

export default BodyPartModal; 