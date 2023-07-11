import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';
import { AuthContextProvider } from './components/store/auth-context';
import App from "./App";
function App2() {
  const ctx = useContext(AuthContext)

  const login=<React.Fragment>
    <MainHeader/>
    <main>
      {!ctx.isLoggedIn && <Login/>}
    </main>
  </React.Fragment>
  return (
      <AuthContextProvider>
        {ctx.isLoggedIn ? <App/>:login}
      </AuthContextProvider>
  )
}

export default App2;
