import classes from "./blogpage.module.css";
import BlogCatalog from "./blogCatalog/BlogCatalog";
import { motion } from "framer-motion";
import CategoryReasons from "../CategoryPage/categoryReasons/CategoryReasons";
import FromComp from "../../components/formComp/FormComp";
import BlogPopUp from "./blogPopUp/BlogPopUp";

const BlogPage = ({ data }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={classes.BlogPage}>
			<h1>Наш блог с новостями и полезной информацией</h1>
			<BlogCatalog data={data} />
			<CategoryReasons />
			<FromComp />
			<BlogPopUp />
		</motion.div>
	);
};

export default BlogPage;
