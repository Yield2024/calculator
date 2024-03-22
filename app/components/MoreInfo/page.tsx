'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './moreInfo.module.scss';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './input.css';
import { Button } from '../ui/buttons';
import { log } from 'console'

export default function MoreInfo() {
	const [phone, setPhone] = useState('');
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const handleCheckboxChange = (category: string) => {
		setSelectedCategories(prevCategories => {
			if (prevCategories.includes(category)) {
				return prevCategories.filter(prevCategory => prevCategory !== category);
			} else {
				return [...prevCategories, category];
			}
		});
	};

	const handleSubmit = (e: any) => {
		// e.preventDefault();

		// const formData = {
		// 	phone,
		// 	fullName: e.target.elements.fullName.value,
		// 	email: e.target.elements.email.value,
		// 	selectedCategories
		// }

		// console.log(formData);
		
	};

	return (
		<section id='more-info' className={styles.section}>
			<Image
				className={styles.background}
				src='/images/form-background.png'
				alt='background'
				width={0}
				height={0}
				sizes='100%'
			/>
			<div className={styles.elipse}></div>
			<div className={styles.main}>
				<h1 className='section_header'>More Info</h1>
				<h2 className={styles.header}>Join The Yield Waitlist</h2>
				<form action='' onSubmit={handleSubmit} className={styles.form}>
					<h3 className={styles.form_header}>Get More Info</h3>
					<div className={styles.checkbox_block}>
						<div className={styles.top}>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Nexus'
										checked={selectedCategories.includes('Nexus')}
										onChange={() => handleCheckboxChange('Nexus')}
									/>
									<span>Nexus</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Reserve'
										checked={selectedCategories.includes('Reserve')}
										onChange={() => handleCheckboxChange('Reserve')}
									/>
									<span>Reserve</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Horizon'
										checked={selectedCategories.includes('Horizon')}
										onChange={() => handleCheckboxChange('Horizon')}
									/>
									<span>Horizon</span>
								</label>
							</div>
						</div>
						<div className={styles.center}>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Orbit'
										checked={selectedCategories.includes('Orbit')}
										onChange={() => handleCheckboxChange('Orbit')}
									/>
									<span>Orbit</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Odyssey'
										checked={selectedCategories.includes('Odyssey')}
										onChange={() => handleCheckboxChange('Odyssey')}
									/>
									<span>Odyssey</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Wealth'
										checked={selectedCategories.includes('Wealth')}
										onChange={() => handleCheckboxChange('Wealth')}
									/>
									<span>Wealth</span>
								</label>
							</div>
						</div>
						<div className={styles.bottom}>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Mortage'
										checked={selectedCategories.includes('Mortage')}
										onChange={() => handleCheckboxChange('Mortage')}
									/>
									<span>Mortage</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Crypto'
										checked={selectedCategories.includes('Crypto')}
										onChange={() => handleCheckboxChange('Crypto')}
									/>
									<span>Crypto</span>
								</label>
							</div>
							<div className={styles.cat}>
								<label>
									<input
										type='checkbox'
										name='Wearables'
										checked={selectedCategories.includes('Wearables')}
										onChange={() => handleCheckboxChange('Wearables')}
									/>
									<span>Wearables</span>
								</label>
							</div>
						</div>
					</div>
					<div className={styles.input_container}>
						<div className={styles.title}>Full Name</div>
						<input type='text' name='fullName' placeholder='EX: John Doe' />
						<div className={styles.title}>Email ID</div>
						<input type='email' name='email' placeholder='example123@gmai.com' />
						<div className={styles.title}>Phone Number</div>
						<PhoneInput
							className='phone'
							defaultCountry='us'
							value={phone}
							onChange={phone => setPhone(phone)}
						/>
					</div>
					<div className={styles.details}>
						By submitting, you will be agreeing to our <b>privacy policy</b> and{' '}
						<b>terms & conditions</b>
					</div>
					<Button className='default_button' type='submit'>
						Submit Now
					</Button>
				</form>
			</div>
		</section>
	);
}
