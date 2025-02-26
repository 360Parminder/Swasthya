import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import ExerciseCard from '../Cards/ExerciseCard';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../../services/userData';

const WorkPlansModal = ({ visible, onClose }) => {
    const workoutPlans = [
        { id: '1', name: 'Beginner', icon: 'body' },
        { id: '2', name: 'Intermediate', icon: 'barbell' },
        { id: '3', name: 'Advanced', icon: 'fitness' },
        { id: '4', name: 'Full Body', icon: 'body' },
        { id: '5', name: 'Upper Body', icon: 'body' },
        { id: '6', name: 'Lower Body', icon: 'body' },
    ];

    const [exercises, setExercises] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(workoutPlans[0].name);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchExercises = async () => {
            if (selectedPlan) {
                setLoading(true);
                // Replace with actual API call when available
                const response = await userData.getExerciseList();
                setExercises(response.data);
                setLoading(false);
            }
        };
        fetchExercises();
    }, [selectedPlan]);

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={[
                styles.itemContainer,
                selectedPlan === item.name && styles.selectedItem
            ]} 
            onPress={() => setSelectedPlan(item.name)}
        >
            <Icon name={item.icon} size={24} color={GlobalColor.mainColor} />
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <BaseExerciseModal
            visible={visible}
            onClose={onClose}
            title="Workout Plans"
        >
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={workoutPlans}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
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
        </BaseExerciseModal>
    );
};

const styles = StyleSheet.create({
    listContainer: {
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
    selectedItem: {
        backgroundColor: GlobalColor.mainColor + '40',
    },
});

export default WorkPlansModal;
