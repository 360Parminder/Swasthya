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

  const fetchMeal = async () => {
    const response = await userData.fetchOneMeal(Protein, calories, FoodPreference);
    console.log(response.data.hits[0].recipe.totalNutrients);
    setRecipe(response.data.hits);
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
                  { label: 'Non-vegetarian', value: 'Non-vegetarian' },
                  { label: 'Vegan', value: 'vegan' },
                ]}
              />
            </View>
            <Pressable style={GlobalStyles.button} onPress={() => fetchMeal()}>
              <Text style={GlobalStyles.buttonText}>Submit</Text>
            </Pressable>
          </View>


          <ScrollView style={styles.cardContainer}>
            {
              recipe?.map((recipe, index) => {
                return (

                  <>
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
                        Protein:
                      </Text>
                      <Text style={styles.nutrition}>
                        Calories:{recipe?.recipe?.calories}
                      </Text>
                    </View>
                  </>
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
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: GlobalColor.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: GlobalColor.textColor,
  },
  picker: {
    height: 70,
    color: GlobalColor.textColor,
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