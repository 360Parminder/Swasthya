import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const ActivityCard = ({ title,iconName,fcolor, date, value, valueUnit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
               }}>
               <Icon name={iconName} color={fcolor} size={22}/>
               <Text style={[styles.title,{color:fcolor}]}>{title}</Text>
               </View>
               <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:2
               }}>
               <Text style={styles.date}>{date}</Text>
               <Icon style={{
                fontSize:18

               }} name="chevron-forward" color="#000" Size={35} />
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
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
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
    },
    date: {
        fontSize: 15,
        color: '#000',
        marginBottom: 5,
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 5,
    },
    valueUnit: {
        fontSize: 18,
        fontWeight:'700',
        color: '#33415c',
        textAlignVertical:'bottom',
        marginTop:10
    },

})
export default ActivityCard