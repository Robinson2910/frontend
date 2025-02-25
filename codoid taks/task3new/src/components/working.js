import "../CSS/DragDrop.css";
import React from "react";
import { useState, useRef } from "react";

import Cropper from "react-cropper"; //npm install react-cropper

import "cropperjs/dist/cropper.css"; //npm install cropperjs

// import "../Demo.css";
function DragDrop() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#"); //contain the url of the cropped image
  const [cropper, setCropper] = useState(null); //contains instance of cropper
  const [isShowModal, setIsShowModal] = useState(false);
  const [index, setIndex] = useState(1);
  function selectFiles() {
    fileInputRef.current.click();
    // .click(): This line triggers a click event on the element referenced by fileInputRef.current. In other words, it programmatically simulates a click on a specific DOM element.
  }

  const onChange = (e) => {
    e.preventDefault();
    setIsDragging(false);
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    if (files && files.length === 1) {
      //old method(TMI)
      // // The line const reader = new FileReader(); is important because it creates a new instance of the FileReader object, which is a part of the File API in web development. The FileReader object provides methods to read the contents of a File or Blob asynchronously.
      // const reader = new FileReader();
      // // reader.onload: Defines a callback function that will be called when the file reading operation is complete. In this callback, it sets the image using the result of the file reading operation (reader.result). It seems to be assuming that there is only one file being dropped or selected, as it reads and sets the image using files[0].
      // reader.onload = () => {
      //   setImage(reader.result); //sets the image to url
      // };
      // reader.readAsDataURL(files[0]); //initiates the reading of file
      if (files[0].type.toLowerCase().startsWith("image/")) {
        setIsShowModal(true);
        setImage(URL.createObjectURL(files[0]));
      }
    }
    if (files && files.length > 1) {
      e.preventDefault();
      fileInputRef.value = "";

      setIsDragging(false);
      setIsShowModal(false);
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.toLowerCase().startsWith("image/")) {
          setImages((prevImages) => [
            ...prevImages,
            {
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            },
          ]);
        }
      }
    }
  };

  const getCropData = () => {
    if (cropper !== null) {
      const newCropData = cropper.getCroppedCanvas().toDataURL();
      setIsShowModal(false);
      handleUpload(newCropData);
      setCropData(newCropData);
    }
  };

  const closeModal = () => {
    setImage("");
    setCropData("#");

    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = ""; // This will clear the selected file
    }
    setIsShowModal(false);
  };
  const handleUpload = async (url) => {
    const name = `img${index}`;
    setImage("");
    setCropData("#");

    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = ""; // This will clear the selected file
    }
    // setCropper(null);
    setImages((prevImages) => [
      ...prevImages,

      {
        url: url,
        name,
      },
    ]);

    setIndex((index) => index + 1);
  };

  function deleteImage(index) {
    setImages((prevImages) => {
      setCropData("#");
      setImage("");
      return prevImages.filter((_, i) => i !== index);
    });
  }
  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  function uploadImages() {
    console.log("Images :", images);
  }
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className={isShowModal ? "image-upload-modal" : "image-upload-modal hidden"}>
          <span
            className="close-modal"
            onClick={() => {
              closeModal();
            }}
          >
            &times;
          </span>
          <br />
          <Cropper
            style={{ height: "400", width: "100%" }}
            zoomTo={0}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={0.8}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
          <h1>
            {cropData && (
              <button
                onClick={() => {
                  getCropData();
                }}
              >
                Upload
              </button>
            )}
          </h1>
        </div>
      </div>

      <div className="card">
        <div
          className="drag-area"
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onChange}
        >
          {isDragging ? (
            <span className="select">Drop images here</span>
          ) : (
            <>
              {" "}
              Drag & Drop image here or{" "}
              <span className="select" role="button" onClick={selectFiles}>
                Browse
              </span>
            </>
          )}

          <input
            id="file-input"
            name="file"
            type="file"
            className="file"
            ref={fileInputRef}
            onChange={onChange}
            multiple
          />
        </div>
        <div className="container">
          {images.map((image, index) => {
            return (
              <div className="image" key={index}>
                <img src={image.url} alt={image.name} />
                {/* <span className="delete">&times;</span> */}
                <span className="delete" onClick={() => deleteImage(index)}>
                  &times;
                </span>
              </div>
            );
          })}

          <button type="button" onClick={uploadImages}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default DragDrop;
