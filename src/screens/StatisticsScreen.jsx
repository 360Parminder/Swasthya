import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import ProgressCard from '../components/Cards/ProgressCard';

const StatisticsScreen = () => {
  const data = [
    { value: 250, label: 'Mon' },
    { value: 500, label: 'Tue' },
    { value: 745, label: 'Wed' },
    { value: 320, label: 'Thu' },
    { value: 600, label: 'Fri' },
    { value: 256, label: 'Sat' },
    { value: 300, label: 'Sun' },
  ];
  return (
    <View style={GlobalStyles.container}>
      <ProgressCard />
      <View style={{ marginTop: 50, width: '95%', borderColor: GlobalColor.primaryColor, borderWidth: 1, borderRadius: 12, padding: 10 }}>
        <View style={{marginBottom:20}}>
          <Text style={{fontSize:18,fontWeight:'600'}}>Steps Counts</Text>
        </View>
        <BarChart
        
          width={300}
          barWidth={10}
          noOfSections={4}
          barBorderRadius={4}
          spacing={31}
          disableScroll={true}
          initialSpacing={20}
          topLabelTextStyle={
            {
              color: '#000',
              fontSize: 12,
              fontWeight: 'bold'
            }
          }
          frontColor={GlobalColor.tertiaryColor}
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={{
            color: '#000'
          }}

          data={data}
          labelStyle={{
            color: 'black',
            fontSize: 12,
            fontWeight: 'bold'
          }}
          yAxisLabelTexts={['0', '250', '500', '750']}
          yAxisLabelTextStyle={{
            color: 'black',
            fontSize: 12,
          }}
        />
      </View>
      <View>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>Your Progress</Text>

      </View>
    </View>
  )
}

export default StatisticsScreen
