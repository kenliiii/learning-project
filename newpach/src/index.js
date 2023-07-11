import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { AuthContextProvider } from './components/store/auth-context';

import store from './store';
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
<AuthContextProvider>
    <App2/>
</AuthContextProvider>
</Provider>);
