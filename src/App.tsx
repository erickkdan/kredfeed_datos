import React from 'react'
import styles from './assets/styles/App.module.scss'
import { DataForm } from './dataForm/dataForm'

function App() {
	return (
		<div className={styles.appContainer}>
			<DataForm />
		</div>
	)
}

export default App
