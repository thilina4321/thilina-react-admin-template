import React, { Fragment, useState } from "react";
import { navigation } from "../navigator/aa-index";
import classes from "./layout_light.module.css";
import darkclasses from "./layout_dark.module.css";
import { NavLink } from "react-router-dom";

const MainSidebar = (props) => {
  const { isSide, setIsSide, isMobile = false, lightTheme } = props;

  const [isShowIndex, setIsShowIndex] = useState(-1);

  const expandSideUnit = (id) => {
    if (isShowIndex === id) {
      setIsShowIndex(-1);
      return;
    }

    setIsShowIndex(id);
  };

  return (
    <Fragment>
      <div
        className={
          lightTheme ? classes.main_slider : darkclasses.dark_main_slider
        }
      >
        {isMobile && (
          <h3
            style={{ cursor: "pointer", width: "20px" }}
            onClick={() => setIsSide(!isSide)}
          >
            X
          </h3>
        )}
        {navigation.map(({ main, sub = [] }, index) => (
          <div key={index}>
            <div
              className={
                lightTheme
                  ? classes.main_element
                  : darkclasses.dark_main_element
              }
              onClick={() => expandSideUnit(index)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div> {<main.icon sx={{ fontSize: 40 }} />}</div>
                <div style={{fontWeight:'bold'}}> {main.name}</div>
              </div>
            </div>
            {index === isShowIndex &&
              sub.map(({ name, path }, i) => {
                return (
                  <NavLink
                    onClick={() => setIsSide(false)}
                    className={(isAc) => {
                      return isAc.isActive ? classes.active : classes.inactive;
                    }}
                    key={i}
                    to={path}
                  >
                    <p
                      className={
                        lightTheme
                          ? classes.sub_name
                          : darkclasses.dark_sub_name
                      }
                    >
                      <span className={classes.icon}> @ </span>
                      <span> {name} </span>
                    </p>
                  </NavLink>
                );
              })}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MainSidebar;
