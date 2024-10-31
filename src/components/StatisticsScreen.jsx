import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';

const StatisticsScreen = () => {
    const data = [
        {value: 250, label: 'Mon'},
        {value: 500, label: 'Tue'},
        {value: 745, label: 'Wed'},
        {value: 320, label: 'Thu'},
        {value: 600, label: 'Fri'},
        {value: 256, label: 'Sat'},
        {value: 300, label: 'Sun'},
      ];
  return (
    <View style={GlobalStyles.container}>
      <View>
        <Text style={{ color:'#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Weekly Statistics</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor={GlobalColor.tertiaryColor}
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={{
            color:'#000'
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
        <Text style={{ color:'#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>Monthly Statistics</Text>
        
      </View>
    </View>
  )
}

export default StatisticsScreen
