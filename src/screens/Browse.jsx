import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../Styles/GlobalStyles';

const Browse = ({navigation}) => {
    return (
        <View style={GlobalStyles.container}>
            <ScrollView>
                <Text style={styles.title}>Categories</Text>
              
                    <Pressable onPress={() => navigation.navigate('Activity')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#ffd5a7',padding:5,borderRadius:20}}>
                                 <Icon name='flame' color='#fb56' size={32} />
                                 </View>
                                <Text style={styles.categorieName}>Activity</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Body Measurements')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#dfd6fe',padding:5,borderRadius:20}}>

                                <Icon name='body' color='#8338ec' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Body Measurements</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Heart')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#ffc2cd',padding:5,borderRadius:20}}>

                                <Icon name='heart' color='#d90429' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Heart</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Medication')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#b9e7fe',padding:5,borderRadius:20}}>

                                <Icon name='medical' color='#0077b6' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Medications</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Nutrition')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#bcf6c8',padding:5,borderRadius:20}}>

                                <Icon name='egg' color='#80ed99' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Nutrition</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Sleep')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#bde9fa',padding:5,borderRadius:20}}>

                                <Icon name='bed' color='#4cc9f0' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Sleep</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Symptoms')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#c2e0fb',padding:5,borderRadius:20}}>

                                <Icon name='flame' color='#4895ef' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Symptoms</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Mental Wellbeing')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#d3f99d',padding:5,borderRadius:20}}>

                                <Icon name='bulb' color='#65a30d' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Mental Wellbeing</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Mobility')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#ffdda9',padding:5,borderRadius:20}}>

                                <Icon name='bicycle' color='#fb8b24' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Mobility</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Respiratory')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#b9e2fe',padding:5,borderRadius:20}}>

                                <Icon name='leaf' color='#0071bc' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Respiratory</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Hearing')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#bcdbff',padding:5,borderRadius:20}}>
                                
                                <Icon name='ear-outline' color='#3a86ff' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Hearing</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Diet')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#c5d5ff',padding:5,borderRadius:20}}>

                                <Icon name='fast-food' color='#758bfd' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Diet</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Other Data')}>
                        <View style={styles.categorieHolder}>
                            <View style={styles.categorieContent}>
                            <View style={{backgroundColor:'#b9e7fe',padding:5,borderRadius:20}}>

                                <Icon name='albums' color='#0077b6' size={32} />
                            </View>
                                <Text style={styles.categorieName}>Other Data</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>
                <View style={styles.categoriesCard}>
                    <Pressable onPress={() => navigation.navigate('Clinical Documents')}>
                        <View style={[styles.categorieHolder, { borderBottomWidth: 0 }]}>
                            <View style={styles.categorieContent}>
                                <Icon name='document-text-outline' color='#4361ee' size={32} />
                                <Text style={styles.categorieName}>Clinical Documents</Text>
                            </View>
                            <Icon name="chevron-forward" color="#000" size={28} />
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
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
    categoriesCard: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        gap: 10,
    },
    categorieHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginHorizontal: 10,
        paddingHorizontal: 15,
        marginVertical: 4,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d1d1d1',
    },
    categorieContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categorieName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginHorizontal: 20,
        
    },
})

export default Browse
