import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";


// Types
import type { isRegisteredType, hasDoneOnboardingType } from "../types/global.types";

export const useIsRegistered = create<isRegisteredType>()(
    persist(
        (set) => ({
            isRegistered: false,
            setIsRegistered: (isRegistered) => {set(( ) => ({isRegistered}))}
        }),
        {
            name: "is-registered",
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);

export const useHasDoneOnboarding = create<hasDoneOnboardingType>()(persist(
    (set) => ({
        hasDoneOnboarding: false,
        setHasDoneOnboarding: (hasDoneOnboarding) => {set(() => ({hasDoneOnboarding}))}
    }),
    {
        name: 'has-done-onboarding',
        storage: createJSONStorage(() => AsyncStorage)
    }
))