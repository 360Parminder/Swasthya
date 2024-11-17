import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalColor from "../../Styles/GlobalColor";
import { Icon } from 'react-native-elements';


const SleepCard = ({ title, time ,icon,iconcolor,iconbg,value,status,seticoncolor}) => {
    return(
        <View style={styles.smallCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
            <Icon style={{ backgroundColor: `${iconbg}`, padding: 4, borderRadius: 100 }} name={icon} type='ionicon' size={25} color={iconcolor} />
        </View>
        <View style={{ flexDirection: 'row', width: 'auto', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 38, fontWeight: '600' }}>{value}</Text>
            <View>
                <Text style={{ fontWeight: '600',color:'#D9D9D9' }}>AM</Text>
                <Text style={{ fontWeight: '600' }}>PM</Text>
            </View>
        </View>
        <Pressable style={{flexDirection:'row',  alignItems: 'center',justifyContent:'space-between', marginTop: 10 }}>
            <Text style={{ color: '#666D80', fontWeight: '600' }}>Tap to set alarm</Text>
            <Icon style={{backgroundColor:'#F9FBFE',padding:2,borderRadius:100,fontWeight:'600'}} name='stopwatch-outline' type='ionicon' color={seticoncolor} />
        </Pressable>
    </View>
    )
}

export default SleepCard;

const styles = StyleSheet.create({
    smallCard: {
        width: 170,
        padding: 10,
        borderWidth: 1,
        borderColor: GlobalColor.borderColor,
        borderRadius: 10,
        gap: 5,
    },
})