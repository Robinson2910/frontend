import "../CSS/DragDrop.css";
import React from "react";
import { useState, useRef } from "react";
function DragDrop() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
    // .click(): This line triggers a click event on the element referenced by fileInputRef.current. In other words, it programmatically simulates a click on a specific DOM element.
  }
  //this function gets triggered when we select or close the dialog
  function onFileSelect(event) {
    const files = event.target.files;
    console.log(files);
    if (files.length == 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
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
  function deleteImage(index) {
    setImages((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
  }
  //triggered when file is been dragged over the designated area
  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  //when files dragged out of the designated area
  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  //when file is dropped onto designated area
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
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

  function uploadImage() {
    console.log("Images :", images);
  }
  return (
    <div className="card">
      <div className="top">
        <p>Drag & Drop image uploading</p>
      </div>
      <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
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
          name="file"
          type="file"
          className="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>
      <div className="container">
        {images.map((images, index) => {
          return (
            <div className="image" key={index}>
              <img src={images.url} alt={images.name} />
              {/* <span className="delete">&times;</span> */}
              <span className="delete" onClick={() => deleteImage(index)}>
                &times;
              </span>
            </div>
          );
        })}
        {/* <div className="image">
          <img src="" alt="" />
        </div> */}

        <button type="button" onClick={uploadImage}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default DragDrop;
