import classes from "./dealersSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Container from "../../../components/container/Container";

export default function DealersSlider({ items }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className={classes.DealersSlider}>
			<Container>
				<div className={classes.inner}>
					<p>Отправка мото-техники</p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className={classes.inner_slider}>
						<Swiper
							style={{
								"--swiper-navigation-color": "#fff",
								"--swiper-pagination-color": "#fff",
							}}
							spaceBetween={10}
							slidesPerView={3}
							breakpoints={{
								// when window width is >= 320px
								200: {
									slidesPerView: 1,
									spaceBetween: 0,
								},
								550: {
									slidesPerView: 2,
									spaceBetween: 10,
								},
								// when window width is >= 480px
								768: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								920: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								// when window width is >= 640px
								1200: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
							}}
							navigation={true}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Navigation, Thumbs]}
							className={`${classes.mySwiper2} ${classes.swiper}`}>
							{items?.map((el, index) => (
								<SwiperSlide key={index}>
									<LazyLoadImage
										src={el.photo_url}
										alt='sad'
										effect='blur'
										width={"100%"}
										height={"100%"}
										style={{ objectFit: "fill" }}
									/>
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
							className={`${classes.mySwiper} ${classes.swiper}`}>
							{items?.map((el, index) => (
								<SwiperSlide key={index}>
									<LazyLoadImage
										src={el.photo_url}
										alt='sad'
										effect='blur'
										width={"100%"}
										height={"100%"}
										style={{ objectFit: "contain" }}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</motion.div>
				</div>
			</Container>
		</section>
	);
}
