import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import GlobalStyles from '../../Styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalColor from '../../Styles/GlobalColor';

const WaterDrink = () => {
    const [totalIntake, setTotalIntake] = useState(0);
    const [waterTarget, setWaterTarget] = useState(2000); // Example target in ml
    const [drinks, setDrinks] = useState([]);
    // console.log('drinks', drinks);
    

    const addDrink = () => {
        const newDrink = {
            id: drinks.length.toString(),
            amount: 200,
            time: new Date().toLocaleTimeString(),
            status: 'completed',
        };
        setDrinks([...drinks, newDrink]);
        setTotalIntake(totalIntake + 200);
    };

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Water intake</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                    <Icon name="water-outline" size={30} color="#007BFF" />
                    <Text style={styles.cardValue}>{totalIntake} ml</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Water Target</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                    <Icon name="ribbon-outline" size={30} color="#007BFF" />
                    <Text style={styles.cardValue}>{waterTarget} ml</Text>
                    </View>
                </View>
            </View>
                <ScrollView>
            {
                drinks.map((item, index) => (
                    <View style={styles.drinkCard} key={index}>
                        <View>
                            <Icon name="water-outline" size={30} color="#007BFF" />
                        </View>
                        <View style={{gap:5}}>
                        <Text style={styles.drinkText}>Drink {item.amount} ml of water</Text>
                       <View style={{flexDirection:'row',gap:3}}>
                        <Icon name="checkmark-circle" size={20} color={item.status=="completed"?'#32D583':'#D4DBEA'} />
                        <Text style={{color:GlobalColor.textColor}}>Completed</Text>
                       </View>
                        </View>
                       <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Icon name="time-outline" size={30} color="#007BFF" />
                        <Text style={{color:GlobalColor.textColor}}>{item.time}</Text>
                       </View>
                    </View>
                ))
            }
                </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={addDrink}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                <Text style={styles.addButtonText}>Tap to drink</Text>
                <Icon name="water-outline" size={30} color="#fff" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        height: 100,
        borderWidth: 1,
        borderColor: GlobalColor.borderColor,
        flex: 1,
        backgroundColor:GlobalColor.primaryColor,
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        color:GlobalColor.textColor
        // fontWeight: 'bold',
    },
    cardValue: {
        fontSize: 22,
        fontWeight: '600',
        color:GlobalColor.textColor
    },
    addButton: {
        position: 'absolute',
        bottom: 60,
        width: '90%',
        backgroundColor: GlobalColor.mainColor,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    drinkCard: {
        width: '95%',
        backgroundColor: GlobalColor.primaryColor,
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    drinkText: {
        fontSize: 16,
        color: GlobalColor.textColor,
    },
});

export default WaterDrink;