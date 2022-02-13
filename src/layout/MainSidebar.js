import React, { Fragment, useState } from "react";
import { navigation } from "../navigation/aa-index";
import classes from "./layout_light.module.css";
import darkclasses from "./layout_dark.module.css";
import { NavLink } from "react-router-dom";
import ArrowDownward from '@mui/icons-material/ExpandCircleDown'

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
            style={{
              cursor: "pointer",
              width: "20px",
              fontWeight: "bold",
              color: lightTheme && "white",
            }}
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
                  justifyContent: "flex-start",
                  alignItems: 'center',
                  gap: "0.5rem",
                }}
              >
                <div style={{ fontWeight: "bold" , flex:1, textAlign:'start'}}> {main}</div>
                <div > {<ArrowDownward sx={{ fontSize: 20 }} />}</div>
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
