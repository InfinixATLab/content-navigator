import React, { createContext, useContext } from "react";
import { GetUsersResponse, User } from "../types/user";
import axios from "axios";

interface UserContextReturn {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  loading: boolean;
}

const UserContext = createContext<UserContextReturn | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function getUsers() {
    const url = process.env.EXPO_PUBLIC_API_URL || "";
    setLoading(true);
    try {
      const response = await axios.get(url + "?results=20");
      const data = (await response.data) as GetUsersResponse;
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a AuthProvider");
  }

  return context;
};
