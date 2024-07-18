import { StyleSheet, Text, View } from "react-native";
import ActivityCard from "../../components/ActivityCard";
import { useContext } from "react";
import { userDataContext } from "../../context/UserDataContext";


const BodyMeasurements =()=>{
    
    const {userData} = useContext(userDataContext)

    return (
        <View style={styles.container}>
         <Text style={styles.title}> Body Measurements</Text>
         <View style={{
            gap:14,
            marginTop:16
         }}>
            <ActivityCard title={'Height'} iconName={'body'} fcolor={'#5d4fb3'} date={'May 2023'} value={userData?.height} valueUnit={'Cm'} />
            <ActivityCard title={'Weight'} iconName={'body'} fcolor={'#5d4fb3'} date={'May 2023'} value={userData?.weight} valueUnit={'Kg'} />
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
            color: '#000',
            textAlign: 'left',
            marginTop: 10,
            marginHorizontal: 20,
    
        },
})

export default BodyMeasurements;