import React from 'react'
import './labelCompo.scss'

export interface LabelCompoProps {
	text: string
}

export const LabelCompo = ({ text }: LabelCompoProps): React.ReactElement => {
	return <label className={'label-test'}>{text}</label>
}
