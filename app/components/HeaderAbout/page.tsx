
import Image from 'next/image';
import styles from './headerAbout.module.scss';
import { Button } from '../ui/buttons';
import LinkToForm from '../LinkToForm/page'

export default function HeaderAbout() {

	return (
		<section id='about' className={styles.section}>
			<div className={styles.right}>
				<h3 className={styles.title}>All The Yield Without the Risk.</h3>
				<div className={styles.text}>{`
					At YIELD®, We don\'t just manage finances; we curate and elevate them
					to an art form, intertwining innovation, security, and growth to craft
					a bespoke financial experience. Every deposit is FDIC insured up to
					$2,000,000 USD and up to $10,000,000 USD through YIELD\'s Depository
					Network of AM Best Top Rated Insurers providing absolute protection of
					both principal and interest accrued!`}
				</div>
				<LinkToForm text='Join the Waitlist'></LinkToForm>
				{/* <Button className='default_button' onClick={handleClick}>Join the Waitlist</Button> */}
			</div>
			<div className={styles.logos}>
				<Image
					src='/icons/fdic.svg'
					alt='fdic'
					className={styles.logo}
					width={0}
					height={0}
					sizes='100%'
				/>
				<Image
					src='/icons/sipc.svg'
					alt='fdic'
					className={styles.logo}
					width={0}
					height={0}
					sizes='100%'
				/>
				<Image
					src='/icons/best.svg'
					alt='fdic'
					className={styles.logo}
					width={0}
					height={0}
					sizes='100%'
				/>
			</div>
		</section>
	);
}
