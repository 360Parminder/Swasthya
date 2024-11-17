import { useContext } from 'react';
import GlobalColor from '../Styles/GlobalColor';
import { userDataContext } from '../context/UserContext';
import GlobalStyles from '../Styles/GlobalStyles';
import { Image, Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    const { user } = useContext(userDataContext)
    
    return(
        <View style={{
          width: '90%',
            flexDirection: 'row',
            height:110,
            alignItems: 'center',
            marginHorizontal:4,
            marginVertical:10,
            justifyContent: 'space-between',
          }}>
           <View style={{flexDirection:'row'}}>
           <Image style={{
              width: 70,
              height: 70,
              borderRadius: 14,
            }} source={
              user?.picture
                ? { uri: user.picture }
                : require('../assets/images/Profile.jpg')
            } resizeMode='cover' />
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 15
            }} >
              <Text style={GlobalStyles.text}>Good Day 😊</Text>
              <Text style={[GlobalStyles.text,{fontWeight:'600'}]}> {user ? user?.username : 'User Name'}</Text>
            </View>
           </View>
            <Pressable>
              <Icon name="notifications-outline" size={35} color={GlobalColor.iconColor} />
            </Pressable>
          </View>
    )
}

export default Header;