import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, useColorScheme, Image, ScrollView } from 'react-native';
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
import { generateLastMonthDates } from '../utils/dateFunction';


const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [heartRate, setHeartRate] = useState(null);
  const [userRank, setUserRank] = useState();
  const { user } = useContext(userDataContext)

  console.log(user);
  const colorScheme = useColorScheme();

  const sampleData = [50, 60, 50, 70, 90, 40, 60, 80, 50, 60, 50, 70, 90, 40, 60, 50];
  const barData = [
    { value: 250, label: 'Mon' },
    { value: 500, label: 'Tue' },
    { value: 745, label: 'Wed' },
    { value: 320, label: 'Thu' },
    { value: 600, label: 'Fri' },
    { value: 256, label: 'Sat' },
    { value: 300, label: 'Sun' },
  ];

  useEffect(() => {
    const data = generateLastMonthDates();
    setData(data);

  }, []);

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (   
        <View style={[GlobalStyles.container,]}>
          <View style={{
            flexDirection: 'row',
            height:110,
            alignItems: 'center',
            paddingHorizontal:20,
            marginHorizontal:8,
            marginVertical:10,
            borderRadius:14,
            backgroundColor:GlobalColor.fadedColor,
            borderWidth:3,
            borderColor:GlobalColor.borderColor,
          }}>
            <Image style={{
              width: 70,
              height: 70,
              borderRadius: 100,
            }} source={user ? { uri: user.picture } : require('../assets/images/Profile.jpg')} resizeMode='cover' />
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 15
            }} >
              <Text style={GlobalStyles.text}>Good Day 😊</Text>
              <Text style={[GlobalStyles.text,{fontWeight:'600'}]}> {user ? user?.username : 'User Name'}</Text>
            </View>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal={true}
              ItemSeparatorComponent={ItemSeparator}
              data={data}
              renderItem={DateCard}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <ScrollView style={{marginHorizontal:20}}>
            <View style={styles.grid}>
              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <HomeCard cardTitle={"Steps"} cardLogo={'👟'} logoBg={'#FFFA9E'} mainContent={(
                  <CircularProgress
                    title='Steps'
                    titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                    maxValue={2000}
                    value={steps ? steps + 50 : 50}
                    duration={2000}
                    radius={50}
                    progressValueColor='#5D4FB3'
                    activeStrokeColor='#5D4FB3'
                    inActiveStrokeColor='#E6E2EE'
                  />
                )} />
              </Pressable>

              <HomeCard cardTitle={'Heart rate'} cardLogo={'♥️'} logoBg={'#FFA69E'} mainContent={(
                <ECGWave data={sampleData} width={170} height={120} />
              )} />

              <SmallHomeCard cardTitle={'Training'} cardLogo={'💪'} logoBg={'#F7E7A1'} value={'50'} valueUnit={'Minutes'} />
              <SmallHomeCard cardTitle={'Ranking'} cardLogo={'🏅'} logoBg={'#F7E7A1'} value={userRank} valueUnit={''} />

              <Pressable onPress={() => { navigation.navigate('Analysis') }}>
                <HomeCard cardTitle={'Calories'} cardLogo={'🔥'} logoBg={'#FFC966'} mainContent={(
                  <CircularProgress
                    title='KCal'
                    titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                    maxValue={2000}
                    value={calories ? calories + 74 : 74}
                    duration={2000}
                    radius={50}
                    progressValueColor='#5D4FB3'
                    activeStrokeColor='#5D4FB3'
                    inActiveStrokeColor='#E6E2EE'
                  />
                )} />
              </Pressable>

              <Pressable>
                <HomeCard cardTitle={'Sleep'} cardLogo={'🌙'} logoBg={'#D2EDFF'} mainContent={(
                  <BarChart
                    barWidth={10}
                    width={170}
                    height={100}
                    noOfSections={4}
                    barBorderRadius={4}
                    frontColor="#5D4FB3"
                    yAxisThickness={0}
                    xAxisThickness={0}
                    data={barData}
                    xAxisLabelsHeight={0}
                    yAxisLabelWidth={0}
                  />
                )} />
              </Pressable>

              <SmallHomeCard cardTitle={'Distance'} cardLogo={'🚗'} logoBg={'#FF8766'} value={'05'} valueUnit={'kilometers'} />
            </View>
          </ScrollView>
        </View>
  );
};

const lightStyles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    backgroundColor: '#f5f9fb',
  },
  flatListContainer: {
    height: 90,
    shadowOpacity: 0.1,
    elevation: 3,
    shadowRadius: 1,
    marginHorizontal:20,
  },
  separator: {
    height: 10,
    width: 10,
  },
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gridAutoFlow: 'dense',
    gap: 10,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  flatListContainer: {
    height: 90,
    shadowOpacity: 0.1,
    elevation: 3,
    shadowRadius: 1,
  },
  separator: {
    height: 10,
    width: 10,
  },
  grid: {
    backgroundColor: '#000',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gridAutoFlow: 'dense',
    gap: 10,
  },
});

export default HomeScreen;
