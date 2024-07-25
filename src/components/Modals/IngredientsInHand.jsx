import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking, Image, ScrollView, Modal, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Path from '../../services/Path';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const apiKey = 'AIzaSyD99F2j0C1dk3AasK-eHiRRsE-BzEFr1jw';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1024,
  responseMimeType: "application/json",
};

const IngredientsInHand=({ingredientsInHandModalVisible,setIngredientsInHandModalVisible,})=>{

    const [inputs, setInputs] = useState([{ }]);
    const [foodPreference, setFoodPreference] = useState(null);
    const [addProteinNext, setAddProteinNext] = useState(true);
    const handleInputChange = (index, field, value) => {
      const newInputs = [...inputs];
      newInputs[index][field] = value;
      setInputs(newInputs);
    };
  
    // console.log([...inputs]);
    const addInput = () => {
      const newInputs = [...inputs];
        newInputs.push({ ingredient: '' });
        setAddProteinNext(false);
         setInputs(newInputs);
    };
    const fetchMeal = async () => {
      try {
        console.log('ai running');
        const chatSession = model.startChat({
          generationConfig,
        });
        const result = await chatSession.sendMessage(`Create an Indian recipe that contains ${inputs} and meets your food preference: ${'veg'}.`);
        // setRecipe(result.response.text());
        console.log(result.response.text());
        console.log('ai already run');
      } catch (error) {
        console.error('Error fetching meal:', error);
        // Optionally update state to show an error message to the user
      }
    }
  
    return(
      <Modal
      animationType="slide"
      transparent={true}
      visible={ingredientsInHandModalVisible}
      onRequestClose={() => {
        setIngredientsInHandModalVisible(!ingredientsInHandModalVisible);
        }}
        >
          <View  style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
            <View style={{
              width: '100%',
              height: '85%',
              backgroundColor: 'white',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              // bottom:0
            }}>
               <View style={{
                height: '8%',
                paddingRight: 16,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
                <Pressable onPress={() => setIngredientsInHandModalVisible(false)}>
                  <Text style={{
                    fontSize: 20,
                    color: '#3a86ff',
                    fontWeight: '600',
                  }}>Close</Text>
              </Pressable>
              </View>
  
              <View style={styles.card}>
        {inputs.map((input, index) => (
          <View key={index}>
            <TextInput
              style={styles.input}
              placeholder="ingredient"
              value={input.protein}
              onChangeText={(text) => handleInputChange(index, 'ingredient', text)}
              placeholderTextColor={'#2d1560'}
            />
            
          </View>
        ))}
        
        <Pressable style={[{
          width: 35,
          height: 35,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom:10,
          padding:0
        },styles.button]} onPress={addInput}>
        <Icon style={{
          fontSize:20,
          fontWeight:'bold'
          // margin:4
        }} name="add"color={'#fff'}/>
        </Pressable>
        <Pressable style={styles.button} onPress={fetchMeal}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
  
            </View>
          </View>
        </Modal>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f9fb',
      paddingHorizontal: 15
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 20,
      gap: 40,
    },
    primaryButton: {
      backgroundColor: '#7b53ea',
      width: '100%',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
    },
    primaryButtonText: {
      color: '#f6f4fe',
      fontSize: 20,
      textTransform: 'capitalize',
      fontWeight: '600',
    },
    secondaryButton: {
      // Add styles for secondary buttons if needed
    },
    secondaryButtonText: {
      // Add styles for secondary button text if needed
    },
    card: {
      marginHorizontal:10,
      backgroundColor: '#ded9fb',
      padding: 20,
      borderRadius: 10,
    },
    input: {
      height: 40,
      borderColor: '#7945e2',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: '#2d1560',
    },
    picker: {
      height: 70,
      color: '#2d1560',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#7945e2',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#ded9fb',
      fontWeight: 'bold',
    },
    // input: {
    //   width: '80%',
    //   height: 40,
    //   backgroundColor: 'white',
    //   borderRadius: 5,
    //   paddingLeft: 10,
    //   marginBottom: 15,
    //   color: '#000'
    // },
    cardContainer: {
      backgroundColor: '#edeafd',
      borderRadius: 10,
      margin: 10,
      padding: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#2d1560',
      marginBottom: 10,
    },
    section: {
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#7945e2',
      marginBottom: 5,
    },
    ingredient: {
      fontSize: 16,
      color: '#2d1560',
    },
    instruction: {
      fontSize: 16,
      color: '#2d1560',
      marginBottom: 5,
    },
    nutrition: {
      fontSize: 16,
      color: '#2d1560',
    },
    addButton: {
      // your styles for add button
    },
    addButtonText: {
      // your styles for add button text
    },
  });

export default IngredientsInHand