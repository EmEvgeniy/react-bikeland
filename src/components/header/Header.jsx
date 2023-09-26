import React, { Suspense } from 'react';
import Burger from '../UI/burger/Burger';
import Logo from '../UI/logo/Logo';
import NavComp from '../UI/navComp/NavComp';
import SearchInput from '../UI/searchInput/SearchInput';
import SocialLinks from '../UI/socialLinks/SocialLinks';
import Container from '../container/Container';
import classes from './header.module.css';

// Динамический импорт для компонентов, которые редко используются
const CallBackComp = React.lazy(() => import('../UI/callBackComp/CallBackComp'));
const SearchComp2 = React.lazy(() => import('../UI/searchComp2/SearchComp2'));

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
              <Suspense fallback={<div>Loading...</div>}>
                <CallBackComp />
                <SearchComp2 />
              </Suspense>
            </div>
          </div>
          <NavComp />
        </div>
      </Container>
    </header>
  );
};

export default Header;
