import classes from "./logo.module.css";
import logo from "../../../assets/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Logo = () => {
	const status = useSelector((state) => state.search.value);
	return (
		<Link
			to={"/"}
			className={
				status ? `${classes.Logo} ${classes.active}` : `${classes.Logo}`
			}>
				<LazyLoadImage
					src={logo}
					effect="blur"
					alt='logo'
				/>
		</Link>
	);
};
export default Logo;
