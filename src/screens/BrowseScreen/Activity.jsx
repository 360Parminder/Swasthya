import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ActivityCard from '../../components/ActivityCard'

const Activity = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Activity</Text>
     <View style={{
        gap:14,
        marginTop:16
     }}>
        <ActivityCard title={'Active Energy'} iconName={'flame'} fcolor={'#fb5607'} date={'May 2023'} value={'0.31'} valueUnit={'KCal'} />
        <ActivityCard title={'Resting Energy'} iconName={'flame'} fcolor={'#fb5607'} date={'May 2023'} value={'281'} valueUnit={'KCal'} />
        <ActivityCard title={'Steps'} iconName={'flame'} fcolor={'#fb5607'} date={'May 2023'} value={'215'} valueUnit={'KCal'} />
        <ActivityCard title={'Walking '} iconName={'flame'} fcolor={'#fb5607'} date={'May 2023'} value={'0.15'} valueUnit={'Km'} />
        <ActivityCard title={'Stairs Climbed'} iconName={'flame'} fcolor={'#fb5607'} date={'May 2023'} value={'1'} valueUnit={'floor'} />
     </View>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f9fb',
        },
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'left',
            marginTop: 10,
            marginHorizontal: 20,
    
        },
})

export default Activity