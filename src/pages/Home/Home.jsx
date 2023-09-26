import CatalogContent from "./catalogContent/CatalogContent";
import classes from "./home.module.css";
import { HomeConfidence } from "./homeConfidence/HomeConfidence";
import HomeLocation from "./homeLocation/HomeLocation";
import HomeVideoComp from "./homeVideoComp/HomeVideoComp";

const Home = () => {
	return (
		<div className={classes.Home}>
			<HomeConfidence />
			<CatalogContent />
			<HomeVideoComp />
			<HomeLocation />
		</div>
	);
};

export default Home;
