import { useContext } from 'react';
import GlobalColor from '../Styles/GlobalColor';
import { userDataContext } from '../context/UserContext';
import GlobalStyles from '../Styles/GlobalStyles';
import { Image, Text, View } from 'react-native';

const Header = () => {
    const { user } = useContext(userDataContext)
    return(
        <View style={{
          width: '90%',
            flexDirection: 'row',
            height:110,
            alignItems: 'center',
            paddingHorizontal:20,
            marginHorizontal:8,
            marginVertical:10,
            borderRadius:14,
            backgroundColor:GlobalColor.fadedColor,
            borderWidth:3,
            borderColor:GlobalColor.borderColor,
          }}>
            <Image style={{
              width: 70,
              height: 70,
              borderRadius: 100,
            }} source={user ? { uri: user.picture } : require('../assets/images/Profile.jpg')} resizeMode='cover' />
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 15
            }} >
              <Text style={GlobalStyles.text}>Good Day 😊</Text>
              <Text style={[GlobalStyles.text,{fontWeight:'600'}]}> {user ? user?.username : 'User Name'}</Text>
            </View>
          </View>
    )
}

export default Header;