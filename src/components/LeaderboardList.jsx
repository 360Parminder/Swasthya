import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'


const LeaderboardList = ({userRank,userName,userStep}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.userRankHolder}>{
        userRank? userRank==1 ? (
            <Image source={require('../assets/images/first.png')} style={styles.userRankImage} resizeMode='cover'/>
        ) : userRank==2 ? (
            <Image source={require('../assets/images/second.png')} style={styles.userRankImage} resizeMode='cover'/>
        ) : userRank==3 ? (
            <Image source={require('../assets/images/third.png')} style={styles.userRankImage} resizeMode='cover'/>
        ) : (<Text style={styles.userRank}>{userRank}</Text>
            
        ) : "N/A"
        }</Text>
      <Image style={styles.userImage} source={require('../assets/images/Profile.jpg')} resizeMode='cover'/>
        <View>
            <Text style={styles.userName}>
                {userName}
            </Text>
            <Text style={styles.userStep}>{userStep}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius:12,
        flexDirection: 'row',
        marginVertical:10,
        marginHorizontal:5,
        padding:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,


        },
        userRankHolder: {
            width:60,
            // height:60,
            borderRadius: 50,
            marginHorizontal: 10,
            alignItems:'center',
            justifyContent:'center',
            },
            userRankImage:{
                width: 30,
                height: 30,
                // borderRadius: 50,
                // marginHorizontal: 10,

            },
            userRank:{
                // width: 50,
                // height: 50,
                // textAlign:'center',
                fontSize: 20,
                fontWeight: '600',
                color: '#000',
                alignItems:'center',
                justifyContent:'center'
            },
        userImage: {
            width: 50,
            height: 50,
            borderRadius: 25,
            margin: 10,
            },
            userName: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                textTransform:'capitalize'
                },
                userStep: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#000',
                    },




})
export default LeaderboardList