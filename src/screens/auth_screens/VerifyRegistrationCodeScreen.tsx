import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable, TextInputKeyPressEvent } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { AuthStackParamList } from '../../types/StacksParamList';

import { useState, useRef, useEffect } from 'react';

import { usePostData } from '../../hooks/usePostData';

import { useIsRegistered } from '../../hooks/global.hooks';



// Utils - Components
import ResendOtp from '../../utils/compoenents/resend_otp/ResendOtp';

const OtpLength = 4;

const VerifyRegistrationCodeScreen = () => {

    const verifyUrl = `${process.env.EXPO_PUBLIC_API_URL}/patient/verify-registration-code`;

    const ResendUrl = `${process.env.EXPO_PUBLIC_API_URL}/patient/resend-registration-code`;

    const { setIsRegistered } = useIsRegistered();

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const { email } = useRoute<RouteProp<AuthStackParamList, "VerifyRegistrationCodeScreen">>().params;

    const [otp, setOtp] = useState(new Array(OtpLength).fill(""));


    const [nextIndex, setNextIndex] = useState(0);


    const [succesMessage, setSuccesMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const InputRef = useRef<TextInput>(null!);

    const HandleOtpInputChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp.splice(index, 1, text);
        setOtp(newOtp);

        if (text != "" && nextIndex != OtpLength - 1) {
            setNextIndex(index + 1);
        }

    }

    const HandleDelete = (e: TextInputKeyPressEvent, index: number) => {

        if (e.nativeEvent.key == "Backspace") {

            if (nextIndex !== 0) {

                setNextIndex(index - 1);

            }
        }

    }


    useEffect(() => {
        InputRef.current?.focus();
    }, [otp, nextIndex])

    const { mutateAsync: VerifyCodeMutate  } = usePostData(verifyUrl);

    const { mutateAsync: ResendCodeMutate  } = usePostData(ResendUrl);


    const GoToLogin = async () => {

        const response = await VerifyCodeMutate({ email, code: otp.join("") });

        if (response.message) {

            setSuccesMessage(response.message);

            setIsRegistered(true);

            setTimeout(() => {

                navigation.replace("LoginScreen");

            }, 2000)
        } else {

            setErrorMessage(response.error);

        }

    }

    const GoToRegistration = () => {

        navigation.replace("RegisterScreen");

    }

    const resend = async () => {

        const response = await ResendCodeMutate({email});

        if (response.message) {

            setSuccesMessage(response.message);
            setErrorMessage("");

            setIsRegistered(true);

            setTimeout(() => {

                navigation.replace("LoginScreen");

            }, 2000)
        }else {

            setErrorMessage(response.error);
            setSuccesMessage("");

            setTimeout( () => {
                setErrorMessage("");
                setSuccesMessage("");
            }, 900000)

        }

    }

    return (

        <SafeAreaView >

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View className={`px-[20px] py-[30px] gap-[30px]`}>

                    <View>

                        <Text className={`text-center font-poppins-bold text-[24px] text-DarkGreenColor`}>Verify Registration Code</Text>

                        <Text className={`text-center font-poppins-regular`}>A four digit code has been sent to your email, please input it below to verify your email</Text>

                    </View>

                    <View className={`gap-[20px] flex-row m-[auto]`}>

                        {
                            new Array(OtpLength).fill("").map((_, index) =>
                                <TextInput
                                    ref={index == nextIndex ? InputRef : null}
                                    onChangeText={(text) => HandleOtpInputChange(text, index)}
                                    onKeyPress={(e) => HandleDelete(e, index)}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    key={index}
                                    className={` border-GreyColor border-[1px] w-[70px] h-[70px] rounded-[15px] text-center font-poppins-medium`}
                                />)
                        }

                    </View>

                    <ResendOtp resend={resend} />
                    

                    <View>

                        <Pressable onPress={GoToLogin} className={`bg-DarkGreenColor rounded-[10px] items-center p-[20px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Verify Code</Text>

                        </Pressable>

                        <Pressable onPress={GoToRegistration} className={`flex-row items-center justify-center p-[20px] gap-[1px]`}>

                            <Text className={`font-poppins-regular`}>Incorrect email?</Text>

                            <Text className={`text-PinkColor font-poppins-medium`}>Go back to registration</Text>

                        </Pressable>

                        {

                            errorMessage && <Text className={`text-center text-RedColor text-[18px] font-poppins-medium mt-[20px]`}>{errorMessage}</Text>

                        }

                        {

                            succesMessage && <Text className={`text-center text-DarkGreenColor text-[18px] font-poppins-medium mt-[20px]`}>{succesMessage}</Text>

                        }



                    </View>

                </View>

            </TouchableWithoutFeedback>

        </SafeAreaView>

    )

}

export default VerifyRegistrationCodeScreen