import React, { Fragment, useEffect } from "react";
import CardComponent from "../../../components/Card";
import { OutsideWrapper, InsideWrapper } from "../../../components/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { homeYouMayLikeActions } from "../../../store/home/you-may-like";

import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";

const YouMayLike = () => {

  const dispatch = useDispatch();
  const { mountNumber,  youMayLikes } = useSelector((state) => state.homeYouMayLike);
  const navigate = useNavigate();
  const getRequest = useHttp({
    url: "/you-may-like",
    method: "get",
    data: null,
    onSucsses: (data) => dispatch(homeYouMayLikeActions.addFaqs(data)),
  });

  useEffect(() => {
    const httpReq = async () => {
      if (mountNumber === 0) {
        await getRequest();
      }
      dispatch(homeYouMayLikeActions.setMountNumber(1));
    };

    httpReq();
  }, [dispatch, getRequest, mountNumber]);

  console.log("data");

  const createOrUpdateFaq = (id) => {
    navigate(id ? `/you-may-like/${id}` : "/you-may-like/new-you-may-like");
  };

  return (
    <Fragment>
      <button onClick={() => createOrUpdateFaq(null)}>New You May Like</button>
      <OutsideWrapper>
        {youMayLikes.map((faq) => (
          <InsideWrapper key={faq.id}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => createOrUpdateFaq(faq.id)}
            >
              <CardComponent question={faq.question} answer={faq.answer} />
            </div>
          </InsideWrapper>
        ))}
      </OutsideWrapper>
    </Fragment>
  );
};

export default YouMayLike;
