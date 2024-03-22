import LinkToForm from '../LinkToForm/page'
import styles from './spend.module.scss';

export default function Spend() {
	return (
		<section id='spend' className={styles.section}>
			<h1 className='section_header'>Spend</h1>
			<div className={styles.main}>
				<div className={styles.video_wrapper}>
					<video
						id='player'
						loop
						muted
						autoPlay
						playsInline
						className={styles.video}
					>
						<source src='/videos/card.webm' />
						<source src='/videos/card.mov' />
					</video>
				</div>
				<div className={styles.content}>
					<h3 className={styles.header}>Physical & Virtual Visa Debit Cards</h3>
					<p className={styles.text}>
						Powerful digital banking perks to help fuel your long-term financial
						strategy.
					</p>
					<LinkToForm text='Join The Waitlist'/>
				</div>
			</div>
		</section>
	);
}
