import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classes from "./formBanner.module.css";
import banner from "../../../assets/banner.webp";

const FormBanner = () => {
	return (
		<div className={classes.FormBanner}>
			<LazyLoadImage
				src={banner}
				alt='banner'
				effect='blur'
			/>
			<p>
				Хает Хидоятов, создатель Bikeland.uz вдохновивший
				<br /> тысячи мотолюбителей со всего Узбекистана и СНГ
			</p>
		</div>
	);
};

export default FormBanner;
