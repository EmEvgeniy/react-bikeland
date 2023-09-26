import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/grid";
import { FreeMode, Navigation, Thumbs, Pagination, Grid } from "swiper/modules";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardSlider = ({ data, setThumbsSwiper, setPhoto }) => {
	return (
		<>
			{data?.img ? (
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					grid={{
						rows: 2,
					}}
					pagination={{
						type: "progressbar",
					}}
					watchSlidesProgress={true}
					modules={[FreeMode, Grid, Navigation, Thumbs, Pagination]}
					className='mySwiper'>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<Image src={data.img} alt='card' />
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide onClick={() => setPhoto(data.img)}>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<LazyLoadImage
							src={data ? data?.img?.src : null}
							alt='card'
							height={150}
							width={119}
						/>
					</SwiperSlide>
				</Swiper>
			) : null}
		</>
	);
};
export default CardSlider;
