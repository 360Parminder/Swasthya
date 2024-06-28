import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from "./src/navigation/TabNavigator"
import { PermissionsProvider } from "./src/context/PermissionsContext"
import Path from "./src/services/Path"
import AsyncStorage from "@react-native-async-storage/async-storage"
import HomeScreen from "./src/screens/HomeScreen"
import TestScreen from "./src/screens/TestScreen"

const App =()=>{

// Path.interceptors.request.use(async (request)=>{
//   const token = "sdssdfsfds"
//   if (token) {
//       request.headers.Authorization=`Bearer ${token}`
//   }

//   return request
// })

  return(
    <>
   <PermissionsProvider>
   <NavigationContainer>
    <TabNavigator/>
   </NavigationContainer>
   </PermissionsProvider>
   {/* <TestScreen/> */}
    </>
  )
}

export default App;