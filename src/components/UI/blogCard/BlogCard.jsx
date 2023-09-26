import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./blogCard.module.css";
import {
	addBlogItem,
	changeBlogStatus,
} from "../../../store/slices/blogCardSlice";

const BlogCard = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={classes.Card}
			onClick={() =>
				dispatch(changeBlogStatus(true)) & dispatch(addBlogItem(data))
			}>
			<div className={classes.top}>
				<LazyLoadImage
					src={data.img}
					alt='bike'
					height={"100%"}
					width={"100%"}
					effect='blur'
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className={classes.bottom}>
				<p className={classes.title}>{data.title}</p>
				<p className={classes.text}>{data.text}</p>
			</div>
		</div>
	);
};

export default BlogCard;
