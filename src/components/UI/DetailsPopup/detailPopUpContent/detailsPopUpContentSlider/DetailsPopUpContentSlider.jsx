import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./DetailsPopUpContentSlider.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ImageZoom from "react-image-zooom";
import { Navigation, Thumbs } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function DetailsPopUpContentSlider({ items }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={styles.DetailsPopUpContentSlider}>
			{/* Верхний слайдер (500px высоты) */}
			<Swiper
				style={{
					"--swiper-navigation-color": "red",
					"--swiper-pagination-color": "red",
					width: "100%",
					height: "500px",
					marginBottom: "30px",
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Navigation, Thumbs]}
				className={`${styles.mySwiper2} ${styles.swiper}`}>
				{items?.map((el, index) => (
					<SwiperSlide key={index}>
						<div className={styles.centeredImageWrapper}>
							<ImageZoom src={el.photo_url} zoom='200' />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={20}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Navigation, Thumbs]}
				className={`${styles.mySwiper} ${styles.swiper}`}
				style={{ width: "100%", height: "200px" }}>
				{items?.map((el, index) => (
					<SwiperSlide key={index}>
						<div className={styles.centeredImageWrapper}>
							<LazyLoadImage
								src={el.photo_url}
								alt='sad'
								effect='blur'
								width={"auto"}
								height={"auto"}
								style={{ objectFit: "contain" }}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
