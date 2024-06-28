import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'

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
    <View style={{ flex: 1, padding: 16 }}>
      <View>
        <Text style={{ color:'#000', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Weekly Statistics</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="#5D4FB3"
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
    </View>
  )
}

const styles = StyleSheet.create({
    Text:{
        color:'#000'
    }
})

export default StatisticsScreen
