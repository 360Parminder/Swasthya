import { Text, View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator"
import { Icon } from "react-native-elements"
import GlobalColor from "../../Styles/GlobalColor"

const CaloriesReportCard = ({ title, value, valueUnit,caloriesValue, targetValue, icon,iconcolor, logoBg }) => {
    return(
        <View style={{flexDirection:'column',borderWidth:0.5,borderColor:`${iconcolor}`,borderRadius:14,padding:10, alignItems:'center',width:'45%'}}>
        <Text style={{width:'100%',textAlign:'left',fontSize:18,fontWeight:'500',marginBottom:5}}>{title}</Text>
        <CircularProgress
                    value={value}
                    radius={65}
                    duration={2000}
                    progressValueColor={iconcolor}
                    activeStrokeColor={iconcolor}
                    inActiveStrokeColor={logoBg}
                    maxValue={targetValue}
                    valueSuffix={valueUnit}
                    title={(
                       <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                         <Icon
                            name={icon}
                            type="material"
                            color={iconcolor}
                            size={30}
                        />
                       </View>
                    )}
                    titleColor={GlobalColor.textColorSecondary}
                    titleStyle={{ fontWeight: 'bold', fontSize: 13 }}
                    valueSuffixStyle={{fontSize:16}}
                    progressValueStyle={{fontSize:16,marginRight:5}}
                />
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                  <Icon name="flame" type="ionicon" color={iconcolor} size={25} />
                    <Text style={{fontSize:18,fontWeight:'500'}}>{caloriesValue} Kcal</Text>
                </View>
      </View>
    )
}
export default CaloriesReportCard ;