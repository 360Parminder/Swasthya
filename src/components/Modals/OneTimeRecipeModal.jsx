import { useState } from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import GlobalColor from "../../Styles/GlobalColor";
import GlobalStyles, { pickerSelectStyles } from "../../Styles/GlobalStyles";
import ModalHeading from "../Heading/ModalHeading";
import userData from "../../services/userData";

const OneTimeRecipeModal = ({ oneTimeRecipeModalVisible, setOneTimeRecipeModalVisible }) => {


  const [Protein, setProtein] = useState('');
  const [calories, setCalories] = useState('');
  const [FoodPreference, setFoodPreference] = useState('');
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(false);
// console.log(FoodPreference);

  const fetchMeal = async () => {
    setRecipe(null);
    setLoading(true);
    const response = await userData.fetchOneMeal(Protein, calories, FoodPreference);
    console.log(response.data.hits[0].recipe);
    setRecipe(response.data.hits);
    setLoading(false);
  }
  
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
          backgroundColor: GlobalColor.primaryColor,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
        }}
        >
          <ModalHeading title="One Time Recipe" setModalVisible={setOneTimeRecipeModalVisible} />

          <View style={styles.card}>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Protein"
              value={Protein}
              onChangeText={setProtein}
              placeholderTextColor={GlobalColor.textColor}
              keyboardType='numeric'
            />
            <TextInput
              style={GlobalStyles.input}
              placeholder="Calories"
              value={calories}
              onChangeText={setCalories}
              placeholderTextColor={GlobalColor.textColor}
              keyboardType='numeric'
            />
            <View style={[GlobalStyles.input, { alignItems: 'center', justifyContent: 'center',padding:0 }]}>
              <RNPickerSelect
                style={pickerSelectStyles}
                placeholder={{ label: 'Select Food Preference', value: null }}
                onValueChange={(itemValue, itemIndex) =>
                  setFoodPreference(itemValue)
                }
                items={[
                  { label: 'Vegetarian', value: 'vegetarian' },
                  { label: 'Non-vegetarian', value: 'alcohol-cocktail, alcohol-free, celery-free, crustacean-free, dairy-free, DASH, egg-free, fish-free, fodmap-free, gluten-free, immuno-supportive, keto-friendly, kidney-friendly, kosher, low-fat-abs, low-potassium, low-sugar, lupine-free, Mediterranean, mollusk-free, mustard-free, no-oil-added, paleo, peanut-free, pescatarian, pork-free, red-meat-free, sesame-free, shellfish-free, soy-free, sugar-conscious, sulfite-free, tree-nut-free, wheat-free' },
                  { label: 'Vegan', value: 'vegan' },
                ]}
              />
            </View>
            <Pressable disabled={loading} style={GlobalStyles.button} onPress={() => fetchMeal()}>
              <Text style={GlobalStyles.buttonText}>{loading?"Cooking ...":"Submit"}</Text>
            </Pressable>
          </View>


          <ScrollView style={styles.cardContainer}>
            {
              recipe?.map((recipe, index) => {
                return (

                  <View key={index} >
                    <Text style={styles.title}>{recipe?.recipe?.label}</Text>
                    <Image
                      style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 10 }}
                      source={{ uri: recipe?.recipe?.image }}
                    />
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Ingredients</Text>
                      {
                        recipe?.recipe?.ingredients.map((ingredient, index) => {
                          return (
                            <View style={{ flexDirection: 'column', gap: 5,backgroundColor:GlobalColor.secondaryColor,padding:10,borderRadius:10,marginBottom:10 }} key={index}>
                              <Text style={[styles.ingredient,{fontWeight:'700'}]} key={index}> {ingredient.food}</Text>
                              <Text style={styles.ingredient}>food Category: {ingredient.foodCategory}</Text>
                              <Text style={styles.ingredient}>quantity: {ingredient.quantity+" "+ingredient.measure}</Text>
                            </View>
                          )
                        })
                      }
                    </View>
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Instructions</Text>
                    </View>
                    <View style={styles.section}>
                      <Text style={styles.sectionTitle}>Nutrition</Text>
                      <Text style={styles.nutrition}>
                        Protein:{Math.floor(recipe?.recipe?.totalNutrients.PROCNT.quantity*10)/10}g
                      </Text>
                      <Text style={styles.nutrition}>
                        Calories:{recipe?.recipe?.calories}
                      </Text>
                    </View>
                  </View>
                )
              })

            }
          </ScrollView>
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({

  card: {
    marginHorizontal: 10,
    backgroundColor: GlobalColor.secondaryColor,
    // padding: 20,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  picker: {
    height: 70,
    color: GlobalColor.textColor,
    marginBottom: 10,
  },

  cardContainer: {
    backgroundColor: GlobalColor.primaryColor,
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
    color: GlobalColor.textColor,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColor.textColor,
    marginBottom: 5,
  },
  ingredient: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: GlobalColor.textColor,
  },
  instruction: {
    fontSize: 16,
    color: GlobalColor.textColor,
    marginBottom: 5,
  },
  nutrition: {
    fontSize: 16,
    color: GlobalColor.textColor,
  },
});

export default OneTimeRecipeModal;