import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { OnboardingStackParamList } from "../../../types/StacksParamList";

const OnBoardingStack = createNativeStackNavigator<OnboardingStackParamList>();


// Screens
import OnbaordingScreen from "../../../screens/onboarding_screen/OnboardingScreen";
import WelcomeScreen from "../../../screens/welcome_screen/WelcomeScreen";



const OnboardingStackNavigator = () => {

    return(
        <OnBoardingStack.Navigator screenOptions={{headerShown: false}}>

            <OnBoardingStack.Screen name="OnboardingScreen" component={OnbaordingScreen} />
            
            <OnBoardingStack.Screen name="WelcomeScreen" component={WelcomeScreen} />

        </OnBoardingStack.Navigator>    
    )
}

export default OnboardingStackNavigator;