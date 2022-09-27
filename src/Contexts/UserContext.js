import React from "react";

export const UserContext = React.createContext();

const UserProvider = (props) => {
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
