'use client'

import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let baseStyle = 'px-4 py-2 rounded-md text-white font-medium hover:opacity-90 transition'

  let variantStyle = ''
  if (variant === 'primary') variantStyle = 'bg-button-bg'
  if (variant === 'secondary') variantStyle = 'bg-registration-bg'

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
