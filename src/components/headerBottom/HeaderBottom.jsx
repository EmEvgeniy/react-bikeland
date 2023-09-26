import Container from "../container/Container";
import NavComp from "../UI/navComp/NavComp";
import classes from "./headerBottom.module.css";

const HeaderBottom = () => {
	return (
		<div className={classes.HeaderBottom}>
			<Container>
				<NavComp />
			</Container>
		</div>
	);
};

export default HeaderBottom;
