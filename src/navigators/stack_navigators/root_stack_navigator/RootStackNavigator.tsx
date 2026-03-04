import { createNativeStackNavigator } from '@react-navigation/native-stack'


import type { RootStackParamList } from '../../../types/StacksParamList';

const RootStack = createNativeStackNavigator<RootStackParamList>();

import useHasDoneOnboardingStore from '../../../hooks/UseHasDoneOnboardingStore';

//  Stack 
import OnboardingStackNavigator from '../onboarding_stack_navigator.tsx/OnboardingStackNavigator';
import AuthStackNavigator from '../auth_stack_navigator/AuthStack';

const RootStackNavigator = () => {

    const { hasDoneOnboarding } = useHasDoneOnboardingStore();

    return(

            <RootStack.Navigator initialRouteName={ !hasDoneOnboarding ? "OnboardingStackNavigator" : "AuthStackNavigator" } screenOptions={{ headerShown: false }}>

                <RootStack.Screen name="OnboardingStackNavigator" component={OnboardingStackNavigator}  />

                <RootStack.Screen name="AuthStackNavigator" component={AuthStackNavigator} />

            </RootStack.Navigator>

    )

}

export default RootStackNavigator;