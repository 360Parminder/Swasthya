import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';

const ExerciseCard = ({ exercise, onBookmark }) => {
    return (
        <View key={exercise.id} style={styles.exerciseCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <TouchableOpacity onPress={() => onBookmark(exercise)}>
                    <Icon name="bookmark-outline" size={24} color={GlobalColor.mainColor} />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: exercise.gifUrl }}
                    style={styles.exerciseImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.tagsContainer}>
                <View style={styles.tag}>
                    <Icon name="body-outline" size={16} color={GlobalColor.mainColor} />
                    <Text style={styles.tagText}>{exercise.bodyPart}</Text>
                </View>
                <View style={styles.tag}>
                    <Icon name="barbell-outline" size={16} color={GlobalColor.mainColor} />
                    <Text style={styles.tagText}>{exercise.equipment}</Text>
                </View>
                <View style={styles.tag}>
                    <Icon name="fitness-outline" size={16} color={GlobalColor.mainColor} />
                    <Text style={styles.tagText}>{exercise.target}</Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Secondary Muscles:</Text>
                <Text style={styles.sectionText}>{exercise.secondaryMuscles.join(', ')}</Text>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Instructions:</Text>
                {exercise.instructions.map((instruction, index) => (
                    <View key={index} style={styles.instructionItem}>
                        <Text style={styles.bulletPoint}>•</Text>
                        <Text style={styles.instructionText}>{instruction}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseCard: {
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    exerciseName: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
        flex: 1,
    },
    imageContainer: {
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
        backgroundColor: GlobalColor.primaryColor,
    },
    exerciseImage: {
        width: '100%',
        height: '100%',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 15,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GlobalColor.mainColor + '20',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    tagText: {
        color: GlobalColor.textColor,
        marginLeft: 5,
        fontSize: 14,
    },
    sectionContainer: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalColor.mainColor,
        marginBottom: 5,
    },
    sectionText: {
        color: GlobalColor.textColor,
        fontSize: 14,
    },
    instructionItem: {
        flexDirection: 'row',
        marginBottom: 5,
        paddingRight: 10,
    },
    bulletPoint: {
        color: GlobalColor.mainColor,
        marginRight: 8,
        fontSize: 14,
    },
    instructionText: {
        color: GlobalColor.textColor,
        fontSize: 14,
        flex: 1,
    },
});

export default ExerciseCard; 