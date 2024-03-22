'use client';
import Image from 'next/image';
import styles from './inside.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './pagination.css'

export default function Inside() {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			console.log(className);
			return '<span class="' + className + '">' + '</span>';
		},
	};

	return (
		<section id='inside' className={styles.section}>
			<div className={styles.left}>
				<h1 className={styles.header}>{`The Platform, It\'s All Inside.`}</h1>
				<Swiper
					className={styles.slider}
					modules={[Pagination, Autoplay]}
					pagination={pagination}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					  }}
				>
					<SwiperSlide className={styles.slide}>
						<Image
							alt='image'
							src='/icons/card-pos.svg'
							width={50}
							height={50}
						/>
						<b className={styles.title}>Earn</b>
						<p className={styles.details}>
							Earn more every time you spend globally using your mobile device,
							physical card, or fashionable contactless wearable.
						</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							alt='image'
							src='/icons/card-pos3.svg'
							width={50}
							height={50}
						/>
						<b className={styles.title}>Experience</b>
						<p className={styles.details}>
							Inside access to exclusive events and live experiences as a YIELD®
							account holder.
						</p>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							alt='image'
							src='/icons/card-pos2.svg'
							width={50}
							height={50}
						/>
						<b className={styles.title}>Explore</b>
						<p className={styles.details}>
							{`
							Explore the world\'s first financial galleries - coming soon to ATL
							and PHL.`}
						</p>
					</SwiperSlide>
				</Swiper>
			</div>
			<Image
				className={styles.right}
				src='/icons/phone-with-accessory.svg'
				alt='image'
				width={0}
				height={0}
				sizes='100%'
			/>
		</section>
	);
}
