import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';
import { AuthContextProvider } from './components/store/auth-context';
import App from "./App";
function App2() {
  const ctx = useContext(AuthContext)
  return (
      <AuthContextProvider>
    <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <App/>}
      </main>
    </React.Fragment>
      </AuthContextProvider>
  )
}

export default App2;
