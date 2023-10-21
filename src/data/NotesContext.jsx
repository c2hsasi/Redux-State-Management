import React from "react";
export const notesDataContext = React.createContext(null);

function NotesContext({ children }) {
  const API_URL = "https://6531353e4d4c2e3f333c9fc3.mockapi.io/note";
  return (
    <>
      <notesDataContext.Provider value={{ API_URL }}>
        {children}
      </notesDataContext.Provider>
    </>
  );
}

export default NotesContext;
