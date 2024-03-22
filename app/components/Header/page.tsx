'use client';
import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import { Button } from '../ui/buttons';
import Image from 'next/image';
import Burger from '../Burger/page';
import { useRouter } from 'next/navigation';

export default function Header() {
	const [showText, setShowText] = useState(false);
	const [isBurger, setIsBurger] = useState(false);

	const router = useRouter();

	const handleClick = () => {
		router.push('#more-info');
	};

	useEffect(() => {
		if (isBurger) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isBurger]);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Image src='/main-logo.png' alt='main logo' width={114} height={28} />
				<div className={styles.links}>
					<Link href='#banking' className={styles.nav_item}>
						Banking
					</Link>
					<Link href='#spend' className={styles.nav_item}>
						Spend
					</Link>
					<Link href='#wealth' className={styles.nav_item}>
						Wealth
					</Link>
					<Link href='#mortgage' className={styles.nav_item}>
						Mortgage
					</Link>
					<Link href='#crypto' className={styles.nav_item}>
						Crypto
					</Link>
					<Link href='#community' className={styles.nav_item}>
						Community
					</Link>
					<Link href='#security' className={styles.nav_item}>
						Security
					</Link>
				</div>
				<Button className='header_button' onClick={handleClick}>Join the Waitlist</Button>
				<div className={styles.burger} onClick={() => setIsBurger(!isBurger)}>
					<span className={`${isBurger ? styles.first : ''}`}></span>
					<span className={`${isBurger ? styles.second : ''}`}></span>
					<span className={`${isBurger ? styles.third : ''}`}></span>
				</div>
			</nav>
				{isBurger && <Burger />}
			<video
				className={styles.desktop_video}
				autoPlay
				muted
				playsInline
				onEnded={() => setShowText(true)}
			>
				<source src='/videos/header-desktop.mp4' type='video/mp4' />
			</video>
			<video
				className={styles.mobile_video}
				autoPlay
				muted
				playsInline
				onEnded={() => setShowText(true)}
			>
				<source src='/videos/header-mobile.mp4' type='video/mp4' />
			</video>
			{showText && (
				<div className={styles.header_details}>
					<h1 className={styles.header_title}>
						Your Financial
						<br />
						Renaissance Awaits
					</h1>
					<h4 className={styles.header_subtitle}>
						Earn The Highest Yields...Guaranteed!
					</h4>
					<div className={styles.header_text}></div>
				</div>
			)}
		</header>
	);
}
