import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import GlobalColor from "../../Styles/GlobalColor";
import { Icon } from "react-native-elements";

const ExerciseSchedule = () => {
  const exercises = [
    {
      name: "Push-ups",
      image: require("../../assets/images/Group.png"),
      sets: 3,
      reps: 16,
    },
    {
      name: "Squats", 
      image: require("../../assets/images/Group.png"),
      sets: 4,
      reps: 12,
    },
    {
      name: "Lunges",
      image: require("../../assets/images/Group.png"), 
      sets: 3,
      reps: 10,
    },
    // Add more exercises as needed
  ];

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.topCard}>
        <View style={styles.metricContainer}>
          <Icon name="timer" type="material" color={GlobalColor.textColor} size={24} />
          <Text style={styles.metricLabel}>Duration</Text>
          <Text style={styles.metricValue}>1:10:30</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.metricContainer}>
          <Icon name="local-fire-department" type="material" color={GlobalColor.textColor} size={24} />
          <Text style={styles.metricLabel}>Calories</Text>
          <Text style={styles.metricValue}>34 kcal</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Exercise List</Text>

      <ScrollView style={styles.exerciseList}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseCard}>
            <Image source={exercise.image} style={styles.exerciseImage} />
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <View style={styles.exerciseMetrics}>
                <Text style={[styles.exerciseMetric,{fontWeight:'800',fontSize:16}]}>{exercise.sets} sets</Text>
                <Text style={styles.exerciseMetric}>{exercise.reps}x reps</Text>
              </View>
            </View>
            <Icon style={{backgroundColor:'green',borderRadius:100,padding:2}} name="chevron-right" type="material" color={GlobalColor.textColor} size={26} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  metricContainer: {
    alignItems: 'center',
    width: '50%',
  },
  metricLabel: {
    fontSize: 14,
    color: GlobalColor.textColor,
    marginTop: 8,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: GlobalColor.textColor,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  exerciseList: {
    paddingHorizontal: 16,
    width: '100%',
  },
  exerciseCard: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: GlobalColor.primaryColor,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  exerciseDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: GlobalColor.textColor,
    marginBottom: 8,
  },
  exerciseMetrics: {
    flexDirection: 'row',
    gap: 16,
  },
  exerciseMetric: {
    fontSize: 14,
    color: GlobalColor.textColor,
    opacity: 0.8,
  },
});

export default ExerciseSchedule;
