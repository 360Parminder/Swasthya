import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import ExerciseCard from '../Cards/ExerciseCard';
import userData from '../../services/userData';

const ExerciseListModal = ({ visible, onClose }) => {
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await userData.getExercises();
            setExercises(response.data);
        };
        fetchExercises();
    }, []);

    return (
        <BaseExerciseModal
            visible={visible}
            onClose={onClose}
            title="Exercise List"
        >
            <View style={styles.container}>
                {exercises?.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        onBookmark={setSelectedExercise}
                    />
                ))}
            </View>
        </BaseExerciseModal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default ExerciseListModal; 