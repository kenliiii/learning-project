import React, {useContext} from 'react';

import Login from './components/Login/Login';

import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

import App from "./App";
function App2() {
  const ctx = useContext(AuthContext)

  const login=<React.Fragment>
    <MainHeader/>
    <main>
      {!ctx.isLoggedIn && <Login/>}
    </main>
  </React.Fragment>
  console.log(ctx.isLoggedIn)
  return (<React.Fragment>
      {ctx.isLoggedIn ? <App/>:login}
      </React.Fragment>
  )
}

export default App2;
