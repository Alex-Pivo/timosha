'use client'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import styles from './OurTeam.module.scss';
import React, {useEffect, useState} from 'react'
import { SwiperNavButtons } from '@/app/[locale]/components/our-team/SwiperNavButton'
import { EffectCards } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import './swiper.scss'
export const OurTeam = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const t = useTranslations("ourTeam");

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	const [swiperHeight, setSwiperHeight] = useState('460.526px');
	const [swiperWidth, setSwiperWidth] = useState('460.526px');


	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			console.log(width)
			if (width <= 835) {
				setSwiperHeight('255px');
				if (width >= 320 && width <= 767) {
					setSwiperWidth('200px');
				} else {
					setSwiperWidth('478px');
				}
			} else {
				setSwiperHeight('460.526px');
				setSwiperWidth('460.526px');
			}
		};

		handleResize(); // Вызовите функцию при загрузке компонента

		window.addEventListener('resize', handleResize); // Добавьте обработчик события изменения размера окна

		return () => {
			window.removeEventListener('resize', handleResize); // Удалите обработчик события при размонтировании компонента
		};
	}, []);

	return (
		<section className={styles.ourTeam}>
			<div className={styles.wrapper}>
				<div className={styles.mainText}>
					<h1 className={styles.caption}>{t('title')}</h1>
					{/*<span className={styles.waveUnderline}>*/}
					{/*	<svg width="377" height="16" viewBox="0 0 377 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
  					{/*	<path d="M1.5 14L10 5.5C14.6944 0.80558 22.3056 0.80558 27 5.5V5.5C31.6944 10.1944 39.3056 10.1944 44 5.5V5.5C48.6944 0.80558 56.3056 0.80558 61 5.5V5.5C65.6944 10.1944 73.3056 10.1944 78 5.5V5.5C82.6944 0.80558 90.3056 0.80558 95 5.5V5.5C99.6944 10.1944 107.306 10.1944 112 5.5V5.5C116.694 0.80558 124.306 0.80558 129 5.5V5.5C133.694 10.1944 141.306 10.1944 146 5.5V5.5C150.694 0.80558 158.306 0.80558 163 5.5V5.5C167.694 10.1944 175.306 10.1944 180 5.5V5.5C184.694 0.80558 192.306 0.80558 197 5.5V5.5C201.694 10.1944 209.306 10.1944 214 5.5V5.5C218.694 0.80558 226.306 0.80558 231 5.5V5.5C235.694 10.1944 243.306 10.1944 248 5.5V5.5C252.694 0.80558 260.306 0.80558 265 5.5V5.5C269.694 10.1944 277.306 10.1944 282 5.5V5.5C286.694 0.80558 294.306 0.80558 299 5.5V5.5C303.694 10.1944 311.306 10.1944 316 5.5V5.5C320.694 0.80558 328.306 0.80558 333 5.5V5.5C337.694 10.1944 345.306 10.1944 350 5.5V5.5C354.694 0.80558 362.306 0.80558 367 5.5L375.5 14" stroke="#649612" strokeWidth="3" />*/}
					{/*	</svg>*/}
					{/*</span>*/}
				</div>
				<div className={styles.sliders}>
					<Swiper navigation={false} modules={[Navigation]} className={styles.mySwiper}>

						{/*Юлія Санько*/}

						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									centeredSlides={true}
									// loop={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand1.png" alt="" style={{borderRadius: '10px'}}/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
									{/*<SwiperSlide className={styles.card}>*/}
									{/*	<img src="/sliderRand2.png" alt=""/>*/}
									{/*	<div className="swiper-slide-shadow swiper-slide-shadow-cards"*/}
									{/*		 style={{*/}
									{/*			 background: 'transparent',*/}
									{/*			 opacity: '1',*/}
									{/*			 transitionDuration: '0ms'*/}
									{/*		 }}></div>*/}
									{/*</SwiperSlide>*/}
									{/*<SwiperSlide className={styles.card}>*/}
									{/*	<img src="/sliderRand.png" alt=""/>*/}
									{/*	<div className="swiper-slide-shadow swiper-slide-shadow-cards"*/}
									{/*		 style={{*/}
									{/*			 background: 'transparent',*/}
									{/*			 opacity: '1',*/}
									{/*			 transitionDuration: '0ms'*/}
									{/*		 }}></div>*/}
									{/*</SwiperSlide>*/}
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post1')}</span>
										<span className={styles.name}>{t('name1')}</span>
									</div>
									<div className={`${styles.descTxt} ${isExpanded ? 'expanded' : ''}`}>
										<p>{t('text')}</p>
										<div className="textWrapper">
											{isExpanded && <p>{t('hidText')}</p>}
										</div>
										<button className={styles.btnReadMore} onClick={toggleExpand}>
											{isExpanded ? t('hide') : t('read')}
										</button>
									</div>
								</div>
							</div>
						</SwiperSlide>

						{/*Олена Комлєва*/}

						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight }}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand2.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post2')}</span>
										<span className={styles.name}>{t('name2')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						{/*Тетяна Іванюк*/}

						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand3.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post3')}</span>
										<span className={styles.name}>{t('name3')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						{/*Світлана Свиридюк*/}

						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand4.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post4')}</span>
										<span className={styles.name}>{t('name4')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>


						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand5.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post5')}</span>
										<span className={styles.name}>{t('name5')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand6.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post6')}</span>
										<span className={styles.name}>{t('name6')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand7.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post7')}</span>
										<span className={styles.name}>{t('name7')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.slidWTxt}>
								<Swiper
									effect={'cards'}
									grabCursor={true}
									modules={[EffectCards]}
									className={styles.swiperCards}
									style={{width: swiperWidth, height: swiperHeight}}
								>
									<SwiperSlide className={styles.card} style={{display:"flex", justifyContent: "center"}}>
										<img src="/sliderRand8.png" alt=""/>
										<div className="swiper-slide-shadow swiper-slide-shadow-cards"
											 style={{
												 background: 'transparent',
												 opacity: '1',
												 transitionDuration: '0ms'
											 }}></div>
									</SwiperSlide>
								</Swiper>
								<div className={styles.wrapTxt}>
									<div className={styles.captionTxt}>
										<span className={styles.post}>{t('post8')}</span>
										<span className={styles.name}>{t('name8')}</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperNavButtons />
					</Swiper>
				</div>
			</div>
		</section>
	);
};
