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
  const [Response, setResponse] = React.useState();
  const [Type, setType] = React.useState(false);
  const [selectedText, setselectedText] = React.useState([]);
  const [realHeight, setrealHeight] = React.useState();
  const [realWidth, setrealWidth] = React.useState();

  let windowWidth = window.innerWidth;
  const ratio = (windowWidth * 53.3) / 100 / realWidth;

  React.useEffect(() => {}, [selectedText]);

  const onSubmit = async () => {
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

  const data = {
    DocumentMetadata: {
      Pages: 1,
    },
    Blocks: [
      {
        BlockType: "PAGE",
        Geometry: {
          BoundingBox: {
            Width: 0.9996010661125183,
            Height: 0.9987219572067261,
            Left: 0.0003989098477177322,
            Top: 0.001278053387068212,
          },
          Polygon: [
            {
              X: 0.0003989098477177322,
              Y: 0.001278053387068212,
            },
            {
              X: 1,
              Y: 0.0013068796833977103,
            },
            {
              X: 1,
              Y: 1,
            },
            {
              X: 0.000453449523774907,
              Y: 1,
            },
          ],
        },
        Id: "511b5f49-e171-452d-9cd0-e381ec80c4cc",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "9a131581-e534-4046-9bc9-6e245a0f43b0",
              "ca10f567-82af-4f93-8821-e4f3a0478e54",
              "2357797a-9636-4570-926e-341be0818e57",
              "98403bd0-b750-4dac-a80f-2b868fcb88e5",
              "eac1bb6b-b1ae-4a88-a099-665bd5430c15",
              "513115ce-5e73-4976-96bf-6958d5466d01",
              "56b311d2-18bb-4d4d-b8ef-4ec59ba48286",
              "b1b7e330-a7d8-4a37-ba52-bffd53d18fa1",
              "b6bc84ef-7ea1-4c74-b5a5-5796b9e29cc8",
              "e1a9c3f1-27ef-407d-a0b4-7121835493c1",
              "bffb4b8d-c003-4bb4-8eca-c507746badb8",
              "38b6b57a-de45-4726-9e68-e65395b1a3e3",
              "d9e4b73a-4d57-494f-915c-32de20edc9f5",
              "edccd2e5-d4e9-4d60-860b-d7cf04f89a16",
              "8d4c7364-f72c-4369-80d4-bc7ac13eea47",
              "de984a77-3cbb-4839-ac6c-90ffbf5b101f",
              "95fd472a-e54b-43fb-b283-2274d13a12c5",
              "0db7f0a2-2772-468e-bdf9-f3774ad653ab",
              "e49c87cf-3cfd-444b-aaaa-ecdfd04190dd",
              "22bac7a5-f440-4e3b-a3f4-28e528eaa8ad",
              "c225c625-ead1-4a17-8e2a-90ff9de9d000",
              "11835a26-0758-4fed-946c-dfae02fe1ff2",
              "c161e452-d648-4fab-83c3-7f2a3f5a66fb",
              "ae1f8030-953d-49a5-ad40-abd529f09d0a",
              "963b1b6d-a084-4443-96d4-3fc1d38de22b",
              "ae20e9d9-746e-486e-a983-282ba1045f0b",
              "2d703bc1-afa0-47dc-9461-e37d68559dfb",
              "b9fa3cfe-7bee-4a1c-8d71-c0437907b2cf",
              "20e4ac32-932a-4dd4-8333-dc1de539a044",
              "c5e92507-d641-48c4-8c6b-93fa94db9528",
              "5c0707e1-527b-4d73-b9e8-de75c532d7f7",
              "eafcabc5-bdfb-4274-9a53-dc2d47a86ecd",
              "3e784025-3629-45d4-8d58-f3b9636c56aa",
              "5364be9b-ab9f-48bf-b8f6-e767998eebfe",
              "0fc10b8f-1e78-4aad-af67-47fb429093e5",
              "111eb2cc-f955-4a6a-b1d4-b1e2b63af8a7",
              "1749d6a1-de2c-4402-a220-cb1d022f11b1",
              "6ce7bde1-a054-499b-b063-4bef4d5ccfa8",
              "41e97499-efe6-415a-ad32-73a03d7065cd",
              "0694def5-171d-449b-b2ad-fe30f8d47655",
              "6dfe0f18-dfd6-43b5-bfa4-05a4d1b99af7",
            ],
          },
        ],
        childText:
          "- 6 Migration - Snowball : To move data from storage to cloud. - DMS : Database Migration service Can change DB type (Ey: Oracle to Aurora) - SMS : Server Migration Service (for VMWare migration) 7 Analytics - Athena : Allows to run SQL queries on 53 - EMR : Elastic Map Reduce (for BigData) uses to process large amount of data (Ex: log analysis / web indexing) Uses Hadoop / Apache spark / Flunk - Cloud search : Fully managed by AWS - Elastic Search : Managed by Open source services - Kinesis : Streaming & analyzing real time data (Ex: Financial markets / sentimental analysis / sells social media feed analysis ) - Data Pipeline : Allow to move data from one place to another (Ex: 53 to Dynmo DB or vise versa) - Quick Site: Business Analysis tool Dashboard with visualizations. ",
        SearchKey:
          "- 6 Migration - Snowball : To move data from storage to cloud. - DMS : Database Migration service Can change DB type (Ey: Oracle to Aurora) - SMS : Server Migration Service (for VMWare migration) 7 Analytics - Athena : Allows to run SQL queries on 53 - EMR : Elastic Map Reduce (for BigData) uses to process large amount of data (Ex: log analysis / web indexing) Uses Hadoop / Apache spark / Flunk - Cloud search : Fully managed by AWS - Elastic Search : Managed by Open source services - Kinesis : Streaming & analyzing real time data (Ex: Financial markets / sentimental analysis / sells social media feed analysis ) - Data Pipeline : Allow to move data from one place to another (Ex: 53 to Dynmo DB or vise versa) - Quick Site: Business Analysis tool Dashboard with visualizations. ",
        Page: 1,
      },
      {
        BlockType: "LINE",
        Confidence: 89.527099609375,
        Text: "-",
        Geometry: {
          BoundingBox: {
            Width: 0.03956318646669388,
            Height: 0.002464680001139641,
            Left: 0.6012630462646484,
            Top: 0.001324369222857058,
          },
          Polygon: [
            {
              X: 0.6012630462646484,
              Y: 0.001324369222857058,
            },
            {
              X: 0.6408259868621826,
              Y: 0.0013255070662125945,
            },
            {
              X: 0.6408262252807617,
              Y: 0.003789049107581377,
            },
            {
              X: 0.6012632250785828,
              Y: 0.003787907538935542,
            },
          ],
        },
        Id: "9a131581-e534-4046-9bc9-6e245a0f43b0",
        Relationships: [
          {
            Type: "CHILD",
            Ids: ["c2b8e186-10d9-4b46-b84c-948eaa86fb09"],
          },
        ],
        Page: 1,
        childText: "- ",
        SearchKey: "-",
      },
      {
        BlockType: "LINE",
        Confidence: 99.36698913574219,
        Text: "6 Migration",
        Geometry: {
          BoundingBox: {
            Width: 0.1943875253200531,
            Height: 0.02871248498558998,
            Left: 0.03650616854429245,
            Top: 0.04602934792637825,
          },
          Polygon: [
            {
              X: 0.03650616854429245,
              Y: 0.04602934792637825,
            },
            {
              X: 0.23089177906513214,
              Y: 0.0460352748632431,
            },
            {
              X: 0.23089370131492615,
              Y: 0.07474183291196823,
            },
            {
              X: 0.03650778532028198,
              Y: 0.07473568618297577,
            },
          ],
        },
        Id: "ca10f567-82af-4f93-8821-e4f3a0478e54",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "800adf89-1dc1-406f-beec-ee76cc9b9819",
              "23b7b2d2-fcc0-4cd1-8bc4-29bf56bdfafe",
            ],
          },
        ],
        Page: 1,
        childText: "6 Migration ",
        SearchKey: "6 Migration",
      },
      {
        BlockType: "LINE",
        Confidence: 97.79879760742188,
        Text: "- Snowball : To move data from storage to cloud.",
        Geometry: {
          BoundingBox: {
            Width: 0.8259292244911194,
            Height: 0.03196403756737709,
            Left: 0.07474470883607864,
            Top: 0.08145563304424286,
          },
          Polygon: [
            {
              X: 0.07474470883607864,
              Y: 0.08145563304424286,
            },
            {
              X: 0.9006706476211548,
              Y: 0.08148196339607239,
            },
            {
              X: 0.9006739258766174,
              Y: 0.11341967433691025,
            },
            {
              X: 0.07474657893180847,
              Y: 0.11339232325553894,
            },
          ],
        },
        Id: "2357797a-9636-4570-926e-341be0818e57",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "6e059c77-c09b-449f-af32-18689323cc7f",
              "d8278203-18f6-4ea0-9c40-a831157a1567",
              "13d8452e-6ea7-48a9-8b14-39f3e52045fb",
              "0d29bb22-ab6a-4e6a-b46f-f84a1ba5d59b",
              "0ab913f6-c0cb-4dce-8b6d-760550d91427",
              "bddae2f7-c257-4d10-b877-feb887a9c9d5",
              "86eb0cca-3c46-47fc-a536-9e9ccd5ccb97",
              "1279c5f2-5bc3-4f70-bd3f-b118cd1bce0d",
              "158d2832-7003-4350-861c-46331afe0218",
              "66dad7f6-3ec5-4ec2-afbb-82126c2a1c63",
            ],
          },
        ],
        Page: 1,
        childText: "- Snowball : To move data from storage to cloud. ",
        SearchKey: "- Snowball : To move data from storage to cloud.",
      },
      {
        BlockType: "LINE",
        Confidence: 97.24757385253906,
        Text: "- DMS : Database Migration service",
        Geometry: {
          BoundingBox: {
            Width: 0.5817592740058899,
            Height: 0.02736186608672142,
            Left: 0.07698340713977814,
            Top: 0.13473829627037048,
          },
          Polygon: [
            {
              X: 0.07698340713977814,
              Y: 0.13473829627037048,
            },
            {
              X: 0.658740222454071,
              Y: 0.13475804030895233,
            },
            {
              X: 0.6587426662445068,
              Y: 0.1621001660823822,
            },
            {
              X: 0.07698500901460648,
              Y: 0.1620797961950302,
            },
          ],
        },
        Id: "98403bd0-b750-4dac-a80f-2b868fcb88e5",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "3dc847bd-4b10-4b5d-b50d-45b9e35982f4",
              "32280a9c-c08d-4507-85fe-a5e990c60f75",
              "74eea05f-b6a8-41ed-88e0-38b43e8d7632",
              "02b7e1f2-fa46-42ba-af22-61f6389aab67",
              "34da2858-9563-4b87-8650-9d10b831ab62",
              "24e6d2c5-e8bb-450d-8ce2-fd1888d501d2",
            ],
          },
        ],
        Page: 1,
        childText: "- DMS : Database Migration service ",
        SearchKey: "- DMS : Database Migration service",
      },
      {
        BlockType: "LINE",
        Confidence: 93.24942779541016,
        Text: "Can change DB type (Ey: Oracle to Aurora)",
        Geometry: {
          BoundingBox: {
            Width: 0.6966196298599243,
            Height: 0.043546244502067566,
            Left: 0.2148621827363968,
            Top: 0.16208598017692566,
          },
          Polygon: [
            {
              X: 0.2148621827363968,
              Y: 0.16208598017692566,
            },
            {
              X: 0.9114773273468018,
              Y: 0.1621103733778,
            },
            {
              X: 0.9114817976951599,
              Y: 0.20563222467899323,
            },
            {
              X: 0.2148650586605072,
              Y: 0.20560665428638458,
            },
          ],
        },
        Id: "eac1bb6b-b1ae-4a88-a099-665bd5430c15",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "9ef8f113-3b50-4c4d-8e61-d7ecf8db0508",
              "92ae797f-5f61-4d8a-a601-43ba6795d16d",
              "fb0fc5db-d2ec-40ec-81b5-da144451b671",
              "c262c317-8b87-465a-b8c8-20527d9ad2bf",
              "48162ea5-9e1a-4a9e-9f2d-235471f980b5",
              "3d51494c-2a5b-4473-a4e3-a6df5aa6d3cd",
              "ec193ecd-8f99-4e1f-b40a-8ef9a0472b44",
              "68079e55-3c7f-48d4-978d-5b6e541e2d71",
            ],
          },
        ],
        Page: 1,
        childText: "Can change DB type (Ey: Oracle to Aurora) ",
        SearchKey: "Can change DB type (Ey: Oracle to Aurora)",
      },
      {
        BlockType: "LINE",
        Confidence: 90.2366943359375,
        Text: "- SMS : Server Migration Service (for VMWare migration)",
        Geometry: {
          BoundingBox: {
            Width: 0.8762667775154114,
            Height: 0.038833629339933395,
            Left: 0.0813143402338028,
            Top: 0.21186406910419464,
          },
          Polygon: [
            {
              X: 0.0813143402338028,
              Y: 0.21186406910419464,
            },
            {
              X: 0.9575769901275635,
              Y: 0.21189643442630768,
            },
            {
              X: 0.957581102848053,
              Y: 0.25069770216941833,
            },
            {
              X: 0.08131662011146545,
              Y: 0.25066399574279785,
            },
          ],
        },
        Id: "513115ce-5e73-4976-96bf-6958d5466d01",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "7f7fa0bd-e2e8-442f-8e8b-cc749b5d36df",
              "33b34c21-dd72-4d28-b81b-acf9ed63eaeb",
              "c7e98b78-9bd5-43e4-a1fa-9bcfc95ad440",
              "fb94051f-bf3c-43bc-9bbb-66ab16e070c9",
              "37423265-f06b-440a-971b-ff1dca8d7b72",
              "b49a9985-c59c-4d58-8cfe-be6b7328a0f3",
              "01965155-738b-455d-b331-3c1a4df6e7e1",
              "315b2339-b079-4101-a0e9-3e1d8abf0e1f",
            ],
          },
        ],
        Page: 1,
        childText: "- SMS : Server Migration Service (for VMWare migration) ",
        SearchKey: "- SMS : Server Migration Service (for VMWare migration)",
      },
      {
        BlockType: "LINE",
        Confidence: 99.36421203613281,
        Text: "7",
        Geometry: {
          BoundingBox: {
            Width: 0.015774589031934738,
            Height: 0.015840863808989525,
            Left: 0.037501271814107895,
            Top: 0.3219274580478668,
          },
          Polygon: [
            {
              X: 0.037501271814107895,
              Y: 0.3219274580478668,
            },
            {
              X: 0.05327495560050011,
              Y: 0.32192811369895935,
            },
            {
              X: 0.05327586084604263,
              Y: 0.3377683162689209,
            },
            {
              X: 0.037502165883779526,
              Y: 0.33776766061782837,
            },
          ],
        },
        Id: "56b311d2-18bb-4d4d-b8ef-4ec59ba48286",
        Relationships: [
          {
            Type: "CHILD",
            Ids: ["2843bf93-1e21-42ee-aeec-896d454c25aa"],
          },
        ],
        Page: 1,
        childText: "7 ",
        SearchKey: "7",
      },
      {
        BlockType: "LINE",
        Confidence: 99.35994720458984,
        Text: "Analytics",
        Geometry: {
          BoundingBox: {
            Width: 0.14177574217319489,
            Height: 0.03154323250055313,
            Left: 0.08284253627061844,
            Top: 0.31320199370384216,
          },
          Polygon: [
            {
              X: 0.08284253627061844,
              Y: 0.31320199370384216,
            },
            {
              X: 0.2246161848306656,
              Y: 0.3132077753543854,
            },
            {
              X: 0.22461828589439392,
              Y: 0.3447452187538147,
            },
            {
              X: 0.08284439891576767,
              Y: 0.34473925828933716,
            },
          ],
        },
        Id: "b1b7e330-a7d8-4a37-ba52-bffd53d18fa1",
        Relationships: [
          {
            Type: "CHILD",
            Ids: ["88193f48-6358-4e86-b85f-9fc63420bb4b"],
          },
        ],
        Page: 1,
        childText: "Analytics ",
        SearchKey: "Analytics",
      },
      {
        BlockType: "LINE",
        Confidence: 95.46881103515625,
        Text: "- Athena : Allows to run SQL queries on 53",
        Geometry: {
          BoundingBox: {
            Width: 0.7293766140937805,
            Height: 0.030057722702622414,
            Left: 0.08725780248641968,
            Top: 0.35819247364997864,
          },
          Polygon: [
            {
              X: 0.08725780248641968,
              Y: 0.35819247364997864,
            },
            {
              X: 0.8166314363479614,
              Y: 0.358223557472229,
            },
            {
              X: 0.8166344165802002,
              Y: 0.3882502019405365,
            },
            {
              X: 0.08725957572460175,
              Y: 0.3882182538509369,
            },
          ],
        },
        Id: "b6bc84ef-7ea1-4c74-b5a5-5796b9e29cc8",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "25e46197-dc92-4142-abf5-461c890f9346",
              "034bd379-e8c2-4020-9cb8-c0bcc16a6365",
              "98b364fe-e795-4bca-aba8-593cbd964a75",
              "e875982a-cbb2-444c-a15a-1ca6d3451982",
              "c0292ab8-96c8-4d4e-9507-21d2aa05ea0d",
              "9bca48c8-f9c8-4a06-9bd2-5acde5f87593",
              "df740752-88d7-45b7-b721-f1fcf87bd045",
              "0df8668f-78da-4f90-b88d-9016937846c0",
              "a8e74203-e44e-4ec1-8a7a-3baa81efe634",
              "a883ffa7-199b-426e-b514-b2be48fe6f5b",
            ],
          },
        ],
        Page: 1,
        childText: "- Athena : Allows to run SQL queries on 53 ",
        SearchKey: "- Athena : Allows to run SQL queries on 53",
      },
      {
        BlockType: "LINE",
        Confidence: 96.21398162841797,
        Text: "- EMR : Elastic Map Reduce (for BigData)",
        Geometry: {
          BoundingBox: {
            Width: 0.726751983165741,
            Height: 0.034325793385505676,
            Left: 0.0888606384396553,
            Top: 0.40004798769950867,
          },
          Polygon: [
            {
              X: 0.0888606384396553,
              Y: 0.40004798769950867,
            },
            {
              X: 0.8156092762947083,
              Y: 0.400080144405365,
            },
            {
              X: 0.8156126141548157,
              Y: 0.43437376618385315,
            },
            {
              X: 0.08886266499757767,
              Y: 0.4343406558036804,
            },
          ],
        },
        Id: "e1a9c3f1-27ef-407d-a0b4-7121835493c1",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "655f66dc-804d-41a3-af4d-45d00ac4599b",
              "a2eb7dbf-6837-4704-8eb3-49400c1df43e",
              "0c015fd7-106c-482c-810d-dca07ca348ff",
              "7e1b25c7-c161-461e-b639-ab33d514105f",
              "c2eb2140-0826-4cb1-a80e-dd6e359b3308",
              "23c6ca51-9505-463e-8836-5f1bfea0cf52",
              "c007fb01-9485-4968-8c19-6be99f1e1de1",
            ],
          },
        ],
        Page: 1,
        childText: "- EMR : Elastic Map Reduce (for BigData) ",
        SearchKey: "- EMR : Elastic Map Reduce (for BigData)",
      },
      {
        BlockType: "LINE",
        Confidence: 96.78595733642578,
        Text: "uses to process large amount of data",
        Geometry: {
          BoundingBox: {
            Width: 0.6094339489936829,
            Height: 0.02599196881055832,
            Left: 0.23859903216362,
            Top: 0.45276767015457153,
          },
          Polygon: [
            {
              X: 0.23859903216362,
              Y: 0.45276767015457153,
            },
            {
              X: 0.8480303883552551,
              Y: 0.4527958929538727,
            },
            {
              X: 0.8480330109596252,
              Y: 0.47875964641571045,
            },
            {
              X: 0.23860077559947968,
              Y: 0.47873082756996155,
            },
          ],
        },
        Id: "bffb4b8d-c003-4bb4-8eca-c507746badb8",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "97ff8eda-9a69-4f9b-a54b-470aae3feebd",
              "d08052c8-21aa-426f-9bfb-7e34db20a36a",
              "105b8801-6893-4a18-9c25-53d254c46459",
              "86d0ffc8-6e6c-4ad0-820d-0e70fdee6c02",
              "f27acbb9-b227-4058-8c80-e7f860007698",
              "6478f05c-90b7-43b9-bc76-1c854dffbfe3",
              "c97a44bf-c318-48ea-ab37-db99fe2850f3",
            ],
          },
        ],
        Page: 1,
        childText: "uses to process large amount of data ",
        SearchKey: "uses to process large amount of data",
      },
      {
        BlockType: "LINE",
        Confidence: 96.07435607910156,
        Text: "(Ex: log analysis / web indexing)",
        Geometry: {
          BoundingBox: {
            Width: 0.5229436159133911,
            Height: 0.038214799016714096,
            Left: 0.2357768714427948,
            Top: 0.48301416635513306,
          },
          Polygon: [
            {
              X: 0.2357768714427948,
              Y: 0.48301416635513306,
            },
            {
              X: 0.7587168216705322,
              Y: 0.483038991689682,
            },
            {
              X: 0.7587204575538635,
              Y: 0.5212289690971375,
            },
            {
              X: 0.23577943444252014,
              Y: 0.521203339099884,
            },
          ],
        },
        Id: "38b6b57a-de45-4726-9e68-e65395b1a3e3",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "89865749-0b0f-4d59-9942-ca38b70f5f22",
              "b71436b2-87ac-4bbe-947c-a02bc6a578ad",
              "798d9b0c-f0ce-49ce-bc73-53197b54b64d",
              "15d07835-092c-40fe-b14f-d0231be513c2",
              "7dd81104-3a90-4399-803c-159657c241d3",
              "7a5760e3-0a79-45b6-b499-a43bc944c19f",
            ],
          },
        ],
        Page: 1,
        childText: "(Ex: log analysis / web indexing) ",
        SearchKey: "(Ex: log analysis / web indexing)",
      },
      {
        BlockType: "LINE",
        Confidence: 96.15975189208984,
        Text: "Uses Hadoop / Apache spark / Flunk",
        Geometry: {
          BoundingBox: {
            Width: 0.5873170495033264,
            Height: 0.0317351259291172,
            Left: 0.2412998229265213,
            Top: 0.5352779030799866,
          },
          Polygon: [
            {
              X: 0.2412998229265213,
              Y: 0.5352779030799866,
            },
            {
              X: 0.8286137580871582,
              Y: 0.535306990146637,
            },
            {
              X: 0.8286168575286865,
              Y: 0.5670130252838135,
            },
            {
              X: 0.24130195379257202,
              Y: 0.5669832229614258,
            },
          ],
        },
        Id: "d9e4b73a-4d57-494f-915c-32de20edc9f5",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "59031bb3-d5bc-4ef3-8007-ec9f77bb9445",
              "d67a835c-f494-4160-ac7b-fdf6561e1bba",
              "025113f4-4a48-4128-9fc3-57c506793073",
              "e710ca54-55e4-497a-8502-50d82214ebca",
              "48b1fa97-6847-4c8c-a11f-e06a34bc9084",
              "cbc3cfba-e7c5-40cb-b4ab-313e6aaf7df6",
              "e7399944-3edc-4e6f-a429-9026361271ba",
            ],
          },
        ],
        Page: 1,
        childText: "Uses Hadoop / Apache spark / Flunk ",
        SearchKey: "Uses Hadoop / Apache spark / Flunk",
      },
      {
        BlockType: "LINE",
        Confidence: 91.9764633178711,
        Text: "- Cloud search : Fully managed by AWS",
        Geometry: {
          BoundingBox: {
            Width: 0.6243701577186584,
            Height: 0.026712391525506973,
            Left: 0.09326895326375961,
            Top: 0.586902379989624,
          },
          Polygon: [
            {
              X: 0.09326895326375961,
              Y: 0.586902379989624,
            },
            {
              X: 0.7176366448402405,
              Y: 0.5869345664978027,
            },
            {
              X: 0.7176390886306763,
              Y: 0.6136147975921631,
            },
            {
              X: 0.09327054023742676,
              Y: 0.6135819554328918,
            },
          ],
        },
        Id: "edccd2e5-d4e9-4d60-860b-d7cf04f89a16",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "dbeaa7e3-3fbe-443b-bffb-e3ec2fe3beb9",
              "2baa4a1b-6745-443a-bd82-6857325822f5",
              "599be6be-14de-435e-9966-de3157af4353",
              "74f7bb1c-441f-4048-8266-5c9daabdbe69",
              "55095a70-a373-45fe-b94f-d8e2d580411a",
              "6e3462ac-9418-4ef5-9411-d58f9c98d0be",
              "5e745951-03c4-411b-bbae-d5553a8f2831",
              "d812a53a-bd73-4939-bde3-1d5cbe3eb3b6",
            ],
          },
        ],
        Page: 1,
        childText: "- Cloud search : Fully managed by AWS ",
        SearchKey: "- Cloud search : Fully managed by AWS",
      },
      {
        BlockType: "LINE",
        Confidence: 94.23758697509766,
        Text: "- Elastic Search : Managed by Open source services",
        Geometry: {
          BoundingBox: {
            Width: 0.7549404501914978,
            Height: 0.026551108807325363,
            Left: 0.09925577044487,
            Top: 0.6298413276672363,
          },
          Polygon: [
            {
              X: 0.09925577044487,
              Y: 0.6298413276672363,
            },
            {
              X: 0.8541935682296753,
              Y: 0.6298815011978149,
            },
            {
              X: 0.8541962504386902,
              Y: 0.6563924551010132,
            },
            {
              X: 0.09925735741853714,
              Y: 0.6563515067100525,
            },
          ],
        },
        Id: "8d4c7364-f72c-4369-80d4-bc7ac13eea47",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "acb46a35-399c-4399-a21c-c8309ea4feb0",
              "1faaa57a-14e8-4da0-8a40-9ba868d1f3a5",
              "46f7227e-490d-431c-afd3-c3df73d5b5b6",
              "cba7989f-9c0d-4fac-a6f2-9194a55990a3",
              "ab52aec9-47a7-4508-8878-56a780711731",
              "608f5150-3a5a-4629-b157-8001ec47c201",
              "aa01ce92-aef6-4a5e-9ae6-ab887600fad9",
              "9127c6d5-a774-4456-a6a9-783345618d31",
              "d9911bff-495e-4313-bbf5-b164a949e03c",
            ],
          },
        ],
        Page: 1,
        childText: "- Elastic Search : Managed by Open source services ",
        SearchKey: "- Elastic Search : Managed by Open source services",
      },
      {
        BlockType: "LINE",
        Confidence: 95.91522979736328,
        Text: "- Kinesis : Streaming & analyzing real time data",
        Geometry: {
          BoundingBox: {
            Width: 0.7574664354324341,
            Height: 0.032118529081344604,
            Left: 0.09845543652772903,
            Top: 0.674170970916748,
          },
          Polygon: [
            {
              X: 0.09845543652772903,
              Y: 0.674170970916748,
            },
            {
              X: 0.8559187054634094,
              Y: 0.6742125749588013,
            },
            {
              X: 0.8559218645095825,
              Y: 0.706289529800415,
            },
            {
              X: 0.09845735132694244,
              Y: 0.7062469720840454,
            },
          ],
        },
        Id: "de984a77-3cbb-4839-ac6c-90ffbf5b101f",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "abe84ca3-e56c-4646-81e0-a3e741a50200",
              "6114be78-20a1-4535-a220-ce3e4b7b05c3",
              "347f1af4-b482-4ae3-9a11-a22402cf78e2",
              "14baed97-2f6c-427e-ac2c-9e4e4be29fbd",
              "f052bd65-bf54-4ff0-b3ee-0d0b5fffa3d9",
              "dd9687f7-bd91-4c78-b599-2051b5cce8f3",
              "0e297cd0-278b-48c2-822e-27cb048bd8d1",
              "66f21ad0-4ed5-4059-aca1-d236e7966fb8",
              "d794e0a1-2705-49a5-a2c3-186ff2969a43",
            ],
          },
        ],
        Page: 1,
        childText: "- Kinesis : Streaming & analyzing real time data ",
        SearchKey: "- Kinesis : Streaming & analyzing real time data",
      },
      {
        BlockType: "LINE",
        Confidence: 98.91748809814453,
        Text: "(Ex: Financial markets / sentimental analysis /",
        Geometry: {
          BoundingBox: {
            Width: 0.6310362815856934,
            Height: 0.03679240867495537,
            Left: 0.2690409719944,
            Top: 0.713660717010498,
          },
          Polygon: [
            {
              X: 0.2690409719944,
              Y: 0.713660717010498,
            },
            {
              X: 0.9000735282897949,
              Y: 0.7136963605880737,
            },
            {
              X: 0.9000772833824158,
              Y: 0.7504531741142273,
            },
            {
              X: 0.269043505191803,
              Y: 0.75041663646698,
            },
          ],
        },
        Id: "95fd472a-e54b-43fb-b283-2274d13a12c5",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "b7ce42eb-a466-4ac9-9619-5700d01a22a9",
              "8245fd9c-b777-4ad7-a78b-a6dee6c40eb6",
              "95788019-5de4-47f4-971e-d31b6994a31b",
              "a023f8ab-69f1-4c23-a984-e2dcebcdf789",
              "690b9dfb-5c65-49ca-9089-22befa8e14e6",
              "e4ff5ab0-acfb-4b00-a1f5-cd52f96b9ad5",
              "1dc66576-1cb2-4a73-9832-e1054f182441",
            ],
          },
        ],
        Page: 1,
        childText: "(Ex: Financial markets / sentimental analysis / ",
        SearchKey: "(Ex: Financial markets / sentimental analysis /",
      },
      {
        BlockType: "LINE",
        Confidence: 8.368078231811523,
        Text: "sells",
        Geometry: {
          BoundingBox: {
            Width: 0.043164171278476715,
            Height: 0.016346603631973267,
            Left: 0.0011393865570425987,
            Top: 0.7650715708732605,
          },
          Polygon: [
            {
              X: 0.0011393865570425987,
              Y: 0.7650715708732605,
            },
            {
              X: 0.04430263116955757,
              Y: 0.7650740742683411,
            },
            {
              X: 0.04430355876684189,
              Y: 0.7814181447029114,
            },
            {
              X: 0.0011402773670852184,
              Y: 0.781415581703186,
            },
          ],
        },
        Id: "0db7f0a2-2772-468e-bdf9-f3774ad653ab",
        Relationships: [
          {
            Type: "CHILD",
            Ids: ["1f89d2e6-7e6f-4fc7-a860-f28a0bcd2aa0"],
          },
        ],
        Page: 1,
        childText: "sells ",
        SearchKey: "sells",
      },
      {
        BlockType: "LINE",
        Confidence: 96.46273803710938,
        Text: "social media feed analysis )",
        Geometry: {
          BoundingBox: {
            Width: 0.40825819969177246,
            Height: 0.029905281960964203,
            Left: 0.3410719633102417,
            Top: 0.7555601596832275,
          },
          Polygon: [
            {
              X: 0.3410719633102417,
              Y: 0.7555601596832275,
            },
            {
              X: 0.7493273019790649,
              Y: 0.7555838823318481,
            },
            {
              X: 0.7493301630020142,
              Y: 0.7854654788970947,
            },
            {
              X: 0.3410741090774536,
              Y: 0.7854412794113159,
            },
          ],
        },
        Id: "e49c87cf-3cfd-444b-aaaa-ecdfd04190dd",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "cc3c520b-8318-4ced-81a8-47c84d86b7fd",
              "443c4baa-1964-4df2-8131-9f2c8297a5fd",
              "31579191-c5be-4f9e-a1ca-47dca68bd5bd",
              "591caade-d4d4-4a26-9fd6-e7dcf42a63ad",
              "646939fa-eb9a-4305-a9fe-ac2f6f114c46",
            ],
          },
        ],
        Page: 1,
        childText: "social media feed analysis ) ",
        SearchKey: "social media feed analysis )",
      },
      {
        BlockType: "LINE",
        Confidence: 97.60028839111328,
        Text: "- Data Pipeline : Allow to move data from one place to another",
        Geometry: {
          BoundingBox: {
            Width: 0.8984725475311279,
            Height: 0.03647911921143532,
            Left: 0.09980036318302155,
            Top: 0.8053292036056519,
          },
          Polygon: [
            {
              X: 0.09980036318302155,
              Y: 0.8053292036056519,
            },
            {
              X: 0.9982689619064331,
              Y: 0.8053831458091736,
            },
            {
              X: 0.9982728958129883,
              Y: 0.8418083190917969,
            },
            {
              X: 0.09980253875255585,
              Y: 0.8417531251907349,
            },
          ],
        },
        Id: "22bac7a5-f440-4e3b-a3f4-28e528eaa8ad",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "4d5ce856-4d5f-43a5-bbcd-e3db54d56068",
              "b3eeb5fe-7889-4b1b-9235-cbd67d78de59",
              "626c20be-3623-4557-93b3-51fb96b39e54",
              "8b8eebe7-4a90-4d1c-90e5-781c88295a40",
              "53224204-e25f-4620-991f-28abe8653639",
              "45765edd-bbc9-449c-a3f6-f078c840c670",
              "49df19bc-f98f-497c-b175-9fa8b7655d25",
              "72fe135c-d075-4a23-a4b9-a69df591c6a8",
              "f52fa399-41b2-4a45-b43f-8f93e4d619b8",
              "9fd2daa6-27f8-4c7a-a67c-b305f089bc95",
              "d872f1c1-42b5-4bb8-8ad2-620bed1330ea",
              "54bb00fe-d2f0-4a6f-a378-47c68305376f",
              "72590e44-2fc8-4217-a0db-7642e3055041",
            ],
          },
        ],
        Page: 1,
        childText:
          "- Data Pipeline : Allow to move data from one place to another ",
        SearchKey:
          "- Data Pipeline : Allow to move data from one place to another",
      },
      {
        BlockType: "LINE",
        Confidence: 92.31761932373047,
        Text: "(Ex: 53 to Dynmo DB or vise versa)",
        Geometry: {
          BoundingBox: {
            Width: 0.5373562574386597,
            Height: 0.04327568784356117,
            Left: 0.35831955075263977,
            Top: 0.8449869155883789,
          },
          Polygon: [
            {
              X: 0.35831955075263977,
              Y: 0.8449869155883789,
            },
            {
              X: 0.8956714272499084,
              Y: 0.8450199365615845,
            },
            {
              X: 0.8956758379936218,
              Y: 0.8882625699043274,
            },
            {
              X: 0.35832273960113525,
              Y: 0.8882285952568054,
            },
          ],
        },
        Id: "c225c625-ead1-4a17-8e2a-90ff9de9d000",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "ddac8422-c999-4601-a9b0-a37dcaa35c5c",
              "3910eb00-7640-4f37-8193-4b6a9190df49",
              "4b5c2f87-7cb3-430c-a530-5f0d9e3b149f",
              "f201b271-54d4-4b4b-bc85-ca6f974001b8",
              "41b5d4ea-a0c5-4af4-944b-6f10acc34168",
              "58544467-4c26-403f-990f-668277145766",
              "f6436c31-e568-46a9-abb8-8c6aa611b6f7",
              "a0b4ab3e-5320-4789-8037-89d94e44d220",
            ],
          },
        ],
        Page: 1,
        childText: "(Ex: 53 to Dynmo DB or vise versa) ",
        SearchKey: "(Ex: 53 to Dynmo DB or vise versa)",
      },
      {
        BlockType: "LINE",
        Confidence: 93.9135971069336,
        Text: "- Quick Site: Business Analysis tool",
        Geometry: {
          BoundingBox: {
            Width: 0.5860009789466858,
            Height: 0.036182478070259094,
            Left: 0.09277892857789993,
            Top: 0.8975701332092285,
          },
          Polygon: [
            {
              X: 0.09277892857789993,
              Y: 0.8975701332092285,
            },
            {
              X: 0.6787766218185425,
              Y: 0.8976073861122131,
            },
            {
              X: 0.6787799000740051,
              Y: 0.9337525963783264,
            },
            {
              X: 0.09278107434511185,
              Y: 0.9337145090103149,
            },
          ],
        },
        Id: "11835a26-0758-4fed-946c-dfae02fe1ff2",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "d9c0be6f-e2cc-4324-aad2-e53708d1d7ee",
              "780253f3-5e67-4b16-8128-03369cc089d6",
              "570d1b95-03b5-4788-8961-3ec83f1e620a",
              "47482bf6-7f0b-46bb-9063-99554271ad97",
              "e4eaba2d-256a-4fa8-a549-b0ee0869fabc",
              "098bef1a-5499-4c77-b3ff-4d17d1e50257",
            ],
          },
        ],
        Page: 1,
        childText: "- Quick Site: Business Analysis tool ",
        SearchKey: "- Quick Site: Business Analysis tool",
      },
      {
        BlockType: "LINE",
        Confidence: 97.41900634765625,
        Text: "Dashboard with visualizations.",
        Geometry: {
          BoundingBox: {
            Width: 0.47601860761642456,
            Height: 0.03626478463411331,
            Left: 0.3317278325557709,
            Top: 0.9416582584381104,
          },
          Polygon: [
            {
              X: 0.3317278325557709,
              Y: 0.9416582584381104,
            },
            {
              X: 0.8077428936958313,
              Y: 0.9416893720626831,
            },
            {
              X: 0.8077464699745178,
              Y: 0.9779230356216431,
            },
            {
              X: 0.331730455160141,
              Y: 0.9778913259506226,
            },
          ],
        },
        Id: "c161e452-d648-4fab-83c3-7f2a3f5a66fb",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "60b228ba-1682-41b9-9bfb-947f1a537672",
              "215e9d56-fd2a-44fc-858e-f222eb32eb70",
              "3f6fcc9b-9024-4237-9929-19b1b2aded2c",
            ],
          },
        ],
        Page: 1,
        childText: "Dashboard with visualizations. ",
        SearchKey: "Dashboard with visualizations.",
      },
      {
        BlockType: "WORD",
        Confidence: 89.527099609375,
        Text: "-",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.0395631343126297,
            Height: 0.002464680001139641,
            Left: 0.6012630462646484,
            Top: 0.001324369222857058,
          },
          Polygon: [
            {
              X: 0.6012630462646484,
              Y: 0.001324369222857058,
            },
            {
              X: 0.6408259272575378,
              Y: 0.0013255070662125945,
            },
            {
              X: 0.6408261656761169,
              Y: 0.003789049107581377,
            },
            {
              X: 0.6012632250785828,
              Y: 0.003787907538935542,
            },
          ],
        },
        Id: "c2b8e186-10d9-4b46-b84c-948eaa86fb09",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36691284179688,
        Text: "6",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0144133809953928,
            Height: 0.019319886341691017,
            Left: 0.03650616854429245,
            Top: 0.04602934792637825,
          },
          Polygon: [
            {
              X: 0.03650616854429245,
              Y: 0.04602934792637825,
            },
            {
              X: 0.050918444991111755,
              Y: 0.04602978751063347,
            },
            {
              X: 0.0509195476770401,
              Y: 0.06534923613071442,
            },
            {
              X: 0.0365072563290596,
              Y: 0.065348781645298,
            },
          ],
        },
        Id: "800adf89-1dc1-406f-beec-ee76cc9b9819",
        Page: 1,
        SearchKey: "6",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36707305908203,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1512214094400406,
            Height: 0.028641773387789726,
            Left: 0.07967227697372437,
            Top: 0.046100057661533356,
          },
          Polygon: [
            {
              X: 0.07967227697372437,
              Y: 0.046100057661533356,
            },
            {
              X: 0.23089177906513214,
              Y: 0.04610466957092285,
            },
            {
              X: 0.23089368641376495,
              Y: 0.07474183291196823,
            },
            {
              X: 0.07967395335435867,
              Y: 0.074737049639225,
            },
          ],
        },
        Id: "23b7b2d2-fcc0-4cd1-8bc4-29bf56bdfafe",
        Page: 1,
        SearchKey: "Migration",
      },
      {
        BlockType: "WORD",
        Confidence: 95.58384704589844,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.017842814326286316,
            Height: 0.005050701089203358,
            Left: 0.07474600523710251,
            Top: 0.10367877036333084,
          },
          Polygon: [
            {
              X: 0.07474600523710251,
              Y: 0.10367877036333084,
            },
            {
              X: 0.09258852154016495,
              Y: 0.1036793515086174,
            },
            {
              X: 0.09258881956338882,
              Y: 0.10872946679592133,
            },
            {
              X: 0.07474630326032639,
              Y: 0.10872887820005417,
            },
          ],
        },
        Id: "6e059c77-c09b-449f-af32-18689323cc7f",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 97.96499633789062,
        Text: "Snowball",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13597574830055237,
            Height: 0.019949214532971382,
            Left: 0.10639239102602005,
            Top: 0.09344866126775742,
          },
          Polygon: [
            {
              X: 0.10639239102602005,
              Y: 0.09344866126775742,
            },
            {
              X: 0.24236679077148438,
              Y: 0.0934530571103096,
            },
            {
              X: 0.24236813187599182,
              Y: 0.11339787393808365,
            },
            {
              X: 0.10639359056949615,
              Y: 0.1133933737874031,
            },
          ],
        },
        Id: "d8278203-18f6-4ea0-9c40-a831157a1567",
        Page: 1,
        SearchKey: "Snowball",
      },
      {
        BlockType: "WORD",
        Confidence: 98.52560424804688,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.008921101689338684,
            Height: 0.016083290800452232,
            Left: 0.265969455242157,
            Top: 0.09700118750333786,
          },
          Polygon: [
            {
              X: 0.265969455242157,
              Y: 0.09700118750333786,
            },
            {
              X: 0.27488943934440613,
              Y: 0.09700147807598114,
            },
            {
              X: 0.2748905420303345,
              Y: 0.11308447271585464,
            },
            {
              X: 0.2659705579280853,
              Y: 0.11308418214321136,
            },
          ],
        },
        Id: "13d8452e-6ea7-48a9-8b14-39f3e52045fb",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 90.43201446533203,
        Text: "To",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0362279899418354,
            Height: 0.020898928865790367,
            Left: 0.29785868525505066,
            Top: 0.09008654206991196,
          },
          Polygon: [
            {
              X: 0.29785868525505066,
              Y: 0.09008654206991196,
            },
            {
              X: 0.3340851664543152,
              Y: 0.09008770436048508,
            },
            {
              X: 0.33408668637275696,
              Y: 0.11098546534776688,
            },
            {
              X: 0.29786017537117004,
              Y: 0.11098427325487137,
            },
          ],
        },
        Id: "0d29bb22-ab6a-4e6a-b46f-f84a1ba5d59b",
        Page: 1,
        SearchKey: "To",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36079406738281,
        Text: "move",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07511984556913376,
            Height: 0.014019408263266087,
            Left: 0.35798022150993347,
            Top: 0.09700058400630951,
          },
          Polygon: [
            {
              X: 0.35798022150993347,
              Y: 0.09700058400630951,
            },
            {
              X: 0.43309900164604187,
              Y: 0.0970030203461647,
            },
            {
              X: 0.4331000745296478,
              Y: 0.11101999133825302,
            },
            {
              X: 0.35798126459121704,
              Y: 0.11101751029491425,
            },
          ],
        },
        Id: "0ab913f6-c0cb-4dce-8b6d-760550d91427",
        Page: 1,
        SearchKey: "move",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36630249023438,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06980963796377182,
            Height: 0.019372576847672462,
            Left: 0.44811248779296875,
            Top: 0.09030825644731522,
          },
          Polygon: [
            {
              X: 0.44811248779296875,
              Y: 0.09030825644731522,
            },
            {
              X: 0.5179205536842346,
              Y: 0.09031050652265549,
            },
            {
              X: 0.5179221034049988,
              Y: 0.10968083888292313,
            },
            {
              X: 0.4481140077114105,
              Y: 0.10967853665351868,
            },
          ],
        },
        Id: "bddae2f7-c257-4d10-b877-feb887a9c9d5",
        Page: 1,
        SearchKey: "data",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36597442626953,
        Text: "from",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06411484628915787,
            Height: 0.022789331153035164,
            Left: 0.5403602719306946,
            Top: 0.08147047460079193,
          },
          Polygon: [
            {
              X: 0.5403602719306946,
              Y: 0.08147047460079193,
            },
            {
              X: 0.6044731736183167,
              Y: 0.08147252351045609,
            },
            {
              X: 0.6044751405715942,
              Y: 0.10425981134176254,
            },
            {
              X: 0.5403621792793274,
              Y: 0.10425771027803421,
            },
          ],
        },
        Id: "86eb0cca-3c46-47fc-a536-9e9ccd5ccb97",
        Page: 1,
        SearchKey: "from",
      },
      {
        BlockType: "WORD",
        Confidence: 98.76435089111328,
        Text: "storage",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10763804614543915,
            Height: 0.023405633866786957,
            Left: 0.6233913898468018,
            Top: 0.08765319734811783,
          },
          Polygon: [
            {
              X: 0.6233913898468018,
              Y: 0.08765319734811783,
            },
            {
              X: 0.7310272455215454,
              Y: 0.0876566544175148,
            },
            {
              X: 0.7310294508934021,
              Y: 0.11105883121490479,
            },
            {
              X: 0.6233934760093689,
              Y: 0.11105527728796005,
            },
          ],
        },
        Id: "1279c5f2-5bc3-4f70-bd3f-b118cd1bce0d",
        Page: 1,
        SearchKey: "storage",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36675262451172,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03223463520407677,
            Height: 0.021638665348291397,
            Left: 0.7604470252990723,
            Top: 0.0859646126627922,
          },
          Polygon: [
            {
              X: 0.7604470252990723,
              Y: 0.0859646126627922,
            },
            {
              X: 0.7926795482635498,
              Y: 0.08596564829349518,
            },
            {
              X: 0.7926816344261169,
              Y: 0.1076032817363739,
            },
            {
              X: 0.7604491114616394,
              Y: 0.10760222375392914,
            },
          ],
        },
        Id: "158d2832-7003-4350-861c-46331afe0218",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 99.25738525390625,
        Text: "cloud.",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08629269152879715,
            Height: 0.020718755200505257,
            Left: 0.814380407333374,
            Top: 0.08425784111022949,
          },
          Polygon: [
            {
              X: 0.814380407333374,
              Y: 0.08425784111022949,
            },
            {
              X: 0.9006710052490234,
              Y: 0.08426059782505035,
            },
            {
              X: 0.9006730914115906,
              Y: 0.1049765944480896,
            },
            {
              X: 0.8143824338912964,
              Y: 0.10497377067804337,
            },
          ],
        },
        Id: "66dad7f6-3ec5-4ec2-afbb-82126c2a1c63",
        Page: 1,
        SearchKey: "cloud.",
      },
      {
        BlockType: "WORD",
        Confidence: 97.95343780517578,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.018920982256531715,
            Height: 0.00592699833214283,
            Left: 0.07698414474725723,
            Top: 0.14740034937858582,
          },
          Polygon: [
            {
              X: 0.07698414474725723,
              Y: 0.14740034937858582,
            },
            {
              X: 0.09590477496385574,
              Y: 0.14740100502967834,
            },
            {
              X: 0.0959051251411438,
              Y: 0.1533273607492447,
            },
            {
              X: 0.07698449492454529,
              Y: 0.15332670509815216,
            },
          ],
        },
        Id: "3dc847bd-4b10-4b5d-b50d-45b9e35982f4",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 93.2906723022461,
        Text: "DMS",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07121922075748444,
            Height: 0.02112964540719986,
            Left: 0.11007718741893768,
            Top: 0.13773564994335175,
          },
          Polygon: [
            {
              X: 0.11007718741893768,
              Y: 0.13773564994335175,
            },
            {
              X: 0.18129505217075348,
              Y: 0.13773806393146515,
            },
            {
              X: 0.18129640817642212,
              Y: 0.158865287899971,
            },
            {
              X: 0.11007846146821976,
              Y: 0.15886279940605164,
            },
          ],
        },
        Id: "32280a9c-c08d-4507-85fe-a5e990c60f75",
        Page: 1,
        SearchKey: "DMS",
      },
      {
        BlockType: "WORD",
        Confidence: 96.8197021484375,
        Text: ":",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.00812862440943718,
            Height: 0.014943604357540607,
            Left: 0.18842895328998566,
            Top: 0.14000512659549713,
          },
          Polygon: [
            {
              X: 0.18842895328998566,
              Y: 0.14000512659549713,
            },
            {
              X: 0.19655659794807434,
              Y: 0.14000540971755981,
            },
            {
              X: 0.19655756652355194,
              Y: 0.15494872629642487,
            },
            {
              X: 0.18842990696430206,
              Y: 0.15494844317436218,
            },
          ],
        },
        Id: "74eea05f-b6a8-41ed-88e0-38b43e8d7632",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36674499511719,
        Text: "Database",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14067593216896057,
            Height: 0.02106701210141182,
            Left: 0.21441492438316345,
            Top: 0.13792377710342407,
          },
          Polygon: [
            {
              X: 0.21441492438316345,
              Y: 0.13792377710342407,
            },
            {
              X: 0.35508930683135986,
              Y: 0.1379285752773285,
            },
            {
              X: 0.355090856552124,
              Y: 0.1589907854795456,
            },
            {
              X: 0.21441631019115448,
              Y: 0.15898588299751282,
            },
          ],
        },
        Id: "02b7e1f2-fa46-42ba-af22-61f6389aab67",
        Page: 1,
        SearchKey: "Database",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36705017089844,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15593558549880981,
            Height: 0.025649461895227432,
            Left: 0.3799273371696472,
            Top: 0.13644638657569885,
          },
          Polygon: [
            {
              X: 0.3799273371696472,
              Y: 0.13644638657569885,
            },
            {
              X: 0.5358607769012451,
              Y: 0.13645169138908386,
            },
            {
              X: 0.535862922668457,
              Y: 0.162095844745636,
            },
            {
              X: 0.37992924451828003,
              Y: 0.16209039092063904,
            },
          ],
        },
        Id: "34da2858-9563-4b87-8650-9d10b831ab62",
        Page: 1,
        SearchKey: "Migration",
      },
      {
        BlockType: "WORD",
        Confidence: 96.6878662109375,
        Text: "service",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10442940890789032,
            Height: 0.02154890075325966,
            Left: 0.5543127655982971,
            Top: 0.1347544938325882,
          },
          Polygon: [
            {
              X: 0.5543127655982971,
              Y: 0.1347544938325882,
            },
            {
              X: 0.658740222454071,
              Y: 0.13475804030895233,
            },
            {
              X: 0.6587421298027039,
              Y: 0.15630340576171875,
            },
            {
              X: 0.5543145537376404,
              Y: 0.15629976987838745,
            },
          ],
        },
        Id: "24e6d2c5-e8bb-450d-8ce2-fd1888d501d2",
        Page: 1,
        SearchKey: "service",
      },
      {
        BlockType: "WORD",
        Confidence: 97.06449890136719,
        Text: "Can",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05237218737602234,
            Height: 0.024296103045344353,
            Left: 0.21486324071884155,
            Top: 0.1782226264476776,
          },
          Polygon: [
            {
              X: 0.21486324071884155,
              Y: 0.1782226264476776,
            },
            {
              X: 0.2672337591648102,
              Y: 0.17822448909282684,
            },
            {
              X: 0.2672354280948639,
              Y: 0.20251873135566711,
            },
            {
              X: 0.2148648500442505,
              Y: 0.2025168091058731,
            },
          ],
        },
        Id: "9ef8f113-3b50-4c4d-8e61-d7ecf8db0508",
        Page: 1,
        SearchKey: "Can",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36702728271484,
        Text: "change",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10401846468448639,
            Height: 0.022121533751487732,
            Left: 0.28777626156806946,
            Top: 0.18349163234233856,
          },
          Polygon: [
            {
              X: 0.28777626156806946,
              Y: 0.18349163234233856,
            },
            {
              X: 0.39179307222366333,
              Y: 0.18349535763263702,
            },
            {
              X: 0.39179474115371704,
              Y: 0.2056131660938263,
            },
            {
              X: 0.2877778112888336,
              Y: 0.20560935139656067,
            },
          ],
        },
        Id: "92ae797f-5f61-4d8a-a601-43ba6795d16d",
        Page: 1,
        SearchKey: "change",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36678314208984,
        Text: "DB",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03995325043797493,
            Height: 0.02090463601052761,
            Left: 0.4087636470794678,
            Top: 0.1790245920419693,
          },
          Polygon: [
            {
              X: 0.4087636470794678,
              Y: 0.1790245920419693,
            },
            {
              X: 0.4487152397632599,
              Y: 0.1790260225534439,
            },
            {
              X: 0.4487168788909912,
              Y: 0.19992923736572266,
            },
            {
              X: 0.4087652266025543,
              Y: 0.19992777705192566,
            },
          ],
        },
        Id: "fb0fc5db-d2ec-40ec-81b5-da144451b671",
        Page: 1,
        SearchKey: "DB",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36607360839844,
        Text: "type",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06453950703144073,
            Height: 0.023415347561240196,
            Left: 0.4642351269721985,
            Top: 0.1808594912290573,
          },
          Polygon: [
            {
              X: 0.4642351269721985,
              Y: 0.1808594912290573,
            },
            {
              X: 0.5287727117538452,
              Y: 0.18086178600788116,
            },
            {
              X: 0.528774619102478,
              Y: 0.20427483320236206,
            },
            {
              X: 0.4642369747161865,
              Y: 0.20427246391773224,
            },
          ],
        },
        Id: "c262c317-8b87-465a-b8c8-20527d9ad2bf",
        Page: 1,
        SearchKey: "type",
      },
      {
        BlockType: "WORD",
        Confidence: 81.39337158203125,
        Text: "(Ey:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.059496112167835236,
            Height: 0.030291898176074028,
            Left: 0.5455527305603027,
            Top: 0.1699822098016739,
          },
          Polygon: [
            {
              X: 0.5455527305603027,
              Y: 0.1699822098016739,
            },
            {
              X: 0.6050462126731873,
              Y: 0.16998431086540222,
            },
            {
              X: 0.6050488948822021,
              Y: 0.20027410984039307,
            },
            {
              X: 0.5455552935600281,
              Y: 0.20027193427085876,
            },
          ],
        },
        Id: "48162ea5-9e1a-4a9e-9f2d-235471f980b5",
        Page: 1,
        SearchKey: "(Ey:",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36702728271484,
        Text: "Oracle",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09116754680871964,
            Height: 0.021218160167336464,
            Left: 0.6240507364273071,
            Top: 0.1742444783449173,
          },
          Polygon: [
            {
              X: 0.6240507364273071,
              Y: 0.1742444783449173,
            },
            {
              X: 0.7152162790298462,
              Y: 0.17424771189689636,
            },
            {
              X: 0.7152182459831238,
              Y: 0.19546262919902802,
            },
            {
              X: 0.6240525841712952,
              Y: 0.19545932114124298,
            },
          ],
        },
        Id: "3d51494c-2a5b-4473-a4e3-a6df5aa6d3cd",
        Page: 1,
        SearchKey: "Oracle",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3660888671875,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0322120375931263,
            Height: 0.018319634720683098,
            Left: 0.7357134222984314,
            Top: 0.17584142088890076,
          },
          Polygon: [
            {
              X: 0.7357134222984314,
              Y: 0.17584142088890076,
            },
            {
              X: 0.7679237127304077,
              Y: 0.1758425533771515,
            },
            {
              X: 0.7679254412651062,
              Y: 0.194161057472229,
            },
            {
              X: 0.7357151508331299,
              Y: 0.1941598802804947,
            },
          ],
        },
        Id: "ec193ecd-8f99-4e1f-b40a-8ef9a0472b44",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 70.70457458496094,
        Text: "Aurora)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12025506049394608,
            Height: 0.03536812588572502,
            Left: 0.7912258505821228,
            Top: 0.16210615634918213,
          },
          Polygon: [
            {
              X: 0.7912258505821228,
              Y: 0.16210615634918213,
            },
            {
              X: 0.911477267742157,
              Y: 0.1621103733778,
            },
            {
              X: 0.9114809036254883,
              Y: 0.19747428596019745,
            },
            {
              X: 0.791229248046875,
              Y: 0.19746990501880646,
            },
          ],
        },
        Id: "68079e55-3c7f-48d4-978d-5b6e541e2d71",
        Page: 1,
        SearchKey: "Aurora)",
      },
      {
        BlockType: "WORD",
        Confidence: 88.6254653930664,
        Text: "-",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.016273705288767815,
            Height: 0.005311271175742149,
            Left: 0.08131576329469681,
            Top: 0.23605331778526306,
          },
          Polygon: [
            {
              X: 0.08131576329469681,
              Y: 0.23605331778526306,
            },
            {
              X: 0.0975891500711441,
              Y: 0.236053928732872,
            },
            {
              X: 0.09758946299552917,
              Y: 0.24136458337306976,
            },
            {
              X: 0.08131606876850128,
              Y: 0.24136397242546082,
            },
          ],
        },
        Id: "7f7fa0bd-e2e8-442f-8e8b-cc749b5d36df",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 82.72126770019531,
        Text: "SMS :",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08484523743391037,
            Height: 0.028040770441293716,
            Left: 0.10919098556041718,
            Top: 0.22262756526470184,
          },
          Polygon: [
            {
              X: 0.10919098556041718,
              Y: 0.22262756526470184,
            },
            {
              X: 0.1940343976020813,
              Y: 0.22263073921203613,
            },
            {
              X: 0.19403621554374695,
              Y: 0.25066834688186646,
            },
            {
              X: 0.10919266939163208,
              Y: 0.2506650686264038,
            },
          ],
        },
        Id: "33b34c21-dd72-4d28-b81b-acf9ed63eaeb",
        Page: 1,
        SearchKey: "SMS :",
      },
      {
        BlockType: "WORD",
        Confidence: 78.37787628173828,
        Text: "Server",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09348592162132263,
            Height: 0.020942291244864464,
            Left: 0.21461103856563568,
            Top: 0.22857576608657837,
          },
          Polygon: [
            {
              X: 0.21461103856563568,
              Y: 0.22857576608657837,
            },
            {
              X: 0.3080954849720001,
              Y: 0.22857928276062012,
            },
            {
              X: 0.3080969452857971,
              Y: 0.24951805174350739,
            },
            {
              X: 0.21461240947246552,
              Y: 0.24951446056365967,
            },
          ],
        },
        Id: "c7e98b78-9bd5-43e4-a1fa-9bcfc95ad440",
        Page: 1,
        SearchKey: "Server",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36673736572266,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1336539089679718,
            Height: 0.022712135687470436,
            Left: 0.3361493945121765,
            Top: 0.22760634124279022,
          },
          Polygon: [
            {
              X: 0.3361493945121765,
              Y: 0.22760634124279022,
            },
            {
              X: 0.46980148553848267,
              Y: 0.22761136293411255,
            },
            {
              X: 0.4698033034801483,
              Y: 0.2503184676170349,
            },
            {
              X: 0.33615103363990784,
              Y: 0.25031334161758423,
            },
          ],
        },
        Id: "fb94051f-bf3c-43bc-9bbb-66ab16e070c9",
        Page: 1,
        SearchKey: "Migration",
      },
      {
        BlockType: "WORD",
        Confidence: 75.85208892822266,
        Text: "Service",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09169670939445496,
            Height: 0.023300115019083023,
            Left: 0.4922463893890381,
            Top: 0.2245922088623047,
          },
          Polygon: [
            {
              X: 0.4922463893890381,
              Y: 0.2245922088623047,
            },
            {
              X: 0.5839411020278931,
              Y: 0.22459563612937927,
            },
            {
              X: 0.5839430689811707,
              Y: 0.2478923201560974,
            },
            {
              X: 0.4922482669353485,
              Y: 0.24788880348205566,
            },
          ],
        },
        Id: "37423265-f06b-440a-971b-ff1dca8d7b72",
        Page: 1,
        SearchKey: "Service",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36691284179688,
        Text: "(for",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06029730662703514,
            Height: 0.031986963003873825,
            Left: 0.6025986671447754,
            Top: 0.2118833214044571,
          },
          Polygon: [
            {
              X: 0.6025986671447754,
              Y: 0.2118833214044571,
            },
            {
              X: 0.6628931164741516,
              Y: 0.21188555657863617,
            },
            {
              X: 0.6628959774971008,
              Y: 0.24387028813362122,
            },
            {
              X: 0.6026014089584351,
              Y: 0.24386797845363617,
            },
          ],
        },
        Id: "b49a9985-c59c-4d58-8cfe-be6b7328a0f3",
        Page: 1,
        SearchKey: "(for",
      },
      {
        BlockType: "WORD",
        Confidence: 98.21769714355469,
        Text: "VMWare",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11406353116035461,
            Height: 0.019245412200689316,
            Left: 0.6786783933639526,
            Top: 0.22124409675598145,
          },
          Polygon: [
            {
              X: 0.6786783933639526,
              Y: 0.22124409675598145,
            },
            {
              X: 0.7927400469779968,
              Y: 0.2212483435869217,
            },
            {
              X: 0.7927418947219849,
              Y: 0.24048949778079987,
            },
            {
              X: 0.6786801218986511,
              Y: 0.24048516154289246,
            },
          ],
        },
        Id: "01965155-738b-455d-b331-3c1a4df6e7e1",
        Page: 1,
        SearchKey: "VMWare",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3655014038086,
        Text: "migration)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14641551673412323,
            Height: 0.03159279376268387,
            Left: 0.8111650943756104,
            Top: 0.2146216481924057,
          },
          Polygon: [
            {
              X: 0.8111650943756104,
              Y: 0.2146216481924057,
            },
            {
              X: 0.9575772881507874,
              Y: 0.21462707221508026,
            },
            {
              X: 0.9575806260108948,
              Y: 0.24621444940567017,
            },
            {
              X: 0.8111681938171387,
              Y: 0.24620884656906128,
            },
          ],
        },
        Id: "315b2339-b079-4101-a0e9-3e1d8abf0e1f",
        Page: 1,
        SearchKey: "migration)",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36421203613281,
        Text: "7",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.015774589031934738,
            Height: 0.015840871259570122,
            Left: 0.037501271814107895,
            Top: 0.3219274580478668,
          },
          Polygon: [
            {
              X: 0.037501271814107895,
              Y: 0.3219274580478668,
            },
            {
              X: 0.05327495560050011,
              Y: 0.32192811369895935,
            },
            {
              X: 0.05327586084604263,
              Y: 0.3377683162689209,
            },
            {
              X: 0.037502165883779526,
              Y: 0.33776766061782837,
            },
          ],
        },
        Id: "2843bf93-1e21-42ee-aeec-896d454c25aa",
        Page: 1,
        SearchKey: "7",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35994720458984,
        Text: "Analytics",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14177575707435608,
            Height: 0.03154322877526283,
            Left: 0.08284253627061844,
            Top: 0.31320199370384216,
          },
          Polygon: [
            {
              X: 0.08284253627061844,
              Y: 0.31320199370384216,
            },
            {
              X: 0.22461621463298798,
              Y: 0.3132077753543854,
            },
            {
              X: 0.22461830079555511,
              Y: 0.3447452187538147,
            },
            {
              X: 0.08284439891576767,
              Y: 0.34473925828933716,
            },
          ],
        },
        Id: "88193f48-6358-4e86-b85f-9fc63420bb4b",
        Page: 1,
        SearchKey: "Analytics",
      },
      {
        BlockType: "WORD",
        Confidence: 99.11217498779297,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.015822920948266983,
            Height: 0.005028668325394392,
            Left: 0.08725860714912415,
            Top: 0.37180015444755554,
          },
          Polygon: [
            {
              X: 0.08725860714912415,
              Y: 0.37180015444755554,
            },
            {
              X: 0.10308122634887695,
              Y: 0.37180083990097046,
            },
            {
              X: 0.10308152437210083,
              Y: 0.3768288195133209,
            },
            {
              X: 0.08725890517234802,
              Y: 0.376828134059906,
            },
          ],
        },
        Id: "25e46197-dc92-4142-abf5-461c890f9346",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 97.4503173828125,
        Text: "Athena",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14049571752548218,
            Height: 0.024818792939186096,
            Left: 0.11725955456495285,
            Top: 0.36175301671028137,
          },
          Polygon: [
            {
              X: 0.11725955456495285,
              Y: 0.36175301671028137,
            },
            {
              X: 0.2577535808086395,
              Y: 0.3617590069770813,
            },
            {
              X: 0.2577552795410156,
              Y: 0.3865717947483063,
            },
            {
              X: 0.11726105958223343,
              Y: 0.3865656554698944,
            },
          ],
        },
        Id: "034bd379-e8c2-4020-9cb8-c0bcc16a6365",
        Page: 1,
        SearchKey: "Athena",
      },
      {
        BlockType: "WORD",
        Confidence: 86.44916534423828,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.005026354920119047,
            Height: 0.012586052529513836,
            Left: 0.2578108608722687,
            Top: 0.3692288398742676,
          },
          Polygon: [
            {
              X: 0.2578108608722687,
              Y: 0.3692288398742676,
            },
            {
              X: 0.2628363370895386,
              Y: 0.3692290484905243,
            },
            {
              X: 0.2628372013568878,
              Y: 0.3818148970603943,
            },
            {
              X: 0.2578117251396179,
              Y: 0.3818146884441376,
            },
          ],
        },
        Id: "98b364fe-e795-4bca-aba8-593cbd964a75",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36668395996094,
        Text: "Allows",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08556284010410309,
            Height: 0.021168561652302742,
            Left: 0.29443448781967163,
            Top: 0.36167821288108826,
          },
          Polygon: [
            {
              X: 0.29443448781967163,
              Y: 0.36167821288108826,
            },
            {
              X: 0.37999576330184937,
              Y: 0.36168187856674194,
            },
            {
              X: 0.3799973428249359,
              Y: 0.38284677267074585,
            },
            {
              X: 0.294435977935791,
              Y: 0.3828430473804474,
            },
          ],
        },
        Id: "e875982a-cbb2-444c-a15a-1ca6d3451982",
        Page: 1,
        SearchKey: "Allows",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36578369140625,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.023773686960339546,
            Height: 0.01757454127073288,
            Left: 0.40008097887039185,
            Top: 0.36505571007728577,
          },
          Polygon: [
            {
              X: 0.40008097887039185,
              Y: 0.36505571007728577,
            },
            {
              X: 0.4238533079624176,
              Y: 0.36505675315856934,
            },
            {
              X: 0.42385467886924744,
              Y: 0.38263025879859924,
            },
            {
              X: 0.4000823199748993,
              Y: 0.3826292157173157,
            },
          ],
        },
        Id: "c0292ab8-96c8-4d4e-9507-21d2aa05ea0d",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36589813232422,
        Text: "run",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.049107760190963745,
            Height: 0.013524905778467655,
            Left: 0.44172900915145874,
            Top: 0.3689410984516144,
          },
          Polygon: [
            {
              X: 0.44172900915145874,
              Y: 0.3689410984516144,
            },
            {
              X: 0.49083566665649414,
              Y: 0.3689432144165039,
            },
            {
              X: 0.4908367693424225,
              Y: 0.38246601819992065,
            },
            {
              X: 0.4417300522327423,
              Y: 0.38246387243270874,
            },
          ],
        },
        Id: "9bca48c8-f9c8-4a06-9bd2-5acde5f87593",
        Page: 1,
        SearchKey: "run",
      },
      {
        BlockType: "WORD",
        Confidence: 84.2906265258789,
        Text: "SQL",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06015726551413536,
            Height: 0.02413664199411869,
            Left: 0.5129727125167847,
            Top: 0.35821062326431274,
          },
          Polygon: [
            {
              X: 0.5129727125167847,
              Y: 0.35821062326431274,
            },
            {
              X: 0.5731279253959656,
              Y: 0.3582131862640381,
            },
            {
              X: 0.5731300115585327,
              Y: 0.3823472559452057,
            },
            {
              X: 0.512974739074707,
              Y: 0.38234463334083557,
            },
          ],
        },
        Id: "df740752-88d7-45b7-b721-f1fcf87bd045",
        Page: 1,
        SearchKey: "SQL",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3637466430664,
        Text: "queries",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1066327691078186,
            Height: 0.025725511834025383,
            Left: 0.589311420917511,
            Top: 0.36251941323280334,
          },
          Polygon: [
            {
              X: 0.589311420917511,
              Y: 0.36251941323280334,
            },
            {
              X: 0.6959418058395386,
              Y: 0.36252397298812866,
            },
            {
              X: 0.6959441900253296,
              Y: 0.3882449269294739,
            },
            {
              X: 0.5893136262893677,
              Y: 0.388240247964859,
            },
          ],
        },
        Id: "0df8668f-78da-4f90-b88d-9016937846c0",
        Page: 1,
        SearchKey: "queries",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35094451904297,
        Text: "on",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03829124942421913,
            Height: 0.015257026068866253,
            Left: 0.7167595028877258,
            Top: 0.36721938848495483,
          },
          Polygon: [
            {
              X: 0.7167595028877258,
              Y: 0.36721938848495483,
            },
            {
              X: 0.7550492882728577,
              Y: 0.36722105741500854,
            },
            {
              X: 0.755050778388977,
              Y: 0.38247641921043396,
            },
            {
              X: 0.7167609333992004,
              Y: 0.38247475028038025,
            },
          ],
        },
        Id: "a8e74203-e44e-4ec1-8a7a-3baa81efe634",
        Page: 1,
        SearchKey: "on",
      },
      {
        BlockType: "WORD",
        Confidence: 90.57279968261719,
        Text: "53",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.037252333015203476,
            Height: 0.023780303075909615,
            Left: 0.779381513595581,
            Top: 0.3588387668132782,
          },
          Polygon: [
            {
              X: 0.779381513595581,
              Y: 0.3588387668132782,
            },
            {
              X: 0.8166314959526062,
              Y: 0.35884034633636475,
            },
            {
              X: 0.8166338205337524,
              Y: 0.38261905312538147,
            },
            {
              X: 0.7793837785720825,
              Y: 0.38261744379997253,
            },
          ],
        },
        Id: "a883ffa7-199b-426e-b514-b2be48fe6f5b",
        Page: 1,
        SearchKey: "53",
      },
      {
        BlockType: "WORD",
        Confidence: 97.9930648803711,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.016314659267663956,
            Height: 0.005215632263571024,
            Left: 0.0888616070151329,
            Top: 0.4163976013660431,
          },
          Polygon: [
            {
              X: 0.0888616070151329,
              Y: 0.4163976013660431,
            },
            {
              X: 0.10517594963312149,
              Y: 0.4163983464241028,
            },
            {
              X: 0.10517626255750656,
              Y: 0.42161324620246887,
            },
            {
              X: 0.08886191248893738,
              Y: 0.4216125011444092,
            },
          ],
        },
        Id: "655f66dc-804d-41a3-af4d-45d00ac4599b",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 79.11127471923828,
        Text: "EMR :",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1049901470541954,
            Height: 0.02198614738881588,
            Left: 0.10978158563375473,
            Top: 0.40857023000717163,
          },
          Polygon: [
            {
              X: 0.10978158563375473,
              Y: 0.40857023000717163,
            },
            {
              X: 0.21477028727531433,
              Y: 0.4085749089717865,
            },
            {
              X: 0.21477173268795013,
              Y: 0.43055638670921326,
            },
            {
              X: 0.10978291183710098,
              Y: 0.4305516183376312,
            },
          ],
        },
        Id: "a2eb7dbf-6837-4704-8eb3-49400c1df43e",
        Page: 1,
        SearchKey: "EMR :",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36647033691406,
        Text: "Elastic",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09855782240629196,
            Height: 0.021357884630560875,
            Left: 0.2368541806936264,
            Top: 0.4094315469264984,
          },
          Polygon: [
            {
              X: 0.2368541806936264,
              Y: 0.4094315469264984,
            },
            {
              X: 0.3354104459285736,
              Y: 0.4094359576702118,
            },
            {
              X: 0.33541199564933777,
              Y: 0.43078944087028503,
            },
            {
              X: 0.236855611205101,
              Y: 0.4307849407196045,
            },
          ],
        },
        Id: "0c015fd7-106c-482c-810d-dca07ca348ff",
        Page: 1,
        SearchKey: "Elastic",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3609390258789,
        Text: "Map",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06353285908699036,
            Height: 0.024128610268235207,
            Left: 0.35307782888412476,
            Top: 0.410226970911026,
          },
          Polygon: [
            {
              X: 0.35307782888412476,
              Y: 0.410226970911026,
            },
            {
              X: 0.4166088402271271,
              Y: 0.4102298319339752,
            },
            {
              X: 0.4166106879711151,
              Y: 0.43435558676719666,
            },
            {
              X: 0.35307958722114563,
              Y: 0.43435269594192505,
            },
          ],
        },
        Id: "7e1b25c7-c161-461e-b639-ab33d514105f",
        Page: 1,
        SearchKey: "Map",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36673736572266,
        Text: "Reduce",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11053665727376938,
            Height: 0.021181533113121986,
            Left: 0.44224813580513,
            Top: 0.4098150432109833,
          },
          Polygon: [
            {
              X: 0.44224813580513,
              Y: 0.4098150432109833,
            },
            {
              X: 0.5527830123901367,
              Y: 0.40981996059417725,
            },
            {
              X: 0.55278480052948,
              Y: 0.4309965670108795,
            },
            {
              X: 0.4422498047351837,
              Y: 0.4309915602207184,
            },
          ],
        },
        Id: "c2eb2140-0826-4cb1-a80e-dd6e359b3308",
        Page: 1,
        SearchKey: "Reduce",
      },
      {
        BlockType: "WORD",
        Confidence: 99.11243438720703,
        Text: "(for",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06684212386608124,
            Height: 0.03113495744764805,
            Left: 0.5826853513717651,
            Top: 0.40006983280181885,
          },
          Polygon: [
            {
              X: 0.5826853513717651,
              Y: 0.40006983280181885,
            },
            {
              X: 0.6495246887207031,
              Y: 0.40007278323173523,
            },
            {
              X: 0.6495274901390076,
              Y: 0.43120479583740234,
            },
            {
              X: 0.58268803358078,
              Y: 0.4312017560005188,
            },
          ],
        },
        Id: "23c6ca51-9505-463e-8836-5f1bfea0cf52",
        Page: 1,
        SearchKey: "(for",
      },
      {
        BlockType: "WORD",
        Confidence: 99.18699645996094,
        Text: "BigData)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1487872153520584,
            Height: 0.0297390203922987,
            Left: 0.6668252348899841,
            Top: 0.4023445248603821,
          },
          Polygon: [
            {
              X: 0.6668252348899841,
              Y: 0.4023445248603821,
            },
            {
              X: 0.8156095147132874,
              Y: 0.40235114097595215,
            },
            {
              X: 0.8156124353408813,
              Y: 0.4320835471153259,
            },
            {
              X: 0.666827917098999,
              Y: 0.4320767819881439,
            },
          ],
        },
        Id: "c007fb01-9485-4968-8c19-6be99f1e1de1",
        Page: 1,
        SearchKey: "BigData)",
      },
      {
        BlockType: "WORD",
        Confidence: 82.92711639404297,
        Text: "uses",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.058892302215099335,
            Height: 0.01802382618188858,
            Left: 0.23859913647174835,
            Top: 0.4542536437511444,
          },
          Polygon: [
            {
              X: 0.23859913647174835,
              Y: 0.4542536437511444,
            },
            {
              X: 0.2974901497364044,
              Y: 0.4542563855648041,
            },
            {
              X: 0.2974914312362671,
              Y: 0.4722774624824524,
            },
            {
              X: 0.23860034346580505,
              Y: 0.47227469086647034,
            },
          ],
        },
        Id: "97ff8eda-9a69-4f9b-a54b-470aae3feebd",
        Page: 1,
        SearchKey: "uses",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36592864990234,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.025824150070548058,
            Height: 0.015869783237576485,
            Left: 0.3087843358516693,
            Top: 0.45685121417045593,
          },
          Polygon: [
            {
              X: 0.3087843358516693,
              Y: 0.45685121417045593,
            },
            {
              X: 0.33460733294487,
              Y: 0.45685240626335144,
            },
            {
              X: 0.3346084654331207,
              Y: 0.4727209806442261,
            },
            {
              X: 0.30878543853759766,
              Y: 0.47271978855133057,
            },
          ],
        },
        Id: "d08052c8-21aa-426f-9bfb-7e34db20a36a",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 97.74197387695312,
        Text: "process",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09517498314380646,
            Height: 0.017670048400759697,
            Left: 0.35653427243232727,
            Top: 0.45850127935409546,
          },
          Polygon: [
            {
              X: 0.35653427243232727,
              Y: 0.45850127935409546,
            },
            {
              X: 0.4517078697681427,
              Y: 0.4585057199001312,
            },
            {
              X: 0.45170924067497253,
              Y: 0.4761713445186615,
            },
            {
              X: 0.35653555393218994,
              Y: 0.47616684436798096,
            },
          ],
        },
        Id: "105b8801-6893-4a18-9c25-53d254c46459",
        Page: 1,
        SearchKey: "process",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36671447753906,
        Text: "large",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07631875574588776,
            Height: 0.022397583350539207,
            Left: 0.4730614721775055,
            Top: 0.45399022102355957,
          },
          Polygon: [
            {
              X: 0.4730614721775055,
              Y: 0.45399022102355957,
            },
            {
              X: 0.5493783354759216,
              Y: 0.4539937376976013,
            },
            {
              X: 0.5493802428245544,
              Y: 0.47638779878616333,
            },
            {
              X: 0.47306326031684875,
              Y: 0.4763841927051544,
            },
          ],
        },
        Id: "86d0ffc8-6e6c-4ad0-820d-0e70fdee6c02",
        Page: 1,
        SearchKey: "large",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36674499511719,
        Text: "amount",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12535062432289124,
            Height: 0.017554329708218575,
            Left: 0.5711461305618286,
            Top: 0.45441797375679016,
          },
          Polygon: [
            {
              X: 0.5711461305618286,
              Y: 0.45441797375679016,
            },
            {
              X: 0.6964951157569885,
              Y: 0.45442378520965576,
            },
            {
              X: 0.6964967250823975,
              Y: 0.4719722867012024,
            },
            {
              X: 0.571147620677948,
              Y: 0.47196638584136963,
            },
          ],
        },
        Id: "f27acbb9-b227-4058-8c80-e7f860007698",
        Page: 1,
        SearchKey: "amount",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36644744873047,
        Text: "of",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03100580722093582,
            Height: 0.025895049795508385,
            Left: 0.7176347374916077,
            Top: 0.45285990834236145,
          },
          Polygon: [
            {
              X: 0.7176347374916077,
              Y: 0.45285990834236145,
            },
            {
              X: 0.7486380934715271,
              Y: 0.45286133885383606,
            },
            {
              X: 0.7486405372619629,
              Y: 0.4787549674510956,
            },
            {
              X: 0.7176371216773987,
              Y: 0.4787534773349762,
            },
          ],
        },
        Id: "6478f05c-90b7-43b9-bc76-1c854dffbfe3",
        Page: 1,
        SearchKey: "of",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36679077148438,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07658811658620834,
            Height: 0.02184630185365677,
            Left: 0.7714444994926453,
            Top: 0.45279234647750854,
          },
          Polygon: [
            {
              X: 0.7714444994926453,
              Y: 0.45279234647750854,
            },
            {
              X: 0.8480304479598999,
              Y: 0.4527958929538727,
            },
            {
              X: 0.8480325937271118,
              Y: 0.4746386706829071,
            },
            {
              X: 0.7714465856552124,
              Y: 0.4746350347995758,
            },
          ],
        },
        Id: "c97a44bf-c318-48ea-ab37-db99fe2850f3",
        Page: 1,
        SearchKey: "data",
      },
      {
        BlockType: "WORD",
        Confidence: 90.7106704711914,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06525219231843948,
            Height: 0.029151499271392822,
            Left: 0.2357768714427948,
            Top: 0.48301416635513306,
          },
          Polygon: [
            {
              X: 0.2357768714427948,
              Y: 0.48301416635513306,
            },
            {
              X: 0.30102699995040894,
              Y: 0.4830172657966614,
            },
            {
              X: 0.3010290563106537,
              Y: 0.5121656656265259,
            },
            {
              X: 0.2357788234949112,
              Y: 0.5121625065803528,
            },
          ],
        },
        Id: "89865749-0b0f-4d59-9942-ca38b70f5f22",
        Page: 1,
        SearchKey: "(Ex:",
      },
      {
        BlockType: "WORD",
        Confidence: 99.364013671875,
        Text: "log",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0412207767367363,
            Height: 0.021902456879615784,
            Left: 0.32542863488197327,
            Top: 0.49241918325424194,
          },
          Polygon: [
            {
              X: 0.32542863488197327,
              Y: 0.49241918325424194,
            },
            {
              X: 0.36664777994155884,
              Y: 0.4924211800098419,
            },
            {
              X: 0.36664941906929016,
              Y: 0.5143216252326965,
            },
            {
              X: 0.3254302144050598,
              Y: 0.514319658279419,
            },
          ],
        },
        Id: "b71436b2-87ac-4bbe-947c-a02bc6a578ad",
        Page: 1,
        SearchKey: "log",
      },
      {
        BlockType: "WORD",
        Confidence: 98.97367095947266,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1087682694196701,
            Height: 0.021577704697847366,
            Left: 0.3837759494781494,
            Top: 0.49260368943214417,
          },
          Polygon: [
            {
              X: 0.3837759494781494,
              Y: 0.49260368943214417,
            },
            {
              X: 0.49254247546195984,
              Y: 0.492608904838562,
            },
            {
              X: 0.4925442039966583,
              Y: 0.5141814351081848,
            },
            {
              X: 0.38377755880355835,
              Y: 0.5141761302947998,
            },
          ],
        },
        Id: "798d9b0c-f0ce-49ce-bc73-53197b54b64d",
        Page: 1,
        SearchKey: "analysis",
      },
      {
        BlockType: "WORD",
        Confidence: 92.34883117675781,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.023051749914884567,
            Height: 0.0281971525400877,
            Left: 0.5169048309326172,
            Top: 0.4856773614883423,
          },
          Polygon: [
            {
              X: 0.5169048309326172,
              Y: 0.4856773614883423,
            },
            {
              X: 0.5399542450904846,
              Y: 0.48567846417427063,
            },
            {
              X: 0.5399565696716309,
              Y: 0.5138745307922363,
            },
            {
              X: 0.5169071555137634,
              Y: 0.5138733983039856,
            },
          ],
        },
        Id: "15d07835-092c-40fe-b14f-d0231be513c2",
        Page: 1,
        SearchKey: "/",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35224151611328,
        Text: "web",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05342882499098778,
            Height: 0.014926246367394924,
            Left: 0.548843502998352,
            Top: 0.49672824144363403,
          },
          Polygon: [
            {
              X: 0.548843502998352,
              Y: 0.49672824144363403,
            },
            {
              X: 0.6022710204124451,
              Y: 0.4967308044433594,
            },
            {
              X: 0.6022723317146301,
              Y: 0.5116544961929321,
            },
            {
              X: 0.5488447546958923,
              Y: 0.511651873588562,
            },
          ],
        },
        Id: "7dd81104-3a90-4399-803c-159657c241d3",
        Page: 1,
        SearchKey: "web",
      },
      {
        BlockType: "WORD",
        Confidence: 95.69669342041016,
        Text: "indexing)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13694535195827484,
            Height: 0.03147680684924126,
            Left: 0.6217751502990723,
            Top: 0.4897521436214447,
          },
          Polygon: [
            {
              X: 0.6217751502990723,
              Y: 0.4897521436214447,
            },
            {
              X: 0.7587175369262695,
              Y: 0.4897586703300476,
            },
            {
              X: 0.7587205171585083,
              Y: 0.5212289690971375,
            },
            {
              X: 0.6217778921127319,
              Y: 0.5212222337722778,
            },
          ],
        },
        Id: "7a5760e3-0a79-45b6-b499-a43bc944c19f",
        Page: 1,
        SearchKey: "indexing)",
      },
      {
        BlockType: "WORD",
        Confidence: 80.09383392333984,
        Text: "Uses",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06550963968038559,
            Height: 0.02010967582464218,
            Left: 0.2413002848625183,
            Top: 0.5421903133392334,
          },
          Polygon: [
            {
              X: 0.2413002848625183,
              Y: 0.5421903133392334,
            },
            {
              X: 0.3068085014820099,
              Y: 0.542193591594696,
            },
            {
              X: 0.3068099319934845,
              Y: 0.5623000264167786,
            },
            {
              X: 0.24130164086818695,
              Y: 0.5622966885566711,
            },
          ],
        },
        Id: "59031bb3-d5bc-4ef3-8007-ec9f77bb9445",
        Page: 1,
        SearchKey: "Uses",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36418151855469,
        Text: "Hadoop",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10356476902961731,
            Height: 0.023386290296912193,
            Left: 0.33238476514816284,
            Top: 0.541085958480835,
          },
          Polygon: [
            {
              X: 0.33238476514816284,
              Y: 0.541085958480835,
            },
            {
              X: 0.4359477162361145,
              Y: 0.5410910844802856,
            },
            {
              X: 0.43594953417778015,
              Y: 0.5644721984863281,
            },
            {
              X: 0.33238646388053894,
              Y: 0.5644669532775879,
            },
          ],
        },
        Id: "d67a835c-f494-4160-ac7b-fdf6561e1bba",
        Page: 1,
        SearchKey: "Hadoop",
      },
      {
        BlockType: "WORD",
        Confidence: 99.38726806640625,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.02298002690076828,
            Height: 0.028593581169843674,
            Left: 0.4470330476760864,
            Top: 0.5352880954742432,
          },
          Polygon: [
            {
              X: 0.4470330476760864,
              Y: 0.5352880954742432,
            },
            {
              X: 0.47001078724861145,
              Y: 0.5352892279624939,
            },
            {
              X: 0.4700130522251129,
              Y: 0.5638816952705383,
            },
            {
              X: 0.4470352828502655,
              Y: 0.5638805031776428,
            },
          ],
        },
        Id: "025113f4-4a48-4128-9fc3-57c506793073",
        Page: 1,
        SearchKey: "/",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36686706542969,
        Text: "Apache",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10565856099128723,
            Height: 0.026350155472755432,
            Left: 0.47637930512428284,
            Top: 0.5370463728904724,
          },
          Polygon: [
            {
              X: 0.47637930512428284,
              Y: 0.5370463728904724,
            },
            {
              X: 0.5820356011390686,
              Y: 0.5370516180992126,
            },
            {
              X: 0.5820378661155701,
              Y: 0.5633965134620667,
            },
            {
              X: 0.47638142108917236,
              Y: 0.5633911490440369,
            },
          ],
        },
        Id: "e710ca54-55e4-497a-8502-50d82214ebca",
        Page: 1,
        SearchKey: "Apache",
      },
      {
        BlockType: "WORD",
        Confidence: 98.695068359375,
        Text: "spark",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08743534982204437,
            Height: 0.02167229726910591,
            Left: 0.5976686477661133,
            Top: 0.5453335046768188,
          },
          Polygon: [
            {
              X: 0.5976686477661133,
              Y: 0.5453335046768188,
            },
            {
              X: 0.6851020455360413,
              Y: 0.5453378558158875,
            },
            {
              X: 0.6851040124893188,
              Y: 0.5670057535171509,
            },
            {
              X: 0.5976704955101013,
              Y: 0.5670013427734375,
            },
          ],
        },
        Id: "48b1fa97-6847-4c8c-a11f-e06a34bc9084",
        Page: 1,
        SearchKey: "spark",
      },
      {
        BlockType: "WORD",
        Confidence: 96.86051940917969,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.016162272542715073,
            Height: 0.025872837752103806,
            Left: 0.7051993012428284,
            Top: 0.539803147315979,
          },
          Polygon: [
            {
              X: 0.7051993012428284,
              Y: 0.539803147315979,
            },
            {
              X: 0.7213591933250427,
              Y: 0.5398039221763611,
            },
            {
              X: 0.7213615775108337,
              Y: 0.5656759738922119,
            },
            {
              X: 0.7052016854286194,
              Y: 0.5656751394271851,
            },
          ],
        },
        Id: "cbc3cfba-e7c5-40cb-b4ab-313e6aaf7df6",
        Page: 1,
        SearchKey: "/",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35050964355469,
        Text: "Flunk",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09893134236335754,
            Height: 0.023346630856394768,
            Left: 0.7296854853630066,
            Top: 0.5431068539619446,
          },
          Polygon: [
            {
              X: 0.7296854853630066,
              Y: 0.5431068539619446,
            },
            {
              X: 0.8286145329475403,
              Y: 0.5431118011474609,
            },
            {
              X: 0.8286167979240417,
              Y: 0.5664535164833069,
            },
            {
              X: 0.7296876311302185,
              Y: 0.566448450088501,
            },
          ],
        },
        Id: "e7399944-3edc-4e6f-a429-9026361271ba",
        Page: 1,
        SearchKey: "Flunk",
      },
      {
        BlockType: "WORD",
        Confidence: 96.6511459350586,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014452491886913776,
            Height: 0.00477548548951745,
            Left: 0.09326952695846558,
            Top: 0.5965137481689453,
          },
          Polygon: [
            {
              X: 0.09326952695846558,
              Y: 0.5965137481689453,
            },
            {
              X: 0.1077217310667038,
              Y: 0.5965145230293274,
            },
            {
              X: 0.10772202163934708,
              Y: 0.6012892723083496,
            },
            {
              X: 0.09326981008052826,
              Y: 0.6012884974479675,
            },
          ],
        },
        Id: "dbeaa7e3-3fbe-443b-bffb-e3ec2fe3beb9",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 98.6129379272461,
        Text: "Cloud",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09444278478622437,
            Height: 0.02134566195309162,
            Left: 0.11136526614427567,
            Top: 0.5869033336639404,
          },
          Polygon: [
            {
              X: 0.11136526614427567,
              Y: 0.5869033336639404,
            },
            {
              X: 0.2058066427707672,
              Y: 0.5869081616401672,
            },
            {
              X: 0.20580804347991943,
              Y: 0.6082490086555481,
            },
            {
              X: 0.11136655509471893,
              Y: 0.6082440614700317,
            },
          ],
        },
        Id: "2baa4a1b-6745-443a-bd82-6857325822f5",
        Page: 1,
        SearchKey: "Cloud",
      },
      {
        BlockType: "WORD",
        Confidence: 58.99711227416992,
        Text: "search",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10225033760070801,
            Height: 0.01908562332391739,
            Left: 0.22548910975456238,
            Top: 0.5874159932136536,
          },
          Polygon: [
            {
              X: 0.22548910975456238,
              Y: 0.5874159932136536,
            },
            {
              X: 0.32773807644844055,
              Y: 0.5874212980270386,
            },
            {
              X: 0.3277394473552704,
              Y: 0.6065016388893127,
            },
            {
              X: 0.22549037635326385,
              Y: 0.606496274471283,
            },
          ],
        },
        Id: "599be6be-14de-435e-9966-de3157af4353",
        Page: 1,
        SearchKey: "search",
      },
      {
        BlockType: "WORD",
        Confidence: 90.49478149414062,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.00769781693816185,
            Height: 0.014406399801373482,
            Left: 0.34494027495384216,
            Top: 0.5903124809265137,
          },
          Polygon: [
            {
              X: 0.34494027495384216,
              Y: 0.5903124809265137,
            },
            {
              X: 0.35263702273368835,
              Y: 0.5903128385543823,
            },
            {
              X: 0.3526380658149719,
              Y: 0.6047188639640808,
            },
            {
              X: 0.34494131803512573,
              Y: 0.6047184467315674,
            },
          ],
        },
        Id: "74f7bb1c-441f-4048-8266-5c9daabdbe69",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 98.63623809814453,
        Text: "Fully",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06838002055883408,
            Height: 0.025140032172203064,
            Left: 0.3728049695491791,
            Top: 0.5876057147979736,
          },
          Polygon: [
            {
              X: 0.3728049695491791,
              Y: 0.5876057147979736,
            },
            {
              X: 0.44118303060531616,
              Y: 0.5876092314720154,
            },
            {
              X: 0.44118496775627136,
              Y: 0.6127457618713379,
            },
            {
              X: 0.3728068172931671,
              Y: 0.6127421259880066,
            },
          ],
        },
        Id: "55095a70-a373-45fe-b94f-d8e2d580411a",
        Page: 1,
        SearchKey: "Fully",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3670654296875,
        Text: "managed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1253708004951477,
            Height: 0.02563169226050377,
            Left: 0.46297338604927063,
            Top: 0.5879762768745422,
          },
          Polygon: [
            {
              X: 0.46297338604927063,
              Y: 0.5879762768745422,
            },
            {
              X: 0.588342010974884,
              Y: 0.5879827737808228,
            },
            {
              X: 0.5883442163467407,
              Y: 0.6136080026626587,
            },
            {
              X: 0.462975412607193,
              Y: 0.6136013865470886,
            },
          ],
        },
        Id: "6e3462ac-9418-4ef5-9411-d58f9c98d0be",
        Page: 1,
        SearchKey: "managed",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36576843261719,
        Text: "by",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.030439317226409912,
            Height: 0.02227691374719143,
            Left: 0.603098452091217,
            Top: 0.5887579917907715,
          },
          Polygon: [
            {
              X: 0.603098452091217,
              Y: 0.5887579917907715,
            },
            {
              X: 0.6335358023643494,
              Y: 0.5887595415115356,
            },
            {
              X: 0.633537769317627,
              Y: 0.6110348701477051,
            },
            {
              X: 0.6031003594398499,
              Y: 0.6110332608222961,
            },
          ],
        },
        Id: "5e745951-03c4-411b-bbae-d5553a8f2831",
        Page: 1,
        SearchKey: "by",
      },
      {
        BlockType: "WORD",
        Confidence: 93.68668365478516,
        Text: "AWS",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05820419266819954,
            Height: 0.023394176736474037,
            Left: 0.6594346761703491,
            Top: 0.5877123475074768,
          },
          Polygon: [
            {
              X: 0.6594346761703491,
              Y: 0.5877123475074768,
            },
            {
              X: 0.7176367044448853,
              Y: 0.5877153873443604,
            },
            {
              X: 0.7176389098167419,
              Y: 0.6111065149307251,
            },
            {
              X: 0.659436821937561,
              Y: 0.6111034750938416,
            },
          ],
        },
        Id: "d812a53a-bd73-4939-bde3-1d5cbe3eb3b6",
        Page: 1,
        SearchKey: "AWS",
      },
      {
        BlockType: "WORD",
        Confidence: 97.3490219116211,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014964240603148937,
            Height: 0.004921835381537676,
            Left: 0.09925634413957596,
            Top: 0.6394633650779724,
          },
          Polygon: [
            {
              X: 0.09925634413957596,
              Y: 0.6394633650779724,
            },
            {
              X: 0.11422029137611389,
              Y: 0.6394641995429993,
            },
            {
              X: 0.11422058939933777,
              Y: 0.6443852186203003,
            },
            {
              X: 0.09925664216279984,
              Y: 0.6443843841552734,
            },
          ],
        },
        Id: "acb46a35-399c-4399-a21c-c8309ea4feb0",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 99.34520721435547,
        Text: "Elastic",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09810284525156021,
            Height: 0.02083446830511093,
            Left: 0.11995916813611984,
            Top: 0.6301476955413818,
          },
          Polygon: [
            {
              X: 0.11995916813611984,
              Y: 0.6301476955413818,
            },
            {
              X: 0.21806064248085022,
              Y: 0.6301528811454773,
            },
            {
              X: 0.21806201338768005,
              Y: 0.650982141494751,
            },
            {
              X: 0.11996044218540192,
              Y: 0.650976836681366,
            },
          ],
        },
        Id: "1faaa57a-14e8-4da0-8a40-9ba868d1f3a5",
        Page: 1,
        SearchKey: "Elastic",
      },
      {
        BlockType: "WORD",
        Confidence: 74.25044250488281,
        Text: "Search",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09271596372127533,
            Height: 0.018679259344935417,
            Left: 0.23242877423763275,
            Top: 0.6316303610801697,
          },
          Polygon: [
            {
              X: 0.23242877423763275,
              Y: 0.6316303610801697,
            },
            {
              X: 0.32514339685440063,
              Y: 0.631635308265686,
            },
            {
              X: 0.3251447379589081,
              Y: 0.6503096222877502,
            },
            {
              X: 0.23243002593517303,
              Y: 0.6503046154975891,
            },
          ],
        },
        Id: "46f7227e-490d-431c-afd3-c3df73d5b5b6",
        Page: 1,
        SearchKey: "Search",
      },
      {
        BlockType: "WORD",
        Confidence: 91.2525863647461,
        Text: ":",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.00668205413967371,
            Height: 0.015831124037504196,
            Left: 0.3423219323158264,
            Top: 0.6347532272338867,
          },
          Polygon: [
            {
              X: 0.3423219323158264,
              Y: 0.6347532272338867,
            },
            {
              X: 0.34900280833244324,
              Y: 0.6347535848617554,
            },
            {
              X: 0.34900397062301636,
              Y: 0.65058434009552,
            },
            {
              X: 0.34232306480407715,
              Y: 0.6505839824676514,
            },
          ],
        },
        Id: "cba7989f-9c0d-4fac-a6f2-9194a55990a3",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 88.55744934082031,
        Text: "Managed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11757498979568481,
            Height: 0.0250734593719244,
            Left: 0.362448513507843,
            Top: 0.6298553347587585,
          },
          Polygon: [
            {
              X: 0.362448513507843,
              Y: 0.6298553347587585,
            },
            {
              X: 0.48002147674560547,
              Y: 0.62986159324646,
            },
            {
              X: 0.48002350330352783,
              Y: 0.6549288034439087,
            },
            {
              X: 0.36245036125183105,
              Y: 0.6549224257469177,
            },
          ],
        },
        Id: "ab52aec9-47a7-4508-8878-56a780711731",
        Page: 1,
        SearchKey: "Managed",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36578369140625,
        Text: "by",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.027480075135827065,
            Height: 0.022061754018068314,
            Left: 0.5001973509788513,
            Top: 0.633423924446106,
          },
          Polygon: [
            {
              X: 0.5001973509788513,
              Y: 0.633423924446106,
            },
            {
              X: 0.5276756286621094,
              Y: 0.6334254145622253,
            },
            {
              X: 0.5276774168014526,
              Y: 0.6554856896400452,
            },
            {
              X: 0.5001991391181946,
              Y: 0.6554841995239258,
            },
          ],
        },
        Id: "608f5150-3a5a-4629-b157-8001ec47c201",
        Page: 1,
        SearchKey: "by",
      },
      {
        BlockType: "WORD",
        Confidence: 99.28528594970703,
        Text: "Open",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06187109649181366,
            Height: 0.021025221794843674,
            Left: 0.5589882731437683,
            Top: 0.6339132189750671,
          },
          Polygon: [
            {
              X: 0.5589882731437683,
              Y: 0.6339132189750671,
            },
            {
              X: 0.6208574771881104,
              Y: 0.6339164972305298,
            },
            {
              X: 0.6208593249320984,
              Y: 0.6549383997917175,
            },
            {
              X: 0.5589900016784668,
              Y: 0.6549350619316101,
            },
          ],
        },
        Id: "aa01ce92-aef6-4a5e-9ae6-ab887600fad9",
        Page: 1,
        SearchKey: "Open",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36705780029297,
        Text: "source",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0906752496957779,
            Height: 0.017278360202908516,
            Left: 0.6338022351264954,
            Top: 0.6379192471504211,
          },
          Polygon: [
            {
              X: 0.6338022351264954,
              Y: 0.6379192471504211,
            },
            {
              X: 0.7244758605957031,
              Y: 0.637924075126648,
            },
            {
              X: 0.7244774699211121,
              Y: 0.6551976203918457,
            },
            {
              X: 0.6338037252426147,
              Y: 0.6551927328109741,
            },
          ],
        },
        Id: "9127c6d5-a774-4456-a6a9-783345618d31",
        Page: 1,
        SearchKey: "source",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36549377441406,
        Text: "services",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10633891820907593,
            Height: 0.020421907305717468,
            Left: 0.7478573322296143,
            Top: 0.6359704732894897,
          },
          Polygon: [
            {
              X: 0.7478573322296143,
              Y: 0.6359704732894897,
            },
            {
              X: 0.854194164276123,
              Y: 0.6359761357307434,
            },
            {
              X: 0.8541962504386902,
              Y: 0.6563923954963684,
            },
            {
              X: 0.7478592395782471,
              Y: 0.6563866138458252,
            },
          ],
        },
        Id: "d9911bff-495e-4313-bbf5-b164a949e03c",
        Page: 1,
        SearchKey: "services",
      },
      {
        BlockType: "WORD",
        Confidence: 98.47044372558594,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014713508076965809,
            Height: 0.005847093183547258,
            Left: 0.09845590591430664,
            Top: 0.682036817073822,
          },
          Polygon: [
            {
              X: 0.09845590591430664,
              Y: 0.682036817073822,
            },
            {
              X: 0.11316905915737152,
              Y: 0.6820375919342041,
            },
            {
              X: 0.11316941678524017,
              Y: 0.6878839135169983,
            },
            {
              X: 0.0984562560915947,
              Y: 0.6878830790519714,
            },
          ],
        },
        Id: "abe84ca3-e56c-4646-81e0-a3e741a50200",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 97.93082427978516,
        Text: "Kinesis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10887964814901352,
            Height: 0.024488599970936775,
            Left: 0.12670737504959106,
            Top: 0.6741725206375122,
          },
          Polygon: [
            {
              X: 0.12670737504959106,
              Y: 0.6741725206375122,
            },
            {
              X: 0.23558539152145386,
              Y: 0.6741784811019897,
            },
            {
              X: 0.23558703064918518,
              Y: 0.6986611485481262,
            },
            {
              X: 0.12670888006687164,
              Y: 0.6986550688743591,
            },
          ],
        },
        Id: "6114be78-20a1-4535-a220-ce3e4b7b05c3",
        Page: 1,
        SearchKey: "Kinesis",
      },
      {
        BlockType: "WORD",
        Confidence: 99.339599609375,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.007339077536016703,
            Height: 0.01544217113405466,
            Left: 0.25825774669647217,
            Top: 0.6804008483886719,
          },
          Polygon: [
            {
              X: 0.25825774669647217,
              Y: 0.6804008483886719,
            },
            {
              X: 0.26559576392173767,
              Y: 0.6804012656211853,
            },
            {
              X: 0.26559680700302124,
              Y: 0.6958430409431458,
            },
            {
              X: 0.25825878977775574,
              Y: 0.6958426237106323,
            },
          ],
        },
        Id: "347f1af4-b482-4ae3-9a11-a22402cf78e2",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 98.00691986083984,
        Text: "Streaming",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1280350238084793,
            Height: 0.027128225192427635,
            Left: 0.2906784415245056,
            Top: 0.6773560643196106,
          },
          Polygon: [
            {
              X: 0.2906784415245056,
              Y: 0.6773560643196106,
            },
            {
              X: 0.418711394071579,
              Y: 0.6773631572723389,
            },
            {
              X: 0.4187134802341461,
              Y: 0.7044842839241028,
            },
            {
              X: 0.2906803488731384,
              Y: 0.7044771313667297,
            },
          ],
        },
        Id: "14baed97-2f6c-427e-ac2c-9e4e4be29fbd",
        Page: 1,
        SearchKey: "Streaming",
      },
      {
        BlockType: "WORD",
        Confidence: 72.02311706542969,
        Text: "&",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.02051055245101452,
            Height: 0.018084745854139328,
            Left: 0.4386956989765167,
            Top: 0.6797360777854919,
          },
          Polygon: [
            {
              X: 0.4386956989765167,
              Y: 0.6797360777854919,
            },
            {
              X: 0.4592048227787018,
              Y: 0.6797372102737427,
            },
            {
              X: 0.4592062532901764,
              Y: 0.6978208422660828,
            },
            {
              X: 0.43869712948799133,
              Y: 0.697819709777832,
            },
          ],
        },
        Id: "f052bd65-bf54-4ff0-b3ee-0d0b5fffa3d9",
        Page: 1,
        SearchKey: "&",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36674499511719,
        Text: "analyzing",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13560503721237183,
            Height: 0.02763241156935692,
            Left: 0.46940165758132935,
            Top: 0.678642988204956,
          },
          Polygon: [
            {
              X: 0.46940165758132935,
              Y: 0.678642988204956,
            },
            {
              X: 0.6050043106079102,
              Y: 0.6786504983901978,
            },
            {
              X: 0.6050066947937012,
              Y: 0.7062754034996033,
            },
            {
              X: 0.46940386295318604,
              Y: 0.7062678337097168,
            },
          ],
        },
        Id: "dd9687f7-bd91-4c78-b599-2051b5cce8f3",
        Page: 1,
        SearchKey: "analyzing",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36614227294922,
        Text: "real",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05345391109585762,
            Height: 0.019519682973623276,
            Left: 0.6381057500839233,
            Top: 0.6823484301567078,
          },
          Polygon: [
            {
              X: 0.6381057500839233,
              Y: 0.6823484301567078,
            },
            {
              X: 0.6915578842163086,
              Y: 0.6823513507843018,
            },
            {
              X: 0.6915596723556519,
              Y: 0.7018681168556213,
            },
            {
              X: 0.6381074786186218,
              Y: 0.7018651366233826,
            },
          ],
        },
        Id: "0e297cd0-278b-48c2-822e-27cb048bd8d1",
        Page: 1,
        SearchKey: "real",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3661880493164,
        Text: "time",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06489891558885574,
            Height: 0.021649764850735664,
            Left: 0.7099624872207642,
            Top: 0.6800010204315186,
          },
          Polygon: [
            {
              X: 0.7099624872207642,
              Y: 0.6800010204315186,
            },
            {
              X: 0.7748593091964722,
              Y: 0.6800045967102051,
            },
            {
              X: 0.7748613953590393,
              Y: 0.7016507983207703,
            },
            {
              X: 0.7099644541740417,
              Y: 0.701647162437439,
            },
          ],
        },
        Id: "66f21ad0-4ed5-4059-aca1-d236e7966fb8",
        Page: 1,
        SearchKey: "time",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36705017089844,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06773766875267029,
            Height: 0.019778281450271606,
            Left: 0.7881836891174316,
            Top: 0.6816209554672241,
          },
          Polygon: [
            {
              X: 0.7881836891174316,
              Y: 0.6816209554672241,
            },
            {
              X: 0.855919361114502,
              Y: 0.681624710559845,
            },
            {
              X: 0.8559213280677795,
              Y: 0.7013992667198181,
            },
            {
              X: 0.7881855964660645,
              Y: 0.7013954520225525,
            },
          ],
        },
        Id: "d794e0a1-2705-49a5-a2c3-186ff2969a43",
        Page: 1,
        SearchKey: "data",
      },
      {
        BlockType: "WORD",
        Confidence: 98.58179473876953,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05518721044063568,
            Height: 0.03232559561729431,
            Left: 0.2690409719944,
            Top: 0.713660717010498,
          },
          Polygon: [
            {
              X: 0.2690409719944,
              Y: 0.713660717010498,
            },
            {
              X: 0.32422587275505066,
              Y: 0.7136638760566711,
            },
            {
              X: 0.3242281973361969,
              Y: 0.7459863424301147,
            },
            {
              X: 0.2690432071685791,
              Y: 0.7459831237792969,
            },
          ],
        },
        Id: "b7ce42eb-a466-4ac9-9619-5700d01a22a9",
        Page: 1,
        SearchKey: "(Ex:",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36112976074219,
        Text: "Financial",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10002486407756805,
            Height: 0.020408105105161667,
            Left: 0.3415922224521637,
            Top: 0.7238264679908752,
          },
          Polygon: [
            {
              X: 0.3415922224521637,
              Y: 0.7238264679908752,
            },
            {
              X: 0.441615492105484,
              Y: 0.7238321304321289,
            },
            {
              X: 0.44161710143089294,
              Y: 0.744234561920166,
            },
            {
              X: 0.3415937125682831,
              Y: 0.7442288398742676,
            },
          ],
        },
        Id: "8245fd9c-b777-4ad7-a78b-a6dee6c40eb6",
        Page: 1,
        SearchKey: "Financial",
      },
      {
        BlockType: "WORD",
        Confidence: 99.34016418457031,
        Text: "markets",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09697145223617554,
            Height: 0.020532915368676186,
            Left: 0.4565048813819885,
            Top: 0.7267512083053589,
          },
          Polygon: [
            {
              X: 0.4565048813819885,
              Y: 0.7267512083053589,
            },
            {
              X: 0.5534746050834656,
              Y: 0.7267566919326782,
            },
            {
              X: 0.5534763336181641,
              Y: 0.7472841143608093,
            },
            {
              X: 0.45650652050971985,
              Y: 0.7472785115242004,
            },
          ],
        },
        Id: "95788019-5de4-47f4-971e-d31b6994a31b",
        Page: 1,
        SearchKey: "markets",
      },
      {
        BlockType: "WORD",
        Confidence: 98.72183227539062,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.022093748673796654,
            Height: 0.03118274360895157,
            Left: 0.5650103092193604,
            Top: 0.7176946997642517,
          },
          Polygon: [
            {
              X: 0.5650103092193604,
              Y: 0.7176946997642517,
            },
            {
              X: 0.5871013402938843,
              Y: 0.717695951461792,
            },
            {
              X: 0.5871040225028992,
              Y: 0.7488774657249451,
            },
            {
              X: 0.5650129318237305,
              Y: 0.74887615442276,
            },
          ],
        },
        Id: "a023f8ab-69f1-4c23-a984-e2dcebcdf789",
        Page: 1,
        SearchKey: "/",
      },
      {
        BlockType: "WORD",
        Confidence: 99.25707244873047,
        Text: "sentimental",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15200990438461304,
            Height: 0.02204872854053974,
            Left: 0.5905373096466064,
            Top: 0.7279442548751831,
          },
          Polygon: [
            {
              X: 0.5905373096466064,
              Y: 0.7279442548751831,
            },
            {
              X: 0.7425451278686523,
              Y: 0.7279528975486755,
            },
            {
              X: 0.7425472140312195,
              Y: 0.7499929666519165,
            },
            {
              X: 0.5905392169952393,
              Y: 0.7499841451644897,
            },
          ],
        },
        Id: "690b9dfb-5c65-49ca-9089-22befa8e14e6",
        Page: 1,
        SearchKey: "sentimental",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36653137207031,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10554105788469315,
            Height: 0.022209735587239265,
            Left: 0.7627143859863281,
            Top: 0.7282415628433228,
          },
          Polygon: [
            {
              X: 0.7627143859863281,
              Y: 0.7282415628433228,
            },
            {
              X: 0.868253231048584,
              Y: 0.7282475829124451,
            },
            {
              X: 0.8682554364204407,
              Y: 0.7504513263702393,
            },
            {
              X: 0.76271653175354,
              Y: 0.7504451870918274,
            },
          ],
        },
        Id: "e4ff5ab0-acfb-4b00-a1f5-cd52f96b9ad5",
        Page: 1,
        SearchKey: "analysis",
      },
      {
        BlockType: "WORD",
        Confidence: 97.79389953613281,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.01682748645544052,
            Height: 0.02651294134557247,
            Left: 0.8832496404647827,
            Top: 0.7226026058197021,
          },
          Polygon: [
            {
              X: 0.8832496404647827,
              Y: 0.7226026058197021,
            },
            {
              X: 0.9000744223594666,
              Y: 0.7226035594940186,
            },
            {
              X: 0.9000771045684814,
              Y: 0.749115526676178,
            },
            {
              X: 0.8832523226737976,
              Y: 0.7491145730018616,
            },
          ],
        },
        Id: "1dc66576-1cb2-4a73-9832-e1054f182441",
        Page: 1,
        SearchKey: "/",
      },
      {
        BlockType: "WORD",
        Confidence: 8.368078231811523,
        Text: "sells",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.04316416755318642,
            Height: 0.016346603631973267,
            Left: 0.0011393865570425987,
            Top: 0.7650715708732605,
          },
          Polygon: [
            {
              X: 0.0011393865570425987,
              Y: 0.7650715708732605,
            },
            {
              X: 0.04430262744426727,
              Y: 0.7650740742683411,
            },
            {
              X: 0.04430355504155159,
              Y: 0.7814181447029114,
            },
            {
              X: 0.0011402773670852184,
              Y: 0.781415581703186,
            },
          ],
        },
        Id: "1f89d2e6-7e6f-4fc7-a860-f28a0bcd2aa0",
        Page: 1,
        SearchKey: "sells",
      },
      {
        BlockType: "WORD",
        Confidence: 99.28750610351562,
        Text: "social",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07843735069036484,
            Height: 0.019377227872610092,
            Left: 0.34107211232185364,
            Top: 0.7578981518745422,
          },
          Polygon: [
            {
              X: 0.34107211232185364,
              Y: 0.7578981518745422,
            },
            {
              X: 0.4195079803466797,
              Y: 0.7579027414321899,
            },
            {
              X: 0.4195094704627991,
              Y: 0.7772753834724426,
            },
            {
              X: 0.34107351303100586,
              Y: 0.7772707939147949,
            },
          ],
        },
        Id: "cc3c520b-8318-4ced-81a8-47c84d86b7fd",
        Page: 1,
        SearchKey: "social",
      },
      {
        BlockType: "WORD",
        Confidence: 86.6438217163086,
        Text: "media",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08257763832807541,
            Height: 0.01882886327803135,
            Left: 0.4388063848018646,
            Top: 0.7580478191375732,
          },
          Polygon: [
            {
              X: 0.4388063848018646,
              Y: 0.7580478191375732,
            },
            {
              X: 0.5213824510574341,
              Y: 0.7580526471138,
            },
            {
              X: 0.5213840007781982,
              Y: 0.77687668800354,
            },
            {
              X: 0.4388078451156616,
              Y: 0.7768718004226685,
            },
          ],
        },
        Id: "443c4baa-1964-4df2-8131-9f2c8297a5fd",
        Page: 1,
        SearchKey: "media",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3662109375,
        Text: "feed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06207651272416115,
            Height: 0.023814016953110695,
            Left: 0.5408993363380432,
            Top: 0.7555717825889587,
          },
          Polygon: [
            {
              X: 0.5408993363380432,
              Y: 0.7555717825889587,
            },
            {
              X: 0.6029738187789917,
              Y: 0.7555753588676453,
            },
            {
              X: 0.6029759049415588,
              Y: 0.7793858051300049,
            },
            {
              X: 0.5409013628959656,
              Y: 0.7793821096420288,
            },
          ],
        },
        Id: "31579191-c5be-4f9e-a1ca-47dca68bd5bd",
        Page: 1,
        SearchKey: "feed",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35936737060547,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11079039424657822,
            Height: 0.025894174352288246,
            Left: 0.615744411945343,
            Top: 0.7584987282752991,
          },
          Polygon: [
            {
              X: 0.615744411945343,
              Y: 0.7584987282752991,
            },
            {
              X: 0.7265323996543884,
              Y: 0.7585051655769348,
            },
            {
              X: 0.7265347838401794,
              Y: 0.7843928933143616,
            },
            {
              X: 0.6157466769218445,
              Y: 0.7843863368034363,
            },
          ],
        },
        Id: "591caade-d4d4-4a26-9fd6-e7dcf42a63ad",
        Page: 1,
        SearchKey: "analysis",
      },
      {
        BlockType: "WORD",
        Confidence: 97.65676879882812,
        Text: ")",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.01523364894092083,
            Height: 0.027332516387104988,
            Left: 0.7340965270996094,
            Top: 0.7581329345703125,
          },
          Polygon: [
            {
              X: 0.7340965270996094,
              Y: 0.7581329345703125,
            },
            {
              X: 0.7493276000022888,
              Y: 0.7581338286399841,
            },
            {
              X: 0.7493301630020142,
              Y: 0.7854654788970947,
            },
            {
              X: 0.7340990900993347,
              Y: 0.7854645252227783,
            },
          ],
        },
        Id: "646939fa-eb9a-4305-a9fe-ac2f6f114c46",
        Page: 1,
        SearchKey: ")",
      },
      {
        BlockType: "WORD",
        Confidence: 98.87378692626953,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.013764465227723122,
            Height: 0.005064168479293585,
            Left: 0.09980091452598572,
            Top: 0.8144828677177429,
          },
          Polygon: [
            {
              X: 0.09980091452598572,
              Y: 0.8144828677177429,
            },
            {
              X: 0.11356507241725922,
              Y: 0.8144837021827698,
            },
            {
              X: 0.11356537789106369,
              Y: 0.8195470571517944,
            },
            {
              X: 0.0998012125492096,
              Y: 0.8195462226867676,
            },
          ],
        },
        Id: "4d5ce856-4d5f-43a5-bbcd-e3db54d56068",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36682891845703,
        Text: "Data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06727336347103119,
            Height: 0.02117125689983368,
            Left: 0.1333954781293869,
            Top: 0.8053312301635742,
          },
          Polygon: [
            {
              X: 0.1333954781293869,
              Y: 0.8053312301635742,
            },
            {
              X: 0.20066745579242706,
              Y: 0.805335283279419,
            },
            {
              X: 0.2006688416004181,
              Y: 0.8265025019645691,
            },
            {
              X: 0.13339677453041077,
              Y: 0.8264983892440796,
            },
          ],
        },
        Id: "b3eeb5fe-7889-4b1b-9235-cbd67d78de59",
        Page: 1,
        SearchKey: "Data",
      },
      {
        BlockType: "WORD",
        Confidence: 90.6763916015625,
        Text: "Pipeline",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11523760855197906,
            Height: 0.0256124809384346,
            Left: 0.2271249145269394,
            Top: 0.808013379573822,
          },
          Polygon: [
            {
              X: 0.2271249145269394,
              Y: 0.808013379573822,
            },
            {
              X: 0.3423606753349304,
              Y: 0.808020293712616,
            },
            {
              X: 0.34236252307891846,
              Y: 0.833625853061676,
            },
            {
              X: 0.22712662816047668,
              Y: 0.8336188197135925,
            },
          ],
        },
        Id: "626c20be-3623-4557-93b3-51fb96b39e54",
        Page: 1,
        SearchKey: "Pipeline",
      },
      {
        BlockType: "WORD",
        Confidence: 95.17526245117188,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.007333278190344572,
            Height: 0.013579891063272953,
            Left: 0.3422418236732483,
            Top: 0.8160450458526611,
          },
          Polygon: [
            {
              X: 0.3422418236732483,
              Y: 0.8160450458526611,
            },
            {
              X: 0.34957411885261536,
              Y: 0.8160454630851746,
            },
            {
              X: 0.34957510232925415,
              Y: 0.8296248912811279,
            },
            {
              X: 0.3422428071498871,
              Y: 0.8296244740486145,
            },
          ],
        },
        Id: "8b8eebe7-4a90-4d1c-90e5-781c88295a40",
        Page: 1,
        SearchKey: ":",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36640167236328,
        Text: "Allow",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06822199374437332,
            Height: 0.023416263982653618,
            Left: 0.3705894351005554,
            Top: 0.8097696304321289,
          },
          Polygon: [
            {
              X: 0.3705894351005554,
              Y: 0.8097696304321289,
            },
            {
              X: 0.4388096034526825,
              Y: 0.8097737431526184,
            },
            {
              X: 0.43881142139434814,
              Y: 0.8331859111785889,
            },
            {
              X: 0.3705911636352539,
              Y: 0.8331817388534546,
            },
          ],
        },
        Id: "53224204-e25f-4620-991f-28abe8653639",
        Page: 1,
        SearchKey: "Allow",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36583709716797,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.023104460909962654,
            Height: 0.019343601539731026,
            Left: 0.4492574632167816,
            Top: 0.81393963098526,
          },
          Polygon: [
            {
              X: 0.4492574632167816,
              Y: 0.81393963098526,
            },
            {
              X: 0.47236037254333496,
              Y: 0.8139410018920898,
            },
            {
              X: 0.4723619222640991,
              Y: 0.8332831859588623,
            },
            {
              X: 0.4492589831352234,
              Y: 0.8332818150520325,
            },
          ],
        },
        Id: "45765edd-bbc9-449c-a3f6-f078c840c670",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3661117553711,
        Text: "move",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06850255280733109,
            Height: 0.014836099930107594,
            Left: 0.4931243658065796,
            Top: 0.8192818760871887,
          },
          Polygon: [
            {
              X: 0.4931243658065796,
              Y: 0.8192818760871887,
            },
            {
              X: 0.5616256594657898,
              Y: 0.819286048412323,
            },
            {
              X: 0.5616269111633301,
              Y: 0.8341180086135864,
            },
            {
              X: 0.4931255578994751,
              Y: 0.8341137766838074,
            },
          ],
        },
        Id: "49df19bc-f98f-497c-b175-9fa8b7655d25",
        Page: 1,
        SearchKey: "move",
      },
      {
        BlockType: "WORD",
        Confidence: 93.21514129638672,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.059341415762901306,
            Height: 0.020982494577765465,
            Left: 0.576990008354187,
            Top: 0.8141933679580688,
          },
          Polygon: [
            {
              X: 0.576990008354187,
              Y: 0.8141933679580688,
            },
            {
              X: 0.6363295316696167,
              Y: 0.8141969442367554,
            },
            {
              X: 0.6363313794136047,
              Y: 0.8351758718490601,
            },
            {
              X: 0.5769917964935303,
              Y: 0.8351722359657288,
            },
          ],
        },
        Id: "72fe135c-d075-4a23-a4b9-a69df591c6a8",
        Page: 1,
        SearchKey: "data",
      },
      {
        BlockType: "WORD",
        Confidence: 98.04576873779297,
        Text: "from",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.058715153485536575,
            Height: 0.021686343476176262,
            Left: 0.653418242931366,
            Top: 0.8141052722930908,
          },
          Polygon: [
            {
              X: 0.653418242931366,
              Y: 0.8141052722930908,
            },
            {
              X: 0.7121314406394958,
              Y: 0.8141087889671326,
            },
            {
              X: 0.7121334075927734,
              Y: 0.8357915878295898,
            },
            {
              X: 0.6534202098846436,
              Y: 0.8357880115509033,
            },
          ],
        },
        Id: "f52fa399-41b2-4a45-b43f-8f93e4d619b8",
        Page: 1,
        SearchKey: "from",
      },
      {
        BlockType: "WORD",
        Confidence: 97.25774383544922,
        Text: "one",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.04204019159078598,
            Height: 0.015750475227832794,
            Left: 0.7267736196517944,
            Top: 0.819333016872406,
          },
          Polygon: [
            {
              X: 0.7267736196517944,
              Y: 0.819333016872406,
            },
            {
              X: 0.7688122987747192,
              Y: 0.8193355202674866,
            },
            {
              X: 0.7688137888908386,
              Y: 0.8350834846496582,
            },
            {
              X: 0.726775050163269,
              Y: 0.8350809216499329,
            },
          ],
        },
        Id: "9fd2daa6-27f8-4c7a-a67c-b305f089bc95",
        Page: 1,
        SearchKey: "one",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3620376586914,
        Text: "place",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0652141273021698,
            Height: 0.024361034855246544,
            Left: 0.7799001336097717,
            Top: 0.815272867679596,
          },
          Polygon: [
            {
              X: 0.7799001336097717,
              Y: 0.815272867679596,
            },
            {
              X: 0.8451118469238281,
              Y: 0.8152768015861511,
            },
            {
              X: 0.8451142311096191,
              Y: 0.8396339416503906,
            },
            {
              X: 0.779902458190918,
              Y: 0.8396299481391907,
            },
          ],
        },
        Id: "d872f1c1-42b5-4bb8-8ad2-620bed1330ea",
        Page: 1,
        SearchKey: "place",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36605834960938,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.024432171136140823,
            Height: 0.021265991032123566,
            Left: 0.85713130235672,
            Top: 0.8172696232795715,
          },
          Polygon: [
            {
              X: 0.85713130235672,
              Y: 0.8172696232795715,
            },
            {
              X: 0.8815613389015198,
              Y: 0.8172711133956909,
            },
            {
              X: 0.8815634846687317,
              Y: 0.8385356068611145,
            },
            {
              X: 0.8571334481239319,
              Y: 0.8385341167449951,
            },
          ],
        },
        Id: "54bb00fe-d2f0-4a6f-a378-47c68305376f",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36631774902344,
        Text: "another",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1019076257944107,
            Height: 0.02123113162815571,
            Left: 0.8963652849197388,
            Top: 0.8205771446228027,
          },
          Polygon: [
            {
              X: 0.8963652849197388,
              Y: 0.8205771446228027,
            },
            {
              X: 0.9982706308364868,
              Y: 0.8205832839012146,
            },
            {
              X: 0.9982728958129883,
              Y: 0.8418082594871521,
            },
            {
              X: 0.8963674902915955,
              Y: 0.8418020009994507,
            },
          ],
        },
        Id: "72590e44-2fc8-4217-a0db-7642e3055041",
        Page: 1,
        SearchKey: "another",
      },
      {
        BlockType: "WORD",
        Confidence: 98.85498046875,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.060804642736911774,
            Height: 0.0328531377017498,
            Left: 0.35831955075263977,
            Top: 0.8449869155883789,
          },
          Polygon: [
            {
              X: 0.35831955075263977,
              Y: 0.8449869155883789,
            },
            {
              X: 0.4191216826438904,
              Y: 0.844990611076355,
            },
            {
              X: 0.41912418603897095,
              Y: 0.8778400421142578,
            },
            {
              X: 0.3583219647407532,
              Y: 0.8778362274169922,
            },
          ],
        },
        Id: "ddac8422-c999-4601-a9b0-a37dcaa35c5c",
        Page: 1,
        SearchKey: "(Ex:",
      },
      {
        BlockType: "WORD",
        Confidence: 98.8794937133789,
        Text: "53",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.033186666667461395,
            Height: 0.025375664234161377,
            Left: 0.4346538782119751,
            Top: 0.8502934575080872,
          },
          Polygon: [
            {
              X: 0.4346538782119751,
              Y: 0.8502934575080872,
            },
            {
              X: 0.4678385257720947,
              Y: 0.8502954840660095,
            },
            {
              X: 0.4678405225276947,
              Y: 0.8756691217422485,
            },
            {
              X: 0.4346558451652527,
              Y: 0.8756670355796814,
            },
          ],
        },
        Id: "3910eb00-7640-4f37-8193-4b6a9190df49",
        Page: 1,
        SearchKey: "53",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36620330810547,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.026879381388425827,
            Height: 0.01879623904824257,
            Left: 0.49185875058174133,
            Top: 0.8569427132606506,
          },
          Polygon: [
            {
              X: 0.49185875058174133,
              Y: 0.8569427132606506,
            },
            {
              X: 0.5187366008758545,
              Y: 0.8569443821907043,
            },
            {
              X: 0.5187381505966187,
              Y: 0.8757389783859253,
            },
            {
              X: 0.4918602705001831,
              Y: 0.8757372498512268,
            },
          ],
        },
        Id: "4b5c2f87-7cb3-430c-a530-5f0d9e3b149f",
        Page: 1,
        SearchKey: "to",
      },
      {
        BlockType: "WORD",
        Confidence: 85.6268310546875,
        Text: "Dynmo",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0886811763048172,
            Height: 0.020816614851355553,
            Left: 0.5364532470703125,
            Top: 0.8588309288024902,
          },
          Polygon: [
            {
              X: 0.5364532470703125,
              Y: 0.8588309288024902,
            },
            {
              X: 0.6251326203346252,
              Y: 0.8588364124298096,
            },
            {
              X: 0.6251344084739685,
              Y: 0.8796475529670715,
            },
            {
              X: 0.536454975605011,
              Y: 0.8796419501304626,
            },
          ],
        },
        Id: "f201b271-54d4-4b4b-bc85-ca6f974001b8",
        Page: 1,
        SearchKey: "Dynmo",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36647033691406,
        Text: "DB",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.04004457965493202,
            Height: 0.019322939217090607,
            Left: 0.6335074305534363,
            Top: 0.8606624603271484,
          },
          Polygon: [
            {
              X: 0.6335074305534363,
              Y: 0.8606624603271484,
            },
            {
              X: 0.6735502481460571,
              Y: 0.860664963722229,
            },
            {
              X: 0.6735519766807556,
              Y: 0.8799853920936584,
            },
            {
              X: 0.63350909948349,
              Y: 0.8799828886985779,
            },
          ],
        },
        Id: "41b5d4ea-a0c5-4af4-944b-6f10acc34168",
        Page: 1,
        SearchKey: "DB",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36483764648438,
        Text: "or",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.029998986050486565,
            Height: 0.014631953090429306,
            Left: 0.6960757970809937,
            Top: 0.8650955557823181,
          },
          Polygon: [
            {
              X: 0.6960757970809937,
              Y: 0.8650955557823181,
            },
            {
              X: 0.7260733842849731,
              Y: 0.8650974035263062,
            },
            {
              X: 0.726074755191803,
              Y: 0.8797274827957153,
            },
            {
              X: 0.6960771083831787,
              Y: 0.8797256350517273,
            },
          ],
        },
        Id: "58544467-4c26-403f-990f-668277145766",
        Page: 1,
        SearchKey: "or",
      },
      {
        BlockType: "WORD",
        Confidence: 57.75657272338867,
        Text: "vise",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05401867255568504,
            Height: 0.01800493337213993,
            Left: 0.7457201480865479,
            Top: 0.8602191209793091,
          },
          Polygon: [
            {
              X: 0.7457201480865479,
              Y: 0.8602191209793091,
            },
            {
              X: 0.7997370958328247,
              Y: 0.8602224588394165,
            },
            {
              X: 0.7997388243675232,
              Y: 0.8782240152359009,
            },
            {
              X: 0.7457218766212463,
              Y: 0.8782206177711487,
            },
          ],
        },
        Id: "f6436c31-e568-46a9-abb8-8c6aa611b6f7",
        Page: 1,
        SearchKey: "vise",
      },
      {
        BlockType: "WORD",
        Confidence: 99.32555389404297,
        Text: "versa)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0862368568778038,
            Height: 0.03303143009543419,
            Left: 0.8094390034675598,
            Top: 0.8552311658859253,
          },
          Polygon: [
            {
              X: 0.8094390034675598,
              Y: 0.8552311658859253,
            },
            {
              X: 0.8956725001335144,
              Y: 0.8552364706993103,
            },
            {
              X: 0.8956758975982666,
              Y: 0.8882625699043274,
            },
            {
              X: 0.8094422221183777,
              Y: 0.8882571458816528,
            },
          ],
        },
        Id: "a0b4ab3e-5320-4789-8037-89d94e44d220",
        Page: 1,
        SearchKey: "versa)",
      },
      {
        BlockType: "WORD",
        Confidence: 99.26370239257812,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.016306018456816673,
            Height: 0.005890368018299341,
            Left: 0.09277952462434769,
            Top: 0.9076168537139893,
          },
          Polygon: [
            {
              X: 0.09277952462434769,
              Y: 0.9076168537139893,
            },
            {
              X: 0.10908518731594086,
              Y: 0.9076178669929504,
            },
            {
              X: 0.10908554494380951,
              Y: 0.9135072231292725,
            },
            {
              X: 0.09277987480163574,
              Y: 0.9135061502456665,
            },
          ],
        },
        Id: "d9c0be6f-e2cc-4324-aad2-e53708d1d7ee",
        Page: 1,
        SearchKey: "-",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36705017089844,
        Text: "Quick",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09352955967187881,
            Height: 0.024307362735271454,
            Left: 0.1251157820224762,
            Top: 0.8975721597671509,
          },
          Polygon: [
            {
              X: 0.1251157820224762,
              Y: 0.8975721597671509,
            },
            {
              X: 0.21864373981952667,
              Y: 0.8975781202316284,
            },
            {
              X: 0.2186453491449356,
              Y: 0.9218795299530029,
            },
            {
              X: 0.12511727213859558,
              Y: 0.9218735098838806,
            },
          ],
        },
        Id: "780253f3-5e67-4b16-8128-03369cc089d6",
        Page: 1,
        SearchKey: "Quick",
      },
      {
        BlockType: "WORD",
        Confidence: 66.75279235839844,
        Text: "Site:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08787239342927933,
            Height: 0.023725461214780807,
            Left: 0.22539915144443512,
            Top: 0.8985096216201782,
          },
          Polygon: [
            {
              X: 0.22539915144443512,
              Y: 0.8985096216201782,
            },
            {
              X: 0.31326985359191895,
              Y: 0.8985152244567871,
            },
            {
              X: 0.31327155232429504,
              Y: 0.9222351312637329,
            },
            {
              X: 0.22540073096752167,
              Y: 0.9222294092178345,
            },
          ],
        },
        Id: "570d1b95-03b5-4788-8961-3ec83f1e620a",
        Page: 1,
        SearchKey: "Site:",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36599731445312,
        Text: "Business",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12411507964134216,
            Height: 0.02407064288854599,
            Left: 0.3343196511268616,
            Top: 0.9003618955612183,
          },
          Polygon: [
            {
              X: 0.3343196511268616,
              Y: 0.9003618955612183,
            },
            {
              X: 0.4584328234195709,
              Y: 0.9003698229789734,
            },
            {
              X: 0.45843473076820374,
              Y: 0.9244325160980225,
            },
            {
              X: 0.33432137966156006,
              Y: 0.9244245290756226,
            },
          ],
        },
        Id: "47482bf6-7f0b-46bb-9063-99554271ad97",
        Page: 1,
        SearchKey: "Business",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36587524414062,
        Text: "Analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12034571915864944,
            Height: 0.03160158172249794,
            Left: 0.4804835021495819,
            Top: 0.9021459221839905,
          },
          Polygon: [
            {
              X: 0.4804835021495819,
              Y: 0.9021459221839905,
            },
            {
              X: 0.6008265018463135,
              Y: 0.9021536111831665,
            },
            {
              X: 0.6008292436599731,
              Y: 0.9337475299835205,
            },
            {
              X: 0.48048603534698486,
              Y: 0.9337397217750549,
            },
          ],
        },
        Id: "e4eaba2d-256a-4fa8-a549-b0ee0869fabc",
        Page: 1,
        SearchKey: "Analysis",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36618041992188,
        Text: "tool",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05568888038396835,
            Height: 0.024523956701159477,
            Left: 0.6230905055999756,
            Top: 0.9043852090835571,
          },
          Polygon: [
            {
              X: 0.6230905055999756,
              Y: 0.9043852090835571,
            },
            {
              X: 0.6787771582603455,
              Y: 0.9043887853622437,
            },
            {
              X: 0.6787794232368469,
              Y: 0.928909182548523,
            },
            {
              X: 0.6230926513671875,
              Y: 0.9289055466651917,
            },
          ],
        },
        Id: "098bef1a-5499-4c77-b3ff-4d17d1e50257",
        Page: 1,
        SearchKey: "tool",
      },
      {
        BlockType: "WORD",
        Confidence: 99.33045196533203,
        Text: "Dashboard",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15594780445098877,
            Height: 0.031239952892065048,
            Left: 0.3317278325557709,
            Top: 0.9416582584381104,
          },
          Polygon: [
            {
              X: 0.3317278325557709,
              Y: 0.9416582584381104,
            },
            {
              X: 0.4876731336116791,
              Y: 0.9416684508323669,
            },
            {
              X: 0.48767563700675964,
              Y: 0.9728982448577881,
            },
            {
              X: 0.33173009753227234,
              Y: 0.9728878736495972,
            },
          ],
        },
        Id: "60b228ba-1682-41b9-9bfb-947f1a537672",
        Page: 1,
        SearchKey: "Dashboard",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36595153808594,
        Text: "with",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05565919354557991,
            Height: 0.027014335617423058,
            Left: 0.506771445274353,
            Top: 0.9462664723396301,
          },
          Polygon: [
            {
              X: 0.506771445274353,
              Y: 0.9462664723396301,
            },
            {
              X: 0.56242835521698,
              Y: 0.9462701082229614,
            },
            {
              X: 0.5624306201934814,
              Y: 0.9732807874679565,
            },
            {
              X: 0.5067736506462097,
              Y: 0.9732770919799805,
            },
          ],
        },
        Id: "215e9d56-fd2a-44fc-858e-f222eb32eb70",
        Page: 1,
        SearchKey: "with",
      },
      {
        BlockType: "WORD",
        Confidence: 93.56060791015625,
        Text: "visualizations.",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.22935014963150024,
            Height: 0.027593383565545082,
            Left: 0.5783962607383728,
            Top: 0.9503296613693237,
          },
          Polygon: [
            {
              X: 0.5783962607383728,
              Y: 0.9503296613693237,
            },
            {
              X: 0.8077436685562134,
              Y: 0.9503447413444519,
            },
            {
              X: 0.807746410369873,
              Y: 0.9779230356216431,
            },
            {
              X: 0.578398585319519,
              Y: 0.9779077768325806,
            },
          ],
        },
        Id: "3f6fcc9b-9024-4237-9929-19b1b2aded2c",
        Page: 1,
        SearchKey: "visualizations.",
      },
      {
        BlockType: "KEY",
        Confidence: 69.5,
        Geometry: {
          BoundingBox: {
            Width: 0.25105586647987366,
            Height: 0.021143702790141106,
            Left: 0.09804053604602814,
            Top: 0.6304076313972473,
          },
          Polygon: [
            {
              X: 0.09804053604602814,
              Y: 0.6304076313972473,
            },
            {
              X: 0.34909483790397644,
              Y: 0.630420982837677,
            },
            {
              X: 0.3490963876247406,
              Y: 0.6515513062477112,
            },
            {
              X: 0.09804179519414902,
              Y: 0.6515377759933472,
            },
          ],
        },
        Id: "ae1f8030-953d-49a5-ad40-abd529f09d0a",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["963b1b6d-a084-4443-96d4-3fc1d38de22b"],
          },
          {
            Type: "CHILD",
            Ids: [
              "acb46a35-399c-4399-a21c-c8309ea4feb0",
              "1faaa57a-14e8-4da0-8a40-9ba868d1f3a5",
              "46f7227e-490d-431c-afd3-c3df73d5b5b6",
              "cba7989f-9c0d-4fac-a6f2-9194a55990a3",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "- Elastic Search : ",
        SearchKey: "- Elastic Search : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 69.5,
        Geometry: {
          BoundingBox: {
            Width: 0.49437522888183594,
            Height: 0.02745954506099224,
            Left: 0.3615093231201172,
            Top: 0.6313630938529968,
          },
          Polygon: [
            {
              X: 0.3615093231201172,
              Y: 0.6313630938529968,
            },
            {
              X: 0.8558818101882935,
              Y: 0.6313894391059875,
            },
            {
              X: 0.8558845520019531,
              Y: 0.6588226556777954,
            },
            {
              X: 0.36151134967803955,
              Y: 0.6587958335876465,
            },
          ],
        },
        Id: "963b1b6d-a084-4443-96d4-3fc1d38de22b",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "ab52aec9-47a7-4508-8878-56a780711731",
              "608f5150-3a5a-4629-b157-8001ec47c201",
              "aa01ce92-aef6-4a5e-9ae6-ab887600fad9",
              "9127c6d5-a774-4456-a6a9-783345618d31",
              "d9911bff-495e-4313-bbf5-b164a949e03c",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Managed by Open source services ",
        SearchKey: "Managed by Open source services ",
      },
      {
        BlockType: "KEY",
        Confidence: 68.5,
        Geometry: {
          BoundingBox: {
            Width: 0.26260367035865784,
            Height: 0.021470138803124428,
            Left: 0.09518235921859741,
            Top: 0.5869925022125244,
          },
          Polygon: [
            {
              X: 0.09518235921859741,
              Y: 0.5869925022125244,
            },
            {
              X: 0.3577844500541687,
              Y: 0.5870060324668884,
            },
            {
              X: 0.35778602957725525,
              Y: 0.6084626317024231,
            },
            {
              X: 0.09518363326787949,
              Y: 0.60844886302948,
            },
          ],
        },
        Id: "ae20e9d9-746e-486e-a983-282ba1045f0b",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["2d703bc1-afa0-47dc-9461-e37d68559dfb"],
          },
          {
            Type: "CHILD",
            Ids: [
              "dbeaa7e3-3fbe-443b-bffb-e3ec2fe3beb9",
              "2baa4a1b-6745-443a-bd82-6857325822f5",
              "599be6be-14de-435e-9966-de3157af4353",
              "74f7bb1c-441f-4048-8266-5c9daabdbe69",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "- Cloud search : ",
        SearchKey: "- Cloud search : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 68.5,
        Geometry: {
          BoundingBox: {
            Width: 0.34472131729125977,
            Height: 0.027986053377389908,
            Left: 0.3706205487251282,
            Top: 0.586826741695404,
          },
          Polygon: [
            {
              X: 0.3706205487251282,
              Y: 0.586826741695404,
            },
            {
              X: 0.7153392434120178,
              Y: 0.5868444442749023,
            },
            {
              X: 0.7153418660163879,
              Y: 0.6148127913475037,
            },
            {
              X: 0.3706226050853729,
              Y: 0.6147946119308472,
            },
          ],
        },
        Id: "2d703bc1-afa0-47dc-9461-e37d68559dfb",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "55095a70-a373-45fe-b94f-d8e2d580411a",
              "6e3462ac-9418-4ef5-9411-d58f9c98d0be",
              "5e745951-03c4-411b-bbae-d5553a8f2831",
              "d812a53a-bd73-4939-bde3-1d5cbe3eb3b6",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Fully managed by AWS ",
        SearchKey: "Fully managed by AWS ",
      },
      {
        BlockType: "KEY",
        Confidence: 46,
        Geometry: {
          BoundingBox: {
            Width: 0.2134794145822525,
            Height: 0.025729287415742874,
            Left: 0.10177887976169586,
            Top: 0.8975595831871033,
          },
          Polygon: [
            {
              X: 0.10177887976169586,
              Y: 0.8975595831871033,
            },
            {
              X: 0.3152564764022827,
              Y: 0.8975731730461121,
            },
            {
              X: 0.31525829434394836,
              Y: 0.923288881778717,
            },
            {
              X: 0.10178042203187943,
              Y: 0.9232751131057739,
            },
          ],
        },
        Id: "b9fa3cfe-7bee-4a1c-8d71-c0437907b2cf",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["20e4ac32-932a-4dd4-8333-dc1de539a044"],
          },
          {
            Type: "CHILD",
            Ids: [
              "780253f3-5e67-4b16-8128-03369cc089d6",
              "570d1b95-03b5-4788-8961-3ec83f1e620a",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "Quick Site: ",
        SearchKey: "Quick Site: ",
      },
      {
        BlockType: "VALUE",
        Confidence: 46,
        Geometry: {
          BoundingBox: {
            Width: 0.49464210867881775,
            Height: 0.07967358827590942,
            Left: 0.33802980184555054,
            Top: 0.898313045501709,
          },
          Polygon: [
            {
              X: 0.33802980184555054,
              Y: 0.898313045501709,
            },
            {
              X: 0.8326640129089355,
              Y: 0.8983445167541504,
            },
            {
              X: 0.8326719403266907,
              Y: 0.9779866337776184,
            },
            {
              X: 0.33803558349609375,
              Y: 0.9779536128044128,
            },
          ],
        },
        Id: "20e4ac32-932a-4dd4-8333-dc1de539a044",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "47482bf6-7f0b-46bb-9063-99554271ad97",
              "e4eaba2d-256a-4fa8-a549-b0ee0869fabc",
              "098bef1a-5499-4c77-b3ff-4d17d1e50257",
              "60b228ba-1682-41b9-9bfb-947f1a537672",
              "215e9d56-fd2a-44fc-858e-f222eb32eb70",
              "3f6fcc9b-9024-4237-9929-19b1b2aded2c",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Business Analysis tool Dashboard with visualizations. ",
        SearchKey: "Business Analysis tool Dashboard with visualizations. ",
      },
      {
        BlockType: "KEY",
        Confidence: 45,
        Geometry: {
          BoundingBox: {
            Width: 0.16564194858074188,
            Height: 0.025039875879883766,
            Left: 0.09908512979745865,
            Top: 0.3619527816772461,
          },
          Polygon: [
            {
              X: 0.09908512979745865,
              Y: 0.3619527816772461,
            },
            {
              X: 0.26472535729408264,
              Y: 0.36195987462997437,
            },
            {
              X: 0.26472708582878113,
              Y: 0.3869926631450653,
            },
            {
              X: 0.09908661991357803,
              Y: 0.3869854211807251,
            },
          ],
        },
        Id: "c5e92507-d641-48c4-8c6b-93fa94db9528",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["5c0707e1-527b-4d73-b9e8-de75c532d7f7"],
          },
          {
            Type: "CHILD",
            Ids: [
              "034bd379-e8c2-4020-9cb8-c0bcc16a6365",
              "98b364fe-e795-4bca-aba8-593cbd964a75",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "Athena : ",
        SearchKey: "Athena : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 45,
        Geometry: {
          BoundingBox: {
            Width: 0.5221543312072754,
            Height: 0.03175148740410805,
            Left: 0.2938738465309143,
            Top: 0.35722458362579346,
          },
          Polygon: [
            {
              X: 0.2938738465309143,
              Y: 0.35722458362579346,
            },
            {
              X: 0.8160250782966614,
              Y: 0.35724684596061707,
            },
            {
              X: 0.8160281777381897,
              Y: 0.3889760971069336,
            },
            {
              X: 0.2938760817050934,
              Y: 0.38895320892333984,
            },
          ],
        },
        Id: "5c0707e1-527b-4d73-b9e8-de75c532d7f7",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "e875982a-cbb2-444c-a15a-1ca6d3451982",
              "c0292ab8-96c8-4d4e-9507-21d2aa05ea0d",
              "9bca48c8-f9c8-4a06-9bd2-5acde5f87593",
              "df740752-88d7-45b7-b721-f1fcf87bd045",
              "0df8668f-78da-4f90-b88d-9016937846c0",
              "a8e74203-e44e-4ec1-8a7a-3baa81efe634",
              "a883ffa7-199b-426e-b514-b2be48fe6f5b",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Allows to run SQL queries on 53 ",
        SearchKey: "Allows to run SQL queries on 53 ",
      },
      {
        BlockType: "KEY",
        Confidence: 38,
        Geometry: {
          BoundingBox: {
            Width: 0.24314157664775848,
            Height: 0.03054945357143879,
            Left: 0.10681308060884476,
            Top: 0.8055738806724548,
          },
          Polygon: [
            {
              X: 0.10681308060884476,
              Y: 0.8055738806724548,
            },
            {
              X: 0.34995242953300476,
              Y: 0.8055884838104248,
            },
            {
              X: 0.34995466470718384,
              Y: 0.8361233472824097,
            },
            {
              X: 0.1068149209022522,
              Y: 0.8361084461212158,
            },
          ],
        },
        Id: "eafcabc5-bdfb-4274-9a53-dc2d47a86ecd",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["3e784025-3629-45d4-8d58-f3b9636c56aa"],
          },
          {
            Type: "CHILD",
            Ids: [
              "b3eeb5fe-7889-4b1b-9235-cbd67d78de59",
              "626c20be-3623-4557-93b3-51fb96b39e54",
              "8b8eebe7-4a90-4d1c-90e5-781c88295a40",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "Data Pipeline : ",
        SearchKey: "Data Pipeline : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 38,
        Geometry: {
          BoundingBox: {
            Width: 0.7312648892402649,
            Height: 0.07635874301195145,
            Left: 0.2605063021183014,
            Top: 0.8113572597503662,
          },
          Polygon: [
            {
              X: 0.2605063021183014,
              Y: 0.8113572597503662,
            },
            {
              X: 0.9917629957199097,
              Y: 0.8114013075828552,
            },
            {
              X: 0.9917711615562439,
              Y: 0.8877159953117371,
            },
            {
              X: 0.26051151752471924,
              Y: 0.8876698017120361,
            },
          ],
        },
        Id: "3e784025-3629-45d4-8d58-f3b9636c56aa",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "53224204-e25f-4620-991f-28abe8653639",
              "45765edd-bbc9-449c-a3f6-f078c840c670",
              "49df19bc-f98f-497c-b175-9fa8b7655d25",
              "72fe135c-d075-4a23-a4b9-a69df591c6a8",
              "f52fa399-41b2-4a45-b43f-8f93e4d619b8",
              "9fd2daa6-27f8-4c7a-a67c-b305f089bc95",
              "d872f1c1-42b5-4bb8-8ad2-620bed1330ea",
              "54bb00fe-d2f0-4a6f-a378-47c68305376f",
              "72590e44-2fc8-4217-a0db-7642e3055041",
              "ddac8422-c999-4601-a9b0-a37dcaa35c5c",
              "3910eb00-7640-4f37-8193-4b6a9190df49",
              "4b5c2f87-7cb3-430c-a530-5f0d9e3b149f",
              "f201b271-54d4-4b4b-bc85-ca6f974001b8",
              "41b5d4ea-a0c5-4af4-944b-6f10acc34168",
              "58544467-4c26-403f-990f-668277145766",
              "f6436c31-e568-46a9-abb8-8c6aa611b6f7",
              "a0b4ab3e-5320-4789-8037-89d94e44d220",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText:
          "Allow to move data from one place to another (Ex: 53 to Dynmo DB or vise versa) ",
        SearchKey:
          "Allow to move data from one place to another (Ex: 53 to Dynmo DB or vise versa) ",
      },
      {
        BlockType: "KEY",
        Confidence: 33.5,
        Geometry: {
          BoundingBox: {
            Width: 0.12773922085762024,
            Height: 0.02275804430246353,
            Left: 0.08763574063777924,
            Top: 0.40869152545928955,
          },
          Polygon: [
            {
              X: 0.08763574063777924,
              Y: 0.40869152545928955,
            },
            {
              X: 0.2153734564781189,
              Y: 0.4086972177028656,
            },
            {
              X: 0.21537496149539948,
              Y: 0.4314495623111725,
            },
            {
              X: 0.08763708919286728,
              Y: 0.4314437806606293,
            },
          ],
        },
        Id: "5364be9b-ab9f-48bf-b8f6-e767998eebfe",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["0fc10b8f-1e78-4aad-af67-47fb429093e5"],
          },
          {
            Type: "CHILD",
            Ids: [
              "655f66dc-804d-41a3-af4d-45d00ac4599b",
              "a2eb7dbf-6837-4704-8eb3-49400c1df43e",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "- EMR : ",
        SearchKey: "- EMR : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 33.5,
        Geometry: {
          BoundingBox: {
            Width: 0.5780375003814697,
            Height: 0.034255724400281906,
            Left: 0.2382686585187912,
            Top: 0.401042103767395,
          },
          Polygon: [
            {
              X: 0.2382686585187912,
              Y: 0.401042103767395,
            },
            {
              X: 0.8163027763366699,
              Y: 0.40106770396232605,
            },
            {
              X: 0.8163061738014221,
              Y: 0.43529781699180603,
            },
            {
              X: 0.23827095329761505,
              Y: 0.4352714419364929,
            },
          ],
        },
        Id: "0fc10b8f-1e78-4aad-af67-47fb429093e5",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "0c015fd7-106c-482c-810d-dca07ca348ff",
              "7e1b25c7-c161-461e-b639-ab33d514105f",
              "c2eb2140-0826-4cb1-a80e-dd6e359b3308",
              "23c6ca51-9505-463e-8836-5f1bfea0cf52",
              "c007fb01-9485-4968-8c19-6be99f1e1de1",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Elastic Map Reduce (for BigData) ",
        SearchKey: "Elastic Map Reduce (for BigData) ",
      },
      {
        BlockType: "KEY",
        Confidence: 30.000001907348633,
        Geometry: {
          BoundingBox: {
            Width: 0.1687018722295761,
            Height: 0.025218171998858452,
            Left: 0.10294225066900253,
            Top: 0.6746841073036194,
          },
          Polygon: [
            {
              X: 0.10294225066900253,
              Y: 0.6746841073036194,
            },
            {
              X: 0.27164238691329956,
              Y: 0.6746933460235596,
            },
            {
              X: 0.27164411544799805,
              Y: 0.6999022364616394,
            },
            {
              X: 0.10294376313686371,
              Y: 0.6998928189277649,
            },
          ],
        },
        Id: "111eb2cc-f955-4a6a-b1d4-b1e2b63af8a7",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["1749d6a1-de2c-4402-a220-cb1d022f11b1"],
          },
          {
            Type: "CHILD",
            Ids: [
              "abe84ca3-e56c-4646-81e0-a3e741a50200",
              "6114be78-20a1-4535-a220-ce3e4b7b05c3",
              "347f1af4-b482-4ae3-9a11-a22402cf78e2",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "- Kinesis : ",
        SearchKey: "- Kinesis : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 30.000001907348633,
        Geometry: {
          BoundingBox: {
            Width: 0.5563250184059143,
            Height: 0.10784117877483368,
            Left: 0.3227044939994812,
            Top: 0.6742548942565918,
          },
          Polygon: [
            {
              X: 0.3227044939994812,
              Y: 0.6742548942565918,
            },
            {
              X: 0.8790186047554016,
              Y: 0.6742854714393616,
            },
            {
              X: 0.8790295720100403,
              Y: 0.7820960879325867,
            },
            {
              X: 0.3227122128009796,
              Y: 0.7820631861686707,
            },
          ],
        },
        Id: "1749d6a1-de2c-4402-a220-cb1d022f11b1",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "14baed97-2f6c-427e-ac2c-9e4e4be29fbd",
              "f052bd65-bf54-4ff0-b3ee-0d0b5fffa3d9",
              "dd9687f7-bd91-4c78-b599-2051b5cce8f3",
              "0e297cd0-278b-48c2-822e-27cb048bd8d1",
              "66f21ad0-4ed5-4059-aca1-d236e7966fb8",
              "d794e0a1-2705-49a5-a2c3-186ff2969a43",
              "8245fd9c-b777-4ad7-a78b-a6dee6c40eb6",
              "95788019-5de4-47f4-971e-d31b6994a31b",
              "a023f8ab-69f1-4c23-a984-e2dcebcdf789",
              "690b9dfb-5c65-49ca-9089-22befa8e14e6",
              "e4ff5ab0-acfb-4b00-a1f5-cd52f96b9ad5",
              "cc3c520b-8318-4ced-81a8-47c84d86b7fd",
              "443c4baa-1964-4df2-8131-9f2c8297a5fd",
              "31579191-c5be-4f9e-a1ca-47dca68bd5bd",
              "591caade-d4d4-4a26-9fd6-e7dcf42a63ad",
              "646939fa-eb9a-4305-a9fe-ac2f6f114c46",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText:
          "Streaming & analyzing real time data Financial markets / sentimental analysis social media feed analysis ) ",
        SearchKey:
          "Streaming & analyzing real time data Financial markets / sentimental analysis social media feed analysis ) ",
      },
      {
        BlockType: "KEY",
        Confidence: 24.5,
        Geometry: {
          BoundingBox: {
            Width: 0.1143142431974411,
            Height: 0.03074500523507595,
            Left: 0.07983382791280746,
            Top: 0.2219386249780655,
          },
          Polygon: [
            {
              X: 0.07983382791280746,
              Y: 0.2219386249780655,
            },
            {
              X: 0.194146066904068,
              Y: 0.22194288671016693,
            },
            {
              X: 0.19414806365966797,
              Y: 0.2526836395263672,
            },
            {
              X: 0.07983563095331192,
              Y: 0.2526792287826538,
            },
          ],
        },
        Id: "6ce7bde1-a054-499b-b063-4bef4d5ccfa8",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["41e97499-efe6-415a-ad32-73a03d7065cd"],
          },
          {
            Type: "CHILD",
            Ids: [
              "7f7fa0bd-e2e8-442f-8e8b-cc749b5d36df",
              "33b34c21-dd72-4d28-b81b-acf9ed63eaeb",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "- SMS : ",
        SearchKey: "- SMS : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 24.5,
        Geometry: {
          BoundingBox: {
            Width: 0.7475715279579163,
            Height: 0.03786333277821541,
            Left: 0.19921012222766876,
            Top: 0.2141614556312561,
          },
          Polygon: [
            {
              X: 0.19921012222766876,
              Y: 0.2141614556312561,
            },
            {
              X: 0.9467776417732239,
              Y: 0.21418914198875427,
            },
            {
              X: 0.9467816352844238,
              Y: 0.25202476978302,
            },
            {
              X: 0.19921259582042694,
              Y: 0.2519960105419159,
            },
          ],
        },
        Id: "41e97499-efe6-415a-ad32-73a03d7065cd",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "c7e98b78-9bd5-43e4-a1fa-9bcfc95ad440",
              "fb94051f-bf3c-43bc-9bbb-66ab16e070c9",
              "37423265-f06b-440a-971b-ff1dca8d7b72",
              "b49a9985-c59c-4d58-8cfe-be6b7328a0f3",
              "01965155-738b-455d-b331-3c1a4df6e7e1",
              "315b2339-b079-4101-a0e9-3e1d8abf0e1f",
            ],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "Server Migration Service (for VMWare migration) ",
        SearchKey: "Server Migration Service (for VMWare migration) ",
      },
      {
        BlockType: "KEY",
        Confidence: 17.5,
        Geometry: {
          BoundingBox: {
            Width: 0.0870300829410553,
            Height: 0.02119479328393936,
            Left: 0.11117266118526459,
            Top: 0.13771703839302063,
          },
          Polygon: [
            {
              X: 0.11117266118526459,
              Y: 0.13771703839302063,
            },
            {
              X: 0.19820135831832886,
              Y: 0.1377200037240982,
            },
            {
              X: 0.19820274412631989,
              Y: 0.1589118242263794,
            },
            {
              X: 0.11117393523454666,
              Y: 0.15890879929065704,
            },
          ],
        },
        Id: "0694def5-171d-449b-b2ad-fe30f8d47655",
        Relationships: [
          {
            Type: "VALUE",
            Ids: ["6dfe0f18-dfd6-43b5-bfa4-05a4d1b99af7"],
          },
          {
            Type: "CHILD",
            Ids: [
              "32280a9c-c08d-4507-85fe-a5e990c60f75",
              "74eea05f-b6a8-41ed-88e0-38b43e8d7632",
            ],
          },
        ],
        EntityTypes: ["KEY"],
        Page: 1,
        childText: "DMS : ",
        SearchKey: "DMS : ",
      },
      {
        BlockType: "VALUE",
        Confidence: 17.5,
        Geometry: {
          BoundingBox: {
            Width: 0.020150532945990562,
            Height: 0.006673135794699192,
            Left: 0.07716898620128632,
            Top: 0.1473272293806076,
          },
          Polygon: [
            {
              X: 0.07716898620128632,
              Y: 0.1473272293806076,
            },
            {
              X: 0.0973191186785698,
              Y: 0.14732792973518372,
            },
            {
              X: 0.09731952100992203,
              Y: 0.15400037169456482,
            },
            {
              X: 0.07716938108205795,
              Y: 0.1539996713399887,
            },
          ],
        },
        Id: "6dfe0f18-dfd6-43b5-bfa4-05a4d1b99af7",
        Relationships: [
          {
            Type: "CHILD",
            Ids: ["3dc847bd-4b10-4b5d-b50d-45b9e35982f4"],
          },
        ],
        EntityTypes: ["VALUE"],
        Page: 1,
        childText: "- ",
        SearchKey: "- ",
      },
    ],
    AnalyzeDocumentModelVersion: "1.0",
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
                        <label className="btn2" onClick={onSubmit}>
                          Upload Image
                        </label>
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
