import Container from "../container/Container";
import classes from "./footer.module.css";
import FooterDetails from "./footerDetails/FooterDetails";
import logo from "../../assets/logo.svg";
import FooterFeedback from "./footerFeedback/FooterFeedback";
import FooterNav from "./footerNav/FooterNav";
import SocialMedia from "./socialMedia/SocialMedia";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
	return (
		<footer className={classes.Footer}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.inner_top}>
						<LazyLoadImage src={logo} alt='logo' effect='blur' loading='lazy' />
						<FooterFeedback />
					</div>
					<FooterDetails />
					<FooterNav />
					<SocialMedia />
					<p className={classes.btm_text}>© Все права защищены. Bikeland.uz &amp; HAYAT CO LTD 2004-2023</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
