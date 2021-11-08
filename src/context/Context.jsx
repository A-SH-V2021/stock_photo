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
      const x = await fetch(`${url}${accessKey}`)
      const data=await x.json()
      
     console.log(data);
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(`hello`);
  };
  useEffect(() => {
    fetchData(mainURL);
  }, []);

  return (
    <AppContext.Provider value={{ loading, photos, setPhotos, setLoading,submitHandle }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
