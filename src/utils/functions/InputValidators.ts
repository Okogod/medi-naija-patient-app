import type { 
    FirstNameValidateType,
    LastNameValidateType,
    EmailValidateType,
    PasswordValidateType 
} from "../../types/ValidateTypes";

const namePattern = /^[a-zA-Z]+$/;
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordPattern = {

    length: /^.{8,}$/,
    uppercase: /[A-Z]/,
    lowercase:/[a-z]/,
    number: /\d/,
    specialcharacter: /[@$!%*?&]/

}

export const ValidateFirstname = ( firstName: string, setFirstNameError: ( value: string ) => void): FirstNameValidateType => {

    if( !firstName.trim()  ){

        setFirstNameError("First name is required");

        return { firstNameIsValid: false }
        
    }

    if( !namePattern.test(firstName) ){

        setFirstNameError("First name should contain only letters");

        return { firstNameIsValid: false }

    }

    if( firstName.length < 3 ){

        setFirstNameError("First name should be at least 3 characters long");

        return { firstNameIsValid: false }
        
    }

    setFirstNameError("");
    return { firstNameIsValid:true }

}


export const ValidateLastname = ( lastName: string, setLastNameError: ( value: string ) => void): LastNameValidateType => {

    if( !lastName.trim()  ){

        setLastNameError("Last name is required");

        return { lastNameIsValid: false }
        
    }

    if( !namePattern.test(lastName) ){

        setLastNameError("Last name should contain only letters");

        return { lastNameIsValid: false }

    }

    if( lastName.length < 3 ){

        setLastNameError("Last name should be at least 3 characters long");

        return { lastNameIsValid: false }
        
    }

    setLastNameError("");
    return { lastNameIsValid:true }

}

export const ValidateEmail = ( email: string, setEmailError: ( value: string ) => void): EmailValidateType => {

    if( !email.trim()  ){

        setEmailError("Email is required");

        return { emailIsValid: false }
        
    }

    if( !emailPattern.test(email) ){

        setEmailError("Invalid email pattern");

        return { emailIsValid: false }

    }

    if( email.length < 3 ){

        setEmailError("Invalid email length");

        return { emailIsValid: false }
        
    }

    setEmailError("");
    return { emailIsValid:true }

}

export const ValidatePassword = ( password: string, setPasswordError: ( value: string ) => void): PasswordValidateType => {

    if( !password.trim()  ){

        setPasswordError("Password is required");

        return { passwordIsValid: false }
        
    }

    if( !passwordPattern.length.test(password) ){

        setPasswordError("Password must be atleast 8 characters long");

        return { passwordIsValid: false }
        
    }

    if( !passwordPattern.lowercase.test(password) ){

        setPasswordError("Password must contain a least one lowercase letter");

        return { passwordIsValid: false }

    }

    if( !passwordPattern.uppercase.test(password) ){

        setPasswordError("Password must contain a least one uppercase letter");

        return { passwordIsValid: false }

    }

    if( !passwordPattern.number.test(password) ){

        setPasswordError("Password must contain a least one uppercase letter");

        return { passwordIsValid: false }

    }

    

    setPasswordError("");
    return { passwordIsValid:true }

}