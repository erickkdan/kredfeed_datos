import React, { useState } from 'react'
import styles from './dataForm.module.scss'
import { Input } from '../components/input/input'
import { ISelectOption, Select } from '../components/select/select'
import { IKredFeedData } from '../types/dataForm/kredFeedData'

export const DataForm = (): React.ReactElement => {
	const [data, setData] = useState<IKredFeedData>()
	const selectCountryOptions = new Array<ISelectOption>(
		{ value: 'México', label: 'México' },
		{ value: 'Colombia', label: 'Colombia' },
		{ value: 'Argentina', label: 'Argentina' }
	)
	const selectGenderOptions = new Array<ISelectOption>(
		{ value: 'female', label: 'Hombre' },
		{ value: 'male', label: 'Mujer' }
	)

	const sendData = () => {
		console.log(data)
	}
	return (
		<div className={styles.mainContainer}>
			<div className={styles.headerContainer}>
				<img
					src="https://kredfeed-assets.s3.amazonaws.com/images/logo-black.png"
					className={styles.kredFeedImg}
					alt={'kredFeedImg'}
				/>
			</div>
			<form className={styles.formContainer}>
				<div className={styles.title}>Empresa</div>
				<Input
					placeholder={'Razón social'}
					label={'Razón social'}
					onChangeFunction={(value) => setData({ ...data, businessName: value })}
					value={data?.businessName}
					size={'large'}
					autofocus
				/>
				<Input
					placeholder={'Nombre comercial'}
					label={'Nombre comercial'}
					onChangeFunction={(value) => setData({ ...data, tradeName: value })}
					value={data?.tradeName}
					size={'large'}
				/>
				<Input
					placeholder={'Correo electrónico'}
					label={'Correo electrónico'}
					onChangeFunction={(value) => setData({ ...data, email: value })}
					value={data?.email}
					size={'large'}
					type={'email'}
				/>
				<Input
					placeholder={'Número telefónico'}
					label={'Número telefónico'}
					onChangeFunction={(value) => setData({ ...data, phoneNumber: value })}
					value={data?.phoneNumber}
					size={'large'}
					type={'phone'}
				/>
				<Input
					placeholder={'Nacionalidad '}
					label={'Nacionalidad'}
					onChangeFunction={(value) => setData({ ...data, nationality: value })}
					value={data?.nationality}
					size={'medium'}
				/>
				<Input
					placeholder={'Fecha de constitución'}
					label={'Fecha de constitución'}
					onChangeFunction={(value) => setData({ ...data, constitutionDate: value })}
					value={data?.constitutionDate}
					size={'small'}
					type={'date'}
					maxDate={new Date(Date.now())}
				/>
				<Input
					placeholder={'RFC'}
					label={'RFC'}
					onChangeFunction={(value) => setData({ ...data, RFC: value })}
					value={data?.RFC}
					size={'small'}
					maxLength={13}
					minLength={12}
				/>
				<Input
					placeholder={'Régimen Fiscal'}
					label={'Régimen Fiscal'}
					onChangeFunction={(value) => setData({ ...data, taxRegime: value })}
					value={data?.taxRegime}
					size={'large'}
				/>
				<Input
					placeholder={'Industria'}
					label={'Industria'}
					onChangeFunction={(value) => setData({ ...data, industry: value })}
					value={data?.industry}
					size={'large'}
				/>
				<div className={styles.sectionDivider} />
				<Select
					options={selectCountryOptions}
					label={'País'}
					onChangeFunction={(value) => setData({ ...data, address: { country: value } })}
					size={'large'}
				/>
				<div className={styles.marginRight}>
					<Input
						placeholder={'Código Postal'}
						label={'Código Postal'}
						onChangeFunction={(value) => setData({ ...data, address: { zipCode: value } })}
						value={data?.address?.zipCode}
						size={'mini'}
						type={'number'}
						maxLength={6}
					/>
				</div>
				<Input
					placeholder={'Entidad Federativa o Estado'}
					label={'Entidad Federativa o Estado'}
					onChangeFunction={(value) => setData({ ...data, address: { state: value } })}
					value={data?.address?.state}
					size={'medium'}
				/>
				<Input
					placeholder={'Ciudad o Población'}
					label={'Ciudad o Población'}
					onChangeFunction={(value) => setData({ ...data, address: { city: value } })}
					value={data?.address?.city}
					size={'large'}
				/>
				<Input
					placeholder={'Colonia o Urbanización'}
					label={'Colonia o Urbanización'}
					onChangeFunction={(value) => setData({ ...data, address: { town: value } })}
					value={data?.address?.town}
					size={'large'}
				/>
				<Input
					placeholder={'Calle o Avenida'}
					label={'Calle o Avenida'}
					onChangeFunction={(value) => setData({ ...data, address: { street: value } })}
					value={data?.address?.street}
					size={'large'}
				/>
				<Input
					placeholder={'Número exterior'}
					label={'Número exterior'}
					onChangeFunction={(value) => setData({ ...data, address: { exteriorNumber: value } })}
					value={data?.address?.exteriorNumber}
					size={'large'}
				/>
				<Input
					placeholder={'Número interior'}
					label={'Número interior'}
					onChangeFunction={(value) => setData({ ...data, address: { interiorNumber: value } })}
					value={data?.address?.interiorNumber}
					size={'large'}
				/>
				<Input
					label={'Comprobante de domicilio'}
					onChangeFunction={(value) => setData({ ...data, proofOfAddress: value })}
					value={data?.proofOfAddress}
					size={'large'}
					type={'file'}
					acceptedFiles={'image/png, image/jpeg, image/*,.pdf'}
				/>

				<div className={styles.sectionDivider} />
				<div className={styles.title}>Representante legal</div>
				<Input
					placeholder={'Nombre'}
					label={'Nombre'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { name: value } })}
					value={data?.legalRepresentative?.name}
					size={'large'}
				/>
				<Input
					placeholder={'Correo electrónico'}
					label={'Correo electrónico'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { email: value } })}
					value={data?.legalRepresentative?.email}
					size={'large'}
					type={'email'}
				/>
				<Input
					placeholder={'Número telefónico'}
					label={'Número telefónico'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { phoneNumber: value } })}
					value={data?.legalRepresentative?.phoneNumber}
					size={'medium'}
					type={'phone'}
				/>
				<Select
					options={selectGenderOptions}
					label={'Género'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { gender: value } })}
					size={'small'}
				/>
				<Input
					placeholder={'Nacionalidad'}
					label={'Nacionalidad'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { nationality: value } })}
					value={data?.legalRepresentative?.nationality}
					size={'small'}
				/>
				<Input
					placeholder={'Fecha de nacimiento'}
					label={'Fecha de nacimiento'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { birthDate: value } })}
					value={data?.legalRepresentative?.birthDate}
					size={'small'}
					type={'date'}
					maxDate={new Date(Date.now())}
				/>
				<Select
					options={selectCountryOptions}
					label={'País de nacimiento'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { countryOfBirth: value } })}
					size={'large'}
				/>
				<Input
					placeholder={'Entidad Federativa de nacimiento'}
					label={'Entidad Federativa de nacimiento'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { stateOfBirth: value } })}
					value={data?.legalRepresentative?.stateOfBirth}
					size={'medium'}
				/>
				<Input
					placeholder={'Estado civil'}
					label={'Estado civil'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { maritalStatus: value } })}
					value={data?.legalRepresentative?.maritalStatus}
					size={'medium'}
				/>
				<div className={styles.marginRight}>
					<Input
						placeholder={'CURP'}
						label={'CURP'}
						onChangeFunction={(value) => setData({ ...data, legalRepresentative: { CURP: value } })}
						value={data?.legalRepresentative?.CURP}
						size={'small'}
						maxLength={18}
						minLength={18}
					/>
				</div>
				<Input
					placeholder={'RFC'}
					label={'RFC'}
					onChangeFunction={(value) => setData({ ...data, legalRepresentative: { RFC: value } })}
					value={data?.legalRepresentative?.RFC}
					size={'mini'}
					maxLength={13}
					minLength={12}
				/>
				<div className={styles.sectionDivider} />
				<Select
					options={selectCountryOptions}
					label={'País'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { country: value } } })
					}
					size={'large'}
				/>
				<div className={styles.marginRight}>
					<Input
						placeholder={'Código Postal'}
						label={'Código Postal'}
						onChangeFunction={(value) =>
							setData({ ...data, legalRepresentative: { address: { zipCode: value } } })
						}
						value={data?.legalRepresentative?.address?.zipCode}
						size={'mini'}
						type={'number'}
						maxLength={6}
					/>
				</div>
				<Input
					placeholder={'Entidad Federativa o Estado'}
					label={'Entidad Federativa o Estado'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { state: value } } })
					}
					value={data?.legalRepresentative?.address?.state}
					size={'medium'}
				/>
				<Input
					placeholder={'Ciudad o Población'}
					label={'Ciudad o Población'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { city: value } } })
					}
					value={data?.legalRepresentative?.address?.city}
					size={'large'}
				/>
				<Input
					placeholder={'Colonia o Urbanización'}
					label={'Colonia o Urbanización'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { town: value } } })
					}
					value={data?.legalRepresentative?.address?.town}
					size={'large'}
				/>
				<Input
					placeholder={'Calle o Avenida'}
					label={'Calle o Avenida'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { street: value } } })
					}
					value={data?.legalRepresentative?.address?.street}
					size={'large'}
				/>
				<Input
					placeholder={'Número exterior'}
					label={'Número exterior'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { exteriorNumber: value } } })
					}
					value={data?.legalRepresentative?.address?.exteriorNumber}
					size={'large'}
				/>
				<Input
					placeholder={'Número interior'}
					label={'Número interior'}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { address: { interiorNumber: value } } })
					}
					value={data?.legalRepresentative?.address?.interiorNumber}
					size={'large'}
				/>
				<Input
					label={'Documento de identificación '}
					onChangeFunction={(value) =>
						setData({ ...data, legalRepresentative: { identificationDocument: value } })
					}
					value={data?.legalRepresentative?.identificationDocument}
					size={'large'}
					type={'file'}
					acceptedFiles={'image/png, image/jpeg, image/*,.pdf'}
				/>

				<div className={styles.sectionDivider} />
				<div className={styles.title}>Cuenta Bancaria</div>
				<Input
					placeholder={'CLABE'}
					label={'CLABE'}
					onChangeFunction={(value) => setData({ ...data, bankAccount: { transferCode: value } })}
					value={data?.bankAccount?.transferCode}
					size={'large'}
					maxLength={18}
					minLength={18}
				/>
				<Input
					placeholder={'Banco'}
					label={'Banco'}
					onChangeFunction={(value) => setData({ ...data, bankAccount: { bank: value } })}
					value={data?.bankAccount?.bank}
					size={'large'}
				/>
				<input
					className={styles.submitButton}
					type={'submit'}
					onClick={() => sendData()}
					value={'Registratme'}
				/>
			</form>
			<div className={styles.footerContainer}>
				<a href="https://kredfeed.com/terms" target="_blank" className={styles.link}>
					Términos
				</a>
				<div className={styles.divider}>|</div>
				<a href="https://kredfeed.com/privacy" target="_blank" className={styles.link}>
					Privacidad
				</a>
			</div>
		</div>
	)
}
