import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import GlobalColor from '../Styles/GlobalColor'
import Icon from 'react-native-vector-icons/Ionicons';

const LeaderboardList = ({ userRank, userName, userStep, userCalories }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.userRankHolder}>
                {
                    userRank ? userRank == 1 ? (
                        <Image source={require('../assets/images/first.png')} style={styles.userRankImage} resizeMode='cover' />
                    ) : userRank == 2 ? (
                        <Image source={require('../assets/images/second.png')} style={styles.userRankImage} resizeMode='cover' />
                    ) : userRank == 3 ? (
                        <Image source={require('../assets/images/third.png')} style={styles.userRankImage} resizeMode='cover' />
                    ) : (<Text style={styles.userRank}>{userRank}</Text>

                    ) : "N/A"
                }
            </Text>
            <Image style={styles.userImage} source={require('../assets/images/Profile.jpg')} resizeMode='cover' />
            <View>
                <Text style={styles.userName}>
                    {userName}
                </Text>
                <View style={{ flexDirection: 'row', gap: 10,marginTop:5 }}>
                    <View style={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                        <Icon style={{}} name="walk" color={GlobalColor.mainColor} size={25} />
                        <Text style={styles.userStep}>{userStep}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                        <Icon style={{}} name="flame" color={GlobalColor.mainColor} size={25} />
                        <Text style={styles.userStep}> {Math.floor(userCalories)}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: GlobalColor.primaryColor,
        alignItems: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,


    },
    userRankHolder: {
        borderRadius: 50,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userRankImage: {
        width: 30,
        height: 30,
    },
    userRank: {
        fontSize: 20,
        fontWeight: '600',
        color: GlobalColor.textColor,
        alignItems: 'center',
        justifyContent: 'center'
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
        color: GlobalColor.textColor,
        textTransform: 'capitalize'
    },
    userStep: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalColor.textColor,
    },




})
export default LeaderboardList