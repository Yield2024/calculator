import LinkToForm from '../LinkToForm/page'
import styles from './accessInStyle.module.scss';

export default function AccessInStyle() {
	return (
		<section className={styles.section} id='access'>
			<video className={styles.video} autoPlay loop playsInline muted>
				<source src='/videos/rings.mov' type='video/quicktime'/>
				<source src='/videos/rings.webm'/>
			</video>
			<div className={styles.content}>
				<h1 className={styles.header}>Access in Style</h1>
				<p className={styles.text}>Safe - easy - contactless. Ring2Pay with integrated payment function (NFC) is made of high-quality ceramic. Neither water nor dust can harm it. It is scratch resistant and hypoallergenic.</p>
				<LinkToForm text='Join The Waitlist'/>
			</div>
		</section>
	);
}
