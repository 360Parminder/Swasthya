import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import ExerciseCard from '../Cards/ExerciseCard';
import userData from '../../services/userData';
import { ActivityIndicator } from 'react-native-paper';

const ExerciseListModal = ({ visible, onClose }) => {
    const [exercises, setExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const fetchExercises = async () => {
            setLoading(true);
            const response = await userData.getExercises();
            if (!response) {
                setLoading(false);
                return;
            }
            setLoading(false);
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
            {
                loading ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <View style={styles.container}>
                        {exercises?.map((exercise) => (
                            <ExerciseCard
                                key={exercise.id}
                                exercise={exercise}
                                onPress={() => setSelectedExercise(exercise)}
                            />
                        ))}
                    </View>
            }
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