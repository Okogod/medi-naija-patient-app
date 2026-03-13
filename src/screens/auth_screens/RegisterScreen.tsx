import { useWindowDimensions, TouchableWithoutFeedback, Keyboard, View, Text, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

import { useQuery } from "@tanstack/react-query";

import { useState, useEffect } from "react";

import { AuthStackParamList } from "../../types/StacksParamList";

// Icons
import { Feather } from '@expo/vector-icons';

const RegisterScreen = () => {

    const { height } = useWindowDimensions();

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [showPassword, setShowPassword] = useState(false);

    // Patterns
    const namePatterns = /^[A-Za-z]+$/

    const sendRegistrationCodeRoute = `${process.env.EXPO_PUBLIC_API_URL}/patient/send-registration-code`





    const GoToLogin = () => {

        navigation.navigate("LoginScreen");

    }

    const GoToVerifyRegistration = () => {

        navigation.replace("VerifyRegistrationCodeScreen");

    }

    return (
        <SafeAreaView>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={{ height }} className={`gap-[30px]`}>

                    <View>

                        <Text className={`text-center text-DarkGreenColor text-[24px] font-poppins-bold`} >Create Account</Text>

                        <Text className={`text-center text-GreyColor font-poppins-regular`}>Create your MediNaija account to access virtual care.</Text>

                    </View>

                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} >

                        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName={`mx-[20px] gap-[20px]`} >

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Firstname</Text>

                                <TextInput className={`border-[1px] border-GreyColor p-[10px] rounded-[8px]`} />

                                {firstNameError && <Text className={`text-RedColor font-poppins-regular`}>{firstNameError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Lastname</Text>

                                <TextInput className={`border-[1px] border-GreyColor p-[10px] rounded-[8px]`} />

                                {lastNameError && <Text className={`text-RedColor font-poppins-regular`}>{lastNameError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Email</Text>

                                <TextInput keyboardType="email-address" className={`border-[1px] border-GreyColor p-[10px] rounded-[8px]`} />

                                {emailError && <Text className={`text-RedColor font-poppins-regular`}>{emailError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Password</Text>

                                <View className={`border-[1px] border-GreyColor rounded-[8px]`}>

                                    <TextInput secureTextEntry={!showPassword} className={`w-[90%] border-GreyColor p-[10px] rounded-[8px]`} />

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

                        </ScrollView>

                    </KeyboardAvoidingView>

                    <View className={`items-center justify-center gap-[10px]`}>

                        <Pressable onPress={GoToVerifyRegistration} className={`bg-DarkGreenColor py-[15px] w-[90%] items-center rounded-[12px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Create Account</Text>

                        </Pressable>

                        <Pressable onPress={GoToLogin} className={`flex-row gap-[3px]`}>

                            <Text className={`font-poppins-regular`}>Already have an account</Text>

                            <Text className={`font-poppins-regular text-PinkColor`}>log in</Text>

                        </Pressable>


                    </View>

                </View>



            </TouchableWithoutFeedback>

        </SafeAreaView>
    )

}

export default RegisterScreen;