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
    color:GlobalColor.textColor,
  },
  button: {
    width: '80%',
    backgroundColor: GlobalColor.buttonBackgroundColor,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: GlobalColor.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  label:{
    width:'80%',
    fontSize:16,
    color:GlobalColor.textColor,
    fontWeight:'bold',
    marginBottom:5
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: GlobalColor.textColor,
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
    color: GlobalColor.textColor,
  },
});

export default GlobalStyles;

const pickerSelectStyles = {
  inputIOS: {
    width: '100%',
    height:'100%',
    color: GlobalColor.textColor,

  },
  inputAndroid: {
    width: '100%',
    height:"100%",
   padding: 0,
   margin: 0,
    color: GlobalColor.textColor,
  },
  placeholder: {
    color: GlobalColor.textColor,
    padding: 0,
    margin: 0,
  },
};

export {pickerSelectStyles};