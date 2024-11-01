import { StyleSheet } from "react-native";
import GlobalColor from "./GlobalColor";


const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.backgroundColor,
    paddingTop: Platform.OS === 'ios' ? 65 : 0,
    alignItems: 'center',
    width: '100%',
    paddingBottom: 80,
  },
  text: {
    fontSize: 20,
    color:GlobalColor.darkTextColor
  },
  button: {
    backgroundColor: GlobalColor.buttonBackgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: GlobalColor.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label:{
    width:'80%',
    fontSize:16,
    color:'#343a40',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#000000',
    borderWidth: 1,
    borderColor:GlobalColor.borderColor,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: GlobalColor.secondaryColor,
  },
});

export default GlobalStyles;

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#8d3c13',
    borderRadius: 4,
    color: '#000',
    backgroundColor: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#8d3c13',
    borderRadius: 4,
    color: '#000',
    backgroundColor: '#fff',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
  },
};

export {pickerSelectStyles};