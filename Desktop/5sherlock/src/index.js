import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
