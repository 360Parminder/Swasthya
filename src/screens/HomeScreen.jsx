import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, useColorScheme, Image, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import HomeCard from '../components/HomeCard';
import CircularProgress from 'react-native-circular-progress-indicator';
import SmallHomeCard from '../components/SmallHomeCard';
import DateCard from '../components/DateCard';
import ECGWave from '../components/ECGWave';
import { BarChart } from 'react-native-gifted-charts';
import { userDataContext } from '../context/UserContext';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import { generateLastMonthDates, generateNextMonthDates, todayDate } from '../utils/dateFunction';
import Header from '../components/Header';
import * as Progress from 'react-native-progress';
import MidCard from '../components/Cards/MidCard';
import ProgressCard from '../components/Cards/ProgressCard';


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(null);
  const [userRank, setUserRank] = useState();
  const { user } = useContext(userDataContext)

  // const sampleData = [50, 60, 50, 70, 90, 40, 60, 80, 50, 60, 50, 70, 90, 40, 60, 50];
  // const barData = [
  //   { value: 250, label: 'Mon' },
  //   { value: 500, label: 'Tue' },
  //   { value: 745, label: 'Wed' },
  //   { value: 320, label: 'Thu' },
  //   { value: 600, label: 'Fri' },
  //   { value: 256, label: 'Sat' },
  //   { value: 300, label: 'Sun' },
  // ];
  const {date, month, day,year}= todayDate();

  return (   
    <>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColor.backgroundColor} />
        <View style={[GlobalStyles.container,{alignItems:'center'}]}>
         <Header/>
         <View style={{flexDirection:'row',marginBottom:10,width:'100%',paddingHorizontal:20}}>
          <Text style={{textTransform:'capitalize',fontSize:18}}>{day}</Text>
          <Text style={{fontWeight:'700',fontSize:19}}>, {date} {month} {year}</Text>
         </View>
            <Text style={{width:'100%',paddingHorizontal:20,fontSize:20,fontWeight:'600',marginBottom:20}}>Progress Summary</Text>
          <ScrollView >
            <View style={styles.grid}>
            <ProgressCard />
              <SmallHomeCard icon={'water-outline'} logoBg={'#4979FB'} value={1.5} targetvalue={'/2 Litters '} footerText={'you need 0.5 litters more'} />
              <SmallHomeCard  icon={'heart-outline'} logoBg={'#E94358'} value={110} valueUnit={'Bpm'} footerText={'you have normal Bpm'} />
              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <HomeCard cardTitle={"Calories"} cardLogo={"flame"} logocolor={'#FF5722'} logoBg={'#FFEEE9'} value={645} valueUnit={'Kcal'} targetvalue={600} />
              </Pressable>
              <Pressable>
                <MidCard cardTitle={"Water"} cardLogo={"water"} logocolor={'#4979FB'} logoBg={'#E6F0FF'} value={6} valueUnit={'hours'} targetvalue={8} />
              </Pressable>
              <Pressable>
                <MidCard cardTitle={"exercise"} cardLogo={"barbell-outline"} logocolor={'#4979FB'} logoBg={'#EDF2FF'} value={45} valueUnit={'mins'} targetvalue={90} />
              </Pressable>
              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <HomeCard cardTitle={"Steps"} cardLogo={"walk"} logocolor={'#FEBD59'} logoBg={'#FFF2DE'} value={5213} valueUnit={'steps'} targetvalue={8000}  />
              </Pressable>
            </View>
          </ScrollView>
        </View>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    backgroundColor: '#f5f9fb',
  },
  flatListContainer: {
    height: 120,
    shadowOpacity: 0.1,
    elevation: 3,
    shadowRadius: 1,
    paddingHorizontal:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 10,
    width: 10,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  grid: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gridAutoFlow: 'dense',
    gap: 10,
    paddingBottom: 10,
  },
});



export default HomeScreen;
