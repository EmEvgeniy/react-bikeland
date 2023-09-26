import classes from "./homeVideoCompContent.module.css";
import { motion } from "framer-motion";

const videoData = [
	"https://www.youtube.com/embed/c23FDiTUw10?si=c23FDiTUw10",
	"https://www.youtube.com/embed/BQtDFkTGjUg?si=BQtDFkTGjUg",
	"https://www.youtube.com/embed/6iLMAhLIcG0?si=6iLMAhLIcG0",
];

const createIframe = (url) => (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 0.3 }}
		className={classes.inner_item}
		key={url}>
		<iframe
			src={url}
			title='Tashkent'
			width='100%'
			height='100%'
			style={{ borderRadius: "15px", maxWidth: "100%" }}
			loading='lazy'
			frameBorder='0'></iframe>
	</motion.div>
);

const HomeVideoCompContent = () => {
	return (
		<div className={classes.inner}>
			{videoData.map(createIframe)}
			<motion.a
				href='https://www.youtube.com/@BikelandUz'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.2 }}>
				Смотреть больше
			</motion.a>
		</div>
	);
};

export default HomeVideoCompContent;
