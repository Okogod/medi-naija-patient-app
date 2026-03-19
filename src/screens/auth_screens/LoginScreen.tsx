import { useWindowDimensions, TouchableWithoutFeedback, Keyboard, View, Text, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";

import { RootStackParamList } from "../../types/StacksParamList";

// Icons
import { Feather } from '@expo/vector-icons';

const LoginScreen = () => {

    const { height } = useWindowDimensions();

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const GoToRegister = () => {

        navigation.replace("AuthStackNavigator", { screen: "RegisterScreen" });

    }

    const GoToForgotPassword = () => {

        navigation.replace("AuthStackNavigator", { screen: "ForgotPasswordScreen" });

    }

    const GoToHome = () => {

        navigation.replace("MainTabNavigator", { screen: "HomeScreen" });

    }

    return (
        <SafeAreaView>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={{ height }} className={`gap-[30px]`}>

                    <View>

                        <Text className={`text-center text-DarkGreenColor text-[24px] font-poppins-bold`} >Welcome Back</Text>

                        <Text className={`text-center text-GreyColor font-poppins-regular`}>Login to contine your mediNaija journey.</Text>

                    </View>

                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} >

                        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName={`mx-[20px] gap-[20px]`} >


                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Email</Text>

                                <TextInput keyboardType="email-address" className={`border-[1px] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                {emailError && <Text className={`text-RedColor font-poppins-regular`}>{emailError}</Text>}

                            </View>

                            <View className={`gap-[10px]`}>

                                <View className={`gap-[5px]`}>

                                    <Text className={`font-poppins-regular text-BlackColor`}>Password</Text>

                                    <View className={`border-[1px] border-GreyColor rounded-[8px]`}>

                                        <TextInput secureTextEntry={!showPassword} className={`w-[90%] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                        <View className={`absolute right-[10px] top-[10px]`}>

                                            {
                                                showPassword == false ?
                                                    <Pressable onPress={() => setShowPassword(true)}>

                                                        <Feather name="eye" size={20} color="black" />

                                                    </Pressable>
                                                    : <Pressable onPress={() => setShowPassword(false)}>

                                                        <Feather name="eye-off" size={20} color="black" />

                                                    </Pressable>
                                            }

                                        </View>


                                    </View>

                                    {passwordError && <Text className={`text-RedColor font-poppins-regular`}>{passwordError}</Text>}

                                </View>

                                <Pressable onPress={GoToForgotPassword} className={`flex-row gap-[3px]`}>

                                    <Text className={`font-poppins-regular text-PinkColor`}>Forgot Password?</Text>

                                </Pressable>

                            </View>

                        </ScrollView>

                    </KeyboardAvoidingView>

                    <View className={`items-center justify-center gap-[10px]`}>

                        <Pressable onPress={GoToHome} className={`bg-DarkGreenColor py-[15px] w-[90%] items-center rounded-[12px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Log in</Text>

                        </Pressable>

                        <Pressable onPress={GoToRegister} className={`flex-row gap-[3px]`}>

                            <Text className={`font-poppins-regular`}>Don't have an account</Text>

                            <Text className={`font-poppins-regular text-PinkColor`}>Sign up</Text>

                        </Pressable>


                    </View>

                </View>



            </TouchableWithoutFeedback>

        </SafeAreaView>
    )

}

export default LoginScreen;