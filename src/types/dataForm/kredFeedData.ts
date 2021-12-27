interface IAddress {
	street?: string
	exteriorNumber?: number
	interiorNumber?: number
	zipCode?: number
	town?: string
	city?: string
	state?: string
	country?: string
}

export interface ILegalRepresentative {
	name?: string
	gender?: 'male' | 'female'
	birthDate?: string
	stateOfBirth?: string
	countryOfBirth?: string
	nationality?: string
	CURP?: string
	RFC?: string
	address?: IAddress
	maritalStatus?: string
	email?: string
	phoneNumber?: number
	identificationDocument?: any
}

interface IBankAccount {
	transferCode?: string
	bank?: string
}

export interface IKredFeedData {
	businessName?: string
	tradeName?: string
	nationality?: string
	constitutionDate?: string
	RFC?: string
	taxRegime?: string
	industry?: string
	address?: IAddress
	proofOfAddress?: any
	phoneNumber?: number
	email?: string
	legalRepresentative?: ILegalRepresentative
	bankAccount?: IBankAccount
}
