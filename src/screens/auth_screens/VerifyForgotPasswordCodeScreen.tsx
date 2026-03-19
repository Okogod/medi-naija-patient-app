import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

import { AuthStackParamList } from '../../types/StacksParamList';

import ResendOtp from '../../utils/compoenents/resend_otp/ResendOtp';

const VerifyForgotPasswordCodeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const GoToResetPassword = () => {

        navigation.replace("ResetPasswordScreen");

    }

    const GoToForgotPassword = () => {

        navigation.replace("ForgotPasswordScreen");

    }

    const Resend = () => {
        console.log("Resend code in Forgot Password")
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
                            new Array(4).fill("").map((_, index) => <TextInput keyboardType='numeric' maxLength={1} key={index} className={` border-GreyColor border-[1px] w-[70px] h-[70px] rounded-[15px] text-center font-poppins-medium`} />)
                        }

                    </View>

                    <ResendOtp resend={Resend}/>

                    <View>

                        <Pressable onPress={GoToResetPassword} className={`bg-DarkGreenColor rounded-[10px] items-center p-[20px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Verify Code</Text>

                        </Pressable>

                        <Pressable onPress={GoToForgotPassword} className={`flex-row items-center justify-center p-[20px] gap-[1px]`}>

                            <Text className={`font-poppins-regular`}>Incorrect email?</Text>

                            <Text className={`text-PinkColor font-poppins-medium`}>Go back to forgot password</Text>

                        </Pressable>



                    </View>

                </View>

            </TouchableWithoutFeedback>

        </SafeAreaView>

    )

}

export default VerifyForgotPasswordCodeScreen