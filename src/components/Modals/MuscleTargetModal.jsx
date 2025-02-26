import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';
import Icon from 'react-native-vector-icons/Ionicons';
import userData from '../../services/userData';
import ExerciseCard from '../Cards/ExerciseCard';

const MuscleTargetModal = ({ visible, onClose }) => {
    const muscles = [
        { id: '1', name: 'abductors', icon: 'fitness' },
        { id: '2', name: 'abs', icon: 'fitness' },
        { id: '3', name: 'adductors', icon: 'fitness' },
        { id: '4', name: 'biceps', icon: 'fitness' },
        { id: '5', name: 'calves', icon: 'fitness' },
        { id: '6', name: 'cardiovascular system', icon: 'fitness' },
        { id: '7', name: 'delts', icon: 'fitness' },
        { id: '8', name: 'forearms', icon: 'fitness' },
        { id: '9', name: 'glutes', icon: 'fitness' },
        { id: '10', name: 'hamstrings', icon: 'fitness' },
        { id: '11', name: 'lats', icon: 'fitness' },
        { id: '12', name: 'levator scapulae', icon: 'fitness' },
        { id: '13', name: 'pectorals', icon: 'fitness' },
        { id: '14', name: 'quads', icon: 'fitness' },
        { id: '15', name: 'serratus anterior', icon: 'fitness' },
        { id: '16', name: 'spine', icon: 'fitness' },
        { id: '17', name: 'traps', icon: 'fitness' },
        { id: '18', name: 'triceps', icon: 'fitness' },
        { id: '19', name: 'upper back', icon: 'fitness' },
    ];
    const [selectedMuscle, setSelectedMuscle] = useState(muscles[0].name);
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    useEffect(() => {
        setLoading(true);
        const fetchExercises = async () => {
            const response = await userData.getExerciseMuscleTarget(selectedMuscle);
            if (response.success) { 
                setExercises(response.data);
            }
            setLoading(false);
        };
        fetchExercises();
    }, [selectedMuscle]);
    const renderItem = ({ item }) => (
        <TouchableOpacity style={[
            styles.itemContainer,
            selectedMuscle === item.name && styles.selectedItem
        ]} onPress={() => setSelectedMuscle(item.name)}>
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
                showsHorizontalScrollIndicator={false}
                horizontal
                data={muscles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
            />
            {loading ? (<ActivityIndicator size="large" color={GlobalColor.mainColor} />) : (
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
        height: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    itemContainer: {
        height: 50,
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
    selectedItem: {
        backgroundColor: GlobalColor.mainColor + '40',
    },
});

export default MuscleTargetModal; 