import React, { Fragment, useEffect } from "react";
import CardComponent from "../../../components/Card";
import { OutsideWrapper, InsideWrapper } from "../../../components/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { bloodStockActions } from "../../../store/blood/stocks";

import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";

const Stock = () => {
  const dispatch = useDispatch();
  const { mountNumber, stocks } = useSelector((state) => state.bloodStock);
  const navigate = useNavigate();
  const getRequest = useHttp({
    url: "/blood-bank/get-stocks",
    method: "get",
    data: null,
  });

  useEffect(() => {
    const httpReq = async () => {
      if (mountNumber === 0) {
        const res = await getRequest();
        if (!res.error) {
          dispatch(bloodStockActions.addBloodStock(res.data.data));
        }
      }
      dispatch(bloodStockActions.setMountNumber(1));
    };

    httpReq();
  }, [dispatch, getRequest, mountNumber]);

  const createOrUpdateHandler = (id) => {
    navigate(id ? `/blood/stocks/${id}` : "/blood/stocks/new-stock");
  };

  return (
    <Fragment>
      <button onClick={() => createOrUpdateHandler(null)}>New Stock</button>
      <OutsideWrapper>
        {stocks.map((val) => (
          <InsideWrapper key={val.id}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => createOrUpdateHandler(val.id)}
            >
              <CardComponent title={val.type} subTitle={val.amount} />
            </div>
          </InsideWrapper>
        ))}
      </OutsideWrapper>
    </Fragment>
  );
};

export default Stock;
