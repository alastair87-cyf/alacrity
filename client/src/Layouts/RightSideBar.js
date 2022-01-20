import React, { useState } from "react";

import PlusImg from "../Assets/img/plus-math-30.png";
import Popup from "../Components/Popup";
import Pomodoro from "../Components/Pomodoro";

const RightSideBar = ({ user, SERVER_URL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    window.open(`${SERVER_URL}/auth/logout`, "_self");
  };
  return (
    <aside className="right-sidebar">
      {user && (
        <ul onClick={logout} className="right-animation">
          <li>
            <img
              src={user.photos[0].value}
              alt=""
              className="img-circular"
            ></img>
          </li>
          <li className="right-sidebar-li">Sign-out</li>
        </ul>
      )}
      {user && (
        <button
          type="button"
          className="btn right-animation"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span className="btn__icon">
            <img src={PlusImg} alt="add tasks icon"></img>
          </span>
          <span className="btn__text">Add Task</span>
        </button>
      )}

      {user && <Pomodoro />}

      {isOpen && <Popup close={setIsOpen} />}
    </aside>
  );
};

export default RightSideBar;
