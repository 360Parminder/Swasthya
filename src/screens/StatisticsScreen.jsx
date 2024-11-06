import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'
import GlobalStyles from '../Styles/GlobalStyles';
import GlobalColor from '../Styles/GlobalColor';
import ProgressCard from '../components/Cards/ProgressCard';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <ScrollView>
    <View style={[GlobalStyles.container,{alignItems:'center'}]}>
      <ProgressCard />
      <View style={{ marginTop: 20, width: '95%', borderColor: GlobalColor.primaryColor, borderWidth: 1, borderRadius: 12, padding: 10 }}>
        <View style={{marginBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:18,fontWeight:'600'}}>Steps Counts</Text>
          <Text>Today</Text>
        </View>
        <BarChart
          width={300}
          height={160}
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
          yAxisLabelTexts={['0', '250', '500', '750', '1000']}
          yAxisLabelTextStyle={{
            color: 'black',
            fontSize: 12,
          }}
        />
      </View>
      <View style={{width:'95%'}}>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', textAlign: 'left', marginTop: 50,marginBottom:20 }}>Your Progress</Text>
          <View style={{padding:10,borderColor:GlobalColor.fadedColor,borderWidth:1,borderRadius:14,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
            <View style={{backgroundColor:'#FFF2DE',justifyContent:'center',alignItems:'center',borderRadius:100,width:50,height:50}}>
              <Icon name='walk' size={30} color='#FEBD59'  />
            </View>
            <View style={{width:'52%'}}>
              <Text style={{marginLeft:10,fontSize:18,fontWeight:'600'}}>Steps</Text>
              <Text style={{marginLeft:10,fontSize:14,fontWeight:'400'}}>You have walked 1500 steps 
              in this day</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600'}}>1.5K</Text>
              <Text>/8k Steps</Text>
            </View>
          </View>
          <View style={{padding:10,borderColor:GlobalColor.fadedColor,borderWidth:1,borderRadius:14,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
            <View style={{backgroundColor:'#FFF2DE',justifyContent:'center',alignItems:'center',borderRadius:100,width:50,height:50}}>
              <Icon name='walk' size={30} color='#FEBD59'  />
            </View>
            <View style={{width:'52%'}}>
              <Text style={{marginLeft:10,fontSize:18,fontWeight:'600'}}>Steps</Text>
              <Text style={{marginLeft:10,fontSize:14,fontWeight:'400'}}>You have walked 1500 steps 
              in this day</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600'}}>1.5K</Text>
              <Text>/8k Steps</Text>
            </View>
          </View>
          <View style={{padding:10,borderColor:GlobalColor.fadedColor,borderWidth:1,borderRadius:14,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
            <View style={{backgroundColor:'#FFF2DE',justifyContent:'center',alignItems:'center',borderRadius:100,width:50,height:50}}>
              <Icon name='walk' size={30} color='#FEBD59'  />
            </View>
            <View style={{width:'52%'}}>
              <Text style={{marginLeft:10,fontSize:18,fontWeight:'600'}}>Steps</Text>
              <Text style={{marginLeft:10,fontSize:14,fontWeight:'400'}}>You have walked 1500 steps 
              in this day</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600'}}>1.5K</Text>
              <Text>/8k Steps</Text>
            </View>
          </View>
          <View style={{padding:10,borderColor:GlobalColor.fadedColor,borderWidth:1,borderRadius:14,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
            <View style={{backgroundColor:'#FFF2DE',justifyContent:'center',alignItems:'center',borderRadius:100,width:50,height:50}}>
              <Icon name='walk' size={30} color='#FEBD59'  />
            </View>
            <View style={{width:'52%'}}>
              <Text style={{marginLeft:10,fontSize:18,fontWeight:'600'}}>Steps</Text>
              <Text style={{marginLeft:10,fontSize:14,fontWeight:'400'}}>You have walked 1500 steps 
              in this day</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{fontSize:20,fontWeight:'600'}}>1.5K</Text>
              <Text>/8k Steps</Text>
            </View>
          </View>
          
      </View>
    </View>
      </ScrollView>
  )
}

export default StatisticsScreen
