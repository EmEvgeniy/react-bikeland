import Burger from "../UI/burger/Burger";
import CallBackComp from "../UI/callBackComp/CallBackComp";
import Logo from "../UI/logo/Logo";
import NavComp from "../UI/navComp/NavComp";
import SearchComp2 from "../UI/searchComp2/SearchComp2";
import SearchInput from "../UI/searchInput/SearchInput";
import SocialLinks from "../UI/socialLinks/SocialLinks";
import Container from "../container/Container";
import classes from "./header.module.css";

const Header = () => {
	return (
		<header className={classes.Header}>
			<Container>
				<div className={classes.inner}>
					<div className={classes.top}>
						<div className={classes.inner_item1}>
							<Burger />
							<SocialLinks />
							<SearchInput />
						</div>
						<Logo />
						<div className={classes.inner_item2}>
							<CallBackComp />
							<SearchComp2 />
						</div>
					</div>
					<NavComp />
				</div>
			</Container>
		</header>
	);
};

export default Header;
