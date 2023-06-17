// React：框架核心包
// ReactDOM：专门做渲染的相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点需要去掉
  // useEffect 的执行时机
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
