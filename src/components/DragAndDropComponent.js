import React, { useCallback, useState } from "react";

import Dropzone from "react-dropzone";
import AddAPhoto from "@mui/icons-material/AddAPhoto";
import classes from "./drag.module.css";

const DragAndDropComponent = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    let allowedExtension = ["jpg", "jpeg", "png"];

    let hasvalid = allowedExtension.some((ab) => imageFile.name.endsWith(ab));
    if (!hasvalid) {
      alert("Invalid file type");
      return;
    }
    setSelectedImage(imageFile);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageUrl(fileReader.result);
    };
    fileReader.readAsDataURL(imageFile);
  }, []);

  return (
    <div className={classes.component}>
      <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section className={classes.section}>
            <div className={classes.select} {...getRootProps()}>
              <input {...getInputProps()} />
              {imageUrl ? (
                <img width="100%" height={"200px"} src={imageUrl} alt="img" />
              ) : (
                <AddAPhoto sx={{ fontSize: 40 }} />
              )}
            </div>
            <p> Add / Drap & Drop  </p>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default DragAndDropComponent;
