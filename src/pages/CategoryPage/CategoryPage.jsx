import { useParams } from "react-router-dom";
import classes from "./categoryPage.module.css";
import CategoryCatalog from "./categoryCatalog/CategoryCatalog";
import CategoryReasons from "./categoryReasons/CategoryReasons";
import FormComp from "../../components/formComp/FormComp";
import { motion } from "framer-motion";
const CategoryPage = () => {
	const { title } = useParams();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={classes.CategoryPage}>
			<CategoryCatalog pathName={title} />
			<CategoryReasons />
			<FormComp />
		</motion.div>
	);
};

export default CategoryPage;
