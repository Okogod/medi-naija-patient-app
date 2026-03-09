import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';


import { AuthStackParamList } from '../../types/StacksParamList';

const VerifyRegistrationCodeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const GoToLogin = () => {

        navigation.replace("LoginScreen");

    }

    const GoToRegistration = () => {

        navigation.replace("RegisterScreen");

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
                            new Array(4).fill("").map((_, index) => <TextInput keyboardType='numeric' maxLength={1} key={index} className={` border-GreyColor border-[1px] w-[70px] h-[70px] rounded-[15px] text-center`} />)
                        }

                    </View>

                    <View>

                        <Pressable onPress={GoToLogin} className={`bg-DarkGreenColor rounded-[10px] items-center p-[20px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>Verify Code</Text>

                        </Pressable>

                        <Pressable onPress={GoToRegistration} className={`flex-row items-center justify-center p-[20px] gap-[1px]`}>

                            <Text className={`font-poppins-regular`}>Incorrect email?</Text>

                            <Text className={`text-PinkColor font-poppins-medium`}>Go back to registration</Text>

                        </Pressable>



                    </View>

                </View>

            </TouchableWithoutFeedback>

        </SafeAreaView>

    )

}

export default VerifyRegistrationCodeScreen