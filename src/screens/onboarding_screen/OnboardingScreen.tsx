import { useWindowDimensions, Pressable, Text, ScrollView, View, Image, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useState, useRef } from "react";

import { OnboardingParamList } from "../../types/StacksParamList";


const OnboardingScreenContents = [

    {
        id: 1,
        title: `Book Doctors Easily`,
        subtitle: `Connect with Licensed Nigerian \n doctors anytime, anywhere.`,
        image: require("../../../assets/images/onboarding-images/onboarding-image1.png")
    },

    {
        id: 2,
        title: `Chat with Certified Doctors`,
        subtitle: `Get quick answers to health question \n with real-time messaging and \n consultations.`,
        image: require("../../../assets/images/onboarding-images/onboarding-image2.png")
    },

    {
        id: 3,
        title: `Get prescriptions and referrals`,
        subtitle: `Receive e-prescriptions and specialist \n referrals after your consultation, all \n from your phone.`,
        image: require("../../../assets/images/onboarding-images/onboarding-image3.png")
    }
]

const OnbaordingScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<OnboardingParamList>>();

    const { width } = useWindowDimensions();

    const [currentOnboardingScreenIndex, setCurrentOnboardingScreenIndex] = useState(0);

    const ScrollViewRef = useRef<ScrollView>(null!)

    const OnScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {

        const offsetX = e.nativeEvent.contentOffset.x / width;

        setCurrentOnboardingScreenIndex(offsetX);

    }

    const Skip = () => {
        const lastIndex = OnboardingScreenContents.length - 1;

        ScrollViewRef?.current?.scrollTo({ x: width * lastIndex });

    }

    const Next = () => {

        const lastIndex = OnboardingScreenContents.length - 1;

        if( currentOnboardingScreenIndex != lastIndex ){

            const NextCurrentOnboardingScreenIndex = currentOnboardingScreenIndex + 1;

            ScrollViewRef?.current?.scrollTo({x: width * NextCurrentOnboardingScreenIndex });

            setCurrentOnboardingScreenIndex(NextCurrentOnboardingScreenIndex);

        }
    }

    const GetStarted = () => {
        navigation.replace("WelcomeScreen");
    }

    return (
        <SafeAreaView className={`flex-1 bg-WhiteColor gap-[20%]`}>

            {
                currentOnboardingScreenIndex < 2 ?
                    <Pressable onPress={Skip} className={`items-end px-[32px]`}>

                        <Text className={`text-[20px] font-poppins-medium`}>Skip</Text>

                    </Pressable>
                    :
                    <View />
            }

            <ScrollView ref={ScrollViewRef} onMomentumScrollEnd={(e) => { OnScrollEnd(e) }} horizontal showsHorizontalScrollIndicator={false} pagingEnabled>

                {
                    OnboardingScreenContents.map(onboardingContents =>
                        <View key={onboardingContents.id} style={{ width }} className={` items-center gap-[20px]`}>

                            <Image source={onboardingContents.image} resizeMode="contain" />

                            <Text className={`text-DarkGreenColor text-[24px] font-poppins-bold`}>{onboardingContents.title}</Text>

                            <Text className={`text-GreyColor text-center text-[20px] p-[10px] font-poppins-regular`}>{onboardingContents.subtitle}</Text>

                        </View>
                    )
                }

            </ScrollView>

            <View className={`px-[32px] gap-[20px]`}>

                <View className={`m-[auto] flex-row gap-[20px]`}>

                    {
                        OnboardingScreenContents.map((_, index) =>
                            <View key={index} className={`${index == currentOnboardingScreenIndex ? `bg-PinkColor` : `bg-AshColor`} h-[13px] w-[13px] rounded-[50%]`} />)
                    }

                </View>

                {
                    currentOnboardingScreenIndex == 2 ?
                        <Pressable onPress={() => { GetStarted() }} className={`bg-PinkColor py-[20px] px-[100px] rounded-[20px] `}>

                            <Text className={`text-[20px] text-center text-WhiteColor font-poppins-medium`}>GET STARTED</Text>

                        </Pressable> :
                        <Pressable onPress={Next} className={`bg-PinkColor py-[20px] px-[100px] rounded-[20px] `}>

                            <Text className={`text-[20px] text-center text-WhiteColor font-poppins-medium`}>NEXT</Text>

                        </Pressable>
                }

            </View>

        </SafeAreaView>
    )
}

export default OnbaordingScreen;