import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SearchIcon from "@material-ui/icons/Search";

import "../css/Navbar.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import { Call, ContactMail, ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";

Modal.setAppElement("#root");

function Navbar() {
  const user = useSelector(selectUser);
  const [OpenModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();
    setOpenModal(false);

    db.collection("questions").add({
      user: user,
      question: input,
      imageUrl: inputUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <h2>Grequo</h2>
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <ContactMail />
        </div>
        <div className="qHeader__icon">
          <Call />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search " />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={user.photo}
          />
        </div>
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
        <Modal
          isOpen={OpenModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgb(f,f,f,10",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div classname="modal__info">
            <Avatar className="avatar" src={user.photo} />
            <p>{user.displayName ? user.displayName : user.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
            </div>
          </div>
          <div className="modal__field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Add your Question Here."
            />
            <div className="modal__fieldLink">
              <Link />
              <Input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional : iclude the link"
              />
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setOpenModal(false)}>
              close
            </button>
            <button onClick={handleQuestion} type="submit" className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
