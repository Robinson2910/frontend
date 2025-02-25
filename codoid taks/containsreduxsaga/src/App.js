// // import { useState } from "react";
// // import ReactCrop from "react-image-crop";
// // import "react-image-crop/dist/ReactCrop.css";

// // function App() {
// //   const [src, setSrc] = useState(null);
// //   const [crop, setCrop] = useState({ aspect: 16 / 9 });
// //   const [image, setImage] = useState(null);
// //   const [output, setOutput] = useState(null);

// //   const selectImage = (file) => {
// //     setSrc(URL.createObjectURL(file));
// //   };

// //   // const onImageLoad = (img) => {
// //   //   console.log("Image loaded:", img);
// //   //   setImage(img);
// //   // };

// //   const onImageLoad = (img) => {
// //     console.log("Image loaded:", img);
// //     setImage(img);
// //   };
// //   const cropImageNow = () => {
// //     if (!image) {
// //       console.error("Image is not loaded yet.");
// //       return;
// //     }

// //     const canvas = document.createElement("canvas");
// //     const scaleX = image.naturalWidth / image.width;
// //     const scaleY = image.naturalHeight / image.height;
// //     canvas.width = crop.width;
// //     canvas.height = crop.height;
// //     const ctx = canvas.getContext("2d");

// //     const pixelRatio = window.devicePixelRatio;
// //     canvas.width = crop.width * pixelRatio;
// //     canvas.height = crop.height * pixelRatio;
// //     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
// //     ctx.imageSmoothingQuality = "high";

// //     ctx.drawImage(
// //       image,
// //       crop.x * scaleX,
// //       crop.y * scaleY,
// //       crop.width * scaleX,
// //       crop.height * scaleY,
// //       0,
// //       0,
// //       crop.width,
// //       crop.height
// //     );

// //     // Converting to base64
// //     const base64Image = canvas.toDataURL("image/jpeg");
// //     console.log(base64Image);
// //     setOutput(base64Image);
// //   };

// //   return (
// //     <div className="App">
// //       <center>
// //         <input
// //           type="file"
// //           accept="image/*"
// //           onChange={(e) => {
// //             selectImage(e.target.files[0]);
// //           }}
// //         />
// //         <br />
// //         <br />
// //         <div>
// //           {src && (
// //             <div>
// //               <ReactCrop
// //                 src={src}
// //                 onImageLoaded={onImageLoad}
// //                 crop={crop}
// //                 onChange={setCrop}
// //                 imageStyle={{ maxHeight: "100%", maxWidth: "100%" }}
// //                 // Use the onLoad attribute to ensure the image is fully loaded
// //                 imageProps={{ onLoad: (e) => onImageLoad(e.target) }}
// //               />
// //               <br />
// //               <button onClick={cropImageNow}>Crop</button>
// //               <br />
// //               <br />
// //             </div>
// //           )}
// //         </div>
// //         <div>{output && <img src={output} alt="Cropped" style={{ height: "50px" }} />}</div>
// //       </center>
// //     </div>
// //   );
// // }

// // export default App;

// import { useState, useEffect } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// function App() {
//   const [src, setSrc] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const [image, setImage] = useState(null);
//   const [output, setOutput] = useState(null);

//   const selectImage = (file) => {
//     setSrc(URL.createObjectURL(file));
//   };

//   useEffect(() => {
//     if (src) {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         setImage(img);
//       };
//     }
//   }, [src]);

//   const cropImageNow = () => {
//     if (!image) {
//       console.error("Image is not loaded yet.");
//       return;
//     }

//     const canvas = document.createElement("canvas");
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext("2d");

//     const pixelRatio = window.devicePixelRatio;
//     canvas.width = crop.width * pixelRatio;
//     canvas.height = crop.height * pixelRatio;
//     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//     ctx.imageSmoothingQuality = "high";

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );

//     // Determine the image type from the original image's file type
//     const fileType = src.split(".").pop();
//     const base64Image = canvas.toDataURL(`image/${fileType}`);
//     setOutput(base64Image);
//   };

//   return (
//     <div className="App">
//       <center>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             selectImage(e.target.files[0]);
//           }}
//         />
//         <br />
//         <br />
//         <div>
//           {src && (
//             <div>
//               <ReactCrop
//                 src={src}
//                 crop={crop}
//                 onChange={setCrop}
//                 imageStyle={{ maxHeight: "100%", maxWidth: "100%" }}
//               />
//               <br />
//               <button onClick={cropImageNow}>Crop</button>
//               <br />
//               <br />
//             </div>
//           )}
//         </div>
//         <div>{output && <img src={output} alt="Cropped" />}</div>
//       </center>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// function App() {
//   const [src, setSrc] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const [image, setImage] = useState(null);
//   const [output, setOutput] = useState(null);

//   const selectImage = (file) => {
//     console.log(URL.createObjectURL(file));
//     setSrc(URL.createObjectURL(file));
//   };

//   useEffect(() => {
//     if (src) {
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         setImage(img);
//       };
//     }
//     console.log(output);
//   }, [src]);
//   const cropImageNow = () => {
//     if (!image || !src || !src.type) {
//       console.error("Image or source type is not available.");
//       return;
//     }

//     const fileType = src.type.split("/")[1];

//     const canvas = document.createElement("canvas");
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext("2d");

//     const pixelRatio = window.devicePixelRatio;
//     canvas.width = crop.width * pixelRatio;
//     canvas.height = crop.height * pixelRatio;
//     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//     ctx.imageSmoothingQuality = "high";

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );

//     // Convert canvas to blob
//     return new Promise((resolve) => {
//       canvas.toBlob((blob) => {
//         resolve(blob);
//       }, `image/${fileType}`);
//     })
//       .then((blob) => {
//         // Read blob as data URL using FileReader
//         return new Promise((resolve) => {
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             resolve(reader.result);
//           };
//           reader.readAsDataURL(blob);
//         });
//       })
//       .then((dataUrl) => {
//         console.log(dataUrl);
//         setOutput(dataUrl);
//       });
//   };

//   return (
//     <div className="App">
//       <center>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             selectImage(e.target.files[0]);
//           }}
//         />
//         <br />
//         <br />
//         <div>
//           {src && (
//             <div>
//               <ReactCrop
//                 src={src}
//                 crop={crop}
//                 onChange={setCrop}
//                 imageStyle={{ maxHeight: "100%", maxWidth: "100%" }}
//               />
//               <br />
//               <button onClick={cropImageNow}>Crop</button>
//               <br />
//               <br />
//             </div>
//           )}
//         </div>
//         <div>{output && <img src={output} alt="Cropped" />}</div>
//       </center>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function App() {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(null);

  const selectImage = (file) => {
    const srcUrl = URL.createObjectURL(file);
    setSrc({ url: srcUrl, type: file.type });
  };

  useEffect(() => {
    if (src && src.url) {
      const img = new Image();
      img.src = src.url;
      img.onload = () => {
        setImage(img);
      };
    }
  }, [src]);

  const cropImageNow = () => {
    if (!image || !src || !src.type) {
      console.error("Image or source type is not available.");
      return;
    }

    const fileType = src.type.split("/")[1];

    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        `image/${fileType}`,
        1 // Specify the quality parameter (1 is maximum)
      );
    })
      .then((blob) => {
        // Read blob as data URL using FileReader
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(blob);
        });
      })
      .then((dataUrl) => {
        console.log();
        console.log(dataUrl);
        setOutput(dataUrl);
      })
      .catch((error) => {
        console.error("Error reading blob as data URL:", error);
      });
  };
  return (
    <div className="App">
      <center>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            selectImage(e.target.files[0]);
          }}
        />
        <br />
        <br />
        <div>
          {src && (
            <div>
              <ReactCrop
                src={src.url}
                crop={crop}
                onChange={setCrop}
                imageStyle={{ maxHeight: "100%", maxWidth: "100%" }}
              />
              <br />
              <button onClick={cropImageNow}>Crop</button>
              <br />
              <br />
            </div>
          )}
        </div>
        <div>{output && <img src={output} alt="Cropped" />}</div>
      </center>
    </div>
  );
}

export default App;
