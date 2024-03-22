import Image from 'next/image';
import styles from './burger.module.scss';
import { Button } from '../ui/buttons';
import Link from 'next/link'

export default function Burger() {
	return (
		<div className={styles.popup}>
			<div className={styles.empty}></div>
			<div className={styles.center}>
				<Link href='#about'>YIELD</Link>
				<Link href='#banking'>Banking</Link>
				<Link href='#spend'>Spend</Link>
				<Link href='#wealth'>Wealth</Link>
				<Link href='#mortgage'>Mortgage</Link>
				<Link href='#crypto'>Crypto</Link>
				<Link href='#community'>Community</Link>
				<Link href='#security'>Security</Link>
				<Button className='default_button'>Join the Waitlist</Button>
			</div>
			<div className={styles.social}>
				<div className={styles.icons}>
					<Link href='https://twitter.com/Yield_Bnk' rel="noopener noreferrer" target="_blank" className={styles.icon}>
						<Image src='/icons/x.svg' alt='icon' width={30} height={27} />
					</Link>
					<Link href='https://www.linkedin.com/company/yield-bnk/about/' rel="noopener noreferrer" target="_blank" className={styles.icon}>
						<Image
							src='/icons/linkedin.svg'
							alt='icon'
							width={40}
							height={40}
						/>
					</Link>
					<Link href='https://www.youtube.com/@yield_bnk' rel="noopener noreferrer" target="_blank" className={styles.icon}>
						<Image
							src='/icons/youtube.svg'
							alt='icon'
							width={40}
							height={40}
						/>
					</Link>
					<Link href='https://www.facebook.com/yieldbnk' rel="noopener noreferrer" target="_blank" className={styles.icon}>
						<Image
							src='/icons/facebook.svg'
							alt='icon'
							width={40}
							height={40}
						/>
					</Link>
					<Link href='https://www.instagram.com/yield_bnk' rel="noopener noreferrer" target="_blank" className={styles.icon}>
						<Image
							src='/icons/instagram.svg'
							alt='icon'
							width={40}
							height={40}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
