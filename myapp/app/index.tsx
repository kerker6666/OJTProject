import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import SignIn from "./screens/signInPage";
import SignUp from "./screens/signUpPage";
import AccountPage from "./screens/accountPage";
import LeavePage from "./screens/leavePage";
import StatusPage from "./screens/statusPage";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
  AccountPage: undefined;
  LeavePage: undefined;
  StatusPage: undefined;
  
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
        <Stack.Screen name="LeavePage" component={LeavePage} />
        <Stack.Screen name="StatusPage" component={StatusPage} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
