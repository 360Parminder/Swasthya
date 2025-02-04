import { ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../Styles/GlobalStyles";
import CircularProgress from "react-native-circular-progress-indicator";
import GlobalColor from "../../Styles/GlobalColor";
import { Icon } from "react-native-elements";
import CaloriesReportCard from "../../components/Cards/CaloriesReportCard";


const CaloriesReport = () => {
  return (
   <View style={GlobalStyles.container}>
    <View style={{height:'22%'}}>

    </View>
    <Text style={{fontSize:20,fontWeight:'600',textAlign:'left',width:'90%',marginBottom:10,color:GlobalColor.textColor}}>Where your calories burn</Text>
    <ScrollView>

    <View style={styles.grid}>
   <CaloriesReportCard title="Exercise" value={30} valueUnit="Minutes" targetValue={60} icon="fitness-center" iconcolor="#4979FB" logoBg="#EDF2FF" caloriesValue={100} />
   <CaloriesReportCard title="Steps" value={1560} valueUnit="Steps" targetValue={8000} icon="directions-walk" iconcolor="#FEBD59" logoBg="#FFF8EE" caloriesValue={195} />
   <CaloriesReportCard title="Yoga" value={30} valueUnit="Minutes" targetValue={60} icon="self-improvement" iconcolor="#674AF8" logoBg="#F0EDFE" caloriesValue={25}/>
   <CaloriesReportCard title="Running" value={1} valueUnit="Km" targetValue={10} icon="directions-run" iconcolor="#E94358" logoBg="#FDECEE" caloriesValue={50}/>
   {/* <CaloriesReportCard title="Calories Burned" value={60} valueUnit="%" targetValue={100} icon="flame" iconcolor="#4979FB" logoBg="#EDF2FF" />
   <CaloriesReportCard title="Calories Burned" value={60} valueUnit="%" targetValue={100} icon="flame" iconcolor="#4979FB" logoBg="#EDF2FF" />
   <CaloriesReportCard title="Calories Burned" value={60} valueUnit="%" targetValue={100} icon="flame" iconcolor="#4979FB" logoBg="#EDF2FF" />
   <CaloriesReportCard title="Calories Burned" value={60} valueUnit="%" targetValue={100} icon="flame" iconcolor="#4979FB" logoBg="#EDF2FF" />
   <CaloriesReportCard title="Calories Burned" value={60} valueUnit="%" targetValue={100} icon="flame" iconcolor="#4979FB" logoBg="#EDF2FF" /> */}

    </View>
    </ScrollView>
   </View>
  );

}
const styles = StyleSheet.create({
  grid: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gridAutoFlow: 'dense',
    gap: 10,
    paddingBottom: 10,
  },
})
export default CaloriesReport;