import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';


const WaterDrink = () => {
    const [totalIntake, setTotalIntake] = useState(0);
    const [waterTarget, setWaterTarget] = useState(2000); // Example target in ml
    const [drinks, setDrinks] = useState([{"amount": 200, "id": "0", "time": "4:28:43 PM"}, {"amount": 200, "id": "1", "time": "4:28:45 PM"}, {"amount": 200, "id": "2", "time": "4:28:45 PM"}, {"amount": 200, "id": "3", "time": "4:28:46 PM"}, {"amount": 200, "id": "4", "time": "4:28:46 PM"}, {"amount": 200, "id": "5", "time": "4:28:46 PM"}, {"amount": 200, "id": "6", "time": "4:28:47 PM"}, {"amount": 200, "id": "7", "time": "4:28:47 PM"}]);
    console.log('drinks', drinks);
    

    const addDrink = () => {
        const newDrink = {
            id: drinks.length.toString(),
            amount: 200,
            time: new Date().toLocaleTimeString(),
        };
        setDrinks([...drinks, newDrink]);
        setTotalIntake(totalIntake + 200);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Total Intake</Text>
                    <Text style={styles.cardValue}>{totalIntake} ml</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Water Target</Text>
                    <Text style={styles.cardValue}>{waterTarget} ml</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={addDrink}>
                <Text style={styles.addButtonText}>Drink 200 ml</Text>
            </TouchableOpacity>
                <ScrollView>

            <FlatList
            scrollEnabled={true}
            data={drinks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.drinkCard}>
                        <Text style={styles.drinkText}>{item.amount} ml</Text>
                        <Text style={styles.drinkText}>{item.time}</Text>
                    </View>
                )}
                />
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontWeight: 'bold',
    },
    cardValue: {
        fontSize: 16,
        marginTop: 10,
    },
    addButton: {
        backgroundColor: '#007BFF',
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
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    drinkText: {
        fontSize: 16,
    },
});

export default WaterDrink;