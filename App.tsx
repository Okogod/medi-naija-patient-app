import { NavigationContainer } from "@react-navigation/native";

import { useState, useEffect } from "react";

import "./global.css";

// Screens
import SplashScreen from './src/screens/splash_screen/SplashScreen';

// Screen Stack
import RootStackNavigator from "./src/navigators/stack_navigators/root_stack_navigator/RootStackNavigator";

// Hook
import useHasDoneOnboardingStore from "./src/hooks/UseHasDoneOnboardingStore";

export default function App() {

  const hasDoneOnboardingHydrated = useHasDoneOnboardingStore.persist.hasHydrated();

  const [showSplashScreenCount, setShowSplashScreenCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {

      if (showSplashScreenCount < 3) {
        setShowSplashScreenCount(showSplashScreenCount + 1);
      }

    }, 1000)

  }, [showSplashScreenCount])

  return (
    <NavigationContainer>

      {
        !hasDoneOnboardingHydrated ? <SplashScreen /> : <RootStackNavigator />
      }

    </NavigationContainer>
  );
}


