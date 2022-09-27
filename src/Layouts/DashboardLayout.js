import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const DashboardLayout = (props) => {
  const { userDetails } = useContext(UserContext);

  return <div>{props.children}</div>;
};

export { DashboardLayout };
