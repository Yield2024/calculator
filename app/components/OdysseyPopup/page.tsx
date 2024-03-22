'use client';

import { PhoneInput } from 'react-international-phone';
import styles from './odyssey.module.scss';
import { useMemo, useState } from 'react';
import { Input, InputGroup, SelectPicker } from 'rsuite';
import 'rsuite/SelectPicker/styles/index.css';
import 'rsuite/InputNumber/styles/index.css';
import 'rsuite/Slider/styles/index.css';
import './input.css';
import { Button } from '../ui/buttons';
import Image from 'next/image';

export default function OdysseyPopup({handleClose}: any) {
	const [phone, setPhone] = useState('');
	const [deposit, setDeposit] = useState('100,000');
	const [termState, setTermState] = useState('5');
	const [interestState, setInterestState] = useState('Monthly');

	const interests = useMemo(
		() =>
			['Monthly', 'Quarterly', 'Annually', 'Term'].map(item => ({
				label: item,
				value: item,
			})),
		[]
	);

	const terms = useMemo(
		() =>
			['5', '7', '10'].map(item => ({ label: `${item} Years`, value: item })),
		[]
	);

	return (
		<div className={styles.popup}>
			<div className={styles.header_wrapper}>
				<div className={styles.empty}></div>
				<div className={styles.header}>Odyssey Concierge Request</div>
				<div className={styles.close} onClick={handleClose}>
					<Image
						src='/icons/close.svg'
						alt='close'
						width={30}
						height={30}
					></Image>
				</div>
			</div>
			<div className={styles.details}>
				{`
				If you haven\'t already done so, please visit our calculator below the
				account types to determine your Yield! If you have any questions, please
				contact your referring agent or send an email to `}
				<p className={styles.email}>concierge@yield.inc.</p>
			</div>
			<form className={styles.form}>
				<p className={styles.title}>Name</p>
				<Input type='text' className={styles.odyssey_input} />
				<p className={styles.title}>Email Address</p>
				<Input type='email' className={styles.odyssey_input} />
				<p className={styles.title}>Mobile Number</p>
				<PhoneInput
					className='phone2'
					defaultCountry='us'
					value={phone}
					onChange={phone => setPhone(phone)}
				/>
				<p className={styles.title}>Home Phone Number</p>
				<Input type='number' className={styles.odyssey_input} />
				<p className={styles.title}>Street Address</p>
				<Input type='text' className={styles.odyssey_input} />
				<p className={styles.title}>City</p>
				<Input type='text' className={styles.odyssey_input} />
				<p className={styles.title}>State</p>
				<Input type='text' className={styles.odyssey_input} />
				<p className={styles.title}>Postal / Zip Code*</p>
				<Input type='text' className={styles.odyssey_input} />
				<p className={styles.title}>
					Anticipated Deposit Amount(More than $100,000)
				</p>
				<InputGroup>
					<InputGroup.Addon>$</InputGroup.Addon>
					<Input
						className={styles.input_group}
						// defaultValue={
						// 	typeof deposit === 'string'
						// 		? deposit
						// 		: new Intl.NumberFormat('en-US').format(deposit)
						// }
						min={'100,000'}
						value={
							typeof deposit === 'string'
								? deposit
								: new Intl.NumberFormat('en-US').format(deposit)
						}
						onChange={e => {
							if (e === '') {
								setDeposit(new Intl.NumberFormat('en-US').format(0));
							} else {
								setDeposit(
									new Intl.NumberFormat('en-US').format(
										parseFloat(e.replace(/,/g, ''))
									)
								);
							}
						}}
					/>
				</InputGroup>
				{(() => {
					if (typeof deposit === 'string') {
						const numericValue = parseFloat(deposit.replace(/,/g, ''));
						if (numericValue < 100000) {
							return <p className={styles.error}>Min deposit $100,000</p>;
						}
					}
					return null;
				})()}
				<p className={styles.title}>Desired Term Length</p>
				<SelectPicker
					data={terms}
					searchable={false}
					defaultValue={termState}
					style={{ width: '100%' }}
					className={styles.input_group}
					onChange={e => {
						if (e !== null) {
							setTermState(e);
						}
					}}
					onClean={e => {
						setTermState('5');
					}}
				/>
				<p className={styles.title}>Selected interest Distribution Term</p>
				<SelectPicker
					data={interests}
					searchable={false}
					defaultValue={interestState}
					style={{ width: '100%', opacity: 0.9 }}
					className={styles.input_group}
					onChange={e => {
						if (e !== null) {
							setInterestState(e);
						}
					}}
					onClean={() => {
						setInterestState('Monthly');
					}}
				/>
				<p className={styles.title}>Referring Agent Name</p>
				<Input type='text' className={styles.odyssey_input} />
				<div className={styles.checkbox_wrapper}>
					<input type='checkbox' />
					<p>
						I hereby confirm and certify that I qualify as an accredited
						investor pursuant to the applicable securities laws and regulations.
						I understand that an accredited investor, in the context of a
						natural person, includes anyone who:
						<br />
						Has earned income that exceeded $200,000 (or $300,000 together with
						a spouse or spousal equivalent) in each of the prior two years, and
						reasonably expects the same for the current year,
						<br />
						OR
						<br />
						Has a net worth over $1 million, either alone or together with a
						spouse or spousal equivalent, excluding the value of the primary
						residence.
					</p>
				</div>
				<div className={styles.checkbox_wrapper}>
					<input type='checkbox' />
					<p>
						acknowledge that this self-certification allows me to participate in
						investment opportunities that may not be registered with the
						securities authorities and that may carry higher risks. I affirm
						that all information provided in connection with this certification
						is true, correct, and complete. I understand that providing false or
						misleading information can result in legal consequences, including
						but not limited to penalties under law.
					</p>
				</div>
				<div className={styles.checkbox_wrapper}>
					<input type='checkbox' />
					<p>
						By checking this box, I declare under penalty of perjury that I meet
						the criteria set forth above and understand the responsibilities and
						risks associated with being an accredited investor.
					</p>
				</div>
				<Button className='default_button'>Submit</Button>
			</form>
		</div>
	);
}
