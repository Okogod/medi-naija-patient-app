import { createNativeStackNavigator } from '@react-navigation/native-stack'


import type { RootStackParamList } from '../../../types/StacksParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

//  Stack Screens
import OnboardingStackNavigator from '../onboarding_stack_navigator.tsx/OnboardingStackNavigator';

const RootStackNavigator = () => {

    return(

            <RootStack.Navigator>

                <RootStack.Screen name="OnboardingStackNavigator" component={OnboardingStackNavigator} options={{headerShown: false}} />

            </RootStack.Navigator>

    )

}

export default RootStackNavigator;