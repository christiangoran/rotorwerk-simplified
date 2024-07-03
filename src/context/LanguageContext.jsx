import { createContext, useContext, useState } from "react";

// Create context
const LanguageContext = createContext();

// Custom hook to use the LanguageContext
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de");

  const changeLanguage = (lng) => setLanguage(lng);

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
