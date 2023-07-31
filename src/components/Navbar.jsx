import React from "react";
import { MagnifyingGlass, User, Sun, Moon } from "phosphor-react";

const Navbar = (props) => {
  return (
    <nav
      className={`text-gray-${
        props.mode === 50 ? 50 : 950
      } flex justify-between p-4 bg-gray-${
        props.mode === 50 ? 950 : 50
      } items-center ${
        props.mode === 50 ? "border-none" : "border-gray-400 border-b-2"
      }`}
    >
      <div className="flex-start">
        <a href="/" type="button">
          Logo
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2">
          <a href="/" type="button">
            TodoList
          </a>
          <a href="/" type="button">
            Weather
          </a>
          <a href="/" type="button">
            Counter
          </a>
        </div>
        <div className="flex gap-2">
          <button onClick={props.changeMode}>
            {props.mode === 50 ? (
              <Sun
                size={24}
                color={`${props.mode === 50 ? "#f9fafb" : "#030712"}`}
              />
            ) : (
              <Moon
                size={24}
                color={`${props.mode === 50 ? "#f9fafb" : "#030712"}`}
              />
            )}
          </button>
          <a href="/" type="button">
            <MagnifyingGlass
              color={`${props.mode === 50 ? "#f9fafb" : "#030712"}`}
              size={24}
            />
          </a>

          <a href="/" type="button">
            <User
              color={`${props.mode === 50 ? "#f9fafb" : "#030712"}`}
              size={24}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
