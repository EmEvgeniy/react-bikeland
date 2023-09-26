import classes from "./socialMedia.module.css";
import tel from "../../../assets/telegram.svg";
import insta from "../../../assets/insta.svg";
import youtube from "../../../assets/youtube.svg";
import facebook from "../../../assets/facebook.svg";

const list = [
	{ img: tel, link: "https://www.facebook.com/bikeland.uz/" },
	{ img: insta, link: "https://www.instagram.com/bikeland.uz/" },
	{ img: facebook, link: "https://www.youtube.com/@BikelandUz" },
	{ img: youtube, link: "https://t.me/BikelandUz_bot" },
];

const SocialMedia = () => {
	return (
		<div className={classes.SocialMedia}>
			{list.map((el, index) => (
				<a href={el.link} key={index}>
					<img src={el.img} alt='social' />
				</a>
			))}
		</div>
	);
};
export default SocialMedia;
