import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseExerciseModal from './BaseExerciseModal';
import GlobalColor from '../../Styles/GlobalColor';

const ExerciseListModal = ({ visible, onClose }) => {
    return (
        <BaseExerciseModal
            visible={visible}
            onClose={onClose}
            title="Exercise List"
        >
            <View style={styles.container}>
                {/* Add your exercise list content here */}
                <Text style={styles.text}>Exercise List Content</Text>
            </View>
        </BaseExerciseModal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    text: {
        color: GlobalColor.textColor,
        fontSize: 16,
    },
});

export default ExerciseListModal; 