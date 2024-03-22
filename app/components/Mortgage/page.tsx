import Image from 'next/image'
import { Button } from '../ui/buttons';
import styles from './mortgage.module.scss';

export default function Mortgage() {
	return (
		<section id='mortgage' className={styles.section}>
			<h1 className='section_header'>Mortgage</h1>
			<div className={styles.main}>
			<Image className={styles.mortgage} src='/images/mortgage.png' alt='image' width={0} height={0} sizes='100%' />
				<div className={styles.content}>
					<h3 className={styles.header}>Your Mortgage Source</h3>
					<p className={styles.text}>Yield<sup>®</sup>{` is more than just a mortgage provider; we\'re your advisor, your guide, and your advocate in the complex world of real estate financing. With decades of collective experience, our team is dedicated to offering the best mortgage rates, terms, and services tailored to meet your unique needs.`}</p>
					<div className={styles.buttons}>
						<Button className='default_button'>Purchase</Button>
						<Button className='default_button'>Refinance</Button>
					</div>
					<div className={styles.details}>
						<div className={styles.left}>
							<p className={styles.first}>400,000+</p>
							<p className={styles.second}>Loans Funded</p>
						</div>
						<div className={styles.right}>
							<p className={styles.first}>10 Day Fundings</p>
							<p className={styles.second}>Average Loan</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
