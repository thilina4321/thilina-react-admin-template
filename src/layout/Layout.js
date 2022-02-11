import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import Mainbar from "./Brand";
import classes from "./layout.module.css";
import MainSidebar from "./MainSidebar";

const Layout = (props) => {
  const [isSide, setIsSide] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  const location = useLocation();

  const names = ["/login", "/signup"];
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
              <div className={classes.mobile_slider}>
                <MainSidebar
                  lightTheme={lightTheme}
                  setLightTheme={setLightTheme}
                  isSide={isSide}
                  setIsSide={setIsSide}
                  isMobile={true}
                />
              </div>
            </Fragment>
          )}
        </Fragment>
      )}

      <div className={classes.main_layout}>
        {/* check is it main page before desktop slider to make
      available for this */}
        {!isMain && (
          <Fragment>
            <div className={classes.side}>
              <MainSidebar
                lightTheme={lightTheme}
                setLightTheme={setLightTheme}
                isSide={isSide}
                setIsSide={setIsSide}
              />
            </div>
          </Fragment>
        )}
        <div className={isMain ? classes.content_main : classes.content}>
          <div> {props.children} </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
