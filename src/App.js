import React from "react";
import { useTranslation } from "./hooks/useTranslation";
import { Button } from './components/Button';

function App() {
  const { importLangJson,lang} = useTranslation();
  const chooseLanguage = async (e) => {
    importLangJson(`${e.target.value}`,e.target.value);
  };
  return (
    <>
      <select onChange={chooseLanguage} value={lang}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <Button/>
    </>
  );
}
export default App;
