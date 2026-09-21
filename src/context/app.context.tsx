import React, { createContext, useContext, useState } from "react";

type ContextType = {
  showSubNavbar: string;
  setShowSubNavbar: React.Dispatch<React.SetStateAction<string>>;
};
const Context = createContext<ContextType | undefined>(undefined);

export function AppContext({ children }: { children: React.ReactNode }) {
  const [showSubNavbar, setShowSubNavbar] = useState("");

  return <Context value={{ showSubNavbar, setShowSubNavbar }}>{children}</Context>;
}

export const useAppContext = () => useContext(Context);
