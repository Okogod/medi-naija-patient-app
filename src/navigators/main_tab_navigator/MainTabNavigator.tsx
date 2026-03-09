import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainTabParamList } from "../../types/StacksParamList";

const MainTab = createBottomTabNavigator<MainTabParamList>();

// Screens
import HomeScreen from "../../screens/main_tab_screens/HomeScreen";
import AppointmentsScreen from "../../screens/main_tab_screens/AppointmentsScreen";
import ChatScreen from "../../screens/main_tab_screens/ChatsScreen";
import ProfileScreen from "../../screens/main_tab_screens/ProfileScreen";

const MainTabNavigator = () => {

    return(
        <MainTab.Navigator screenOptions={{ headerShown: false }}>

            <MainTab.Screen name="HomeScreen" component={HomeScreen} />

            <MainTab.Screen name="AppointmentsScreen" component={AppointmentsScreen} />

            <MainTab.Screen name="ChatScreen" component={ChatScreen} />

            <MainTab.Screen name="ProfileScreen" component={ProfileScreen} />

        </MainTab.Navigator>
    )

}

export default MainTabNavigator;