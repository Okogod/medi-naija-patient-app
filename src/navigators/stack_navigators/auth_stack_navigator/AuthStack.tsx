import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import { AuthStackParamList } from "../../../types/StacksParamList";

// Screens
import RegisterScreen from "../../../screens/auth_screens/RegisterScreen";
import LoginScreen from "../../../screens/auth_screens/LoginScreen";
import ForgotPasswordScreen from "../../../screens/auth_screens/ForgotPasswordScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();


const AuthStackNavigator = () => {

    return(
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>

            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}/>

            <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>

            <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>

        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator