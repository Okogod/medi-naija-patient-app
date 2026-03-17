import { View, Text, Image, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types/StacksParamList';

import { useHasDoneOnboarding } from '../../hooks/global.hooks';
// Asset
const WelcomeImage = require('../../../assets/images/welcome_screen_images/welcome_screen_image.png');

const WelcomeScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { setHasDoneOnboarding } = useHasDoneOnboarding();

    const ToRegister = () => {

        setHasDoneOnboarding(true);

        navigation.replace('AuthStackNavigator', { screen: 'RegisterScreen' })

    }

     const ToLogin = () => {

        setHasDoneOnboarding(true);
        navigation.replace('AuthStackNavigator', { screen: 'LoginScreen' })

    }

    return (

        <SafeAreaView className={`gap-[50px] items-center`}>

            <View>

                <Text className={`text-DarkGreenColor text-[32px] text-center font-poppins-bold`}>MediNaija</Text>

                <Text className={`text-center text-[18px] font-poppins-regular`}>your health, your way</Text>

            </View>

            <Image source={WelcomeImage} resizeMode='contain' />

            <View className={`gap-[40px]`}>

                <Pressable onPress={ToRegister} className={`bg-PinkColor px-[100px] py-[20px] rounded-[20px]`}>

                    <Text className={`text-WhiteColor text-center text-[20px] font-poppins-medium`}>Register</Text>

                </Pressable>
                
                <Pressable onPress={ToLogin} className={`bg-DarkGreenColor px-[100px] py-[20px] rounded-[20px]`}>

                    <Text className={`text-WhiteColor text-center text-[20px] font-poppins-medium`}>Login</Text>

                </Pressable>

            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen;