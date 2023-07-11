import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import React, {useContext} from "react";
import AuthContext from "../store/auth-context";

const MainHeader = (props) => {
    const ctx = useContext(AuthContext)
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>

        </ul>

      </nav>
        <nav>
            <ul>
            <li>
                <button onClick={ctx.onLogout}>Logout</button>
            </li>
        </ul>
        </nav>
    </header>
  );
};

export default MainHeader;
