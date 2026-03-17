import { TouchableWithoutFeedback, Keyboard, View, Text, TextInput, Pressable } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

import { AuthStackParamList } from '../../types/StacksParamList';

import { useState } from 'react';

// Icons
import { Feather } from '@expo/vector-icons';

const ResetPasswordScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const [showPassword, setShowPassword] = useState(false);

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


                    <View className={`gap-[5px]`}>

                                <Text className={`font-poppins-regular text-BlackColor`}>Enter new password</Text>

                                <View className={`border-[1px] border-GreyColor h-[50px] rounded-[8px]`}>

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