import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { formatDate2 } from '../utils/dateFunction'
import GlobalColor from '../Styles/GlobalColor'

const ActivityCard = ({ title,iconName,fcolor, date, value, valueUnit }) => {
    const {month,year} = formatDate2(date)
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
               }}>
               <Icon name={iconName} color={GlobalColor.mainColor} size={22}/>
               <Text style={[styles.title]}>{title}</Text>
               </View>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:2
               }}>
               <Text style={styles.date}>{month} {year}</Text>
               <Icon style={{fontSize:15}} name="chevron-forward" color={GlobalColor.textColor} Size={35} />
               </View>
                
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{value}</Text>
                <Text style={styles.valueUnit}>{valueUnit}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:GlobalColor.primaryColor,
        justifyContent: 'center',
        marginHorizontal:20,
        borderRadius:14,
        elevation:2,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:4,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
       
        },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color:GlobalColor.mainColor
    },
    date: {
        fontSize: 15,
        color: GlobalColor.textColor,
        marginBottom: 5,
        textTransform:'capitalize'
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
        marginRight: 5,
    },
    valueUnit: {
        fontSize: 18,
        fontWeight:'700',
        color: GlobalColor.textColor,
        textAlignVertical:'bottom',
        marginTop:10
    },

})
export default ActivityCard