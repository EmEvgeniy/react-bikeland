import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./logo.module.css";
import logo from "../../../assets/logo.svg";

const Logo = () => {
  const status = useSelector((state) => state.search.value);
  const logoClassName = status ? `${classes.Logo} ${classes.active}` : classes.Logo;

  return (
    <Link to={"/"} className={logoClassName}>
      <LazyLoadImage src={logo} effect="blur" alt="logo" loading="lazy" />
    </Link>
  );
};

export default Logo;
