import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "../css/EvBox.css";
import userSlice, { selectUser } from "../features/userSlice";

export default function EvBOX() {

  const user = useSelector(selectUser);
 
  return (
    <div className="evBox">
      <div className="evBox__info">
        <Avatar src={user.photo} />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="evBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
