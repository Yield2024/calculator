'use client';

import Image from 'next/image';
import styles from './join.module.scss';
import { Input } from 'rsuite';
import { Button } from '../ui/buttons';
import { PhoneInput } from 'react-international-phone';
import { useState } from 'react';

export default function JoinPopup({handleClose}: any) {
	const [phone, setPhone] = useState('');

	return (
		<div className={styles.popup}>
			<div className={styles.wrapper}>
				<div className={styles.button} onClick={handleClose}>
					<Image src='/icons/close.svg' width={30} height={30} alt='close' />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.header}>Join THE YIELD 100</div>
				<form className={styles.form}>
					<p className={styles.title}>Full Name</p>
					<Input type='text' className={styles.input} />
					<p className={styles.title}>Email Address</p>
					<Input type='text' className={styles.input} />
					<p className={styles.title}>Phone</p>
					<PhoneInput
						className='phone2'
						defaultCountry='us'
						value={phone}
						onChange={phone => setPhone(phone)}
					/>
					<div className={styles.checkbox_wrapper}>
						<input type='checkbox' />
						<p>
							I understand there is a minimum deposit requirement of $100,000
							USD to join THE YIELD 100.
						</p>
					</div>
					<Button className='default_button'>Submit</Button>
				</form>
			</div>
			<div></div>
		</div>
	);
}
