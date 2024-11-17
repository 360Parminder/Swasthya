import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';
import GlobalColor from '../../Styles/GlobalColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import SleepCard from '../../components/Cards/SleepCard';


const SleepTracker = () => {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.topCard}>
                <View style={styles.topCardContent}>
                    <Text style={styles.topCardText}>Bad Sleep Habit!</Text>
                    <Text style={styles.topCardDetail}>You are in a bad sleep habit, try to manage yourself for better you</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: '50%' }}>
                    <Ionicons style={{ backgroundColor: '#FBD9DE', padding: 10, borderRadius: 100 }} name="sad-outline" size={45} color={GlobalColor.errorColor} />
                    <Text style={{ color: GlobalColor.lightTextColor, fontSize: 20, fontWeight: '600' }}>Bad</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.leftCard}>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Icon style={{ padding: 5, borderRadius: 100, backgroundColor: '#F0EDFE', fontSize: 25 }} name='heartbeat' type='font-awesome' color='#674AF8' />
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500' }}>Total sleep time</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', gap: 20 }}>
                        <View style={{ flexDirection: 'row',gap:1,alignItems:'flex-end' }}>
                            <Text style={{ fontSize: 30, fontWeight: '700',marginEnd:8, color: GlobalColor.darkTextColor }}>6</Text>
                            <Text style={{ fontSize: 18, color: GlobalColor.textColorSecondary }}>hrs</Text>
                            <Text style={{ fontSize: 30, fontWeight: '700',marginLeft:8,marginRight:8,color: GlobalColor.darkTextColor}}>21</Text>
                            <Text style={{ fontSize: 18, color: GlobalColor.textColorSecondary }}>mins</Text>
                        </View>
                        <Text style={{ fontSize: 18, color: GlobalColor.textColorSecondary }}>This isn’t a normal sleep time</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.rightCard}>
                        <Icon style={{ backgroundColor: '#EDF2FF', padding: 10, borderRadius: 14 }} name='bed-outline' type='ionicon' size={25} color='#4979FB' />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: '600' }}>Deep Sleep</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: GlobalColor.darkTextColor }}>4</Text>
                                <Text style={{ fontSize: 16, color: GlobalColor.textColorSecondary }}>hrs</Text>
                                <Text style={{ fontSize: 20, fontWeight: '700' }}>1</Text>
                                <Text style={{ fontSize: 16, color: GlobalColor.textColorSecondary }}>mins</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightCard}>
                        <Icon style={{ backgroundColor: '#FFF8EE', padding: 10, borderRadius: 14 }} name='bed-outline' type='ionicon' size={25} color='#FEBD59' />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontWeight: '600' }}>REM</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                                <Text style={{ fontSize: 20, fontWeight: '700', color: GlobalColor.darkTextColor }}>1</Text>
                                <Text style={{ fontSize: 16, color: GlobalColor.textColorSecondary }}>hrs</Text>
                                <Text style={{ fontSize: 20, fontWeight: '700' }}>20</Text>
                                <Text style={{ fontSize: 16, color: GlobalColor.textColorSecondary }}>mins</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={styles.heading}>Day Time Sleep</Text>
            <View style={styles.row}>
               <SleepCard title={"Bed time"} icon={'time-outline'} iconcolor={'#E94358'} iconbg={'#FDECEE'} value={'10:00'} seticoncolor={'#666D80'} />
               <SleepCard title={"Wake up"} icon={'happy-outline'} iconcolor={'#FDB022'} iconbg={'#FFFAEB'} value={'08:00'} seticoncolor={'#32D583'} />
            </View>

            <Text style={styles.heading}>Night Time Sleep</Text>
            <View style={styles.row}>
                <SleepCard title={"Bed time"} icon={'time-outline'} iconcolor={'#E94358'} iconbg={'#FDECEE'} value={'10:00'} seticoncolor={'#666D80'} />
                <SleepCard title={"Wake up"} icon={'happy-outline'} iconcolor={'#FDB022'} iconbg={'#FFFAEB'} value={'08:00'} seticoncolor={'#32D583'} />
              
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topCard: {
        width: '90%',
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: GlobalColor.errorColor,
        padding: 20,
    },
    topCardContent: {
        // flex: 1,
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    topCardText: {
        fontSize: 22,
        fontWeight: '600',
        color: GlobalColor.lightTextColor
    },
    topCardDetail: {
        fontSize: 16,
        color: GlobalColor.lightTextColor
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        gap: 10,
        width: '90%'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    leftCard: {
        width: 550,
        borderWidth: 1,
        borderColor: GlobalColor.borderColor,
        borderRadius: 10,
        flex: 1,
        padding: 10,
        justifyContent: 'space-between'

    },
    rightCard: {
        width: 170,
        marginBottom: 10,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: GlobalColor.borderColor,
        borderRadius: 10,
        gap: 5,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
        width:'90%'
    },
    smallCard: {
        width: 170,
        padding: 10,
        borderWidth: 1,
        borderColor: GlobalColor.borderColor,
        borderRadius: 10,
        gap: 5,
    },
});

export default SleepTracker;