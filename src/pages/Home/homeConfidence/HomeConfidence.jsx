import classes from "./homeConfidence.module.css";
import icon from "../../../assets/icon_c.svg";
import icon2 from "../../../assets/icon_c2.svg";
import icon3 from "../../../assets/icon_c3.svg";
import Container from "../../../components/container/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export const HomeConfidence = () => {
	return (
		<section className={classes.MainConfidence}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.inner_item}>
						<LazyLoadImage src={icon} alt='icon' effect='blur' />
						<p className={classes.title}>Опыт</p>
						<p className={classes.text}>На рынке Узбекистана</p>
					</div>
					<div className={classes.inner_item}>
						<LazyLoadImage src={icon2} alt='icon' effect='blur' />
						<p className={classes.title}>Профессионализм</p>
						<p className={classes.text}>40+ Моделей Мото-техники в наличии</p>
					</div>
					<div className={classes.inner_item}>
						<LazyLoadImage src={icon3} alt='icon' effect='blur' />
						<p className={classes.title}>Доверие</p>
						<p className={classes.text}>
							3000+ Счастливых обладателей
							<br />
							нашей Мото-техники
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};
