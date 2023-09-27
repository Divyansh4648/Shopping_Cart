// intl.js
import { IntlProvider } from 'react-intl';
import React from 'react';
import App from './App';
import { messages } from './messages'; // Define your localization messages

const language = navigator.language || 'en'; // Set the default language

function Root() {
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  );
}

export default Root;
