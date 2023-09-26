import Container from "../container/Container";
import FormBanner from "./formBanner/FormBanner";
import classes from "./formComp.module.css";
import FormContent from "./formContnet/FormContent";

const FormComp = () => {
	return (
		<section className={classes.FormComp}>
			<Container>
				<div className={classes.inner}>
					<h3>Обратный звонок</h3> 
					<div className={classes.inner_content}>
						<FormBanner />
						<FormContent />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FormComp;
