import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';


import store from './store';
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App2/>
</Provider>);
