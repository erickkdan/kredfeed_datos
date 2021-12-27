import React, { useEffect, useState } from 'react'
import styles from './select.module.scss'
import warning from '../../assets/icons/warning.svg'

export interface ISelectOption {
	label: string
	value: string
}

interface ISelectProps {
	options: Array<ISelectOption>
	label: string
	onChangeFunction(value: any): void
	error?: boolean
	errorMessage?: string
	size?: 'mini' | 'small' | 'medium' | 'large'
}

export const Select = ({
	options,
	size = 'small',
	onChangeFunction,
	error = false,
	errorMessage = '',
	label
}: ISelectProps): React.ReactElement => {
	const [newValue, setNewValue] = useState<string>('')
	const [newErrorMessage, setNewErrorMessage] = useState<string>(errorMessage)
	const [showError, setShowError] = useState<boolean>(error)

	useEffect(() => {
		onChangeFunction(newValue)
	}, [newValue])

	const validateOnBlur = () => {
		if (newValue === 'empty' || newValue === '') {
			setShowError(true)
			setNewErrorMessage('Selección inválida')
		} else {
			setShowError(false)
		}
	}

	return (
		<div className={styles.selectContainer}>
			<div className={styles.labelContainer}>
				<label className={styles.label}>{label}</label>
			</div>
			<select
				className={`${styles.select} ${styles[size]} ${showError ? styles.errorStatus : ''}`}
				onChange={(e) => {
					setNewValue(e.target.value)
				}}
				onBlur={() => validateOnBlur()}
			>
				<option value={'empty'}>{'Selecciona...'}</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{showError && (
				<div className={styles.errorContainer}>
					<img src={warning} alt={'warning'} className={styles.warningImg} />
					<div className={styles.errorMessage}>{newErrorMessage}</div>
				</div>
			)}
		</div>
	)
}
