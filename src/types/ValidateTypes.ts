export type FirstNameValidateType = {
    firstNameIsValid: boolean,
    setFirstNameError?: ( value: string ) => void
}

export type LastNameValidateType = {
    lastNameIsValid: boolean,
    setLastNameError?: ( value: string ) => void
}

export type EmailValidateType = {
    emailIsValid: boolean,
    setEmailError?: ( value: string ) => void
}

export type PasswordValidateType = {
    passwordIsValid: boolean,
    setPasswordError?: ( value: string ) => void
}