import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';


import { AuthStackParamList } from '../../types/StacksParamList';

const ResetPasswordScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const GoToLogin = () => {

        navigation.replace("LoginScreen");

    }

    

    return (

        <SafeAreaView >

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View className={`px-[20px] py-[30px] gap-[30px]`}>

                    <View>

                        <Text className={`text-center font-poppins-bold text-[24px] text-DarkGreenColor`}>Reset Password</Text>

                        <Text className={`text-center font-poppins-regular`}>Enter Your new Password</Text>

                    </View>

                    <View className={`gap-[10px]`}>

                        <Text>Enter new password</Text>

                         <TextInput className={` border-GreyColor border-[1px] h-[50px] rounded-[15px] text-center`} />
                    
                    </View>

                    <View>

                        <Pressable onPress={GoToLogin} className={`bg-DarkGreenColor rounded-[10px] items-center p-[20px]`}>

                            <Text className={`text-WhiteColor font-poppins-medium`}>reset Password</Text>

                        </Pressable>

                        



                    </View>

                </View>

            </TouchableWithoutFeedback>

        </SafeAreaView>

    )

}

export default ResetPasswordScreen