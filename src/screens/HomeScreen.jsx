import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import HomeCard from '../components/HomeCard';
import CircularProgress from 'react-native-circular-progress-indicator';
import SmallHomeCard from '../components/SmallHomeCard';
import DateCard from '../components/DateCard';
import ECGWave from '../components/ECGWave';
import { BarChart } from 'react-native-gifted-charts';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const sampleData = [50, 60, 55, 70, 90, 40, 60, 80, 50, 60, 50, 70, 90, 40, 60, 50];
  const barData = [
    {value: 250, label: 'Mon'},
    {value: 500, label: 'Tue'},
    {value: 745, label: 'Wed'},
    {value: 320, label: 'Thu'},
    {value: 600, label: 'Fri'},
    {value: 256, label: 'Sat'},
    {value: 300, label: 'Sun'},
  ];
  useEffect(() => {
    const generateLastMonthDates = () => {
      const today = new Date();
      // console.log(today);
      // const ISTTime = new Intl.DateTimeFormat('en-IN', {
      //   timeZone: 'Asia/Kolkata',
      //   // hour12: true,
      //   // hour: '2-digit',
      //   // minute: '2-digit',
      //   // second: '2-digit'
      // }).format(today);
      // console.log(ISTTime);
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(today.getMonth() - 1);

      const dateArray = [];

      for (let d = new Date(oneMonthAgo); d <= today; d.setDate(d.getDate() + 1)) {
        const date = d.getDate().toString().padStart(2, '0');
        // console.log(date);
        const month = d.toLocaleString('default', { month: 'short' }).toLowerCase();
        dateArray.push({ date, month });
      }

      setData(dateArray.reverse());
    };

    generateLastMonthDates();
  }, []);

  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ 
          height: 90,
          shadowOpacity: 0.1,
          elevation: 3,
          shadowRadius: 1,
         }}>
          <FlatList
            horizontal={true}
            ItemSeparatorComponent={ItemSeparator}
            data={data}
            renderItem={DateCard}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.grid}>
          <Pressable onPress={() => { navigation.navigate('Analysis') }}>
            <HomeCard cardTitle={"Steps"} cardLogo={'👟'} logoBg={'#FFFA9E'} mainContent={(
              <CircularProgress
                title='Steps'
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                maxValue={2000}
                value={654}
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

          <SmallHomeCard cardTitle={'Training'} cardLogo={'💪'} logoBg={'#F7E7A1'} value={'50'} valueUnit={'Minuties'} />

          <Pressable onPress={() => { navigation.navigate('Analysis') }}>
            <HomeCard cardTitle={'Calories'} cardLogo={'🔥'} logoBg={'#FFC966'} mainContent={(
              <CircularProgress
                title='KCal'
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                maxValue={2000}
                value={750}
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

        
            <SmallHomeCard cardTitle={'Distance'} cardLogo={'🚗'} logoBg={'#FF8766'} value={'05'} valueUnit={'kilometers'}  />
        
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f9fb',
    alignItems: 'center',
  },
  separator: {
    height: 10,
    width: 10,
  },
  grid: {
    marginTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gridAutoFlow: 'dense',
    gap:10

  
  },
 
});

export default HomeScreen;
