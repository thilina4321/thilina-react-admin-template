import React, { Fragment, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Mainbar from "./Brand";
import classes from "./layout.module.css";
import MainSidebar from "./MainSidebar";

const Layout = (props) => {
  const [isSide, setIsSide] = useState(false);
  const location = useLocation();

  const names = ["/login"];
  const isMain = names.some((na) => na === location.pathname);

  return (
    <Fragment>
      {!isMain && (
        <Fragment>
          <Mainbar isSide={isSide} setIsSide={setIsSide} />
          {isSide && (
            <div className={classes.mobile_sidebar}>
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
        <div className={classes.content}>
          <div> {props.children} </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
