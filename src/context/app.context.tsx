import React, { createContext, useContext, useState } from "react";

type ContextType = {
  showSubNavbar: boolean;
  setShowSubNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};
const Context = createContext<ContextType | undefined>(undefined);

export function AppContext({ children }: { children: React.ReactNode }) {
  const [showSubNavbar, setShowSubNavbar] = useState(false);

  return <Context value={{ showSubNavbar, setShowSubNavbar }}>{children}</Context>;
}

export const useAppContext = () => useContext(Context);
