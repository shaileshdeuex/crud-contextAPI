import React, { createContext, useReducer } from "react";
import appRender from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Shailesh Parmar",
      location: "Mumbai",
      role: "Front-End Developer",
    },
    {
      id: 2,
      name: "Jitendra Parmar",
      location: "Mumbai",
      role: "Front-End Developer",
    },
    {
      id: 3,
      name: "Sumit Solanki",
      location: "Mumbai",
      role: "Back-End Developer",
    },
    {
      id: 4,
      name: "Ankit Darji",
      location: "Mumbai",
      role: "PF Consultant",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appRender, initialState);

  const addEmployee = (emp) => dispatch({ type: "ADD_EMP", payload: emp });
  const editEmployee = (emp) => dispatch({ type: "EDIT_EMP", payload: emp });
  const removeEmployee = (id) => dispatch({ type: "REMOVE_EMP", payload: id });

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
