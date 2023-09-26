import icon1 from "../../../assets/footer_icon.svg";
import icon2 from "../../../assets/footer_icon2.svg";
import icon3 from "../../../assets/footer_icon3.svg";
import classes from "./footerFeedback.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FooterFeedback = () => {
	return (
		<div className={classes.FooterFeedback}>
			<div className={classes.FooterFeedback_item}>
				<LazyLoadImage src={icon1} alt='icon' effect='blur' />
				<p className={classes.title}>Опыт</p>
				<p className={classes.text}>На рынке Узбекистана</p>
			</div>
			<div className={classes.FooterFeedback_item}>
				<LazyLoadImage src={icon2} alt='icon' effect='blur' />
				<p className={classes.title}>Профессионализм</p>
				<p className={classes.text}>40+ Моделей Мото-техники в наличии</p>
			</div>
			<div className={classes.FooterFeedback_item}>
				<LazyLoadImage src={icon3} alt='icon' effect='blur' />
				<p className={classes.title}>Доверие</p>
				<p className={classes.text}>
					3000+ Счастливых обладателей нашей Мото-техники
				</p>
			</div>
		</div>
	);
};
export default FooterFeedback;
