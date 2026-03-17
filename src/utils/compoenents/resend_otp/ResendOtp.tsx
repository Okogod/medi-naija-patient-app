import { View, Text, Pressable } from "react-native";

import { useEffect, useState } from "react";

type ResendOtpType = {

    resend: () => void
    
}


const ResendOtp = ( { resend }: ResendOtpType ) => {

    const initialMin = 1;
    const initialSec = 59

    const [ restartCount, setRestartCount ] = useState(false);

    const [min, setMin] = useState(initialMin);

    const [sec, setSec] = useState(initialSec)

   

    useEffect(() => {

        setTimeout(() => {

            if (sec == 0 && min == 0) {
                setMin(0);
                setSec(0);
                setRestartCount(false);
            } else if (sec == 0 && min != 0) {
                setMin(prev => prev - 1);
                setSec(initialSec);
            } else {
                setSec(prev => prev - 1);
            }

        }, 1000)

    }, [min, sec])
 
    useEffect( () => {
        if( restartCount == true ){
            resend();
            setMin(initialMin);
            setSec(initialSec);
        }
    }, [ restartCount ])

    return (
        <View className={`flex-row items-center justify-center gap-[10px]`}>

            <Text className={`font-poppins-medium text-[18px]`}>Didn't get code?</Text>

            {
                min == 0 && sec == 0 ?
                    <Pressable onPress={() => setRestartCount(true)} >
                        
                        <Text className={`text-PinkColor text-[18px] font-poppins-bold`}>resend code</Text>


                    </Pressable>
                    : <Text className={`text-PinkColor text-[18px] font-poppins-bold`}>{`0${min} : ${sec < 10 ? `0${sec}` : sec}`}</Text>

            }
        </View>
    )
}

export default ResendOtp;