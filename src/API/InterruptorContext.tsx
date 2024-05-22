import React, { createContext, useContext, useState, ReactNode } from "react";

interface InterruptorContextType {
  isChecked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const InterruptorContext = createContext<InterruptorContextType | undefined>(undefined);

export const useInterruptor = () => {
  const context = useContext(InterruptorContext);
  if (!context) {
    throw new Error("useInterruptor debe ser usado dentro de un Provider de InterruptorContext");
  }
  return context;
};

interface InterruptorProviderProps {
  children: ReactNode;
}

export const InterruptorProvider: React.FC<InterruptorProviderProps> = ({ children }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <InterruptorContext.Provider value={{ isChecked, setChecked }}>
      {children}
    </InterruptorContext.Provider>
  );
};
