import React from "react";
import PropTypes from "prop-types";

export const Input = ({field,
    label,
    value,
    onChangeHandler,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    type,
    placeholder,
    textarea})=>{
        const handleValueChange = (e)=>{
            onChangeHandler(e.target.value, field)
        }

        const handleOnBlur=(e)=>{
            onBlurHandler(e.target.value,field)
        }

        return (
            <>
            { textarea ? (
                <textarea
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    rows={5}
                    style={{maxWidth: '400px'}}
                />
            ) :
            (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleOnBlur}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
            )}
            <span className="text-center text-red">
                {showErrorMessage && validationMessage}
            </span>
            </>
        )
    }

    Input.propTypes = {
        field: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChangeHandler: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        showErrorMessage: PropTypes.bool.isRequired,
        validationMessage: PropTypes.string,
        onBlurHandler: PropTypes.func.isRequired,
        textarea: PropTypes.bool
    }