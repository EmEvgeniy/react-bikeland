import FacebookIcon from "./icons/Facebook_icon";
import InstagramIcon from "./icons/Instagram_icon";
import TelegramIcon from "./icons/Telegran_icon";
import YoutubeIcon from "./icons/Youtube_icon";
import classes from "./socialLinks.module.css";

const socialIcons = [
	{
		icon: <FacebookIcon className='icon' />,
		link: "https://www.facebook.com/bikeland.uz/",
	},
	{
		icon: <InstagramIcon className='icon' />,
		link: "https://www.instagram.com/bikeland.uz/",
	},
	{
		icon: <YoutubeIcon className='icon' />,
		link: "https://www.youtube.com/@BikelandUz",
	},
	{
		icon: <TelegramIcon className='icon' />,
		link: "https://t.me/BikelandUz_bot",
	},
];

const SocialLinks = () => {
	return (
		<div className={classes.SocialLinks}>
			{socialIcons.map((item, index) => (
				<a key={index} href={item.link} className={classes.SocialLinks_item}>
					{item.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
