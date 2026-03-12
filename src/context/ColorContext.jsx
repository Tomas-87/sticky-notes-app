import { createContext, useContext, useState } from "react";

const ColorContext = createContext(null);

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("yellow");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);
