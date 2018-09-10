// 项目入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
