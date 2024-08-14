// import React, { createContext, useState, useReducer, useContext } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialstate, children }) => {
//   return (
//     <StateContext.Provider value={useReducer(reducer, initialstate)}>
//       {children}
//     </StateContext.Provider>
//   );
// };
// export const useState = () => useContext(StateContext);

import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialstate, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialstate)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStatevalue = () => useContext(StateContext);
