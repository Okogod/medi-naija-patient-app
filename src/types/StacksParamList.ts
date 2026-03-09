import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
    OnboardingScreen: undefined,
    WelcomeScreen: undefined
}

export type AuthStackParamList = {
    RegisterScreen: undefined,
    LoginScreen: undefined,
    ForgotPasswordScreen: undefined,
    VerifyRegistrationCodeScreen: undefined,
    VerifyForgotPasswordCodeScreen: undefined,
    ResetPasswordScreen: undefined
}

export type MainTabParamList = {
    HomeScreen: undefined,
    AppointmentsScreen: undefined,
    ChatScreen: undefined,
    ProfileScreen: undefined
}

export type RootStackParamList = {
    OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>,
    AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>,
    MainTabNavigator: NavigatorScreenParams<MainTabParamList>
};

