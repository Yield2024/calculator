'use client';
import Image from 'next/image';
import styles from './mobile-app.module.scss';
import { Button } from '../ui/buttons';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

import { Navigation } from 'swiper/modules';

export default function MobileApp() {
	return (
		<section id='mobile' className={styles.section}>
			<div className={styles.main}>
				<h1 className='section_header'>Mobile App</h1>
				<div className={styles.info}>
					<Image
						className={styles.logo}
						src='/icons/logo.svg'
						alt='logo'
						width={0}
						height={0}
						sizes='100%'
					/>
					<div className={styles.buttons}>
						<Button className='social_button'>
							<Image
								className={styles.social}
								src='/icons/apple.svg'
								alt='social'
								width={20}
								height={20}
							/>
							<p>Apple Store</p>
						</Button>
						<Button className='social_button'>
							<Image
								className={styles.social}
								src='/icons/playstore.svg'
								alt='social'
								width={22}
								height={22}
							/>
							<p>Playstore</p>
						</Button>
					</div>
				</div>
				<div className={styles.wrapper}>
					<Swiper
						navigation={{
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						}}
						modules={[Navigation]}
						className={styles.swiper}
						centeredSlides={false}
						breakpoints={{
							768: {
							  slidesPerView: 1,
							},
							1024: {
							  slidesPerView: 2,
							},
							1280: {
							  slidesPerView: 3,
							},
						  }}
						spaceBetween={0}
						loop={true}
					>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone1.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone2.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone3.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone4.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone5.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
						<SwiperSlide className={styles.card}>
							<Image
								className={styles.image}
								src='/images/phone6.png'
								alt='phone'
								width={0}
								height={0}
								sizes='100%'
							/>
						</SwiperSlide>
					</Swiper>
					<div className={`swiper-button-prev ${styles.prev}`}>
						<Image src='/icons/arrow-left.svg' alt='Previous' width={20} height={10} />
					</div>
					<div className={`swiper-button-next ${styles.next}`}>
						<Image src='/icons/arrow-right.svg' alt='Next' width={20} height={10} />
					</div>
				</div>
			</div>
		</section>
	);
}
