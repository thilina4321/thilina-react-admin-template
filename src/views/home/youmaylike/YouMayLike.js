import React, { Fragment, useEffect, useState } from "react";
import CardComponent from "../../../components/Card";
import { OutsideWrapper, InsideWrapper } from "../../../components/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { homeYouMayLikeActions } from "../../../store/home/you-may-like";
import MuiInputComponent from "../../../UI/MuiInput";
import MuiCardComponent from "../../../UI/MuiCardComponent";
import MuiButtonComponent from "../../../UI/MuiButtonComponent";

import { useNavigate } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import InputComponent from "../../../components/InputComponent";
import ImageUpload from "../../../components/ImageUpload";

const YouMayLike = () => {
  const dispatch = useDispatch();
  const { mountNumber, youMayLikes, imageUrl } = useSelector(
    (state) => state.homeYouMayLike
  );
  const [YouMayLikeTitle, setYouMayLikeTilte] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const getRequest = useHttp({
    url: "/you-may-like",
    method: "get",
    data: null,
    onSucsses: (res) => {
      const { success, data } = res;
      console.log(data);
      if (success) {
        const { title, imageUrl, items } = data[0];
        setUrl(imageUrl);
        setTitle(title);
      }
    },
  });

  const postSingle = useHttp({
    url: "/you-may-like",
    method: "post",
    body: { title, imageUrl:url },
  });

  useEffect(() => {
    getRequest();
  }, []);

  console.log("data", url);

  const createOrUpdateFaq = (id) => {
    navigate(id ? `/you-may-like/${id}` : "/you-may-like/new-you-may-like");
  };

  const singleSave = async () => {
    console.log("hello single save");
    postSingle();
  };

  return (
    <Fragment>
      <YouMayKnowSingleCompoent
        title={title}
        setTitle={setTitle}
        url={url}
        setUrl={setUrl}
        clickHandler={singleSave}
      />

      <YouMayLikeList
        youMayLikes={youMayLikes}
        createOrUpdateFaq={createOrUpdateFaq}
      />
    </Fragment>
  );
};

export default YouMayLike;

// start you may like single component
const YouMayKnowSingleCompoent = (props) => {
  const { title, setTitle, url, setUrl, clickHandler } = props;
  return (
    <MuiCardComponent title="You May Like Details">
      <MuiInputComponent label="Title" value={title} setValue={setTitle} />
      <ImageUpload url={url} setUrl={setUrl} />
      <MuiButtonComponent title="Save" clickHandler={clickHandler} />
    </MuiCardComponent>
  );
};
// end you may like single component

// start you may like items component
const YouMayLikeList = (props) => {
  const { youMayLikes, createOrUpdateFaq } = props;
  return (
    <MuiCardComponent title="You May Like Items">
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
    </MuiCardComponent>
  );
};
// end you may like items component
