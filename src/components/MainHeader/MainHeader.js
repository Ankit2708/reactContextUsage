import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* below line commented because we are now passing context not props */}
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />  */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
