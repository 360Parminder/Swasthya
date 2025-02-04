import { Pressable, Text, View, StyleSheet, ImageBackground } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";
import CircularProgress from "react-native-circular-progress-indicator";

const ProgressCard = ({ title = "Your current progress", progress = 60, buttonText = "Manage", backgroundImage }) => {
    return (
        <View
            style={[styles.card, { borderColor: GlobalColor.primaryColor }]}
        >
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Pressable style={styles.manageButton}>
                    <Text style={styles.manageButtonText}>{buttonText}</Text>
                </Pressable>
            </View>
            <View>
                <CircularProgress
                    value={progress}
                    radius={50}
                    duration={2000}
                    progressValueColor={'#4979FB'}
                    activeStrokeColor={'#4979FB'}
                    inActiveStrokeColor={'#DBE4FE'}
                    maxValue={100}
                    valueSuffix={'%'}
                    title={'Medium'}
                    titleColor={GlobalColor.textColorSecondary}
                    titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 140,
        backgroundColor: GlobalColor.primaryColor,
        padding: 10,
        borderRadius: 10,
        shadowOpacity: 0.1,
        elevation: 3,
        shadowRadius: 10,
        borderWidth: 1,
        overflow: 'hidden',
        marginBottom: 10,
    },
    textContainer: {
        width: '40%',
        gap: 10,
    },
    titleText: {
        fontSize: 24,
        fontWeight: '700',
        color: GlobalColor.textColor,
    },
    manageButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: GlobalColor.secondaryColor,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    manageButtonText: {
        color: GlobalColor.mainColor,
        fontSize: 20,
        fontWeight: '400',
    },
});

export default ProgressCard;
