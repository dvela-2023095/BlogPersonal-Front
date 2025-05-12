import React, { useState } from "react";
import { Input } from "../Input/Input";
import { useLogin } from "../../shared/hooks/useLogin";
import { validateEmail,validateUsername,validatePassword, userEmailValidationMessage, passwordValidationMessge } from "../../shared/validations/validators";
export const Login = ({switchAuthHandler})=>{
    const form = {
        username: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    }

    

    const [formData,setFormData]= useState(form)
    const {login}=useLogin()

    const isSubmitButtonDisable = !formData.username.isValid||
                                  !formData.password.isValid

    const handleValidationOnBlur = (value, field)=>{
    let isValid = false
        switch(field){
            case 'username':
                isValid = validateEmail(value)
                
                if(isValid === false){
                  isValid=validateUsername(value)
                  
                }
                break
            case 'password':
                isValid = validatePassword(value)
                break
            default:
            break
        }
        setFormData((prevData)=> (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
  }

    const handleValueChange=(value,field)=>{
      setFormData((prevData)=>(
        {
          ...prevData,
          [field]:{
            ...prevData[field],
            value
          }
        }
      ))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      
      login(
        formData.username.value,
        formData.password.value
      )
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-blue-950 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/login.png" alt="Login" className="mx-auto w-20 h-20 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">User Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
                field='username'
                onChangeHandler={handleValueChange}
                value={formData.username.value}
                type="text"
                placeholder="Username o Email"
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.username.showError}
                validationMessage={userEmailValidationMessage}
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              field='password'
              placeholder="Password"
              onChangeHandler={handleValueChange}
              value={formData.password.value}
              onBlurHandler={handleValidationOnBlur}
              showErrorMessage={formData.password.showError}
              validationMessage={passwordValidationMessge}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
          >
            Ingresar
          </button>
          <div className="text-center mt-4 text-sm link">
            <span onClick={switchAuthHandler}>Sin Cuenta? Registrate</span>
            <button onClick={switchAuthHandler}>Hi</button>
          </div>
        </form>
      </div>
    </div>
    )
}