import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from '@react-native-async-storage/async-storage'

type hasDoneOnboardingType = {
    hasDoneOnboarding: boolean,
    setHasDoneOnboarding: ( hasDoneOnboarding: boolean ) => void
}

const useHasDoneOnboardingStore = create<hasDoneOnboardingType>()(persist(
    (set) => ({
        hasDoneOnboarding: false,
        setHasDoneOnboarding: (hasDoneOnboarding) => {set(() => ({hasDoneOnboarding}))}
    }),
    {
        name: 'has-done-onboarding',
        storage: createJSONStorage(() => AsyncStorage)
    }
))

export default useHasDoneOnboardingStore;