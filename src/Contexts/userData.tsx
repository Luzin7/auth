import { createContext } from "react";
import { User } from "firebase/auth";
import { useState } from "react";

interface ProviderProp {
  children: React.ReactNode;
}

interface UserData {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserDataContext = createContext({} as UserData);

export const UserDataProvider = ({ children }: ProviderProp) => {
  const [userData, setUserData] = useState<User | null>(null);
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
