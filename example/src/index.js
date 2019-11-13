import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App'
import { I18nextProvider } from "react-i18next";
import i18n from "masspa-working-days/src/setting/i18n";


ReactDOM.render(<I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById('root'))
