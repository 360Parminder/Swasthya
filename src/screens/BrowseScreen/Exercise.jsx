import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';
import SquareBox from '../../components/Button/SquareBox';
import ExerciseListModal from '../../components/Modals/ExerciseListModal';
import BodyPartModal from '../../components/Modals/BodyPartModal';
import EquipmentModal from '../../components/Modals/EquipmentModal';
import MuscleTargetModal from '../../components/Modals/MuscleTargetModal';
// import WorkoutPlansModal from '../../components/Modals/WorkoutPlansModal';
// import ExerciseNameModal from '../../components/Modals/ExerciseNameModal';
// import MuscleWorkoutModal from '../../components/Modals/MuscleWorkoutModal';

const Exercise = () => {
    const [exerciseListModal, setExerciseListModal] = useState(false);
    const [bodyPartModal, setBodyPartModal] = useState(false);
    const [equipmentModal, setEquipmentModal] = useState(false);
    const [muscleTargetModal, setMuscleTargetModal] = useState(false);
    const [workoutPlansModal, setWorkoutPlansModal] = useState(false);
    const [exerciseNameModal, setExerciseNameModal] = useState(false);
    const [muscleWorkoutModal, setMuscleWorkoutModal] = useState(false);

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.buttonContainer}>
                <SquareBox
                    title="Exercise List"
                    icon="list"
                    onPress={() => setExerciseListModal(true)}
                />
                <SquareBox
                    title="Body Part Exercise"
                    icon="body"
                    onPress={() => setBodyPartModal(true)}
                />
                <SquareBox
                    title="Equipment Exercise"
                    icon="barbell"
                    onPress={() => setEquipmentModal(true)}
                />
                <SquareBox
                    title="Target Muscle"
                    icon="fitness"
                    onPress={() => setMuscleTargetModal(true)}
                />
                <SquareBox
                    title="Workout Plans"
                    icon="calendar"
                    onPress={() => setWorkoutPlansModal(true)}
                />
                <SquareBox
                    title="Search Exercise"
                    icon="search"
                    onPress={() => setExerciseNameModal(true)}
                />
                <SquareBox
                    title="Muscle Workout"
                    icon="bicycle"
                    onPress={() => setMuscleWorkoutModal(true)}
                />
            </View>

            <ExerciseListModal 
                visible={exerciseListModal}
                onClose={() => setExerciseListModal(false)}
            />
            <BodyPartModal 
                visible={bodyPartModal}
                onClose={() => setBodyPartModal(false)}
            />
            <EquipmentModal 
                visible={equipmentModal}
                onClose={() => setEquipmentModal(false)}
            />
            <MuscleTargetModal 
                visible={muscleTargetModal}
                onClose={() => setMuscleTargetModal(false)}
            />
            {/* <WorkoutPlansModal 
                visible={workoutPlansModal}
                onClose={() => setWorkoutPlansModal(false)}
            />
            <ExerciseNameModal 
                visible={exerciseNameModal}
                onClose={() => setExerciseNameModal(false)}
            />
            <MuscleWorkoutModal 
                visible={muscleWorkoutModal}
                onClose={() => setMuscleWorkoutModal(false)}
            /> */}
        </View>
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

export default Exercise;
