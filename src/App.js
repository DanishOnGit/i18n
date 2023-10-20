import React from "react";
import { useTranslation } from "./hooks/useTranslation";
import { Button } from './components/Button';
import { FormattedMessage, FormattedNumber, IntlProvider } from 'react-intl';
import { useLanguage } from './contexts/LanguageContext/LanguageContext';

function App() {
  const { loadLocaleData} = useTranslation();
  const {lang,messages}=useLanguage()

  return (
    <>
      <select onChange={(e)=>loadLocaleData(e.target.value)} value={lang}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
      <Button/>
      <IntlProvider messages={messages} locale={lang} defaultLocale='en'>
      <p>
        <FormattedMessage
          description={"Todays date"}
          defaultMessage={"Today is {ts,date,::yyyyMMdd}"}
          values={{ts:Date.now()}}
        />
        <br/>
        <FormattedMessage
          defaultMessage="Control Panel"
          description="title of control panel section"
        />
        <br/>
        <FormattedMessage
          description={"Greeting"}
          defaultMessage={"How are you?"}
        />
        <br/>
        <FormattedNumber
          value={20}
          currency='EUR'
          style='currency'
        />
      </p>
      </IntlProvider>
    </>
  );
}
export default App;
