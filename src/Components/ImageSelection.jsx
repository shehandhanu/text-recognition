import img from "../assets/selectimg.png";
import "../App.css";
import React from "react";
import TextItem from "./TextItem";
import axios from "axios";
import S3FileUpload from "react-s3";

function ImageSelection(props) {
  const inputRef = React.useRef();
  const imageRef = React.useRef();
  const [SelectedImg, setSelectedImg] = React.useState();
  const [UploadButtonClick, setUploadButtonClick] = React.useState(true);
  const [Response, setResponse] = React.useState();
  const [Type, setType] = React.useState(false);
  const [selectedText, setselectedText] = React.useState([]);
  const [realHeight, setrealHeight] = React.useState();
  const [realWidth, setrealWidth] = React.useState();

  let windowWidth = window.innerWidth;
  const ratio = (windowWidth * 53.3) / 100 / realWidth;

  React.useEffect(() => {}, [selectedText]);

  const onSubmit = async () => {
    setUploadButtonClick(false);
    const config = {
      bucketName: "handwrittenimagesbucket",
      region: "us-east-1",
      accessKeyId: "AKIAXTEHORJDUQ3CNBUV",
      secretAccessKey: "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",
    };

    await S3FileUpload.uploadFile(SelectedImg, config)
      .then(async (res) => {
        await getProcessedData();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getProcessedData = async () => {
    let resKey = SelectedImg.name;
    resKey = resKey.split(".");
    const key = resKey[0];

    setTimeout(async () => {
      const response = await axios.get(
        `https://handwrittenresponss3.s3.amazonaws.com/${key}.json`
      );

      setResponse(response);
      alert("Image Uploaded Successfully");
    }, 5000);
  };

  const setImageRealSize = (height, width) => {
    setrealHeight(height);
    setrealWidth(width);
  };

  const imagesize = {
    width: (windowWidth * 53.3) / 100,
    height: ratio * realHeight,
  };

  const setText = (text) => {
    setselectedText([...selectedText, text]);
  };

  function process() {
    const textItemArray = [];
    Response.data.Blocks.map((item, index) => {
      if (Type == true) {
        if (item.BlockType === "LINE") {
          const text = item.Text;
          const polygons = item.Geometry.Polygon;
          const leftTop = polygons[0];
          const posisionedItems = getPosisionedItems(leftTop, text);
          textItemArray.push(posisionedItems);
        }
      } else {
        if (item.BlockType === "WORD") {
          const text = item.Text;
          const polygons = item.Geometry.Polygon;
          const leftTop = polygons[0];
          const posisionedItems = getPosisionedItems(leftTop, text);
          textItemArray.push(posisionedItems);
        }
      }
    });
    return textItemArray;
  }

  function getPosisionedItems(lefttop, text) {
    let leftTopInPixelsX = lefttop.X * imagesize.width;
    let leftTopInPixelsY = lefttop.Y * imagesize.height;

    return (
      <TextItem
        setText={setText}
        text={text}
        leftTopInPixelsX={leftTopInPixelsX}
        leftTopInPixelsY={leftTopInPixelsY}
      />
    );
  }

  console.log(Response);

  return (
    <div>
      <div className="warpper">
        {!SelectedImg ? (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "50vw",
              backgroundColor: "#9c9c9c",
            }}
          >
            <div>
              <img src={img} alt="selectimg.png" className="uploadimg" />
              <input
                required
                accept="image/*"
                id="select-image"
                type="file"
                onChange={() => setSelectedImg(inputRef.current.files[0])}
                ref={inputRef}
                style={{ display: "none" }}
              />
              <label className="btn1" htmlFor="select-image">
                Select Image
              </label>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="container-left">
              <div>
                {!Response ? (
                  <div>
                    {!SelectedImg ? null : (
                      <div>
                        <img
                          style={{
                            width: imagesize.width + "px",
                            height: imagesize.height + "px",
                          }}
                          className="sampleimg"
                          src={URL.createObjectURL(SelectedImg)}
                          alt="img"
                          ref={imageRef}
                          onLoad={() =>
                            setImageRealSize(
                              imageRef.current.naturalHeight,
                              imageRef.current.naturalWidth
                            )
                          }
                        />
                        {UploadButtonClick ? (
                          <label className="btn2" onClick={onSubmit}>
                            Upload Image
                          </label>
                        ) : (
                          <label
                            className="btn2 visible50" /*onClick={onSubmit}*/
                          >
                            Upload Image
                          </label>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div style={{ position: "relative" }}>
                      <input
                        checked={Type}
                        onChange={() => setType(!Type)}
                        type="checkbox"
                      />
                      show line by line
                    </div>
                    <img
                      src={URL.createObjectURL(SelectedImg)}
                      className="sampleimg"
                      alt="selectimg.png"
                      style={{
                        width: imagesize.width + "px",
                        height: imagesize.height + "px",
                      }}
                    />
                    {process().map((item, index) => {
                      return item;
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="container-right">
              {/* <TextField text={selectedText} /> */}
              <textarea
                onChange
                className="textfeild"
                type="text"
                value={selectedText}
                onChange={(e) => setselectedText(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageSelection;
