import { useWindowDimensions, TouchableWithoutFeedback, Keyboard, View, Text, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";

import { AuthStackParamList } from "../../types/StacksParamList";

import { usePostData } from "../../hooks/usePostData";

import { ValidateEmail } from "../../utils/functions/InputValidators";

const ForgotPasswordScreen = () => {

    const { height } = useWindowDimensions();

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const [emailValue, setEmailValue] = useState("");

    const [emailError, setEmailError] = useState("");

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const forgotPasswordUrl = `${process.env.EXPO_PUBLIC_API_URL}/patient/send-forgot-password-code`

    const { mutateAsync } = usePostData(forgotPasswordUrl)

    const GoToLogin = () => {

        navigation.navigate("LoginScreen");

    }

    const GoToVerifyForgotPasswordCode = async () => {

        try {

            const { emailIsValid } = await ValidateEmail(emailValue, setEmailError);

            const response = await mutateAsync({ email: emailValue });

            if (response.message) {

                setSuccessMessage(response.message);

                setErrorMessage("");

                setTimeout(() => {

                    navigation.replace("VerifyForgotPasswordCodeScreen", { email: emailValue && emailValue });

                }, 2000);

            } else {
                setErrorMessage(response.error);

                setSuccessMessage("");
            }

        } catch (error) {
            console.error(error);
        }






    }

    return (
        <SafeAreaView>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={{ height }} className={`gap-[30px]`}>

                    <View>

                        <Text className={`text-center text-DarkGreenColor text-[24px] font-poppins-bold`} >Forgot Password?</Text>

                        <Text className={`text-center text-GreyColor font-poppins-regular`}>Enter your email address and we'll send you a 4-digit code</Text>

                    </View>

                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} >

                        <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName={`mx-[20px] gap-[20px]`} >


                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Email</Text>

                                <TextInput autoCorrect={false} autoCapitalize="none" onChangeText={(text) => setEmailValue(text)} keyboardType="email-address" className={`border-[1px] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                {emailError && <Text className={`text-RedColor font-poppins-regular`}>{emailError}</Text>}

                            </View>

                        </ScrollView>

                    </KeyboardAvoidingView>

                    <View className={`items-center justify-center gap-[10px]`}>

                        <Pressable onPress={GoToVerifyForgotPasswordCode} className={`bg-DarkGreenColor py-[15px] w-[90%] items-center rounded-[12px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Send Code</Text>

                        </Pressable>

                        <Pressable onPress={GoToLogin} className={`flex-row gap-[3px]`}>

                            <Text className={`font-poppins-regular`}>Remebered your password?</Text>

                            <Text className={`font-poppins-regular text-PinkColor`}>log in</Text>

                        </Pressable>


                    </View>

                    {

                        errorMessage && <Text className={`text-center text-[18px] text-RedColor font-poppins-medium`} >{errorMessage}</Text>

                    }

                    {

                        successMessage && <Text className={`text-center text-[18px] text-DarkGreenColor font-poppins-medium`} >{successMessage}</Text>

                    }
                </View>




            </TouchableWithoutFeedback>

        </SafeAreaView>
    )

}

export default ForgotPasswordScreen;