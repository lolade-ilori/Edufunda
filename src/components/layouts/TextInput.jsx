import React from 'react'

function TextInput({
    inputIcon,
    inputIconSize,
    labelName,
    inputPlaceholder,
    inputType,
    passwordIcon,
    passwordIconWidth
}) {
  return (
    <div className='text-wrapper'>
        <label >{labelName}</label>
        <div className="inner-wrapper">
            <span className="input-icon">
                <img src={inputIcon} width={inputIconSize} />
            </span>
            <input 
                type={inputType}
                placeholder={inputPlaceholder}
                autocomplete="off"
                
                className="signup-input"
            />
            <span className="password-icon">
                <img src={passwordIcon} width={passwordIconWidth} />
            </span>
        </div>
    </div>
  )
}

export default TextInput