import { useEffect, useState, createContext, useContext } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = async (query) => {
    setLoading(true);
    try {
      const contents = await fetchData(`search/?q=${query}`);
      console.log(contents);
      setData(contents.contents); // Ensure you are setting the correct data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);