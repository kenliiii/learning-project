import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';


import store from './store';
import App2 from "./App2";
import {AuthContextProvider} from "./components/store/auth-context";
import {Try2} from "./chart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <AuthContextProvider>
    <App2/>
     <Try2/>
    </AuthContextProvider>
</Provider>);
