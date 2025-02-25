import React from "react";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
function Cropper() {
  const [src, selectFile] = useState(null);
  const handleFileChange = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  };
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <div className="col-6">
          {src && (
            <ReactCrop
              src={src}
              onImageLoaded={(img) => setImage(img)}
              crop={crop}
              onChange={setCrop}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cropper;
