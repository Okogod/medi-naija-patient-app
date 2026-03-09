import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';


const AppointmentsScreen = () => {

    return(
        <SafeAreaView>

            <View className={`items-center justify-center`}>

                <Text className={`font-poppins-bold text-[24px]`}>Appointments Screen</Text>

            </View>

        </SafeAreaView>
    )

}

export default AppointmentsScreen;