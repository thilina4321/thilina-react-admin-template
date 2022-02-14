import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Mainbar from "./Brand";
import classes from "./layout_light.module.css";
import darkclasses from "./layout_dark.module.css";
import MainSidebar from "./MainSidebar";
import Login from "../pages/Login";

const Layout = (props) => {
  const [isSide, setIsSide] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  const location = useLocation();

  const names = ["/login", "/signup", '/404'];
  const isMain = names.some((na) => na === location.pathname);

  

  const removeSlider = () => {
    setIsSide(false);
  };

  return (
    <Fragment>
      {/* check is it main page before mobile slider to make
      available for this */}
      {!isMain && (
        <Fragment>
          <Mainbar
            lightTheme={lightTheme}
            setLightTheme={setLightTheme}
            isSide={isSide}
            setIsSide={setIsSide}
          />
          {isSide && (
            <Fragment>
              <div onClick={removeSlider} className={classes.backdrop}></div>
              <div
                className={
                  lightTheme
                    ? classes.mobile_slider
                    : darkclasses.dark_mobile_slider
                }
              >
                <MainSidebar
                  lightTheme={lightTheme}
                  isSide={isSide}
                  setIsSide={setIsSide}
                  isMobile={true}
                />
              </div>
            </Fragment>
          )}
        </Fragment>
      )}

      <div
        className={
          !isMain
            ? lightTheme
              ? classes.main_layout
              : darkclasses.dark_main_layout
            : classes.lay
        }
      >
        {/* check is it main page before desktop slider to make
      available for this */}
        {!isMain && (
          <Fragment>
            <div className={classes.side}>
              <MainSidebar
                lightTheme={lightTheme}
                isSide={isSide}
                setIsSide={setIsSide}
              />
            </div>
          </Fragment>
        )}
        <div
          className={
            isMain
              ? classes.content_main
              : lightTheme
              ? classes.content
              : darkclasses.dark_content
          }
        >
          <div> {props.children} </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
