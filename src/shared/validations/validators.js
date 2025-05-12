
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const validateUsername = (username)=>{
    const regex = /^\S{3,15}$/
    return regex.test(username)
}

export const validatePassword = (password)=>{
    const regex = /^\S{8,12}$/ //Chetar despues
    return regex.test(password)
}

export const userEmailValidationMessage = 'Utilice un Usuario o Email no valido'
export const passwordValidationMessge = 'La contraseña debe estar entre 8 y 12 caracteres'