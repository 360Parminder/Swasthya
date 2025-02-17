import { StyleSheet, Text, View } from "react-native";
import ActivityCard from "../../components/ActivityCard";
import { useContext } from "react";
import { userDataContext } from "../../context/UserContext";
import GlobalStyles from "../../Styles/GlobalStyles";
import GlobalColor from "../../Styles/GlobalColor";

const BodyMeasurements =()=>{
    const {user} = useContext(userDataContext)
    console.log("user",user);
    
    return (
        <View style={GlobalStyles.container}>
         <Text style={styles.title}> Body Measurements</Text>
         <View style={{
            gap:14,
            marginTop:16,
            width:'95%',
            alignSelf:'center'
         }}>
            <ActivityCard title={'Height'} iconName={'body'} fcolor={'#5d4fb3'} date={user.updated_at} value={user?.height} valueUnit={'Cm'} />
            <ActivityCard title={'Weight'} iconName={'body'} fcolor={'#5d4fb3'} date={user.updated_at} value={user?.weight} valueUnit={'Kg'} />
         </View>
    
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
            color: GlobalColor.textColor,
            textAlign: 'left',
            marginTop: 10,
            marginHorizontal: 20,
    
        },
})

export default BodyMeasurements;