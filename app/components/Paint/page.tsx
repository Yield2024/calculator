import Marquee from 'react-fast-marquee';
import styles from './paint.module.scss';
import Image from 'next/image';

export default function Paint() {
	return (
		<section id='paint' className={styles.section}>
			<div className={styles.main}>
				<h1 className={styles.header}>Paint Your Financial Future</h1>
				<p
					className={styles.text}
				>{`Earning, Growing, Connecting, Learning - That\'s Living`}</p>
				<div className={styles.line}></div>
				<Marquee direction='right'>
					<div className={styles.running_line}>
						<Image
							src='/images/wireless.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield - Double Digit Yields... Guaranteed!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/cryptocurrency.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield App- Your Whole Financial Picture all in One App!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/approved.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield Wealth- Our RIA offers fully insured investment products
							with the highest APY!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/notification.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield Mortgage- offers the Lowest Rates!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/charity.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield Benefits- Insurance, Payroll & More!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/wireless.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield Crypto Exchange-Invest in Crypto or Change Crypto to Fiat &
							Fiat to Crypto Instantly!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image src='/images/cr.png' alt='icon' width={48} height={48} />
						<p className={styles.line_text}>
							Yield ZAP- Local & Global Transfers anywhere on earth in seconds!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/converter.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Yield Style-Wearables & Contactless Payments!
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/home-insurance.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>
							Mortgages | Best Insurance Productstions
						</p>
					</div>
					<div className={styles.running_line}>
						<Image
							src='/images/peer-peer.png'
							alt='icon'
							width={48}
							height={48}
						/>
						<p className={styles.line_text}>Peer to Peer Payments</p>
					</div>
				</Marquee>
			</div>
			<div className={styles.content}>
				<div className={styles.background}></div>
				<div className={styles.eclipse}></div>
				<div className={styles.eclipse_second}></div>
				<div className={styles.eclipse_third}>
					<div className={styles.dot}></div>
					<div className={styles.underline}></div>
					<p className={styles.content_first}>
						No more searching for your wallet or mobile phone.
					</p>
					<div className={styles.dot_second}></div>
					<div className={styles.underline_second}></div>
					<p className={styles.content_second}>
						NFC contactless payment works independently, no batteries, chargers,
						or phones needed.
					</p>
					<div className={styles.dot_third}></div>
					<div className={styles.underline_third}></div>
					<p className={styles.content_third}>
						Contactless payment with YIELD® saves time and is easy.
					</p>
					<div className={styles.dot_fourth}></div>
					<div className={styles.underline_fourth}></div>
					<p className={styles.content_fourth}>
						Secure, Stylish, Hypoallergenic, and Waterproof.
					</p>
				</div>

				<div className={styles.left}>
					<p className={styles.first}>
						No more searching for your wallet or mobile phone.
					</p>
					<p className={styles.second}>
						NFC contactless payment works independently, no batteries, chargers,
						or phones needed.
					</p>
				</div>
				<div className={styles.video}>
					<video className={styles.center} loop muted autoPlay playsInline>
						<source src='/videos/band.mov' type='video/quicktime' />
						<source src='/videos/band.webm' />
					</video>
				</div>
				<div className={styles.right}>
					<p className={styles.third}>
						Contactless payment with YIELD® saves time and is easy.
					</p>
					<p className={styles.fourth}>
						Secure, Stylish, Hypoallergenic, and Waterproof.
					</p>
				</div>
			</div>
		</section>
	);
}
