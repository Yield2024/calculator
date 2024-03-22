'use client';
import Image from 'next/image';
import { Button } from '../ui/buttons';
import styles from './community.module.scss';
import { useEffect, useState } from 'react';
import JoinPopup from '../JoinPopup/page';

export default function Community() {
	const [form, setForm] = useState(false);

	const handleClose = () => {
		setForm(false);
	};

	const handleOpen = () => {
		console.log(true);
		setForm(true);
	};

	useEffect(() => {
		if (form) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [form]);

	return (
		<section  id='community' className={styles.section}>
			<h1 className='section_header'>Community</h1>
			<Image
				src='/images/community.png'
				alt='image'
				className={styles.main_image}
				width={0}
				height={0}
				sizes='100%'
			/>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image
						src='/images/community1.png'
						alt='image'
						className={styles.card_image}
						width={0}
						height={0}
						sizes='100%'
					/>
					<h3 className={styles.header}>The Rundown</h3>
					<p className={styles.text}>
						Join to become a founding member of THE YIELD 100®! Tailored
						experiences for those who choose a road less traveled. From bespoke
						investment strategies to exclusive private banking each service is a
						testament to our commitment to financial excellence.
					</p>
				</div>
				<div className={styles.card}>
					<Image
						src='/images/community2.png'
						alt='image'
						className={styles.card_image}
						width={0}
						height={0}
						sizes='100%'
					/>
					<h3 className={styles.header}>Membership</h3>
					<p
						className={styles.text}
					>{`As a member of THE YIELD 100®, you\'re not only part of an intentional community; you're a pioneer in a movement that is redefining capitalism.`}</p>
					<Button className='golden_button' onClick={handleOpen}>Join The YIELD 100 Now!</Button>
				</div>
				{form && (
					<>
						<JoinPopup handleClose={handleClose} />
					</>
				)}
				<div className={styles.card}>
					<Image
						src='/images/community3.png'
						alt='image'
						className={styles.card_image}
						width={0}
						height={0}
						sizes='100%'
					/>
					<h3 className={styles.header}>Legacy Redefined</h3>
					<p className={styles.text}>
						Join to become a founding member of THE YIELD 100®! Tailored
						experiences for those who choose a road less traveled. From bespoke
						investment strategies to exclusive private banking each service is a
						testament to our commitment to financial excellence.
					</p>
				</div>
			</div>
		</section>
	);
}
