import { useWindowDimensions, TouchableWithoutFeedback, Keyboard, View, Text, KeyboardAvoidingView, ScrollView, TextInput, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native-safe-area-context";

import { useState, useEffect } from "react";

import { AuthStackParamList } from "../../types/StacksParamList";

import { usePostData } from "../../hooks/usePostData";

// Utils - Functions
import {
    ValidateFirstname,
    ValidateLastname,
    ValidateEmail,
    ValidatePassword
} from "../../utils/functions/InputValidators";

// Icons
import { Feather } from '@expo/vector-icons';

const RegisterScreen = () => {

    const { height } = useWindowDimensions();

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const sendRegistrationCodeRoute = `${process.env.EXPO_PUBLIC_API_URL}/patient/send-registration-code`;

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [errorMessage, setErrorMessage] = useState("");


    const [showPassword, setShowPassword] = useState(false);



    const { mutateAsync } = usePostData(sendRegistrationCodeRoute)


    const GoToLogin = () => {

        navigation.navigate("LoginScreen");

    }

    const GoToVerifyRegistration = async () => {

        const { firstNameIsValid } = ValidateFirstname(firstNameValue, setFirstNameError);

        const { lastNameIsValid } = ValidateLastname(lastNameValue, setLastNameError);

        const { emailIsValid } = ValidateEmail(emailValue, setEmailError);

        const { passwordIsValid } = ValidatePassword(passwordValue, setPasswordError);

        if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {

            const bodyData = { firstname: firstNameValue, lastname: lastNameValue, email: emailValue, password: passwordValue };

            try {

                const res = await mutateAsync(bodyData);

                if (res.message) {

                    navigation.replace("VerifyRegistrationCodeScreen", { email: emailValue && emailValue });

                } else {

                    setErrorMessage(res.error);

                }

            } catch (error: any) {

                setErrorMessage("Internal Server Error. Please try again later.");

            }

        }

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

                                <TextInput placeholder="eg. john" autoCorrect={false} value={firstNameValue} onChangeText={(text) => setFirstNameValue(text)} className={`border-[1px] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                {firstNameError && <Text className={`text-RedColor font-poppins-regular`}>{firstNameError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Lastname</Text>

                                <TextInput placeholder="eg. Doe" autoCorrect={false} value={lastNameValue} onChangeText={(text) => setLastNameValue(text)} className={`border-[1px] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                {lastNameError && <Text className={`text-RedColor font-poppins-regular`}>{lastNameError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Email</Text>

                                <TextInput autoCorrect={false} autoCapitalize="none" placeholder="eg. johndoe@gmail.com" value={emailValue} onChangeText={(text) => setEmailValue(text)} keyboardType="email-address" className={`border-[1px] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

                                {emailError && <Text className={`text-RedColor font-poppins-regular`}>{emailError}</Text>}

                            </View>

                            <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Password</Text>

                                <View className={`border-[1px] border-GreyColor rounded-[8px]`}>

                                    <TextInput autoCorrect={false} placeholder="eg. passworD@123" value={passwordValue} onChangeText={(text) => setPasswordValue(text)} secureTextEntry={!showPassword} className={`w-[90%] border-GreyColor p-[10px] rounded-[8px] font-poppins-medium`} />

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

                    {
                        errorMessage && <Text className={`text-RedColor text-center text-[19px] font-poppins-medium`}>{errorMessage}</Text>
                    }


                </View>



            </TouchableWithoutFeedback>

        </SafeAreaView>
    )

}

export default RegisterScreen;