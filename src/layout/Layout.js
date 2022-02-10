import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import Mainbar from "./Brand";
import classes from "./layout.module.css";
import MainSidebar from "./MainSidebar";
import MobileSlider from "./MobileSlider";

const Layout = (props) => {
  const [isSide, setIsSide] = useState(false);
  const location = useLocation();

  const names = ["/login", "/signup"];
  const isMain = names.some((na) => na === location.pathname);
  console.log(isMain);

  return (
    <Fragment>
      {!isMain && (
        <Fragment>
          <Mainbar isSide={isSide} setIsSide={setIsSide} />
          {isSide && (
            <div className={classes.mobile_slider}>
              <MainSidebar
                isSide={isSide}
                setIsSide={setIsSide}
                isMobile={true}
              />
            </div>
          )}
        </Fragment>
      )}

      <div className={classes.main_layout}>
        {!isMain && (
          <Fragment>
            <div className={classes.side}>
              <MainSidebar isSide={isSide} setIsSide={setIsSide} />
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
