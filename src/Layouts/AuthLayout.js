import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const AuthLayout = (props) => {
  const { userDetails } = useContext(UserContext);

  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export { AuthLayout };
