import Container from "../../../components/container/Container";
import FormBanner from "./formBanner/FormBanner";
import classes from "./formComp.module.css";
import FormContent from "./formContnet/FormContent";

const FormComp2 = () => {
	return (
		<section className={classes.FormComp} id='form'>
			<Container>
				<div className={classes.inner}>
					<div className={classes.inner_content}>
						<FormBanner />
						<FormContent />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default FormComp2;
