import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import OneTimeRecipeModal from '../../components/Modals/OneTimeRecipeModal';
import IngredientsInHand from '../../components/Modals/IngredientsInHand';
import GlobalStyles from '../../Styles/GlobalStyles';
import GlobalColor from '../../Styles/GlobalColor';
import SquareBox from '../../components/Button/SquareBox';
import ModalHeading from '../../components/Heading/ModalHeading';
import FloatingLabelInput from '../../components/Inputs/FloatingLabelInput';


const WeekMealModal=({weekMealModalVisible,setWeekMealModalVisible})=>{  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [FoodPreference, setFoodPreference] = useState('');
  const [recipe,setRecipe]=useState();

  const fetchMeal = async () => {
    try {
      console.log('ai running');
      const chatSession = model.startChat({
        generationConfig,
      });
      const result = await chatSession.sendMessage(`Create an Indian recipe that contains ${input1} grams of protein, ${input2} calories,for a week, and meets your food preference: ${FoodPreference}.Make the outputs in JSON format.`);
  //   console.log(result);
      const responseText = result.response.text();
  
  // Log the response for debugging
  // console.log('Response:', responseText);
  let resp = JSON.parse(responseText)
  console.log(resp);
  console.log(resp.name);
  console.log(resp.title);
  setRecipe(resp)
     
    } catch (error) {
      console.error('Error fetching meal:', error);
      // Optionally update state to show an error message to the user
    }
  }



  return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={weekMealModalVisible}
        onRequestClose={() => {
          setWeekMealModalVisible(!weekMealModalVisible);
        }}
      >
         <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            width: '100%',
            height: '85%',
            backgroundColor: GlobalColor.primaryColor,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            // bottom:0
          }}
          >
        <ModalHeading title="Find Week Meal" setModalVisible={setWeekMealModalVisible}  />

            <View style={styles.card}>
       
        <FloatingLabelInput
          label="Protein"
          value={input1}
          onChangeText={setInput1}
          keyboardType='numeric'
        />
       
        <FloatingLabelInput
          label="Food Preference"
          value={FoodPreference}
          onChangeText={setFoodPreference}
        />
        
        <View style={[styles.input, { paddingLeft: 5,alignItems:'center',justifyContent:'center',placeholderTextColor:'#000 '}]}>
          <RNPickerSelect
            placeholder={{ label: 'Select Food Preference', value: null }}
            onValueChange={(itemValue, itemIndex) =>
              setFoodPreference(itemValue)
            }
            items={[
              { label: 'Vegetarian', value: 'Vegetarian' },
              { label: 'Non-vegetarian', value: 'Non-vegetarian' },
              { label: 'Vegan', value: 'vegan' },
            ]}
          />
        </View>
        <Pressable style={GlobalStyles.button} onPress={fetchMeal}>
          <Text style={GlobalStyles.buttonText}>Submit</Text>
        </Pressable>
      </View>

           
            </View>
          </View>
        </Modal>
  )
}

const Diet = () => {

  const [displayedData, setDisplayedData] = useState();
  const [diet, setDiet] = useState();
  const [dietType, setDietType] = useState();
  const [oneTimeRecipeModalVisible, setOneTimeRecipeModalVisible] = useState(false);
  const [ingredientsInHandModalVisible,setIngredientsInHandModalVisible]= useState(false);
  const [weekMealModalVisible,setWeekMealModalVisible]= useState(false);


  return (
    <View style={GlobalStyles.container}>
      <View style={styles.buttonContainer}>
        <SquareBox
          title="One Time Recipe"
          icon="restaurant"
          onPress={() => setOneTimeRecipeModalVisible(true)}
        />
        <SquareBox
          title="Ingredients in Hand"
          icon="basket"
          onPress={() => setIngredientsInHandModalVisible(true)}
        />
        <SquareBox
          title="Find Week Meal"
          icon="calendar"
          onPress={() => setWeekMealModalVisible(true)}
        />
        <SquareBox
          title="View Today Meal"
          icon="today"
          onPress={() => {/* Your function */}}
        />
        <SquareBox
          title="View Week Meal"
          icon="calendar"
          onPress={() => {/* Your function */}}
        />
      </View>
      <OneTimeRecipeModal oneTimeRecipeModalVisible={oneTimeRecipeModalVisible} setOneTimeRecipeModalVisible={setOneTimeRecipeModalVisible} />
      <IngredientsInHand ingredientsInHandModalVisible={ingredientsInHandModalVisible} setIngredientsInHandModalVisible={setIngredientsInHandModalVisible} />
      <WeekMealModal weekMealModalVisible={weekMealModalVisible} setWeekMealModalVisible={setWeekMealModalVisible}/>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    gap: 10,
  },
  card: {
    marginHorizontal:10,
    backgroundColor: GlobalColor.secondaryColor,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Diet;
