import { Fragment } from 'react';
import MainHeader from './MainHeader';
import { useEffect } from 'react';

const Layout = (props) => {


  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
