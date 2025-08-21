import React from "react"

export interface InputFieldProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  invalid?: boolean
  variant?: "filled" | "outlined" | "ghost"
  size?: "sm" | "md" | "lg"
}

const sizeClasses: Record<NonNullable<InputFieldProps["size"]>, string> = {
  sm: "h-9 text-xs px-2 sm:px-3",
  md: "h-10 text-sm sm:text-md px-3 sm:px-3.5",
  lg: "h-11 text-base sm:text-md px-3 sm:px-4",
}

const variantClasses: Record<NonNullable<InputFieldProps["variant"]>, string> = {
  filled:
    "bg-gray-100 dark:bg-gray-800 border-transparent focus:outline focus:ring-2 focus:ring-blue-500",
  outlined:
    "bg-transparent border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
  ghost:
    "bg-transparent border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
}

const defaultClasses =
  "rounded-md w-full transition-colors disabled:cursor-not-allowed disabled:opacity-50 dark::placeholder-gray-100"

export default function Input({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}: InputFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1 p-2 sm:p-3 font-medium">
      {label && (
        <label className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base ">
          {label}
        </label>
      )}

      <input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        onChange={onChange}
        className={`${defaultClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
          invalid
            ? "border-red-500 text-red-600 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
            : ""
        }`}
      />

      {invalid && errorMessage ? (
        <p className="text-xs sm:text-sm text-red-500">{errorMessage}</p>
      ) : helperText ? (
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </div>
  )
}
