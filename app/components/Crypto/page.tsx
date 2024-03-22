import Image from 'next/image';
import { Button } from '../ui/buttons';
import styles from './crypto.module.scss';
import LinkToForm from '../LinkToForm/page'

export default function Crypto() {
	return (
		<section id='crypto' className={styles.section}>
			<h1 className='section_header'>Crypto</h1>
			<div className={styles.main}>
				<video className={styles.video} loop autoPlay muted playsInline>
					<source src='/videos/crypto.mp4' />
					<source src='/videos/crypto.webm' />
				</video>
				<div className={styles.content}>
					<h1 className={styles.header}>
						Manage your crypto assets & Perform a Fee-Free Instant Exchange to
						FIAT.
					</h1>
					<p className={styles.text}>
						Yield makes crypto easily spendable, giving the account holder the
						flexibility to transact anywhere, anytime...
					</p>
					<div className={styles.item}>
						<Image
							className={styles.image}
							src='/images/check-circle.png'
							alt='img'
							width={17.5}
							height={17.5}
						/>
						<p className={styles.details}>View your digital assets/wallet</p>
					</div>
					<div className={styles.item}>
						<Image
							className={styles.image}
							src='/images/check-circle.png'
							alt='img'
							width={17.5}
							height={17.5}
						/>
						<p className={styles.details}>Purchase Crypto</p>
					</div>
					<div className={styles.item}>
						<Image
							className={styles.image}
							src='/images/check-circle.png'
							alt='img'
							width={17.5}
							height={17.5}
						/>
						<p className={styles.details}>
							Instant fee-free exchange crypto to fiat, deposited directly to
							your Yield account and available to spend.
						</p>
					</div>
					<LinkToForm text='Join The Waitlist'/>
				</div>
			</div>
		</section>
	);
}
