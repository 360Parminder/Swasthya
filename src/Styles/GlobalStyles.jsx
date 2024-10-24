import { StyleSheet } from "react-native";
import GlobalColor from "./GlobalColor";


const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.darkBackgroundColor,
    paddingTop: Platform.OS === 'ios' ? 65 : 0,
  },
  text: {
    fontSize: 20,
    color:GlobalColor.darkTextColor
  },
  button: {
    backgroundColor: GlobalColor.secondaryColor,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: GlobalColor.textColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  label:{
    fontSize:16,
    color:'#343a40',
    marginBottom:20
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    color: '#000000',
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