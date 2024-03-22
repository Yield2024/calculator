import Image from 'next/image';
import styles from './wealth.module.scss';
import LinkToForm from '../LinkToForm/page'

export default function Wealth() {
	return (
		<section id='wealth' className={styles.section}>
			<h1 className='section_header'>Wealth</h1>
			<div className={styles.main}>
				<div className={styles.left}>
					<h3 className={styles.title}>
						Financial Strategies for a Fulfilling Life
					</h3>
					<p className={styles.text}>
						{`When you have long-term financial goals, you need a plan. The right plan helps you feel good about the future today. That\'s what you get with Yield`}
						<sup>®</sup>
					</p>
					<div className={styles.img_block}>
						<div className={styles.img_left}>
							<div className={styles.first}>
								<Image
									className={styles.img}
									src='/icons/wealth1.svg'
									alt='image'
									width={50}
									height={50}
								/>
								<p className={styles.details}>Protect Your Life</p>
							</div>
							<div className={styles.second}>
								<Image
									className={styles.img}
									src='/icons/wealth2.svg'
									alt='image'
									width={50}
									height={50}
								/>
								<p className={styles.details}>Manage Your Wealth</p>
							</div>
						</div>
						<div className={styles.img_right}>
							<div className={styles.first}>
								<Image
									className={styles.img}
									src='/icons/wealth3.svg'
									alt='image'
									width={50}
									height={50}
								/>
								<p className={styles.details}>Invest In Your Health</p>
							</div>
							<div className={styles.second}>
								<Image
									className={styles.img}
									src='/icons/wealth4.svg'
									alt='image'
									width={50}
									height={50}
								/>
								<p className={styles.details}>Grow Your Business</p>
							</div>
						</div>
					</div>
					<LinkToForm text='Join The Waitlist'/>
				</div>
				<Image className={styles.wealth} src='/images/wealth.png' alt='image' width={0} height={0} sizes='100%' />
			</div>
		</section>
	);
}
