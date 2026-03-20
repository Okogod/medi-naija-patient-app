import { NavigatorScreenParams } from "@react-navigation/native";

export type OnboardingStackParamList = {
    OnboardingScreen: undefined,
    WelcomeScreen: undefined
}

export type AuthStackParamList = {
    RegisterScreen: undefined,
    LoginScreen: undefined,
    ForgotPasswordScreen: undefined,
    VerifyRegistrationCodeScreen: { email: string},
    VerifyForgotPasswordCodeScreen: { email: string },
    ResetPasswordScreen: undefined
}

export type MainTabParamList = {
    HomeScreen: undefined,
    AppointmentsScreen: undefined,
    ChatsScreen: undefined,
    ProfileScreen: undefined
}

export type RootStackParamList = {
    OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>,
    AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>,
    MainTabNavigator: NavigatorScreenParams<MainTabParamList>
};

