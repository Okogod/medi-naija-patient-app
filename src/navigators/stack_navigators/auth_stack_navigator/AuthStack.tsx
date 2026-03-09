import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Type
import { AuthStackParamList } from "../../../types/StacksParamList";

// Screens
import RegisterScreen from "../../../screens/auth_screens/RegisterScreen";
import LoginScreen from "../../../screens/auth_screens/LoginScreen";
import ForgotPasswordScreen from "../../../screens/auth_screens/ForgotPasswordScreen";
import VerifyRegistrationCodeScreen from "../../../screens/auth_screens/VerifyRegistrationCodeScreen";
import VerifyForgotPasswordCodeScreen from "../../../screens/auth_screens/VerifyForgotPasswordCodeScreen";
import ResetPasswordScreen from "../../../screens/auth_screens/ResetPasswordScreen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();


const AuthStackNavigator = () => {

    return(
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>

            <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}/>

            <AuthStack.Screen name="LoginScreen" component={LoginScreen}/>

            <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>

            <AuthStack.Screen name="VerifyRegistrationCodeScreen" component={VerifyRegistrationCodeScreen}/>

            <AuthStack.Screen name="VerifyForgotPasswordCodeScreen" component={VerifyForgotPasswordCodeScreen}/>

            <AuthStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}/>

        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator