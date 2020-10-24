import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './stylesApp.module.css'


ReactDOM.render(
  <React.StrictMode>
    <App className={styles.App} />
  </React.StrictMode>,
  document.getElementById("root")
);

