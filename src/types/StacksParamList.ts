import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
    OnboardingScreen: undefined,
    WelcomeScreen: undefined
}

export type AuthStackParamList = {
    RegisterScreen: undefined,
    LoginScreen: undefined,
    ForgotPasswordScreen: undefined
}

export type RootStackParamList = {
    OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>,
    AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>
};

