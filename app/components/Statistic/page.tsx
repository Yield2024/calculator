import Image from 'next/image';
import styles from './statistic.module.scss';

export default function Statistic() {
	return (
		<section id='statistic' className={styles.statistic}>
			<div className={styles.info}>
				<div className={styles.header}>Here Are The Statistics</div>
				<h3
					className={styles.interest}
				>{`99% of the interest earned, isn\'t going to you...`}</h3>
				<div className={styles.line}></div>
				<div className={styles.details}>
					<Image
						className={styles.arrow}
						alt='arrow'
						src='/images/statisticArrow.png'
						width={0}
						height={0}
						sizes='100%'
					/>
					<h3 className={styles.details_header}>$603 Billion</h3>
					<div className={styles.details_info}>
						In interest was lost by Americans over the last 8 years by sticking
						with big banks. - WSJ
					</div>
				</div>
			</div>
			<Image
				className={styles.image}
				alt='list'
				src='/images/statisticList.png'
				width={0}
				height={0}
				sizes='100%'
			/>
		</section>
	);
}
