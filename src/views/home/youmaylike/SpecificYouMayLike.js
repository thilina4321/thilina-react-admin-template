import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeYouMayLikeActions } from "../../../store/home/you-may-like";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";

const SpecificYouMayLike = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { id } = useParams();
  const { mountNumber, youMayLikes } = useSelector(
    (state) => state.homeYouMayLike
  );

  useEffect(() => {
    if (mountNumber === 0) {
      // http get request
    } else {
      const filterValue = youMayLikes.find((v) => v.id === id);
      if (filterValue) {
        setTitle(filterValue.question);
        setImageUrl(filterValue.answer);
      }
    }
  }, [mountNumber, id, youMayLikes]);

  return (
    <div className="full">
      <InputComponent value={title} setValue={setTitle} name="Question" />
      <InputComponent value={imageUrl} setValue={setImageUrl} name="Answer" />

      {id && id === "new-you-may-like" ? (
        <div>
          <ButtonCreateGroupComponent
            url="/you-may-like"
            action={homeYouMayLikeActions}
            backRoute="/you-may-like"
            data={{ question: title, answer: imageUrl }}
          />
        </div>
      ) : (
        <div>
          <ButtonUpdateGroupComponent
            updateUrl="/you-may-like"
            deleteUrl="/you-may-like"
            action={homeYouMayLikeActions}
            backRoute="/you-may-like"
            id={id}
            data={{ question: title, answer: imageUrl }}
          />
        </div>
      )}
    </div>
  );
};

export default SpecificYouMayLike;
