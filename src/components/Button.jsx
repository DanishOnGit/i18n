import React, { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';

export const Button = () => {
  const [count, setCount] = useState(0);
  const {t}=useTranslation()

  return (
    <>
    <p>Count:{count}</p>
     
    </>
  );
};
