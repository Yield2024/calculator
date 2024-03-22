import Image from 'next/image';
import { Button } from '../ui/buttons';
import styles from './footer.module.scss';
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.main}>
				<div className={styles.headers}>
					<h3 className={styles.header}>E-Sign Content</h3>
					<h3 className={styles.header}>privacy policy</h3>
					<h3 className={styles.header}>end result user agreement</h3>
					<h3 className={styles.header}>patriot act statement</h3>
				</div>
				<div className={styles.texts}>
					<p className={styles.text}>
						YIELD BNK is a financial technology company, not a bank.
					</p>
					<p className={styles.text}>
						1 Obtaining stated APY (annual percentage yield) or opening a
						savings account does not require a minimum account balance. Stated
						APY is valid from date of account opening. Account fees may reduce
						earnings. Higher APY rate subject to paid YIELD BNK subscription.
						Rates are subject to change.
					</p>
					<p className={styles.text}>
						Yield is a technology company offering a range of financial products
						and services. &quot;Yield&quot; refers to Yield.Inc, and its
						wholly-owned, separate affiliate Yield Wealth Ltd., dba, Yield
						Wealth Management and Yield Wealth Advisors.
					</p>
					<p className={styles.text}>
						YIELD BNK is a paid membership that confers benefits for products
						and services offered by Yield.Inc, Yield Wealth Ltd, each a
						separate, affiliated, and wholly-owned operating subsidiary of
						Yield.Inc. &quot;Yield&quot; refers to Yield.Inc., and its
						affiliates.
					</p>
					<p className={styles.text}>
						All product and company names are trademarks™ or registered®
						trademarks of their respective holders. Use of them does not imply
						any affiliation with or endorsement by them.
					</p>
					<p className={styles.text}>
						App Store is a service mark of Apple Inc. Google Play and the Google
						Play logo are trademarks of Google LLC.
					</p>
				</div>
				<div className={styles.underline} />
				<div className={styles.content}>
					<p className={styles.copy}>© Copyright 2023 Yield.Inc.</p>
					<div className={styles.else}>
						<div className={styles.icons}>
							<Link href='https://twitter.com/Yield_Bnk' className={styles.icon} rel="noopener noreferrer" target="_blank">
								<Image
									src='/icons/x.svg'
									alt='apple'
									width={19}
									height={17}
								/>
							</Link>
							<Link href='https://www.linkedin.com/company/yield-bnk/about/' className={styles.icon}>
								<Image
									src='/icons/linkedin.svg'
									alt='apple'
									width={22}
									height={22}
								/>
							</Link>
							<Link href='https://www.youtube.com/@yield_bnk' className={styles.icon}>
								<Image
									src='/icons/youtube.svg'
									alt='apple'
									width={22}
									height={22}
								/>
							</Link>
							<Link href='https://www.facebook.com/yieldbnk' className={styles.icon}>
								<Image
									src='/icons/facebook.svg'
									alt='apple'
									width={22}
									height={22}
								/>
							</Link>
							<Link href='https://www.instagram.com/yield_bnk' className={styles.icon}>
								<Image
									src='/icons/instagram.svg'
									alt='apple'
									width={22}
									height={22}
								/>
							</Link>	
						</div>
						<div className={styles.line} />
						<div className={styles.buttons}>
							<Button className='social_button'>
								<Image
									src='/icons/apple.svg'
									alt='apple'
									width={20}
									height={20}
								/>
								Apple Store
							</Button>
							<Button className='social_button'>
								<Image
									src='/icons/playstore.svg'
									alt='apple'
									width={20}
									height={20}
								/>
								PlayStore
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
