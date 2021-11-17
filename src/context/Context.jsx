import React, { useContext, useState, useEffect } from "react";

export const AppContext = React.createContext();
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;
const accessKey = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const urlPage = `&page=${page}`;

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const x = await fetch(`${url}${accessKey}${urlPage}`);
      const data = await x.json();
      setPhotos((oldPhoto) => {
        return [...oldPhoto, ...data];
      });
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
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY > document.body.scrollHeight - 2
      ) {
        setPage((prevpage) => {
          return prevpage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, photos, setPhotos, setLoading, submitHandle }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
