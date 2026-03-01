import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingParamList = {
    OnboardingScreen: undefined,
    WelcomeScreen: undefined
}

export type RootStackParamList = {
    OnboardingStackNavigator: NavigatorScreenParams<OnboardingParamList>,
};

