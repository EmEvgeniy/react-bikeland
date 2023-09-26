import classes from "./cardInfo.module.css";
import ReactIframe from "react-iframe";
import { motion } from "framer-motion";

const location = [
	{
		name: "Ташкент",
		address: "г.Ташкент, Ул. Янги Сергели",
		landmark:
			"Не доезжая моста Узгариш по дороге с Южного вокзала на Сергели АвтоБазар.",
		phone: "+998555006001",
		mapComponent:
			"https://yandex.com/map-widget/v1/?um=constructor%3Ab556089c92b6667e4e1f9ee4ef27930fa80b8bdc90a68971d724075dc27ab12b&amp;source=constructor",
	},
	{
		name: "Бухара",
		address: "г.Бухара, Ул. М.Авлиё дом 4",
		landmark: "Центр города, Вокзал, Головной офис Билайн в г.Бухаре",
		phone: "+998555006001",
		mapComponent:
			"https://yandex.com/map-widget/v1/?um=constructor%3Ae8ed7732575d940a509019b05ae15d5f0129823e2b1c8952e26df0a58344a60a&amp;source=constructor",
	},
];
export default function CityInfo() {
	return (
		<div className={classes.CityInfo}>
			{location?.map((city, index) => (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: `0.${index}`, duration: 0.2 }}
					className={classes.inner_item}
					key={index}>
					<p>
						<span className={classes.city}>{city.name}</span>
						Адрес: {city.address}
					</p>
					<span>Ориентир:</span>
					<p>{city.landmark}</p>
					<p>
						<span>Телефон:</span>
						{city.phone}
					</p>
					<ReactIframe
						url={city.mapComponent}
						width='100%'
						height='300'
						title='Tashkent'
						loading='lazy'
						frameBorder={0}
						styles={{ borderRadius: "15px" }}
					/>
				</motion.div>
			))}
		</div>
	);
}
