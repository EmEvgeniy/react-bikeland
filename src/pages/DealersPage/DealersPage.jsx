import FormComp from "../../components/formComp/FormComp";
import CategoryReasons from "../CategoryPage/categoryReasons/CategoryReasons";
import HomeLocation from "../Home/homeLocation/HomeLocation";
import classes from "./dealersPage.module.css";
import { motion } from "framer-motion";
const DealersPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={classes.DealersPage}>
			<h1>ДИЛЕРЫ BIKELAND.UZ</h1>
			<HomeLocation block={false} />
			<CategoryReasons />
			<FormComp />
		</motion.div>
	);
};

export default DealersPage;
