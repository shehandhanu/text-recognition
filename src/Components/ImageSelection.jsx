import img from "../assets/selectimg.png";
import "../App.css";
import "./Loading.css";
import React from "react";
import TextItem from "./TextItem";
import axios from "axios";
import S3FileUpload from "react-s3";
import Compressor from "compressorjs";

function ImageSelection(props) {
  const inputRef = React.useRef();
  const imageRef = React.useRef();
  const [SelectedImg, setSelectedImg] = React.useState();
  const [Response, setResponse] = React.useState();
  const [Type, setType] = React.useState(true);
  const [selectedText, setselectedText] = React.useState([]);
  const [previewSelectedText, setpreviewSelectedText] = React.useState([]);
  const [realHeight, setrealHeight] = React.useState();
  const [realWidth, setrealWidth] = React.useState();
  const [ProccessStatus, setProccessStatus] = React.useState(0);
  const [AddingStatus, setAddingStatus] = React.useState();
  const [copy, setcopy] = React.useState(false);

  let windowWidth = window.innerWidth;
  const ratio = (windowWidth * 53.3) / 100 / realWidth;

  React.useEffect(() => {
    if (selectedText.length !== 0) {
      let para = selectedText.join(" ");
      const samplex = para.split(" ");
      setpreviewSelectedText(samplex);
    }
    setcopy(false);
  }, [SelectedImg, selectedText, AddingStatus]);

  const onSubmit = async () => {
    setProccessStatus(1);
    resizeImage();
  };

  const copyText = () => {
    let para = previewSelectedText.join(" ");
    navigator.clipboard.writeText(para);
    setcopy(true);
  };

  const imageUpload = async (image) => {
    setProccessStatus(2);
    const config = {
      bucketName: "handwrittenimagesbucket",
      region: "us-east-1",
      accessKeyId: "AKIAXTEHORJDUQ3CNBUV",
      secretAccessKey: "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",
    };
    await S3FileUpload.uploadFile(image, config)
      .then(async (res) => {
        await getProcessedData();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const setPreviewType = () => {
    if (Type === true) {
      setType(false);
    } else {
      setType(true);
    }
  };

  const resizeImage = async () => {
    new Compressor(SelectedImg, {
      quality: 0.6,
      success(result) {
        console.log(result);
        setSelectedImg(result);
        imageUpload(result);
      },
      error(err) {
        console.log(err.message);
      },
    });
  };

  const getProcessedData = async () => {
    setProccessStatus(3);
    let resKey = SelectedImg.name;
    resKey = resKey.split(".");
    const key = resKey[0];
    let times = 0;
    const getData = setInterval(async () => {
      const response = await axios.get(
        `https://handwrittenresponss3.s3.amazonaws.com/${key}.json`
      );

      if (response.status === 200 || times <= 10) {
        if (response.status !== 200) {
          alert("Data Fetching losted please try again");
        } else {
          setResponse(response);
          setProccessStatus(0);
          clearInterval(getData);
        }
      }
      console.log(times);
      times++;
    }, 2000);
  };

  const setImageRealSize = (height, width) => {
    setrealHeight(height);
    setrealWidth(width);
  };

  const imagesize = {
    width: (windowWidth * 41.95) / 100,
    height: ratio * realHeight,
  };

  const setText = (text) => {
    setselectedText([...selectedText, text]);
  };

  function process() {
    const textItemArray = [];
    Response.data.Blocks.map((item, index) => {
      if (Type === true) {
        if (item.BlockType === "LINE") {
          const key = index;
          const text = item.Text;
          const polygons = item.Geometry.Polygon;
          const leftTop = polygons[0];
          const posisionedItems = getPosisionedItems(leftTop, text, key);
          textItemArray.push(posisionedItems);
        }
      } else {
        if (item.BlockType === "WORD") {
          const key = index;
          const text = item.Text;
          const polygons = item.Geometry.Polygon;
          const leftTop = polygons[0];
          const posisionedItems = getPosisionedItems(leftTop, text, key);
          textItemArray.push(posisionedItems);
        }
      }
    });
    return textItemArray;
  }

  function getPosisionedItems(lefttop, text, key) {
    let leftTopInPixelsX = lefttop.X * imagesize.width;
    let leftTopInPixelsY = lefttop.Y * imagesize.height;

    return (
      <TextItem
        key={key}
        setText={setText}
        text={text}
        leftTopInPixelsX={leftTopInPixelsX}
        leftTopInPixelsY={leftTopInPixelsY}
      />
    );
  }

  const addWordRight = (index) => {
    setAddingStatus(index);
  };

  const addWordLeft = (index) => {
    setAddingStatus(index + 1);
  };

  const removeWord = (index) => {
    let wordArray = previewSelectedText;
    wordArray.splice(index, 1);
    setselectedText(wordArray);
  };

  const moveWordLeft = (index) => {
    let wordArray = previewSelectedText;
    let word = wordArray.splice(index, 1);
    wordArray.splice(index - 1, 0, word.toString());
    setselectedText(wordArray);
  };

  const moveWordRight = (index) => {
    let wordArray = previewSelectedText;
    let word = wordArray.splice(index, 1);
    wordArray.splice(index + 1, 0, word.toString());
    setselectedText(wordArray);
  };

  return (
    <div>
      {ProccessStatus !== 0 ? (
        <div>
          {ProccessStatus === 1 ? (
            <div className=" container1">
              <h1 className="centered">Image Resizeing</h1>
              <div className="load">
                <div className="loader"></div>
              </div>
            </div>
          ) : null}
          {ProccessStatus === 2 ? (
            <div className=" container1">
              <h1 className="centered">Image Upoading</h1>
              <div className="load">
                <div className="loader"></div>
              </div>
            </div>
          ) : null}
          {ProccessStatus === 3 ? (
            <div className=" container1">
              <h1 className="centered">Geting Data</h1>
              <div className="load">
                <div className="loader"></div>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="warpper">
          {!SelectedImg ? (
            <div className="selectIMGFirstScreen">
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
                        <div className="UploadedImageScroll">
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
                          <label className="btn2" onClick={() => onSubmit()}>
                            Upload Image
                          </label>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div
                        class="toggle-radio"
                        onClick={() => setPreviewType()}
                      >
                        <input type="radio" name="rdo" id="yes" checked />
                        <input type="radio" name="rdo" id="no" />
                        <div className="switch">
                          <label for="yes">Word By Word </label>
                          <label for="no"> Line By Line</label>
                        </div>
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
                {Response ? (
                  <div>
                    {!copy ? (
                      <button onClick={() => copyText()} className="copybtn">
                        Copy
                      </button>
                    ) : (
                      <button disabled className="copybtn2">
                        Copied
                      </button>
                    )}
                  </div>
                ) : null}
                <div style={{ marginBottom: "25px" }}></div>
                {previewSelectedText.map((word, index) => {
                  const spaceWord = word + " ";
                  return (
                    <div key={index} className="tooltip">
                      {spaceWord}
                      <span className="tooltiptext">
                        <button
                          onClick={() => addWordRight(index)}
                          style={{
                            marginLeft: "2px",
                            width: "30px",
                            backgroundColor: "#4CAF50",
                            borderRadius: "5px",
                            border: "none",
                          }}
                        >
                          <i
                            className="fa fa-plus"
                            style={{ color: "#FFFFF0" }}
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button
                          onClick={() => moveWordLeft(index)}
                          style={{
                            marginLeft: "2px",
                            width: "30px",
                            backgroundColor: "#008CBA",
                            borderRadius: "5px",
                            border: "none",
                          }}
                        >
                          <i
                            className="fa fa-arrow-left"
                            style={{ color: "#FFFFF0" }}
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button
                          onClick={() => removeWord(index)}
                          style={{
                            marginLeft: "2px",
                            width: "30px",
                            backgroundColor: "#f44336",
                            borderRadius: "5px",
                            border: "none",
                          }}
                        >
                          <i
                            className="fa fa-times"
                            style={{ color: "#FFFFF0" }}
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button
                          onClick={() => moveWordRight(index)}
                          style={{
                            marginLeft: "2px",
                            width: "30px",
                            backgroundColor: "#008CBA",
                            borderRadius: "5px",
                            border: "none",
                          }}
                        >
                          <i
                            className="fa fa-arrow-right"
                            style={{ color: "#FFFFF0" }}
                            aria-hidden="true"
                          ></i>
                        </button>
                        <button
                          onClick={() => addWordLeft(index)}
                          style={{
                            marginLeft: "2px",
                            width: "30px",
                            backgroundColor: "#4CAF50",
                            borderRadius: "5px",
                            border: "none",
                          }}
                        >
                          <i
                            className="fa fa-plus"
                            style={{ color: "#FFFFF0" }}
                            aria-hidden="true"
                          ></i>
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageSelection;
