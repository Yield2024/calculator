import Image from 'next/image';
import styles from './security.module.scss';

export default function Security() {
	return (
		<section id='security' className={styles.section}>
			<h1 className='section_header'>Security</h1>
			<div className={styles.main}>
				<div className={styles.card}>
					<Image
						src='/icons/security1.svg'
						alt='image'
						width={48}
						height={48}
					/>
					<h5 className={styles.header}>Freeze Your Card Instantly</h5>
					<p className={styles.details}>
						Quisque congue lacinia nibh eget convallis. Vestibulum egestas
						molestie turpis
					</p>
				</div>
				<div className={styles.card}>
					<Image
						src='/icons/security2.svg'
						alt='image'
						width={48}
						height={48}
					/>
					<h5 className={styles.header}>24/7 Customer Support</h5>
					<p className={styles.details}>
						Quisque congue lacinia nibh eget convallis. Vestibulum egestas
						molestie turpis
					</p>
				</div>
				<div className={styles.card}>
					<Image
						src='/icons/security3.svg'
						alt='image'
						width={48}
						height={48}
					/>
					<h5 className={styles.header}>Biometric Authentication</h5>
					<p className={styles.details}>
						Quisque congue lacinia nibh eget convallis. Vestibulum egestas
						molestie turpis
					</p>
				</div>
				<div className={styles.card}>
					<Image
						src='/icons/security4.svg'
						alt='image'
						width={48}
						height={48}
					/>
					<h5 className={styles.header}>Instant Transaction Alerts</h5>
					<p className={styles.details}>
						Quisque congue lacinia nibh eget convallis. Vestibulum egestas
						molestie turpis
					</p>
				</div>
			</div>
			<p className={styles.title}>
				{`Tokenized for your protection, have peace of mind while you shop knowing
				your information is safe and secure. It\'s your data, why should anyone
				else control it? YIELD® is GDPR and PCI compliant, ensuring that you\'re
				in control, not a bank.`}
			</p>
		</section>
	);
}
