import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeYouMayLikeActions } from "../../../store/home/you-may-like";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";
import ImageUpload from "../../../components/ImageUpload";
import FullComponentForModel from "../../../components/FullComponentForModel";

const SpecificYouMayLike = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [url, setUrl] = useState("");
  const [selectImage, setSelectImage] = useState("");

  // model
  // you may know model values
  const [youMayList, setYouMayList] = useState([]);
  const [modelTitle, setModelTitle] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const [modelUrl, setModelUrl] = useState("");
  const [selectModelImage, setSelectModelImage] = useState("");

  const inputElements = [
    { value: modelTitle, setValue: setModelTitle, name: "Title" },
    {
      value: modelDescription,
      setValue: setModelDescription,
      name: "Description",
    },
  ];

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
      <ImageUpload url={url} setFile={setSelectImage} />
      <InputComponent value={title} setValue={setTitle} name="Title" />

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
