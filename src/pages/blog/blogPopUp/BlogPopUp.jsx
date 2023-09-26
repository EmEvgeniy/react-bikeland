import classes from "./blogPopUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import {
	addBlogItem,
	changeBlogStatus,
} from "../../../store/slices/blogCardSlice";
import Container from "../../../components/container/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogPopUp = () => {
	const data = useSelector((state) => state.blog.value);
	const status = useSelector((state) => state.blog.status);
	const dispatch = useDispatch();

	return (
		<div className={`${classes.BlogPopUp} ${status && classes.active}`}>
			<Container>
				<div className={classes.inner}>
					<div
						className={classes.close}
						onClick={() =>
							dispatch(addBlogItem([])) && dispatch(changeBlogStatus(false))
						}>
						<AiOutlineClose className='icon' />
					</div>
					<div className={classes.photo}>
						<LazyLoadImage
							src={data.img}
							alt='aa'
							effect='blur'
							width={"100%"}
							height={"auto"}
						/>
					</div>
					<p className={classes.text}>{data.conf}</p>
					<p className={classes.text}>{data.conf}</p>
				</div>
			</Container>
		</div>
	);
};

export default BlogPopUp;
