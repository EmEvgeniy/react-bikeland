import FacebookIcon from "./icons/Facebook_icon";
import InstagramIcon from "./icons/Instagram_icon";
import TelegramIcon from "./icons/Telegran_icon";
import YoutubeIcon from "./icons/Youtube_icon";
import classes from "./socialLinks.module.css";

const socialIcons = [
	{
		icon: <FacebookIcon />,
		link: "https://www.facebook.com/bikeland.uz/",
	},
	{
		icon: <InstagramIcon />,
		link: "https://www.instagram.com/bikeland.uz/",
	},
	{
		icon: <YoutubeIcon />,
		link: "https://www.youtube.com/@BikelandUz",
	},
	{
		icon: <TelegramIcon />,
		link: "https://t.me/BikelandUz_bot",
	},
];

const SocialLinks = () => {
	return (
		<div className={classes.SocialLinks}>
			{socialIcons.map((item) => (
				<a
					key={item.link}
					href={item.link}
					className={classes.SocialLinks_item}>
					{item.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
