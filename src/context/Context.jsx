import React, { useContext, useState, useEffect } from "react";

export const AppContext = React.createContext();
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;
const accessKey = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const x = await fetch(`${url}${accessKey}`).then((response) =>
        response.json()
      );
      setPhotos(x);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData(mainURL);
  }, []);

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
