import  { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      setUser(localUser);
      return;
    }
    setUser("");
  }, []);
  return [user];
};

export default useLocalStorage;
