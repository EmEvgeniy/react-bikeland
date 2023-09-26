import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./DetailsPopUpContentSlider.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DetailsPopUpContentSlider({ items }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={styles.DetailsPopUpContentSlider}>
			{
				<>
					<Swiper
						style={{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						}}
						spaceBetween={10}
						navigation={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						className={`${styles.mySwiper2} ${styles.swiper}`}>
						{items?.map((el, index) => (
							<SwiperSlide key={index}>
								<Image src={el.photo_url} alt='sad' width={550} height={550} />
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={20}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className={`${styles.mySwiper} ${styles.swiper}`}>
						{items?.map((el, index) => (
							<SwiperSlide key={index}>
								<Image src={el.photo_url} alt='sad' width={550} height={550} />
							</SwiperSlide>
						))}
					</Swiper>
				</>
			}
		</div>
	);
}
