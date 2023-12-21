import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();


const initialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const UpdateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Saad Karim",
        image: "../src/components/Images/Hero.svg",
      },
    });
  };
  const UpdateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Saad Ali",
        image: "../src/components/Images/about1.svg",
      },
    });
  };
 
  return (
    <AppContext.Provider value={{ ...state, UpdateHomePage, UpdateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
