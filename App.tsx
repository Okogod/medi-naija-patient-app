import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import "./global.css";

// Screens
import SplashScreen from './src/screens/splash_screen/SplashScreen';

// Screen Stack
import RootStackNavigator from "./src/navigators/stack_navigators/root_stack_navigator/RootStackNavigator";

// Hook
import useHasDoneOnboardingStore from "./src/hooks/UseHasDoneOnboardingStore";

export default function App() {

  const [fontsLoaded] = useFonts({

    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf")

  });

  if (!fontsLoaded) {
    return null;
  }

  const hasDoneOnboardingHydrated = useHasDoneOnboardingStore.persist.hasHydrated();


  return (
    <NavigationContainer>

      {
        !hasDoneOnboardingHydrated ? <SplashScreen /> : <RootStackNavigator />
      }

    </NavigationContainer>
  );
}


