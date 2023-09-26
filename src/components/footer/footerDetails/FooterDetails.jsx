import classes from "./footerDetails.module.css";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import img1Src from "../../../assets/image2.webp";
import img2Src from "../../../assets/image3.webp";
import img3Src from "../../../assets/image4.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const FooterDetails = () => {
	return (
		<div className={classes.FooterDetails}>
			<div className={classes.contacts}>
				<p>Контакты для связи:</p>
				<ul>
					<li>
						<BsTelephone className={classes.icon} />
						<a href='tel:+998555006001'>+998555006001</a>
					</li>
					<li>
						<BsTelephone className={classes.icon} />
						<a href='tel:+998936216001'>+998936216001</a>
					</li>
					<li>
						<CiMail className={classes.icon} />
						<a href='mailto:info@bikeland.uz'>info@bikeland.uz</a>
					</li>
				</ul>
			</div>
			<div className={classes.payment}>
				<p>
					<span>Принимаем оплату:</span>Наличными, через банковский перевод или
					через платежные системы
				</p>
				<div className={classes.images}>
					<LazyLoadImage src={img1Src} alt='payment' effect='blur' />
					<LazyLoadImage src={img2Src} alt='payment' effect='blur' />
					<LazyLoadImage src={img3Src} alt='payment' effect='blur' />
				</div>
			</div>
		</div>
	);
};

export default FooterDetails;
