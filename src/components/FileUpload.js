import React, { useEffect, useRef, useState } from "react";
import classes from "./ImageUpload.module.css";

const ImageUpload = (props) => {
  const imageRef = useRef();
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => setImageUrl(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  const inputHandler = () => {
    imageRef.current.click();

  };

  const pickedImage = (event)=>{
    if (event.target.files && event.target.files.length === 1) {
      setFile(pre=>event.target.files[0]);
    }
  }

  return (
    <div className={classes.image__upload}>
      <input
       accept=".jpg,.png,.jpeg"
       onChange={pickedImage} ref={imageRef} type="file"
       className={classes.input__file} />

      <div className={classes.preview}>
        {imageUrl ? (
          <img src={imageUrl} alt="preview" />
        ) : (
          <p>Please pick a image</p>
        )}
      </div>
      <button className={classes.button} onClick={inputHandler} type="button">     
        Pick Image
      </button>
    </div>
  );
};

export default ImageUpload;
