import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';

const ExerciseDescription = ({ route }) => {
    // Mock data (replace with actual data from props or API)
    const exercise = {
        name: "Bench Press",
        image: require('../assets/images/Group.png'), // Replace with your image path
        sets: "3 sets",
        reps: "12 reps",
        details: "Weight: 50kg",
        instructions: [
            "Lie on the bench with your feet flat on the ground",
            "Grip the bar slightly wider than shoulder width",
            "Lower the bar to your chest in a controlled manner",
            "Push the bar back up to the starting position",
            "Keep your core tight throughout the movement"
        ]
    };

    return (
        <View style={GlobalStyles.container}>
            <ScrollView >
                <Card style={styles.imageCard}>
                    <Image
                        source={exercise.image}
                        style={styles.exerciseImage}
                        resizeMode='contain'
                    />
                </Card>

                <Card style={styles.detailsCard}>
                    <Card.Content>
                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                        <View style={styles.statsContainer}>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Sets</Text>
                                <Text style={styles.statValue}>{exercise.sets}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Reps</Text>
                                <Text style={styles.statValue}>{exercise.reps}</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Text style={styles.statLabel}>Details</Text>
                                <Text style={styles.statValue}>{exercise.details}</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={styles.detailsCard}>
                    <Card.Content>
                        <View style={styles.instructionsContainer}>
                            <Text style={styles.instructionsTitle}>How to do it ?</Text>
                            {exercise.instructions.map((instruction, index) => (
                                <Text key={index} style={styles.instruction}>
                                    {index + 1}. {instruction}
                                </Text>
                            ))}
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
            <TouchableOpacity style={[GlobalStyles.button,{marginBottom:10}]}>
                <Text style={GlobalStyles.buttonText}>Start exercise now!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    imageCard: {
        backgroundColor: GlobalColor.primaryColor,
        marginBottom: 16,
        elevation: 4,
        padding:10
    },
    exerciseImage: {
        width: '100%',
        height: 200,
    },
    detailsCard: {
        backgroundColor: GlobalColor.secondaryColor,
        elevation: 4,
        marginBottom:24
    },
    exerciseName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: GlobalColor.textColor
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 16,
        color: GlobalColor.textColor,
        marginBottom: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
    },
    instructionsContainer: {
        justifyContent: 'space-between',
        marginTop: 8,
    },
    instructionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: GlobalColor.textColor,
    },
    instruction: {
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 24,
        color: GlobalColor.textColor,
    },
});

export default ExerciseDescription;