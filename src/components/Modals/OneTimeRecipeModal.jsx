import { useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';



const {
    GoogleGenerativeAI,
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


const OneTimeRecipeModal = ({ oneTimeRecipeModalVisible, setOneTimeRecipeModalVisible }) => {


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
        const result = await chatSession.sendMessage(`Create an Indian recipe that contains ${input1} grams of protein, ${input2} calories, and meets your food preference: ${FoodPreference}.Make the outputs in JSON format.`);
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
  // console.log(recipe);
    // const recipe = {
    //   "title": "High-Protein Vegetarian Dal & Quinoa Bowl",
    //   "ingredients": [
    //     { "name": "Quinoa", "quantity": "1 cup (170 grams)", "unit": "cups", "preparation": "cooked" },
    //     { "name": "Red Lentils (Masoor Dal)", "quantity": "1 cup (200 grams)", "unit": "cups", "preparation": "cooked" },
    //     { "name": "Spinach", "quantity": "1 cup (60 grams)", "unit": "cups", "preparation": "chopped" },
    //     { "name": "Cauliflower", "quantity": "1 cup (100 grams)", "unit": "cups", "preparation": "chopped and steamed" },
    //     { "name": "Bell Pepper (any color)", "quantity": "1/2 cup (50 grams)", "unit": "cups", "preparation": "chopped" },
    //     { "name": "Tomato", "quantity": "1 medium", "preparation": "diced" },
    //     { "name": "Onion", "quantity": "1 medium", "preparation": "chopped" },
    //     { "name": "Garlic", "quantity": "2 cloves", "preparation": "minced" },
    //     { "name": "Ginger", "quantity": "1 inch", "preparation": "grated" },
    //     { "name": "Curry Powder", "quantity": "1 tsp", "unit": "tsp", "preparation": "" },
    //     { "name": "Turmeric Powder", "quantity": "1/2 tsp", "unit": "tsp", "preparation": "" },
    //     { "name": "Cumin Powder", "quantity": "1/2 tsp", "unit": "tsp", "preparation": "" },
    //     { "name": "Coriander Powder", "quantity": "1/2 tsp", "unit": "tsp", "preparation": "" },
    //     { "name": "Garam Masala", "quantity": "1/4 tsp", "unit": "tsp", "preparation": "" },
    //     { "name": "Salt", "quantity": "to taste", "preparation": "" },
    //     { "name": "Olive Oil", "quantity": "1 tbsp", "unit": "tbsp", "preparation": "" },
    //     { "name": "Lemon Juice", "quantity": "1 tbsp", "unit": "tbsp", "preparation": "" },
    //     { "name": "Fresh Cilantro", "quantity": "for garnish", "preparation": "chopped" }
    //   ],
    //   "instructions": [
    //     "Cook quinoa according to package directions.",
    //     "Cook red lentils in a pot with water until soft.",
    //     "Heat olive oil in a pan, add chopped onions, garlic and ginger, sauté until fragrant.",
    //     "Add diced tomatoes, bell pepper, spinach, cauliflower, and spices to the pan.",
    //     "Cook until vegetables are softened.",
    //     "Combine cooked lentils, quinoa, and vegetable mixture.",
    //     "Season with salt, add lemon juice and mix well.",
    //     "Serve warm, garnished with chopped fresh cilantro."
    //   ],
    //   "nutrition": {
    //     "protein": "200 grams",
    //     "calories": "200 calories",
    //     "other": [
    //       "High in fiber",
    //       "Good source of vitamins and minerals",
    //       "Vegetarian"
    //     ]
    //   }
    // };
  
    const handlePress = () => {
      console.log('Input 1:', input1);
      console.log('Input 2:', input2);
      console.log('Selected Option:', FoodPreference);
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={oneTimeRecipeModalVisible}
        onRequestClose={() => {
          setOneTimeRecipeModalVisible(!oneTimeRecipeModalVisible);
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
            backgroundColor: 'white',
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
            <View style={{
              height: '8%',
              paddingRight: 16,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
              <Pressable onPress={() => setOneTimeRecipeModalVisible(false)}>
                <Text style={{
                  fontSize: 20,
                  color: '#3a86ff',
                  fontWeight: '600',
                }}>Close</Text>
            </Pressable>
            </View>
  
            <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Protein"
          value={input1}
          onChangeText={setInput1}
          placeholderTextColor={'#2d1560'}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder="Calories"
          value={input2}
          onChangeText={setInput2}
          placeholderTextColor={'#2d1560'}
          keyboardType='numeric'
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
        <Pressable style={styles.button} onPress={fetchMeal}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
  
      {
        recipe?
          <ScrollView style={styles.cardContainer}>
        <Text style={styles.title}>{recipe?.title?recipe?.title:recipe?.name}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          {recipe?.ingredients?.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient?.amount|ingredient?.quantity} {ingredient?.unit} {ingredient?.name} {ingredient.preparation ? `(${ingredient.preparation})` : ''}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          {
          typeof(recipe?.instructions)=="object"?(
            recipe?.instructions?.map((instruction, index) => (
              <Text key={index} style={styles.instruction}>
                {index + 1}. {instruction}
              </Text>
            ))

          ):(
          //   instructions?.split('.').map((instruction, index) => (
          //     <Text key={index} style={styles.instruction}>
          //       {index + 1}. {instruction}
          //     </Text>
          //   )
          // )
           <Text>inst in text</Text>
          )
          
         }
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nutrition</Text>
          <Text style={styles.nutrition}>
            Protein: {recipe?.nutrition?.protein|recipe?.nutritionalInformation?.protein|recipe?.protein}
          </Text>
          <Text style={styles.nutrition}>
            Calories: {recipe?.nutrition?.calories|recipe?.nutritionalInformation?.calories|recipe?.calories}
          </Text>
          {recipe?.nutrition?.other?.map((item, index) => (
            <Text key={index} style={styles.nutrition}>
              - {item}
            </Text>
          ))}
        </View>
      </ScrollView>
        :(
          null
        )
      }
          </View>
        </View>
  
      </Modal>
    )
  }

  const styles = StyleSheet.create({
   
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
  });

  export default OneTimeRecipeModal;