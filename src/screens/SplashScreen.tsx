import { ImageBackground, StatusBar, Image, View, Text } from 'react-native';


// Assets
const SplashScreenBackgroundImage = require('../../assets/images/splash-screen-images/splash-screen-background-image.png');
const Logo = require('../../assets/images/logo/medi-naija-full-logo.png');


const SplashScreen = () => {

    return(
        <ImageBackground source={SplashScreenBackgroundImage} className={`flex-1 items-center justify-center`}>

            <StatusBar hidden/>

            <Image source={Logo} resizeMode='contain' />

            <View>

                <Text className={`text-WhiteColor text-[24px] text-center`}>Your Health, {'\n'} one Click Away</Text>

            </View>

        </ImageBackground>
    )
}

export default SplashScreen;