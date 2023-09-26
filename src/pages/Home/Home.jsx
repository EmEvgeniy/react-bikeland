import FormComp from "../../components/formComp/FormComp";
import CatalogContent from "./catalogContent/CatalogContent";
import classes from "./home.module.css";
import { HomeConfidence } from "./homeConfidence/HomeConfidence";
import HomeLocation from "./homeLocation/HomeLocation";
import HomeVideoComp from "./homeVideoComp/HomeVideoComp";
import { motion } from "framer-motion";
const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={classes.Home}>
			<HomeConfidence />
			<CatalogContent />
			<HomeVideoComp />
			<HomeLocation block={true} />
			<FormComp />
		</motion.div>
	);
};

export default Home;
