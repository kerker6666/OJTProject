import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountPage from "../screens/accountPage";
import LeavePage from "../screens/leavePage";
import StatusPage from "../screens/statusPage";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Account" component={AccountPage}></Tab.Screen>
            <Tab.Screen name="Leave" component={LeavePage}></Tab.Screen>
            <Tab.Screen name="Status" component={StatusPage} ></Tab.Screen>
        </Tab.Navigator>
    )
}