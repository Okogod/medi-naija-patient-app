import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainTabParamList } from "../../types/StacksParamList";

const MainTab = createBottomTabNavigator<MainTabParamList>();

// Icons
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';


// Screens
import HomeScreen from "../../screens/main_tab_screens/HomeScreen";
import AppointmentsScreen from "../../screens/main_tab_screens/AppointmentsScreen";
import ChatsScreen from "../../screens/main_tab_screens/ChatsScreen";
import ProfileScreen from "../../screens/main_tab_screens/ProfileScreen";

const MainTabNavigator = () => {

    return (
        <MainTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#008080",
                tabBarStyle: {
                    paddingTop: 20,
                    height: 95
                }
            }}
        >

            <MainTab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name="home" size={28} color={focused ? "#008080" : "#666666"} />,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />

            <MainTab.Screen
                name="AppointmentsScreen"
                component={AppointmentsScreen}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name="calendar" size={28} color={focused ? "#008080" : "#666666"} />,
                    tabBarLabel: "Appointments",
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />

            <MainTab.Screen
                name="ChatsScreen"
                component={ChatsScreen}
                options={{
                    tabBarIcon: ({ focused }) => <Ionicons name="chatbubble-ellipses-outline" size={28} color={focused ? "#008080" : "#666666"} />,
                    tabBarLabel: "Chat",
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />

            <MainTab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => <Octicons name="person" size={28} color={focused ? "#008080" : "#666666"} />,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }}
            />

        </MainTab.Navigator>
    )

}

export default MainTabNavigator;