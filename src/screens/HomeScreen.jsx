import { View, Text, StyleSheet, Pressable, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import HomeCard from '../components/HomeCard';
import SmallHomeCard from '../components/SmallHomeCard';
import { userDataContext } from '../context/UserContext';
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import { todayDate } from '../utils/dateFunction';
import Header from '../components/Header';
import MidCard from '../components/Cards/MidCard';
import ProgressCard from '../components/Cards/ProgressCard';


const HomeScreen = ({ navigation }) => {
  const { dailySteps,dailyCalories } = useContext(userDataContext)
  console.log(dailySteps,dailyCalories);
  
  const {date, month, day,year}= todayDate();
 
  
  return (   
    <>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColor.backgroundColor} />
        <View style={[GlobalStyles.container,{alignItems:'center'}]}>
         <Header/>
         <View style={{flexDirection:'row',marginBottom:10,width:'100%',paddingHorizontal:20}}>
          <Text style={{textTransform:'capitalize',fontSize:18,color:GlobalColor.textColor}}>{day}</Text>
          <Text style={{fontWeight:'700',fontSize:19,color:GlobalColor.textColor}}>, {date} {month} {year}</Text>
         </View>
         <Text style={{width:'100%',paddingHorizontal:20,fontSize:20,fontWeight:'600',marginBottom:20,color:GlobalColor.textColor}}>Progress Summary</Text>
          <ScrollView 
           style={styles.scrollView} 
           contentContainerStyle={styles.scrollContent}
           showsVerticalScrollIndicator={false}
            >
            <ProgressCard />
            
            <View style={styles.grid}>
            <Pressable onPress={()=>{navigation.navigate('WaterDrink')}}>
              <SmallHomeCard icon={'water-outline'} logoBg={'#4979FB'} value={1.5} targetvalue={'/2 Litters '} footerText={'you need 0.5 litters more'} />
            </Pressable>
              <Pressable onPress={() => { navigation.navigate('CaloriesReport') }}>
                <HomeCard cardTitle={"Calories"} cardLogo={"flame"} logocolor={'#FF5722'} logoBg={'#FFEEE9'} value={Math.floor(dailyCalories)} valueUnit={'Kcal'} targetvalue={600} />
              </Pressable>
              <Pressable onPress={() => { navigation.navigate('SleepTracker') }}>
                <MidCard cardTitle={"Sleep"} cardLogo={"bed-outline"} logocolor={'#4979FB'} logoBg={'#E6F0FF'} value={6} valueUnit={'hours'} targetvalue={8} />
              </Pressable>
            <Pressable>
              <SmallHomeCard  icon={'heart-outline'} logoBg={'#E94358'} value={110} valueUnit={'Bpm'} footerText={'you have normal Bpm'} />
            </Pressable>
              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <MidCard cardTitle={"exercise"} cardLogo={"barbell-outline"} logocolor={'#4979FB'} logoBg={'#EDF2FF'} value={45} valueUnit={'mins'} targetvalue={90} />
              </Pressable>
              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <HomeCard cardTitle={"Steps"} cardLogo={"walk"} logocolor={'#FEBD59'} logoBg={'#FFF2DE'} value={dailySteps} valueUnit={'steps'} targetvalue={8000}  />
              </Pressable>
            </View>
          </ScrollView>
        </View>
        </>
  );
};

const styles = StyleSheet.create({

  grid: {
    marginTop: 5,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    height: '50%',
  },
  scrollView: {
    width: '100%',
    flex: 1,
  },
  scrollContent: {
    // paddingHorizontal: 10,
    paddingBottom: 20,
  },
});



export default HomeScreen;
