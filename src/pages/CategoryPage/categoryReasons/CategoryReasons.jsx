import classes from "./categoryReasons.module.css";
import icon from "../../../assets/iconCat.svg";
import icon2 from "../../../assets/iconCat2.svg";
import icon3 from "../../../assets/iconCat3.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Container from "../../../components/container/Container";

const CategoryReasons = () => {
	return (
		<section className={classes.CategoryReasons}>
			<Container>
				<div className={classes.inner}>
					<h2>Почему нужно выбрать Bikeland.uz?</h2>
					<p>
						В качестве доверенного бренда для покупки мотоцикла или его
						комплектующих
					</p>
					<div className={classes.content}>
						<div className={classes.content_item}>
							<LazyLoadImage src={icon} alt='icon' effect="blur" />
							<p className={classes.content_item_title}>
								Наша первостепенная цель - <span>КАЧЕСТВО!</span> Качество,
								превыше всего!
							</p>
							<p className={classes.content_item_subTitle}>
								Все продаваемые модели испытываем сами. Гарантируем до 2000 км
								пробега на коробку и трансмиссию.
							</p>
						</div>
						<div className={classes.content_item}>
							<LazyLoadImage src={icon2} alt='icon' effect="blur" />
							<p className={classes.content_item_title}>
								<span>Сервисная поддержка</span> для клиентов. Штатные мастера
							</p>
							<p className={classes.content_item_subTitle}>
								После покупки останемся на связи с Вами, для консультации и
								ответов на возникшие вопросы 7 дней в неделю
							</p>
						</div>
						<div className={classes.content_item}>
							<LazyLoadImage src={icon3} alt='icon' effect="blur" />
							<p className={classes.content_item_title}>
								Доставка в любую точку <span>Узбекистана</span> до вашего города
								или дома
							</p>
							<p className={classes.content_item_subTitle}>
								Доставим куда угодно по Узбекистану от 150 000 сум.
								Проконтролируем весь путь вашего мото-транспорта от нас до Вас
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CategoryReasons;
