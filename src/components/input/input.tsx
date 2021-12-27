import React, { useEffect, useState } from 'react'
import styles from './input.module.scss'
import warning from '../../assets/icons/warning.svg'

interface IInputProps {
	placeholder?: string
	size?: 'mini' | 'small' | 'medium' | 'large'
	onChangeFunction(value: any): void
	error?: boolean
	errorMessage?: string
	value: any
	label: string
	type?: 'text' | 'email' | 'password' | 'number' | 'phone' | 'date' | 'file'
	maxLength?: number
	minLength?: number
	autofocus?: boolean
	maxDate?: Date
	minDate?: Date
	acceptedFiles?: string
}

export const Input = ({
	placeholder,
	size = 'small',
	onChangeFunction,
	error = false,
	errorMessage = '',
	value,
	label,
	type = 'text',
	maxLength,
	minLength,
	autofocus = false,
	maxDate,
	minDate,
	acceptedFiles
}: IInputProps): React.ReactElement => {
	const [newValue, setNewValue] = useState<string>('')
	const [newErrorMessage, setNewErrorMessage] = useState<string>(errorMessage)
	const [showError, setShowError] = useState<boolean>(error)

	const getFormattedDate = (date: Date) => {
		const day = date.getDate().toString().padStart(2, '0')
		const month = date.getMonth() + 1
		const year = date.getFullYear()
		return `${year}-${month}-${day}`
	}

	const onChangeInput = (event: any) => {
		const inputValue = event.target.value
		if (maxLength) {
			if (inputValue.length <= maxLength) {
				validateValue(inputValue)
			}
		} else validateValue(inputValue)
	}

	useEffect(() => {
		onChangeFunction(newValue)
	}, [newValue])

	const validateOnBlur = () => {
		if (minLength && newValue.length < minLength) {
			setShowError(true)
			setNewErrorMessage(`Debe de tener al menos ${minLength} caracteres`)
		} else setShowError(false)
		switch (type) {
			case 'email': {
				const emailRegex = new RegExp(
					/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
				)
				const validation = emailRegex.test(newValue)
				setShowError(!validation)
				setNewErrorMessage('Formato incorrecto.')
				break
			}
			case 'date': {
				setShowError(!newValue)
				setNewErrorMessage('Selecciona fecha.')
				break
			}
			case 'phone': {
				setShowError(newValue.length < 10)
				setNewErrorMessage('Debe de contener 10 números.')
				break
			}
		}
	}

	const validateValue = (valueToValidate: string) => {
		switch (type) {
			case 'text': {
				setNewValue(valueToValidate)
				break
			}
			case 'email': {
				setNewValue(valueToValidate)
				break
			}
			case 'date': {
				setNewValue(valueToValidate)
				break
			}
			case 'phone': {
				if (valueToValidate.length <= 10) {
					const cleanP = valueToValidate.replace(/[()]/g, '')
					const cleanHyphen = cleanP.replace(/[-]/g, '')
					const cleanSpaces = cleanHyphen.replace(/ /g, '')
					const onlyNumbers = cleanSpaces.replace(/[^0-9]+/g, '')
					setNewValue(onlyNumbers)
				}
				break
			}
			case 'number': {
				const onlyNumbers = valueToValidate.replace(/[^0-9]+/g, '')
				setNewValue(onlyNumbers)
				break
			}
		}
	}

	return (
		<div className={styles.inputContainer}>
			<div className={styles.labelContainer}>
				<label className={styles.label}>{label}</label>
			</div>
			<input
				className={`${styles.input} ${styles[size]} ${showError ? styles.errorStatus : ''} ${styles[type]}`}
				placeholder={placeholder}
				onChange={(e) => {
					onChangeInput(e)
				}}
				value={value}
				onBlur={() => validateOnBlur()}
				autoFocus={autofocus}
				type={type}
				max={maxDate ? getFormattedDate(maxDate) : ''}
				min={minDate ? getFormattedDate(minDate) : ''}
				accept={acceptedFiles}
			/>
			{showError && (
				<div className={styles.errorContainer}>
					<img src={warning} alt={'warning'} className={styles.warningImg} />
					<div className={styles.errorMessage}>{newErrorMessage}</div>
				</div>
			)}
		</div>
	)
}
