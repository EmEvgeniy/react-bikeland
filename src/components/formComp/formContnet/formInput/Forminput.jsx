import classes from "./forminput.module.css";

const Forminput = ({ title, fn, placeholder, active }) => {
	return (
		<div className={classes.FormInput}>
			<span>{title}</span>
			<input
				type='text'
				placeholder={placeholder}
				className={
					active ? `${classes.input} ${classes.fail}` : `${classes.input}`
				}
				onChange={(e) => fn(e.target.value)}
			/>
		</div>
	);
};

export default Forminput;
