import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import GlobalColor from "../../Styles/GlobalColor";

const NotificationCard = ({ title, message }) => {
  return (
    <View style={styles.cardContainer}>
      <Icon
        style={styles.iconBackground}
        name="barbell"
        type="ionicon"
        color="#4979FB"
        size={30}
      />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.timeContainer}>
          <Icon name="time-outline" type="ionicon" color="#6A6A6A" size={24} />
          <Text style={styles.timeText}>10:00 AM</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.5,
    borderRadius: 14,
    borderColor: GlobalColor.borderColor,
    padding: 10, // Increased padding for better spacing
    width: "85%",
    alignSelf: "center", // Ensures the card centers itself
    marginVertical: 10, // Use marginVertical instead of marginTop for consistent spacing
    backgroundColor: "#fff", // Optional: Background for better visibility
  },
  iconBackground: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#EDF2FF",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 2,
  },
  message: {
    fontSize: 18,
    color: GlobalColor.textColorSecondary,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  timeText: {
    fontSize: 18,
    color: GlobalColor.textColorSecondary,
  },
});

export default NotificationCard;
