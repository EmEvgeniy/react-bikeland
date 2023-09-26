import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import classes from "./blogCard.module.scss";
import { addBlogItem, changeBlogStatus } from "@/store/slices/blogCardSlice";

const BlogCard = ({ data, index }) => {
	const dispatch = useDispatch();

	return (
		<div
			className={classes.Card}
			onClick={() =>
				dispatch(changeBlogStatus(true)) & dispatch(addBlogItem(data))
			}>
			<div className={classes.top}>
				<Image src={data.img} alt='bike' height={0} width={0} priority />
			</div>
			<div className={classes.bottom}>
				<p className={classes.title}>{data.title}</p>
				<p className={classes.text}>{data.text}</p>
			</div>
		</div>
	);
};

export default memo(BlogCard);
