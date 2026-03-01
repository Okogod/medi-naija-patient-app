import { View, Text, Image, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const WelcomeImage = require('../../../assets/images/welcome_screen_images/welcome_screen_image.png');

const WelcomeScreen = () => {

    return (

        <SafeAreaView className={`gap-[50px] items-center`}>

            <View>

                <Text className={`text-DarkGreenColor text-[32px] font-bold text-center`}>MediNaija</Text>

                <Text className={`text-center text-[18px]`}>your health, your way</Text>

            </View>

            <Image source={WelcomeImage} resizeMode='contain' />

            <View className={`gap-[40px]`}>

                <Pressable className={`bg-PinkColor px-[100px] py-[20px] rounded-[20px]`}>

                    <Text className={`text-WhiteColor text-[20px]`}>Register</Text>

                </Pressable>
                
                <Pressable className={`bg-DarkGreenColor px-[100px] py-[20px] rounded-[20px]`}>

                    <Text className={`text-WhiteColor text-[20px]`}>Login</Text>

                </Pressable>

            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen;