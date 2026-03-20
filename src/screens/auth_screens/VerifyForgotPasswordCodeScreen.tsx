import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable, TextInputKeyPressEvent } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../../types/StacksParamList';

import { useState, useRef, useEffect } from 'react';

import { usePostData } from '../../hooks/usePostData';

import ResendOtp from '../../utils/compoenents/resend_otp/ResendOtp';

const OTP_LENGTH = 4;

const VerifyForgotPasswordCodeScreen = () => {

    const verifyUrl = `${process.env.EXPO_PUBLIC_API_URL}/patient/verify-forgot-password-code`;

    const ResendUrl = `${process.env.EXPO_PUBLIC_API_URL}/patient/resend-registration-code`;


    const { email } = useRoute<RouteProp<AuthStackParamList, "VerifyForgotPasswordCodeScreen">>().params;

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const InputRef = useRef<TextInput | null>(null);

    const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));

    const [nextIndex, setNextIndex] = useState(0);

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");


    useEffect(() => {

        InputRef?.current?.focus();

    }, [otp])

    const handleChange = (text: string, index: number) => {

        const newOtp = [...otp];
        newOtp.splice(index, 1, text);
        setOtp(newOtp);

        if (text != "" && nextIndex != OTP_LENGTH - 1) {
            setNextIndex(index + 1);
        }

    }

    const handleDelete = (e: TextInputKeyPressEvent, index: number) => {

        if (e.nativeEvent.key == "Backspace") {

            if (nextIndex !== 0) {

                setNextIndex(index - 1);

            }
        }

    }

    const { mutateAsync: VerifyCodeMutate } = usePostData(verifyUrl);

    const { mutateAsync: ResendCodeMutate  } = usePostData(ResendUrl);



    const GoToResetPassword = () => {

        navigation.replace("ResetPasswordScreen");

    }

    const GoToForgotPassword = async () => {

        const response = await VerifyCodeMutate({ email, code: otp.join("") });

        if (response.message) {

            setSuccessMessage(response.message);


            setTimeout(() => {

                navigation.replace("ForgotPasswordScreen");

            }, 2000)
        } else {

            setErrorMessage(response.error);

        }


    }

    const resend = async () => {

        const response = await ResendCodeMutate({email});

        if (response.message) {

            setSuccessMessage(response.message);
            setErrorMessage("");

            setTimeout(() => {

                navigation.replace("LoginScreen");

            }, 2000)
        }else {

            setErrorMessage(response.error);
            setSuccessMessage("");

            setTimeout( () => {
                setErrorMessage("");
                setSuccessMessage("");
            }, 900000)

        }

    }

    return (

        <SafeAreaView >

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View className={`px-[20px] py-[30px] gap-[30px]`}>

                    <View>

                        <Text className={`text-center font-poppins-bold text-[24px] text-DarkGreenColor`}>Verify Forgot Password Code</Text>

                        <Text className={`text-center font-poppins-regular`}>A four digit code has been sent to your email, please input it below to verify your email</Text>

                    </View>

                    <View className={`gap-[20px] flex-row m-[auto]`}>

                        {
                            otp.map((_, index) =>
                                <TextInput
                                    ref={index === nextIndex ? InputRef : null}
                                    onChangeText={(text) => handleChange(text, index)}
                                    onKeyPress={(e) => handleDelete(e, index)}
                                    keyboardType='numeric'
                                    maxLength={1}
                                    key={index}
                                    className={` border-GreyColor border-[1px] w-[70px] h-[70px] rounded-[15px] text-center font-poppins-medium`}
                                />)
                        }

                    </View>

                    <ResendOtp resend={resend}/>

                    <View>

                        <Pressable onPress={GoToResetPassword} className={`bg-DarkGreenColor rounded-[10px] items-center p-[20px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Verify Code</Text>

                        </Pressable>

                        <Pressable onPress={GoToForgotPassword} className={`flex-row items-center justify-center p-[20px] gap-[1px]`}>

                            <Text className={`font-poppins-regular`}>Incorrect email?</Text>

                            <Text className={`text-PinkColor font-poppins-medium`}>Go back to forgot password</Text>

                        </Pressable>



                    </View>

                    {

                        errorMessage && <Text className={`text-center text-RedColor text-[18px] font-poppins-medium mt-[20px]`}>{errorMessage}</Text>

                    }

                    {

                        successMessage && <Text className={`text-center text-DarkGreenColor text-[18px] font-poppins-medium mt-[20px]`}>{successMessage}</Text>

                    }

                </View>

            </TouchableWithoutFeedback>

        </SafeAreaView>

    )

}

export default VerifyForgotPasswordCodeScreen