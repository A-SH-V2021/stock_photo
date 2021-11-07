import React, { useContext, useState } from "react";
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  return (
    <AppContext.Provider value={{ loading, photos, setPhotos, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
