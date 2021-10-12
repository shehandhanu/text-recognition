import img from "../assets/selectimg.png";
import "../App.css";
import "./Loading.css";
import React from "react";
import TextItem from "./TextItem";
import axios from "axios";
import S3FileUpload from "react-s3";
import Compressor from "compressorjs";

function Sample(props) {
  const inputRef = React.useRef();
  const imageRef = React.useRef();
  const [SelectedImg, setSelectedImg] = React.useState();
  const [Response, setResponse] = React.useState();
  const [Type, setType] = React.useState(true);
  const [selectedText, setselectedText] = React.useState([]);
  const [processSelectedText, setprocessSelectedText] = React.useState("");
  const [previewSelectedText, setpreviewSelectedText] = React.useState([]);
  const [realHeight, setrealHeight] = React.useState();
  const [realWidth, setrealWidth] = React.useState();
  const [ProccessStatus, setProccessStatus] = React.useState(0);
  const [AddingStatus, setAddingStatus] = React.useState();
  const [copy, setcopy] = React.useState(false);

  let windowWidth = window.innerWidth;
  const ratio = (windowWidth * 53.3) / 100 / realWidth;

  const data = {
    DocumentMetadata: { Pages: 1 },
    Blocks: [
      {
        BlockType: "PAGE",
        Geometry: {
          BoundingBox: {
            Width: 0.9995945692062378,
            Height: 0.9988009333610535,
            Left: 0.000405401544412598,
            Top: 0.0011990605853497982,
          },
          Polygon: [
            { X: 0.000405401544412598, Y: 0.0011990605853497982 },
            { X: 1.0, Y: 0.0012134186690673232 },
            { X: 1.0, Y: 1.0 },
            { X: 0.00046701618703082204, Y: 1.0 },
          ],
        },
        Id: "1ad18310-352d-4554-a0d5-f3475b73260d",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "c127042b-3cdc-4bc5-b9a8-f6d45f15b53d",
              "cc9ce303-0624-4cdc-b1f4-4a7f2c675413",
              "43bd0359-bb7a-4ec9-98c8-a46378a6dc1f",
              "50b163c7-8d18-4c1c-8350-cdbdaed8d569",
              "12e3e37d-5900-423b-8013-3d4ac696066c",
              "f8dbaa5b-2700-49e5-b485-404566082d83",
              "e70a5746-8e26-475e-8375-7f2ccf769dd2",
              "876f052a-a376-42bf-8a93-c83275ac3491",
              "b4659f0a-7438-441a-b40f-939611bedd54",
              "653e0bab-1348-4df4-8cc6-ae81e7d6cfd7",
              "6d67c6a7-3384-4906-8a93-aca600b4db7a",
              "8efb858f-37b0-43ad-a915-9fa7ad053c87",
              "bec4f62a-a302-40de-b0a0-99d86d4bbb5a",
              "4deb2728-bd18-4c69-9dfd-3e256b747f63",
              "c77666c5-8b45-4cf5-89df-86961eb9f34d",
              "2557b92b-30ad-44a7-b630-fe50e5cb6a58",
              "5e046e2e-72ba-4fa4-b26b-4a375e443808",
              "986e5565-4fc6-42fa-b460-5601d5d7dba8",
              "5636e96a-c4a3-459e-b525-7bb6f24b64c7",
              "51d38d2c-495f-46d8-b438-d98875055dae",
              "9d5e30a5-fbc8-4ede-a1fe-c2d7095c0ee7",
              "7f937df5-3293-4b20-81b9-5a6436c02127",
              "05847759-653e-45c0-a085-33a0dd0c1687",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 89.21529388427734,
        Text: "-",
        Geometry: {
          BoundingBox: {
            Width: 0.03884042799472809,
            Height: 0.002495397813618183,
            Left: 0.6014868021011353,
            Top: 0.0012467927299439907,
          },
          Polygon: [
            { X: 0.6014868021011353, Y: 0.0012467927299439907 },
            { X: 0.6403270363807678, Y: 0.0012473490787670016 },
            { X: 0.6403272747993469, Y: 0.003742190543562174 },
            { X: 0.6014870405197144, Y: 0.003741628024727106 },
          ],
        },
        Id: "c127042b-3cdc-4bc5-b9a8-f6d45f15b53d",
        Relationships: [
          { Type: "CHILD", Ids: ["8e2de28f-7864-4fc9-8593-abedb7797432"] },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 99.3669662475586,
        Text: "6 Migration",
        Geometry: {
          BoundingBox: {
            Width: 0.1943090558052063,
            Height: 0.028821324929594994,
            Left: 0.036536768078804016,
            Top: 0.045990802347660065,
          },
          Polygon: [
            { X: 0.036536768078804016, Y: 0.045990802347660065 },
            { X: 0.23084375262260437, Y: 0.045994143933057785 },
            { X: 0.23084582388401031, Y: 0.07481212913990021 },
            { X: 0.036538586020469666, Y: 0.07480843365192413 },
          ],
        },
        Id: "cc9ce303-0624-4cdc-b1f4-4a7f2c675413",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "2c8c808c-1b5b-4d82-966d-26b9060c6565",
              "ad01170e-9239-42be-a057-a16afc13ad54",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 97.74894714355469,
        Text: "- Snowball : To move data from storage to cloud.",
        Geometry: {
          BoundingBox: {
            Width: 0.8259282112121582,
            Height: 0.03199082240462303,
            Left: 0.0747460350394249,
            Top: 0.08144700527191162,
          },
          Polygon: [
            { X: 0.0747460350394249, Y: 0.08144700527191162 },
            { X: 0.9006710052490234, Y: 0.08146307617425919 },
            { X: 0.9006742238998413, Y: 0.11343783140182495 },
            { X: 0.07474810630083084, Y: 0.11342008411884308 },
          ],
        },
        Id: "43bd0359-bb7a-4ec9-98c8-a46378a6dc1f",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "916c51db-fffa-46de-a8fd-e4ed6968a05c",
              "c2442cc8-60b1-4d4c-960b-30b37582241c",
              "b84c2df9-4569-4926-aad2-e78f476a9026",
              "ddaf3e80-5c6b-4503-a8bc-e0984885b848",
              "5106c169-2e22-4ad8-86b9-395efb4042f3",
              "28eb7af0-71ef-4b57-9c04-7235016141b4",
              "301d3e68-87a9-4f2b-99d4-cdf98996e13e",
              "501fddb6-0278-4155-8d89-39583cc2b25f",
              "c19f45fe-ef14-46c4-9483-7594f2acacb1",
              "5b888963-df34-4f46-87e4-7f833700f9c7",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 97.6451187133789,
        Text: "- DMS : Database Migration service",
        Geometry: {
          BoundingBox: {
            Width: 0.5818268060684204,
            Height: 0.027374889701604843,
            Left: 0.07694678753614426,
            Top: 0.13471563160419464,
          },
          Polygon: [
            { X: 0.07694678753614426, Y: 0.13471563160419464 },
            { X: 0.6587710976600647, Y: 0.13472892343997955 },
            { X: 0.6587736010551453, Y: 0.1620905101299286 },
            { X: 0.07694856077432632, Y: 0.1620762050151825 },
          ],
        },
        Id: "50b163c7-8d18-4c1c-8350-cdbdaed8d569",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "462fe95d-d832-40af-9d03-e6507ac3de4f",
              "96de1088-402a-4f1f-a977-f8758195fd3e",
              "53e7abbc-b024-472a-9328-b34815263ceb",
              "e78bcf4b-762f-4173-8b14-e87dc833cf3f",
              "6df2b709-0545-466e-af5b-27da4ce7fa3c",
              "a1621203-d329-477e-9751-b75dc58d2b6c",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 92.26888275146484,
        Text: "Can change DB type (Ex: Oracle to Aurora)",
        Geometry: {
          BoundingBox: {
            Width: 0.6964578628540039,
            Height: 0.04356048256158829,
            Left: 0.21478363871574402,
            Top: 0.16208972036838531,
          },
          Polygon: [
            { X: 0.21478363871574402, Y: 0.16208972036838531 },
            { X: 0.9112370610237122, Y: 0.16210685670375824 },
            { X: 0.9112415313720703, Y: 0.2056502103805542 },
            { X: 0.21478673815727234, Y: 0.20563113689422607 },
          ],
        },
        Id: "12e3e37d-5900-423b-8013-3d4ac696066c",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "a21ed4d0-8b1f-4527-81fd-90c3e513d512",
              "4e6aff5a-d6d5-46d1-8e9d-6d68fe93caa8",
              "b19afa07-f783-4574-93fd-d1b656f18989",
              "f3ac7ff5-8489-445b-8ab3-29a3a61a829a",
              "7f7ce7fe-5ced-4a13-b4dc-d5f430278a05",
              "256fa3ef-44e1-4477-9a67-ae43822281ca",
              "968c88ee-a3e8-4aea-839e-1fbb0edfc748",
              "f7b6bd41-3e7b-4df7-812e-57bb30690f6e",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 91.07093048095703,
        Text: "- SMS : Server Migration Service (for VMWare migration)",
        Geometry: {
          BoundingBox: {
            Width: 0.8765992522239685,
            Height: 0.03886932134628296,
            Left: 0.08124261349439621,
            Top: 0.21183770895004272,
          },
          Polygon: [
            { X: 0.08124261349439621, Y: 0.21183770895004272 },
            { X: 0.9578378796577454, Y: 0.21186205744743347 },
            { X: 0.9578418731689453, Y: 0.2507070302963257 },
            { X: 0.08124514669179916, Y: 0.25068050622940063 },
          ],
        },
        Id: "f8dbaa5b-2700-49e5-b485-404566082d83",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "655ac807-7344-4599-875c-fa26a90bb44d",
              "e21d0172-6c0d-4e00-b83d-5419333aa698",
              "40dd066f-a201-4d80-bf5f-7e37949268ca",
              "91a18563-0568-475a-a31c-3a07a69bcbc4",
              "d0fff458-4f33-4b42-ba14-30cec1f4364d",
              "926668d8-2f56-49cc-af49-ffb93b751d4f",
              "869909f4-862a-44f5-ad84-47f899d9a2b5",
              "331b126f-e103-48aa-a50b-66c0804883e8",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 99.3647232055664,
        Text: "7",
        Geometry: {
          BoundingBox: {
            Width: 0.015857301652431488,
            Height: 0.015815632417798042,
            Left: 0.037490829825401306,
            Top: 0.3219350278377533,
          },
          Polygon: [
            { X: 0.037490829825401306, Y: 0.3219350278377533 },
            { X: 0.05334712192416191, Y: 0.3219355642795563 },
            { X: 0.053348131477832794, Y: 0.3377506732940674 },
            { X: 0.037491828203201294, Y: 0.33775007724761963 },
          ],
        },
        Id: "e70a5746-8e26-475e-8375-7f2ccf769dd2",
        Relationships: [
          { Type: "CHILD", Ids: ["258d6b58-b334-46e2-b7dd-80cbc86e4678"] },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 99.35963439941406,
        Text: "Analytics",
        Geometry: {
          BoundingBox: {
            Width: 0.1411542445421219,
            Height: 0.03146805614233017,
            Left: 0.08341748267412186,
            Top: 0.31330621242523193,
          },
          Polygon: [
            { X: 0.08341748267412186, Y: 0.31330621242523193 },
            { X: 0.22456948459148407, Y: 0.31331104040145874 },
            { X: 0.22457171976566315, Y: 0.3447742462158203 },
            { X: 0.08341953903436661, Y: 0.344769150018692 },
          ],
        },
        Id: "876f052a-a376-42bf-8a93-c83275ac3491",
        Relationships: [
          { Type: "CHILD", Ids: ["bc620d16-93d2-4062-b6ad-a7d194dcda20"] },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.091796875,
        Text: "- Athena : Allows to run SQL queries on 53",
        Geometry: {
          BoundingBox: {
            Width: 0.7293977737426758,
            Height: 0.029983265325427055,
            Left: 0.08723463863134384,
            Top: 0.3582492172718048,
          },
          Polygon: [
            { X: 0.08723463863134384, Y: 0.3582492172718048 },
            { X: 0.8166295289993286, Y: 0.3582763075828552 },
            { X: 0.8166324496269226, Y: 0.3882324695587158 },
            { X: 0.08723659068346024, Y: 0.38820400834083557 },
          ],
        },
        Id: "b4659f0a-7438-441a-b40f-939611bedd54",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "fc786a01-930a-40bd-bdf1-5ed5fd916634",
              "2634f9bf-a537-46a9-954a-894657d438df",
              "3d685610-e570-4006-8692-befa8d859196",
              "b403b506-eb4c-4fdd-9002-c4104777f93e",
              "d054d30a-3077-4e14-a7b4-5f662ebd0199",
              "458329fb-cc7b-49bb-8298-e9333990eb75",
              "896c1ce9-4521-4aea-82aa-99d78e0546f3",
              "01b09bff-15c8-410f-86f7-189e77f67d26",
              "a63f27b8-3945-4072-8f27-e7b7f362c288",
              "1b849e26-1141-458e-bb51-f6c3e0667ea8",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.91082763671875,
        Text: "- EMR : Elastic Map Reduce (for BigData)",
        Geometry: {
          BoundingBox: {
            Width: 0.7270498871803284,
            Height: 0.03437396138906479,
            Left: 0.08883118629455566,
            Top: 0.4000994563102722,
          },
          Polygon: [
            { X: 0.08883118629455566, Y: 0.4000994563102722 },
            { X: 0.8158777356147766, Y: 0.40012839436531067 },
            { X: 0.815881073474884, Y: 0.4344733953475952 },
            { X: 0.08883342891931534, Y: 0.4344428777694702 },
          ],
        },
        Id: "653e0bab-1348-4df4-8cc6-ae81e7d6cfd7",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "4c9c10fa-d222-4cb3-acae-d8c8720ef8c5",
              "ef16f31c-c591-4758-888a-cca4f687d190",
              "92ea5032-d8e2-410f-ac27-95359421b9ab",
              "4ee2c4b6-363c-4de5-929e-13d6fbef5dd7",
              "73069dca-e4c5-47b5-add6-ffa61b5c0e83",
              "24eb57f9-9bfa-4c75-b9f0-05c86ffbfa13",
              "ea7fea75-1da6-47f9-8139-243a64fbe322",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.84969329833984,
        Text: "uses to process large amount of data",
        Geometry: {
          BoundingBox: {
            Width: 0.6090311408042908,
            Height: 0.02604307234287262,
            Left: 0.2385929971933365,
            Top: 0.45277202129364014,
          },
          Polygon: [
            { X: 0.2385929971933365, Y: 0.45277202129364014 },
            { X: 0.8476215600967407, Y: 0.45279833674430847 },
            { X: 0.8476241230964661, Y: 0.47881510853767395 },
            { X: 0.2385948747396469, Y: 0.4787878096103668 },
          ],
        },
        Id: "6d67c6a7-3384-4906-8a93-aca600b4db7a",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "9300283e-7468-4a7f-bb98-b4a673eff4ed",
              "ae82be0e-d144-46d6-ae1b-c265bd577771",
              "d991e9d9-cbfe-425a-a032-9f66744928d9",
              "9adafda6-b8d8-4f74-91be-da891e0402a7",
              "d52dae89-4cc4-4ee4-a242-0d69cb1b31ed",
              "3c1d46fb-8ac5-4a26-a86f-6f633f14a00a",
              "01e4f0b0-90ff-45d8-8cf0-2f2e00105e2e",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.05548858642578,
        Text: "(Ex: log analysis / web indexing)",
        Geometry: {
          BoundingBox: {
            Width: 0.5229589939117432,
            Height: 0.03825908526778221,
            Left: 0.23576074838638306,
            Top: 0.48299339413642883,
          },
          Polygon: [
            { X: 0.23576074838638306, Y: 0.48299339413642883 },
            { X: 0.7587161064147949, Y: 0.4830169677734375 },
            { X: 0.7587197422981262, Y: 0.521252453327179 },
            { X: 0.23576350510120392, Y: 0.5212275981903076 },
          ],
        },
        Id: "8efb858f-37b0-43ad-a915-9fa7ad053c87",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "a8162906-8159-4d0c-9a59-c4e0a3f7fae0",
              "f944d81c-9794-4aec-b017-62346e22c54e",
              "81125f25-f0b1-4043-850c-cc4e9d2fd3dd",
              "f0c1ce11-be9b-4eca-b75b-ff42e0def6ff",
              "e7121485-3587-4400-90b7-66fc26e6d603",
              "d6e01270-72e4-4dae-b793-4be13b801dad",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.35943603515625,
        Text: "uses Hadoop / Apache spark / Flunk",
        Geometry: {
          BoundingBox: {
            Width: 0.5873469114303589,
            Height: 0.03171820938587189,
            Left: 0.24123747646808624,
            Top: 0.5352741479873657,
          },
          Polygon: [
            { X: 0.24123747646808624, Y: 0.5352741479873657 },
            { X: 0.8285812735557556, Y: 0.5353026390075684 },
            { X: 0.8285843729972839, Y: 0.5669924020767212 },
            { X: 0.2412397712469101, Y: 0.566962718963623 },
          ],
        },
        Id: "bec4f62a-a302-40de-b0a0-99d86d4bbb5a",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "a7f8943e-9c8f-48f8-8ca6-6907f235a6b2",
              "8764bedd-14e2-4bc9-a83c-879af3e11519",
              "f5036f4b-8228-49f6-80d7-00744e696173",
              "478b0ddb-ea8b-4dc4-b840-14be34d7aec1",
              "4c6e2ec2-a2cf-4f0c-9af1-34d83a5a962d",
              "330769ac-467d-4f4c-89db-7a020f1a62e9",
              "dda6bf5f-10a2-447e-a278-b68f14fc2143",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 93.17034149169922,
        Text: "- Cloud search : Fully managed by AWS",
        Geometry: {
          BoundingBox: {
            Width: 0.6243454217910767,
            Height: 0.02669733762741089,
            Left: 0.09321737289428711,
            Top: 0.5868731141090393,
          },
          Polygon: [
            { X: 0.09321737289428711, Y: 0.5868731141090393 },
            { X: 0.717560350894928, Y: 0.5869054198265076 },
            { X: 0.7175627946853638, Y: 0.6135704517364502 },
            { X: 0.09321912378072739, Y: 0.613537073135376 },
          ],
        },
        Id: "4deb2728-bd18-4c69-9dfd-3e256b747f63",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "367736c6-7ef9-4da4-9d84-02ca4aef854f",
              "3ff69bb6-042d-407c-84b0-9e8242041087",
              "e94d3e53-e78f-47c7-8964-9c224583b83f",
              "733d3960-e842-4344-89d3-4c2eee31379c",
              "8991bcc2-413e-4293-bb7c-e6c57700d6cb",
              "05431e41-8245-4b4a-ba6c-d58815b4402c",
              "f40e7604-e701-425f-926a-6baba1799c84",
              "0c8a0c8c-83d9-448f-adee-f3dfa1a3ffb8",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 93.59442901611328,
        Text: "- Elastic Search : Managed by Open source services",
        Geometry: {
          BoundingBox: {
            Width: 0.7551262974739075,
            Height: 0.02661643736064434,
            Left: 0.09925414621829987,
            Top: 0.62978196144104,
          },
          Polygon: [
            { X: 0.09925414621829987, Y: 0.62978196144104 },
            { X: 0.854377806186676, Y: 0.6298230886459351 },
            { X: 0.8543804287910461, Y: 0.656398355960846 },
            { X: 0.09925589710474014, Y: 0.6563559770584106 },
          ],
        },
        Id: "c77666c5-8b45-4cf5-89df-86961eb9f34d",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "c77d0dcd-9688-499c-aed6-7c3e1cc344a7",
              "bfc99461-5217-47b2-adfe-b01cb5986bfb",
              "e666c708-f915-4116-b589-0b8c59718b8e",
              "b1c3430d-0b46-4e5f-b41c-98afd5df2e9b",
              "2ffcea7d-c860-46d8-9c19-2b8f3cbec6d3",
              "091c683c-32dc-4b28-886e-db784c378750",
              "71c87364-6e63-4484-bc94-695b55314b1a",
              "33054347-515a-4f49-bbd4-71814bbf6201",
              "76a99a45-4e75-49e2-8897-59893947db43",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 96.37734985351562,
        Text: "- Kinesis : Streaming 2 analyzing real time data",
        Geometry: {
          BoundingBox: {
            Width: 0.7575852274894714,
            Height: 0.03188558667898178,
            Left: 0.09840238094329834,
            Top: 0.674174427986145,
          },
          Polygon: [
            { X: 0.09840238094329834, Y: 0.674174427986145 },
            { X: 0.8559844493865967, Y: 0.6742178797721863 },
            { X: 0.8559876084327698, Y: 0.7060600519180298 },
            { X: 0.09840448200702667, Y: 0.7060150504112244 },
          ],
        },
        Id: "2557b92b-30ad-44a7-b630-fe50e5cb6a58",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "7c1bed59-377d-4a28-a388-895496ce4e7f",
              "a0e1885c-ca2e-4cea-87b8-ad2a9906fc88",
              "387b67d6-0c5a-4a57-b6ad-bfb9ff5ef9e2",
              "9651ff79-924d-40fa-8d67-9363d706a4f2",
              "51d61a6e-ecb9-4a0c-80e9-bd4e62a179b6",
              "6ca2c2c4-2389-4808-9ef4-fd139697e0c0",
              "f754c9a2-324a-4a83-9a2a-a6d2febd8c65",
              "acab3faa-265b-45ec-b2bc-9073afc53942",
              "d0575209-6417-47fd-ae5c-013fb2524151",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 98.91222381591797,
        Text: "(Ex: Financial markets / sentimental analysis /",
        Geometry: {
          BoundingBox: {
            Width: 0.6309589743614197,
            Height: 0.036826375871896744,
            Left: 0.26908689737319946,
            Top: 0.7137086987495422,
          },
          Polygon: [
            { X: 0.26908689737319946, Y: 0.7137086987495422 },
            { X: 0.9000421166419983, Y: 0.7137464880943298 },
            { X: 0.9000458717346191, Y: 0.7505350708961487 },
            { X: 0.26908957958221436, Y: 0.7504958510398865 },
          ],
        },
        Id: "5e046e2e-72ba-4fa4-b26b-4a375e443808",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "d8cb97e8-e0f3-4af9-a289-ee2ba4fd43b3",
              "24d9d574-22b9-4b1e-83a1-b8451cbd0f69",
              "296a9ec8-571b-4226-9f87-332330475664",
              "1fe2ad1d-759b-4f94-b6e6-3eb38821ad84",
              "0ecde017-ee98-4756-a5b2-a36e2e542a85",
              "4f81bf24-81a5-4ab0-9ae8-2ab3a0aa2a56",
              "3819d8e9-935d-43f9-a1d4-e6b3ede26dd3",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 11.10045051574707,
        Text: "sake",
        Geometry: {
          BoundingBox: {
            Width: 0.042860276997089386,
            Height: 0.016859060153365135,
            Left: 0.001462332671508193,
            Top: 0.7647098898887634,
          },
          Polygon: [
            { X: 0.001462332671508193, Y: 0.7647098898887634 },
            { X: 0.044321540743112564, Y: 0.7647125720977783 },
            { X: 0.04432260990142822, Y: 0.7815689444541931 },
            { X: 0.0014633703976869583, Y: 0.7815661430358887 },
          ],
        },
        Id: "986e5565-4fc6-42fa-b460-5601d5d7dba8",
        Relationships: [
          { Type: "CHILD", Ids: ["c6a7bbfc-6646-4738-8294-fb72381824cd"] },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 96.93560791015625,
        Text: "social media feed analysis )",
        Geometry: {
          BoundingBox: {
            Width: 0.4081641137599945,
            Height: 0.02979481965303421,
            Left: 0.34112748503685,
            Top: 0.7556111812591553,
          },
          Polygon: [
            { X: 0.34112748503685, Y: 0.7556111812591553 },
            { X: 0.74928879737854, Y: 0.7556366920471191 },
            { X: 0.7492915987968445, Y: 0.7854059934616089 },
            { X: 0.34112975001335144, Y: 0.7853797078132629 },
          ],
        },
        Id: "5636e96a-c4a3-459e-b525-7bb6f24b64c7",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "236398ea-0694-4cc0-97e0-e29eb02fca2a",
              "3bc73f0c-3df4-4fa2-b311-9c99ed39631b",
              "0a1b5d2c-90ae-4797-90a5-39d1fdc6494c",
              "5bf6ee57-7c0c-4270-8a3b-1b081c32790b",
              "2b63568e-e41a-416e-b156-d77b152d6cee",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 97.37258911132812,
        Text: "- Data Pipeline : Allow to move data from one place to another",
        Geometry: {
          BoundingBox: {
            Width: 0.898413360118866,
            Height: 0.036462295800447464,
            Left: 0.0997428297996521,
            Top: 0.8052859306335449,
          },
          Polygon: [
            { X: 0.0997428297996521, Y: 0.8052859306335449 },
            { X: 0.9981523156166077, Y: 0.8053449392318726 },
            { X: 0.9981561899185181, Y: 0.8417482376098633 },
            { X: 0.09974522888660431, Y: 0.8416870832443237 },
          ],
        },
        Id: "51d38d2c-495f-46d8-b438-d98875055dae",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "d4e22620-0822-4b5d-b126-11fcb0388a35",
              "ad34595f-57b4-4bb8-8664-7f41110e1e82",
              "c7bd0aed-d7ee-40c0-9f9a-595f6bda263e",
              "d17076fc-1359-4728-ae28-dc8fae0f0654",
              "3b739bd2-50bd-4f40-98d5-b3944723e448",
              "0e07a290-1f0c-49c4-b81b-5e2e3e90cadc",
              "5aeb1de2-222b-4ecf-90bc-ff24942cd54a",
              "bd4e28da-0814-4236-9aa6-92e97177cb84",
              "36dc582f-4220-4d07-b0d2-83564c676e8b",
              "11737fd9-449d-4096-acfb-0c6c9eb465c5",
              "a0ff93ad-b5c5-4662-9e37-194daee88ccf",
              "0acd3210-dccb-41df-b6b3-47b9f0059975",
              "f706285a-5da8-4c86-894c-5bc0e384f3a3",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 98.0638427734375,
        Text: "(Ex: 53 to Dynmo DB or vise versa)",
        Geometry: {
          BoundingBox: {
            Width: 0.5373533368110657,
            Height: 0.0433843694627285,
            Left: 0.35828715562820435,
            Top: 0.8449699282646179,
          },
          Polygon: [
            { X: 0.35828715562820435, Y: 0.8449699282646179 },
            { X: 0.8956361413002014, Y: 0.8450065851211548 },
            { X: 0.89564049243927, Y: 0.8883543014526367 },
            { X: 0.35829049348831177, Y: 0.8883161544799805 },
          ],
        },
        Id: "9d5e30a5-fbc8-4ede-a1fe-c2d7095c0ee7",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "372de4f2-e467-4aa8-939f-c39c441e87f4",
              "235d437c-4827-4d65-9bc1-d195b608aa90",
              "6659d41e-898e-4637-a986-8c289d29ed82",
              "fb358b1d-9d23-4694-be8c-fc08f84b5bb9",
              "fcfc601a-fba0-485c-a115-3fa3e3417a97",
              "324f4da9-442d-405f-892f-a727d1f6676a",
              "4962f59b-56ef-4816-8946-0aee1058eb97",
              "17b28d09-cb18-4e29-8416-06db6fb1bcec",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 95.08039093017578,
        Text: "- Quick Site: Business Analysis tool",
        Geometry: {
          BoundingBox: {
            Width: 0.5859625339508057,
            Height: 0.036328237503767014,
            Left: 0.09274856001138687,
            Top: 0.897558867931366,
          },
          Polygon: [
            { X: 0.09274856001138687, Y: 0.897558867931366 },
            { X: 0.6787077784538269, Y: 0.8976008296012878 },
            { X: 0.6787110567092896, Y: 0.9338871240615845 },
            { X: 0.09275094419717789, Y: 0.9338437914848328 },
          ],
        },
        Id: "7f937df5-3293-4b20-81b9-5a6436c02127",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "6c4ef185-082d-4906-b3ac-471f4143baad",
              "dd9a7a94-eb38-417c-b966-47d648df310e",
              "a77af076-8a4f-492c-b221-820ce9d314b2",
              "2c09e79c-3b21-40b0-bb38-e629198aed77",
              "4e8549d7-ad11-48c1-ba97-d21b092e433b",
              "aa74efe5-5063-4eb3-a7f4-0d50e4a7b49d",
            ],
          },
        ],
      },
      {
        BlockType: "LINE",
        Confidence: 98.19080352783203,
        Text: "Dashboard with visualizations.",
        Geometry: {
          BoundingBox: {
            Width: 0.47650447487831116,
            Height: 0.03638497367501259,
            Left: 0.3312431871891022,
            Top: 0.9415791630744934,
          },
          Polygon: [
            { X: 0.3312431871891022, Y: 0.9415791630744934 },
            { X: 0.8077441453933716, Y: 0.9416146278381348 },
            { X: 0.8077476620674133, Y: 0.9779641628265381 },
            { X: 0.33124595880508423, Y: 0.977927565574646 },
          ],
        },
        Id: "05847759-653e-45c0-a085-33a0dd0c1687",
        Relationships: [
          {
            Type: "CHILD",
            Ids: [
              "a24e0f75-f41f-44b9-a97e-074ab5fc3e51",
              "8786558c-006b-4cf3-b664-f074db29f524",
              "84e62361-e1ac-4b1e-8c64-f1be1cd59bd0",
            ],
          },
        ],
      },
      {
        BlockType: "WORD",
        Confidence: 89.21529388427734,
        Text: "-",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.03884042799472809,
            Height: 0.002495397813618183,
            Left: 0.6014868021011353,
            Top: 0.0012467927299439907,
          },
          Polygon: [
            { X: 0.6014868021011353, Y: 0.0012467927299439907 },
            { X: 0.6403270363807678, Y: 0.0012473490787670016 },
            { X: 0.6403272747993469, Y: 0.003742190543562174 },
            { X: 0.6014870405197144, Y: 0.003741628024727106 },
          ],
        },
        Id: "8e2de28f-7864-4fc9-8593-abedb7797432",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36685180664062,
        Text: "6",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014405629597604275,
            Height: 0.019310982897877693,
            Left: 0.036536771804094315,
            Top: 0.04603531211614609,
          },
          Polygon: [
            { X: 0.036536771804094315, Y: 0.04603531211614609 },
            { X: 0.05094116926193237, Y: 0.046035557985305786 },
            { X: 0.050942402333021164, Y: 0.06534629315137863 },
            { X: 0.03653798997402191, Y: 0.06534602493047714 },
          ],
        },
        Id: "2c8c808c-1b5b-4d82-966d-26b9060c6565",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36707305908203,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15107512474060059,
            Height: 0.02882058173418045,
            Left: 0.07977069914340973,
            Top: 0.04599154740571976,
          },
          Polygon: [
            { X: 0.07977069914340973, Y: 0.04599154740571976 },
            { X: 0.23084375262260437, Y: 0.045994143933057785 },
            { X: 0.23084582388401031, Y: 0.07481212913990021 },
            { X: 0.07977256923913956, Y: 0.0748092532157898 },
          ],
        },
        Id: "ad01170e-9239-42be-a057-a16afc13ad54",
      },
      {
        BlockType: "WORD",
        Confidence: 96.71449279785156,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.017840977758169174,
            Height: 0.005076917354017496,
            Left: 0.0747474730014801,
            Top: 0.10362396389245987,
          },
          Polygon: [
            { X: 0.0747474730014801, Y: 0.10362396389245987 },
            { X: 0.09258811920881271, Y: 0.10362433642148972 },
            { X: 0.09258845448493958, Y: 0.10870087891817093 },
            { X: 0.07474780082702637, Y: 0.10870050638914108 },
          ],
        },
        Id: "916c51db-fffa-46de-a8fd-e4ed6968a05c",
      },
      {
        BlockType: "WORD",
        Confidence: 97.48167419433594,
        Text: "Snowball",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13543032109737396,
            Height: 0.020021427422761917,
            Left: 0.10675335675477982,
            Top: 0.09340225160121918,
          },
          Polygon: [
            { X: 0.10675335675477982, Y: 0.09340225160121918 },
            { X: 0.24218222498893738, Y: 0.09340499341487885 },
            { X: 0.24218367040157318, Y: 0.11342368274927139 },
            { X: 0.10675468295812607, Y: 0.113420769572258 },
          ],
        },
        Id: "c2442cc8-60b1-4d4c-960b-30b37582241c",
      },
      {
        BlockType: "WORD",
        Confidence: 98.4922103881836,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.008986142463982105,
            Height: 0.016122499480843544,
            Left: 0.2659420669078827,
            Top: 0.09696044027805328,
          },
          Polygon: [
            { X: 0.2659420669078827, Y: 0.09696044027805328 },
            { X: 0.274927020072937, Y: 0.0969606265425682 },
            { X: 0.2749282121658325, Y: 0.11308293789625168 },
            { X: 0.2659432291984558, Y: 0.11308274418115616 },
          ],
        },
        Id: "b84c2df9-4569-4926-aad2-e78f476a9026",
      },
      {
        BlockType: "WORD",
        Confidence: 89.59648132324219,
        Text: "To",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03611995279788971,
            Height: 0.020973462611436844,
            Left: 0.2978725731372833,
            Top: 0.09003637731075287,
          },
          Polygon: [
            { X: 0.2978725731372833, Y: 0.09003637731075287 },
            { X: 0.3339909315109253, Y: 0.09003710001707077 },
            { X: 0.33399254083633423, Y: 0.11100984364748001 },
            { X: 0.2978741526603699, Y: 0.11100906878709793 },
          ],
        },
        Id: "ddaf3e80-5c6b-4503-a8bc-e0984885b848",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36695098876953,
        Text: "move",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07527821511030197,
            Height: 0.01459701731801033,
            Left: 0.3584650754928589,
            Top: 0.09669161587953568,
          },
          Polygon: [
            { X: 0.3584650754928589, Y: 0.09669161587953568 },
            { X: 0.43374210596084595, Y: 0.09669315814971924 },
            { X: 0.43374326825141907, Y: 0.1112886369228363 },
            { X: 0.35846617817878723, Y: 0.11128702759742737 },
          ],
        },
        Id: "5106c169-2e22-4ad8-86b9-395efb4042f3",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36630249023438,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06982769817113876,
            Height: 0.019346797838807106,
            Left: 0.4480498731136322,
            Top: 0.09032490104436874,
          },
          Polygon: [
            { X: 0.4480498731136322, Y: 0.09032490104436874 },
            { X: 0.5178759694099426, Y: 0.09032630175352097 },
            { X: 0.5178775787353516, Y: 0.1096717044711113 },
            { X: 0.44805145263671875, Y: 0.10967022180557251 },
          ],
        },
        Id: "28eb7af0-71ef-4b57-9c04-7235016141b4",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3659896850586,
        Text: "from",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06406120210886002,
            Height: 0.02281551994383335,
            Left: 0.5403546094894409,
            Top: 0.08145606517791748,
          },
          Polygon: [
            { X: 0.5403546094894409, Y: 0.08145606517791748 },
            { X: 0.6044138073921204, Y: 0.08145730942487717 },
            { X: 0.6044158339500427, Y: 0.10427158325910568 },
            { X: 0.5403565764427185, Y: 0.10427024215459824 },
          ],
        },
        Id: "301d3e68-87a9-4f2b-99d4-cdf98996e13e",
      },
      {
        BlockType: "WORD",
        Confidence: 98.5737533569336,
        Text: "storage",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1082027330994606,
            Height: 0.023434583097696304,
            Left: 0.6234022378921509,
            Top: 0.08767351508140564,
          },
          Polygon: [
            { X: 0.6234022378921509, Y: 0.08767351508140564 },
            { X: 0.7316027879714966, Y: 0.08767566084861755 },
            { X: 0.7316049933433533, Y: 0.11110809445381165 },
            { X: 0.623404324054718, Y: 0.1111057847738266 },
          ],
        },
        Id: "501fddb6-0278-4155-8d89-39583cc2b25f",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36707305908203,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03228027746081352,
            Height: 0.021646717563271523,
            Left: 0.7603796124458313,
            Top: 0.08593123406171799,
          },
          Polygon: [
            { X: 0.7603796124458313, Y: 0.08593123406171799 },
            { X: 0.7926577925682068, Y: 0.08593186736106873 },
            { X: 0.7926598787307739, Y: 0.10757794976234436 },
            { X: 0.7603816390037537, Y: 0.10757727175951004 },
          ],
        },
        Id: "c19f45fe-ef14-46c4-9483-7594f2acacb1",
      },
      {
        BlockType: "WORD",
        Confidence: 99.16456604003906,
        Text: "cloud.",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08633309602737427,
            Height: 0.02079862169921398,
            Left: 0.8143402934074402,
            Top: 0.0842130109667778,
          },
          Polygon: [
            { X: 0.8143402934074402, Y: 0.0842130109667778 },
            { X: 0.9006713032722473, Y: 0.0842147022485733 },
            { X: 0.9006733894348145, Y: 0.10501163452863693 },
            { X: 0.8143423199653625, Y: 0.10500982403755188 },
          ],
        },
        Id: "5b888963-df34-4f46-87e4-7f833700f9c7",
      },
      {
        BlockType: "WORD",
        Confidence: 98.20650482177734,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0188741572201252,
            Height: 0.005955555476248264,
            Left: 0.07694760710000992,
            Top: 0.14738084375858307,
          },
          Polygon: [
            { X: 0.07694760710000992, Y: 0.14738084375858307 },
            { X: 0.09582137316465378, Y: 0.14738129079341888 },
            { X: 0.09582176059484482, Y: 0.15333639085292816 },
            { X: 0.07694799453020096, Y: 0.15333594381809235 },
          ],
        },
        Id: "462fe95d-d832-40af-9d03-e6507ac3de4f",
      },
      {
        BlockType: "WORD",
        Confidence: 94.32057189941406,
        Text: "DMS",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07062787562608719,
            Height: 0.02110283263027668,
            Left: 0.1102762520313263,
            Top: 0.13774432241916656,
          },
          Polygon: [
            { X: 0.1102762520313263, Y: 0.13774432241916656 },
            { X: 0.1809026598930359, Y: 0.1377459466457367 },
            { X: 0.18090412020683289, Y: 0.1588471531867981 },
            { X: 0.11027765274047852, Y: 0.1588454395532608 },
          ],
        },
        Id: "96de1088-402a-4f1f-a977-f8758195fd3e",
      },
      {
        BlockType: "WORD",
        Confidence: 96.61939239501953,
        Text: ":",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.008112632669508457,
            Height: 0.014956398867070675,
            Left: 0.18843893706798553,
            Top: 0.13999982178211212,
          },
          Polygon: [
            { X: 0.18843893706798553, Y: 0.13999982178211212 },
            { X: 0.19655053317546844, Y: 0.14000000059604645 },
            { X: 0.19655157625675201, Y: 0.15495622158050537 },
            { X: 0.1884399801492691, Y: 0.15495602786540985 },
          ],
        },
        Id: "53e7abbc-b024-472a-9328-b34815263ceb",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36673736572266,
        Text: "Database",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14077985286712646,
            Height: 0.02104162611067295,
            Left: 0.21430419385433197,
            Top: 0.13792684674263,
          },
          Polygon: [
            { X: 0.21430419385433197, Y: 0.13792684674263 },
            { X: 0.3550824224948883, Y: 0.13793009519577026 },
            { X: 0.35508403182029724, Y: 0.1589684784412384 },
            { X: 0.21430568397045135, Y: 0.15896503627300262 },
          ],
        },
        Id: "e78bcf4b-762f-4173-8b14-e87dc833cf3f",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3670654296875,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15571562945842743,
            Height: 0.025660254061222076,
            Left: 0.37990355491638184,
            Top: 0.13642723858356476,
          },
          Polygon: [
            { X: 0.37990355491638184, Y: 0.13642723858356476 },
            { X: 0.5356169939041138, Y: 0.13643081486225128 },
            { X: 0.5356191992759705, Y: 0.16208748519420624 },
            { X: 0.3799055516719818, Y: 0.16208365559577942 },
          ],
        },
        Id: "6df2b709-0545-466e-af5b-27da4ce7fa3c",
      },
      {
        BlockType: "WORD",
        Confidence: 97.99046325683594,
        Text: "service",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10452452301979065,
            Height: 0.021541880443692207,
            Left: 0.554248571395874,
            Top: 0.13472653925418854,
          },
          Polygon: [
            { X: 0.554248571395874, Y: 0.13472653925418854 },
            { X: 0.6587710976600647, Y: 0.13472892343997955 },
            { X: 0.6587730646133423, Y: 0.1562684178352356 },
            { X: 0.5542504191398621, Y: 0.15626588463783264 },
          ],
        },
        Id: "a1621203-d329-477e-9751-b75dc58d2b6c",
      },
      {
        BlockType: "WORD",
        Confidence: 96.65460205078125,
        Text: "Can",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.052550483494997025,
            Height: 0.024356773123145103,
            Left: 0.21478478610515594,
            Top: 0.17817266285419464,
          },
          Polygon: [
            { X: 0.21478478610515594, Y: 0.17817266285419464 },
            { X: 0.2673334777355194, Y: 0.17817401885986328 },
            { X: 0.26733526587486267, Y: 0.2025294303894043 },
            { X: 0.21478651463985443, Y: 0.20252801477909088 },
          ],
        },
        Id: "a21ed4d0-8b1f-4527-81fd-90c3e513d512",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36680603027344,
        Text: "change",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10402070730924606,
            Height: 0.022131232544779778,
            Left: 0.28777018189430237,
            Top: 0.18350474536418915,
          },
          Polygon: [
            { X: 0.28777018189430237, Y: 0.18350474536418915 },
            { X: 0.39178916811943054, Y: 0.18350744247436523 },
            { X: 0.39179089665412903, Y: 0.20563597977161407 },
            { X: 0.2877718508243561, Y: 0.20563313364982605 },
          ],
        },
        Id: "4e6aff5a-d6d5-46d1-8e9d-6d68fe93caa8",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36647033691406,
        Text: "DB",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.039720967411994934,
            Height: 0.02079050801694393,
            Left: 0.40872517228126526,
            Top: 0.17908042669296265,
          },
          Polygon: [
            { X: 0.40872517228126526, Y: 0.17908042669296265 },
            { X: 0.4484444260597229, Y: 0.17908143997192383 },
            { X: 0.448446124792099, Y: 0.19987092912197113 },
            { X: 0.4087268114089966, Y: 0.19986985623836517 },
          ],
        },
        Id: "b19afa07-f783-4574-93fd-d1b656f18989",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36604309082031,
        Text: "type",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06450746953487396,
            Height: 0.023440616205334663,
            Left: 0.4642232656478882,
            Top: 0.1808473765850067,
          },
          Polygon: [
            { X: 0.4642232656478882, Y: 0.1808473765850067 },
            { X: 0.5287287831306458, Y: 0.18084903061389923 },
            { X: 0.5287307500839233, Y: 0.20428799092769623 },
            { X: 0.4642252027988434, Y: 0.20428621768951416 },
          ],
        },
        Id: "f3ac7ff5-8489-445b-8ab3-29a3a61a829a",
      },
      {
        BlockType: "WORD",
        Confidence: 78.46459197998047,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0595354326069355,
            Height: 0.03035418502986431,
            Left: 0.5455260872840881,
            Top: 0.1699431985616684,
          },
          Polygon: [
            { X: 0.5455260872840881, Y: 0.1699431985616684 },
            { X: 0.6050588488578796, Y: 0.16994468867778778 },
            { X: 0.6050615310668945, Y: 0.20029738545417786 },
            { X: 0.5455286502838135, Y: 0.20029577612876892 },
          ],
        },
        Id: "7f7ce7fe-5ced-4a13-b4dc-d5f430278a05",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36697387695312,
        Text: "Oracle",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09125208109617233,
            Height: 0.021258261054754257,
            Left: 0.6239601969718933,
            Top: 0.17421534657478333,
          },
          Polygon: [
            { X: 0.6239601969718933, Y: 0.17421534657478333 },
            { X: 0.7152103185653687, Y: 0.17421765625476837 },
            { X: 0.7152122855186462, Y: 0.19547361135482788 },
            { X: 0.6239621043205261, Y: 0.1954711675643921 },
          ],
        },
        Id: "256fa3ef-44e1-4477-9a67-ae43822281ca",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36611938476562,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.032392654567956924,
            Height: 0.018360093235969543,
            Left: 0.7355175614356995,
            Top: 0.1758674830198288,
          },
          Polygon: [
            { X: 0.7355175614356995, Y: 0.1758674830198288 },
            { X: 0.7679084539413452, Y: 0.17586830258369446 },
            { X: 0.7679102420806885, Y: 0.19422757625579834 },
            { X: 0.735519289970398, Y: 0.1942267119884491 },
          ],
        },
        Id: "968c88ee-a3e8-4aea-839e-1fbb0edfc748",
      },
      {
        BlockType: "WORD",
        Confidence: 66.19947814941406,
        Text: "Aurora)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12012119591236115,
            Height: 0.03527313843369484,
            Left: 0.7911194562911987,
            Top: 0.16210390627384186,
          },
          Polygon: [
            { X: 0.7911194562911987, Y: 0.16210390627384186 },
            { X: 0.9112370610237122, Y: 0.16210685670375824 },
            { X: 0.9112406969070435, Y: 0.1973770409822464 },
            { X: 0.7911228537559509, Y: 0.19737380743026733 },
          ],
        },
        Id: "f7b6bd41-3e7b-4df7-812e-57bb30690f6e",
      },
      {
        BlockType: "WORD",
        Confidence: 88.60283660888672,
        Text: "-",
        TextType: "PRINTED",
        Geometry: {
          BoundingBox: {
            Width: 0.0163869708776474,
            Height: 0.005283425096422434,
            Left: 0.08124419301748276,
            Top: 0.2360636591911316,
          },
          Polygon: [
            { X: 0.08124419301748276, Y: 0.2360636591911316 },
            { X: 0.0976308137178421, Y: 0.2360641360282898 },
            { X: 0.09763116389513016, Y: 0.24134708940982819 },
            { X: 0.08124453574419022, Y: 0.2413465976715088 },
          ],
        },
        Id: "655ac807-7344-4599-875c-fa26a90bb44d",
      },
      {
        BlockType: "WORD",
        Confidence: 86.4988021850586,
        Text: "SMS :",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08392513543367386,
            Height: 0.028076477348804474,
            Left: 0.1098390445113182,
            Top: 0.22260743379592896,
          },
          Polygon: [
            { X: 0.1098390445113182, Y: 0.22260743379592896 },
            { X: 0.19376221299171448, Y: 0.22260981798171997 },
            { X: 0.19376417994499207, Y: 0.25068390369415283 },
            { X: 0.10984090715646744, Y: 0.2506813704967499 },
          ],
        },
        Id: "e21d0172-6c0d-4e00-b83d-5419333aa698",
      },
      {
        BlockType: "WORD",
        Confidence: 74.47976684570312,
        Text: "Server",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09348054230213165,
            Height: 0.020934229716658592,
            Left: 0.21464025974273682,
            Top: 0.22860932350158691,
          },
          Polygon: [
            { X: 0.21464025974273682, Y: 0.22860932350158691 },
            { X: 0.3081192374229431, Y: 0.228612020611763 },
            { X: 0.30812081694602966, Y: 0.24954354763031006 },
            { X: 0.2146417498588562, Y: 0.24954073131084442 },
          ],
        },
        Id: "40dd066f-a201-4d80-bf5f-7e37949268ca",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36703491210938,
        Text: "Migration",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13368256390094757,
            Height: 0.02263931930065155,
            Left: 0.336058646440506,
            Top: 0.22765423357486725,
          },
          Polygon: [
            { X: 0.336058646440506, Y: 0.22765423357486725 },
            { X: 0.4697393476963043, Y: 0.22765807807445526 },
            { X: 0.46974122524261475, Y: 0.2502935528755188 },
            { X: 0.33606037497520447, Y: 0.2502894997596741 },
          ],
        },
        Id: "91a18563-0568-475a-a31c-3a07a69bcbc4",
      },
      {
        BlockType: "WORD",
        Confidence: 82.71595001220703,
        Text: "Service",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09175627678632736,
            Height: 0.02325499802827835,
            Left: 0.492200642824173,
            Top: 0.22460021078586578,
          },
          Polygon: [
            { X: 0.492200642824173, Y: 0.22460021078586578 },
            { X: 0.5839548707008362, Y: 0.2246028333902359 },
            { X: 0.5839568972587585, Y: 0.24785521626472473 },
            { X: 0.4922025799751282, Y: 0.24785244464874268 },
          ],
        },
        Id: "d0fff458-4f33-4b42-ba14-30cec1f4364d",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36650085449219,
        Text: "(for",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06062009558081627,
            Height: 0.032107170671224594,
            Left: 0.6024201512336731,
            Top: 0.21185217797756195,
          },
          Polygon: [
            { X: 0.6024201512336731, Y: 0.21185217797756195 },
            { X: 0.6630373597145081, Y: 0.21185386180877686 },
            { X: 0.663040280342102, Y: 0.24395935237407684 },
            { X: 0.6024230122566223, Y: 0.2439575493335724 },
          ],
        },
        Id: "926668d8-2f56-49cc-af49-ffb93b751d4f",
      },
      {
        BlockType: "WORD",
        Confidence: 98.17709350585938,
        Text: "VMWare",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1141495332121849,
            Height: 0.01921074278652668,
            Left: 0.678655743598938,
            Top: 0.22125272452831268,
          },
          Polygon: [
            { X: 0.678655743598938, Y: 0.22125272452831268 },
            { X: 0.7928034663200378, Y: 0.22125595808029175 },
            { X: 0.7928053140640259, Y: 0.2404634654521942 },
            { X: 0.6786575317382812, Y: 0.2404600828886032 },
          ],
        },
        Id: "869909f4-862a-44f5-ad84-47f899d9a2b5",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35944366455078,
        Text: "migration)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.14692899584770203,
            Height: 0.031517308205366135,
            Left: 0.8109124302864075,
            Top: 0.21468022465705872,
          },
          Polygon: [
            { X: 0.8109124302864075, Y: 0.21468022465705872 },
            { X: 0.9578381180763245, Y: 0.21468433737754822 },
            { X: 0.9578413963317871, Y: 0.24619753658771515 },
            { X: 0.810915470123291, Y: 0.24619312584400177 },
          ],
        },
        Id: "331b126f-e103-48aa-a50b-66c0804883e8",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3647232055664,
        Text: "7",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.015857301652431488,
            Height: 0.015815632417798042,
            Left: 0.037490829825401306,
            Top: 0.3219350278377533,
          },
          Polygon: [
            { X: 0.037490829825401306, Y: 0.3219350278377533 },
            { X: 0.05334712192416191, Y: 0.3219355642795563 },
            { X: 0.053348131477832794, Y: 0.3377506732940674 },
            { X: 0.037491828203201294, Y: 0.33775007724761963 },
          ],
        },
        Id: "258d6b58-b334-46e2-b7dd-80cbc86e4678",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35963439941406,
        Text: "Analytics",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1411542445421219,
            Height: 0.03146805614233017,
            Left: 0.08341748267412186,
            Top: 0.31330621242523193,
          },
          Polygon: [
            { X: 0.08341748267412186, Y: 0.31330621242523193 },
            { X: 0.22456948459148407, Y: 0.31331104040145874 },
            { X: 0.22457171976566315, Y: 0.3447742462158203 },
            { X: 0.08341953903436661, Y: 0.344769150018692 },
          ],
        },
        Id: "bc620d16-93d2-4062-b6ad-a7d194dcda20",
      },
      {
        BlockType: "WORD",
        Confidence: 99.18500518798828,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.015869880095124245,
            Height: 0.0051360963843762875,
            Left: 0.08723551779985428,
            Top: 0.37174519896507263,
          },
          Polygon: [
            { X: 0.08723551779985428, Y: 0.37174519896507263 },
            { X: 0.10310506075620651, Y: 0.3717458248138428 },
            { X: 0.10310539603233337, Y: 0.37688130140304565 },
            { X: 0.08723585307598114, Y: 0.3768807053565979 },
          ],
        },
        Id: "fc786a01-930a-40bd-bdf1-5ed5fd916634",
      },
      {
        BlockType: "WORD",
        Confidence: 97.999755859375,
        Text: "Athena",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1411888152360916,
            Height: 0.02483201213181019,
            Left: 0.11667905747890472,
            Top: 0.36176347732543945,
          },
          Polygon: [
            { X: 0.11667905747890472, Y: 0.36176347732543945 },
            { X: 0.2578660547733307, Y: 0.3617687523365021 },
            { X: 0.25786787271499634, Y: 0.3865955173969269 },
            { X: 0.11668071150779724, Y: 0.38659000396728516 },
          ],
        },
        Id: "2634f9bf-a537-46a9-954a-894657d438df",
      },
      {
        BlockType: "WORD",
        Confidence: 85.02425384521484,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.005980163812637329,
            Height: 0.01330180000513792,
            Left: 0.25734513998031616,
            Top: 0.3689287006855011,
          },
          Polygon: [
            { X: 0.25734513998031616, Y: 0.3689287006855011 },
            { X: 0.2633243203163147, Y: 0.3689289093017578 },
            { X: 0.2633253037929535, Y: 0.3822304904460907 },
            { X: 0.25734612345695496, Y: 0.3822302520275116 },
          ],
        },
        Id: "3d685610-e570-4006-8692-befa8d859196",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36668395996094,
        Text: "Allows",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08559615910053253,
            Height: 0.02127506025135517,
            Left: 0.2943384349346161,
            Top: 0.3616117238998413,
          },
          Polygon: [
            { X: 0.2943384349346161, Y: 0.3616117238998413 },
            { X: 0.3799329102039337, Y: 0.3616149425506592 },
            { X: 0.3799345791339874, Y: 0.3828867971897125 },
            { X: 0.29434001445770264, Y: 0.3828834891319275 },
          ],
        },
        Id: "b403b506-eb4c-4fdd-9002-c4104777f93e",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36579132080078,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.023777445778250694,
            Height: 0.017564568668603897,
            Left: 0.39999961853027344,
            Top: 0.36509281396865845,
          },
          Polygon: [
            { X: 0.39999961853027344, Y: 0.36509281396865845 },
            { X: 0.42377564311027527, Y: 0.3650937080383301 },
            { X: 0.4237770736217499, Y: 0.38265737891197205 },
            { X: 0.40000101923942566, Y: 0.382656455039978 },
          ],
        },
        Id: "d054d30a-3077-4e14-a7b4-5f662ebd0199",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36589050292969,
        Text: "run",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.049095891416072845,
            Height: 0.013552367687225342,
            Left: 0.44171008467674255,
            Top: 0.3689251244068146,
          },
          Polygon: [
            { X: 0.44171008467674255, Y: 0.3689251244068146 },
            { X: 0.49080485105514526, Y: 0.3689269721508026 },
            { X: 0.490805983543396, Y: 0.3824774920940399 },
            { X: 0.4417111873626709, Y: 0.3824755847454071 },
          ],
        },
        Id: "458329fb-cc7b-49bb-8298-e9333990eb75",
      },
      {
        BlockType: "WORD",
        Confidence: 87.91864776611328,
        Text: "SQL",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.060149602591991425,
            Height: 0.024075696244835854,
            Left: 0.5129888653755188,
            Top: 0.3582650125026703,
          },
          Polygon: [
            { X: 0.5129888653755188, Y: 0.3582650125026703 },
            { X: 0.5731363892555237, Y: 0.35826724767684937 },
            { X: 0.5731384754180908, Y: 0.3823407292366028 },
            { X: 0.5129908919334412, Y: 0.38233840465545654 },
          ],
        },
        Id: "896c1ce9-4521-4aea-82aa-99d78e0546f3",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3657455444336,
        Text: "queries",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10673169046640396,
            Height: 0.025702182203531265,
            Left: 0.5892306566238403,
            Top: 0.3625255823135376,
          },
          Polygon: [
            { X: 0.5892306566238403, Y: 0.3625255823135376 },
            { X: 0.6959599852561951, Y: 0.36252957582473755 },
            { X: 0.6959623694419861, Y: 0.38822776079177856 },
            { X: 0.5892329216003418, Y: 0.3882235884666443 },
          ],
        },
        Id: "01b09bff-15c8-410f-86f7-189e77f67d26",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35543823242188,
        Text: "on",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.038200609385967255,
            Height: 0.015264461748301983,
            Left: 0.7167121767997742,
            Top: 0.36724671721458435,
          },
          Polygon: [
            { X: 0.7167121767997742, Y: 0.36724671721458435 },
            { X: 0.7549113631248474, Y: 0.36724817752838135 },
            { X: 0.754912793636322, Y: 0.3825111985206604 },
            { X: 0.7167136073112488, Y: 0.382509708404541 },
          ],
        },
        Id: "a63f27b8-3945-4072-8f27-e7b7f362c288",
      },
      {
        BlockType: "WORD",
        Confidence: 83.97071075439453,
        Text: "53",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.03726997599005699,
            Height: 0.023797890171408653,
            Left: 0.77936190366745,
            Top: 0.358839213848114,
          },
          Polygon: [
            { X: 0.77936190366745, Y: 0.358839213848114 },
            { X: 0.8166295886039734, Y: 0.35884061455726624 },
            { X: 0.8166318535804749, Y: 0.3826371133327484 },
            { X: 0.7793641686439514, Y: 0.3826356828212738 },
          ],
        },
        Id: "1b849e26-1141-458e-bb51-f6c3e0667ea8",
      },
      {
        BlockType: "WORD",
        Confidence: 97.70367431640625,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.01636377163231373,
            Height: 0.005262486170977354,
            Left: 0.08883224427700043,
            Top: 0.4163726568222046,
          },
          Polygon: [
            { X: 0.08883224427700043, Y: 0.4163726568222046 },
            { X: 0.10519567131996155, Y: 0.4163733124732971 },
            { X: 0.1051960214972496, Y: 0.42163515090942383 },
            { X: 0.08883259445428848, Y: 0.4216344654560089 },
          ],
        },
        Id: "4c9c10fa-d222-4cb3-acae-d8c8720ef8c5",
      },
      {
        BlockType: "WORD",
        Confidence: 77.05601501464844,
        Text: "EMR :",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1069146990776062,
            Height: 0.02212417684495449,
            Left: 0.10777058452367783,
            Top: 0.4085155129432678,
          },
          Polygon: [
            { X: 0.10777058452367783, Y: 0.4085155129432678 },
            { X: 0.21468371152877808, Y: 0.40851983428001404 },
            { X: 0.21468527615070343, Y: 0.43063968420028687 },
            { X: 0.10777204483747482, Y: 0.4306352138519287 },
          ],
        },
        Id: "ef16f31c-c591-4758-888a-cca4f687d190",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36643981933594,
        Text: "Elastic",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09851018339395523,
            Height: 0.02138585038483143,
            Left: 0.2368573546409607,
            Top: 0.4094217121601105,
          },
          Polygon: [
            { X: 0.2368573546409607, Y: 0.4094217121601105 },
            { X: 0.335365891456604, Y: 0.40942567586898804 },
            { X: 0.3353675305843353, Y: 0.43080756068229675 },
            { X: 0.23685888946056366, Y: 0.43080344796180725 },
          ],
        },
        Id: "92ea5032-d8e2-410f-ac27-95359421b9ab",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3627700805664,
        Text: "Map",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06358043849468231,
            Height: 0.024224726483225822,
            Left: 0.3530481457710266,
            Top: 0.41023191809654236,
          },
          Polygon: [
            { X: 0.3530481457710266, Y: 0.41023191809654236 },
            { X: 0.4166266620159149, Y: 0.4102344810962677 },
            { X: 0.41662856936454773, Y: 0.43445664644241333 },
            { X: 0.35305002331733704, Y: 0.43445396423339844 },
          ],
        },
        Id: "4ee2c4b6-363c-4de5-929e-13d6fbef5dd7",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36664581298828,
        Text: "Reduce",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11050237715244293,
            Height: 0.021193062886595726,
            Left: 0.4422549307346344,
            Top: 0.4097899794578552,
          },
          Polygon: [
            { X: 0.4422549307346344, Y: 0.4097899794578552 },
            { X: 0.5527554750442505, Y: 0.4097944498062134 },
            { X: 0.5527573227882385, Y: 0.4309830665588379 },
            { X: 0.4422566592693329, Y: 0.4309784471988678 },
          ],
        },
        Id: "73069dca-e4c5-47b5-add6-ffa61b5c0e83",
      },
      {
        BlockType: "WORD",
        Confidence: 99.30615997314453,
        Text: "(for",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06684711575508118,
            Height: 0.031093325465917587,
            Left: 0.5826448202133179,
            Top: 0.4001190960407257,
          },
          Polygon: [
            { X: 0.5826448202133179, Y: 0.4001190960407257 },
            { X: 0.6494891047477722, Y: 0.4001217484474182 },
            { X: 0.6494919061660767, Y: 0.4312124252319336 },
            { X: 0.5826475024223328, Y: 0.43120962381362915 },
          ],
        },
        Id: "24eb57f9-9bfa-4c75-b9f0-05c86ffbfa13",
      },
      {
        BlockType: "WORD",
        Confidence: 99.21410369873047,
        Text: "BigData)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1489904373884201,
            Height: 0.0298595167696476,
            Left: 0.6668903827667236,
            Top: 0.40236830711364746,
          },
          Polygon: [
            { X: 0.6668903827667236, Y: 0.40236830711364746 },
            { X: 0.8158779144287109, Y: 0.402374267578125 },
            { X: 0.8158808350563049, Y: 0.43222782015800476 },
            { X: 0.6668931245803833, Y: 0.43222159147262573 },
          ],
        },
        Id: "ea7fea75-1da6-47f9-8139-243a64fbe322",
      },
      {
        BlockType: "WORD",
        Confidence: 76.08629608154297,
        Text: "uses",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.058950360864400864,
            Height: 0.018109798431396484,
            Left: 0.23859310150146484,
            Top: 0.4542238712310791,
          },
          Polygon: [
            { X: 0.23859310150146484, Y: 0.4542238712310791 },
            { X: 0.29754212498664856, Y: 0.45422643423080444 },
            { X: 0.297543466091156, Y: 0.4723336696624756 },
            { X: 0.2385944128036499, Y: 0.47233107686042786 },
          ],
        },
        Id: "9300283e-7468-4a7f-bb98-b4a673eff4ed",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36590576171875,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.025823360309004784,
            Height: 0.015865616500377655,
            Left: 0.308732271194458,
            Top: 0.45684072375297546,
          },
          Polygon: [
            { X: 0.308732271194458, Y: 0.45684072375297546 },
            { X: 0.33455440402030945, Y: 0.4568418562412262 },
            { X: 0.33455562591552734, Y: 0.4727063477039337 },
            { X: 0.3087334632873535, Y: 0.4727051854133606 },
          ],
        },
        Id: "ae82be0e-d144-46d6-ae1b-c265bd577771",
      },
      {
        BlockType: "WORD",
        Confidence: 98.0293960571289,
        Text: "process",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09473863244056702,
            Height: 0.01798223704099655,
            Left: 0.3566465675830841,
            Top: 0.4582534730434418,
          },
          Polygon: [
            { X: 0.3566465675830841, Y: 0.4582534730434418 },
            { X: 0.4513837397098541, Y: 0.4582575857639313 },
            { X: 0.4513852000236511, Y: 0.47623568773269653 },
            { X: 0.35664793848991394, Y: 0.4762314558029175 },
          ],
        },
        Id: "d991e9d9-cbfe-425a-a032-9f66744928d9",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36644744873047,
        Text: "large",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07639548927545547,
            Height: 0.02257378399372101,
            Left: 0.4727493226528168,
            Top: 0.45386552810668945,
          },
          Polygon: [
            { X: 0.4727493226528168, Y: 0.45386552810668945 },
            { X: 0.5491428375244141, Y: 0.4538688063621521 },
            { X: 0.5491448044776917, Y: 0.47643929719924927 },
            { X: 0.4727511703968048, Y: 0.47643589973449707 },
          ],
        },
        Id: "9adafda6-b8d8-4f74-91be-da891e0402a7",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36679077148438,
        Text: "amount",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.125372976064682,
            Height: 0.01754792220890522,
            Left: 0.5711298584938049,
            Top: 0.45438897609710693,
          },
          Polygon: [
            { X: 0.5711298584938049, Y: 0.45438897609710693 },
            { X: 0.6965011954307556, Y: 0.4543944001197815 },
            { X: 0.6965028047561646, Y: 0.4719368815422058 },
            { X: 0.5711313486099243, Y: 0.4719313383102417 },
          ],
        },
        Id: "d52dae89-4cc4-4ee4-a242-0d69cb1b31ed",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36640167236328,
        Text: "of",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.031308338046073914,
            Height: 0.025979692116379738,
            Left: 0.7173961400985718,
            Top: 0.452830970287323,
          },
          Polygon: [
            { X: 0.7173961400985718, Y: 0.452830970287323 },
            { X: 0.7487019896507263, Y: 0.45283234119415283 },
            { X: 0.7487044334411621, Y: 0.4788106679916382 },
            { X: 0.7173985242843628, Y: 0.47880926728248596 },
          ],
        },
        Id: "3c1d46fb-8ac5-4a26-a86f-6f633f14a00a",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36662292480469,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.07658044248819351,
            Height: 0.021955614909529686,
            Left: 0.7710433006286621,
            Top: 0.45279502868652344,
          },
          Polygon: [
            { X: 0.7710433006286621, Y: 0.45279502868652344 },
            { X: 0.8476215600967407, Y: 0.45279833674430847 },
            { X: 0.8476237058639526, Y: 0.4747506380081177 },
            { X: 0.7710453867912292, Y: 0.4747472107410431 },
          ],
        },
        Id: "01e4f0b0-90ff-45d8-8cf0-2f2e00105e2e",
      },
      {
        BlockType: "WORD",
        Confidence: 84.08716583251953,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0651424452662468,
            Height: 0.029149893671274185,
            Left: 0.23576074838638306,
            Top: 0.48299339413642883,
          },
          Polygon: [
            { X: 0.23576074838638306, Y: 0.48299339413642883 },
            { X: 0.30090102553367615, Y: 0.4829963445663452 },
            { X: 0.30090320110321045, Y: 0.5121433138847351 },
            { X: 0.2357628494501114, Y: 0.5121402144432068 },
          ],
        },
        Id: "a8162906-8159-4d0c-9a59-c4e0a3f7fae0",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36674499511719,
        Text: "log",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.041293665766716,
            Height: 0.02200339548289776,
            Left: 0.32539334893226624,
            Top: 0.49236685037612915,
          },
          Polygon: [
            { X: 0.32539334893226624, Y: 0.49236685037612915 },
            { X: 0.36668530106544495, Y: 0.49236875772476196 },
            { X: 0.36668702960014343, Y: 0.5143702626228333 },
            { X: 0.32539501786231995, Y: 0.5143682956695557 },
          ],
        },
        Id: "f944d81c-9794-4aec-b017-62346e22c54e",
      },
      {
        BlockType: "WORD",
        Confidence: 98.45138549804688,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10862583667039871,
            Height: 0.021632615476846695,
            Left: 0.38380667567253113,
            Top: 0.49250328540802,
          },
          Polygon: [
            { X: 0.38380667567253113, Y: 0.49250328540802 },
            { X: 0.492430716753006, Y: 0.49250826239585876 },
            { X: 0.49243253469467163, Y: 0.5141358971595764 },
            { X: 0.3838083744049072, Y: 0.5141307711601257 },
          ],
        },
        Id: "81125f25-f0b1-4043-850c-cc4e9d2fd3dd",
      },
      {
        BlockType: "WORD",
        Confidence: 91.97740173339844,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.022907180711627007,
            Height: 0.028257938101887703,
            Left: 0.5168147087097168,
            Top: 0.48557141423225403,
          },
          Polygon: [
            { X: 0.5168147087097168, Y: 0.48557141423225403 },
            { X: 0.5397195219993591, Y: 0.4855724573135376 },
            { X: 0.5397219061851501, Y: 0.5138293504714966 },
            { X: 0.5168170928955078, Y: 0.5138282775878906 },
          ],
        },
        Id: "f0c1ce11-be9b-4eca-b75b-ff42e0def6ff",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35669708251953,
        Text: "web",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.053273845463991165,
            Height: 0.014926474541425705,
            Left: 0.5488066673278809,
            Top: 0.4966414272785187,
          },
          Polygon: [
            { X: 0.5488066673278809, Y: 0.4966414272785187 },
            { X: 0.6020792126655579, Y: 0.49664390087127686 },
            { X: 0.6020805239677429, Y: 0.5115678906440735 },
            { X: 0.5488079786300659, Y: 0.5115653872489929 },
          ],
        },
        Id: "e7121485-3587-4400-90b7-66fc26e6d603",
      },
      {
        BlockType: "WORD",
        Confidence: 97.09354400634766,
        Text: "indexing)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.13704262673854828,
            Height: 0.03151167929172516,
            Left: 0.6216771602630615,
            Top: 0.489740788936615,
          },
          Polygon: [
            { X: 0.6216771602630615, Y: 0.489740788936615 },
            { X: 0.7587167620658875, Y: 0.4897470474243164 },
            { X: 0.7587197422981262, Y: 0.521252453327179 },
            { X: 0.621679961681366, Y: 0.5212459564208984 },
          ],
        },
        Id: "d6e01270-72e4-4dae-b793-4be13b801dad",
      },
      {
        BlockType: "WORD",
        Confidence: 72.97914123535156,
        Text: "uses",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06561841070652008,
            Height: 0.02013334073126316,
            Left: 0.24123798310756683,
            Top: 0.542182981967926,
          },
          Polygon: [
            { X: 0.24123798310756683, Y: 0.542182981967926 },
            { X: 0.30685487389564514, Y: 0.5421862006187439 },
            { X: 0.3068563938140869, Y: 0.562316358089447 },
            { X: 0.24123942852020264, Y: 0.5623130202293396 },
          ],
        },
        Id: "a7f8943e-9c8f-48f8-8ca6-6907f235a6b2",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36396789550781,
        Text: "Hadoop",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10354910045862198,
            Height: 0.023441210389137268,
            Left: 0.33228057622909546,
            Top: 0.5410767197608948,
          },
          Polygon: [
            { X: 0.33228057622909546, Y: 0.5410767197608948 },
            { X: 0.4358277916908264, Y: 0.5410817265510559 },
            { X: 0.43582966923713684, Y: 0.5645179152488708 },
            { X: 0.3322823643684387, Y: 0.5645127296447754 },
          ],
        },
        Id: "8764bedd-14e2-4bc9-a83c-879af3e11519",
      },
      {
        BlockType: "WORD",
        Confidence: 99.45543670654297,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.022928213700652122,
            Height: 0.028640231117606163,
            Left: 0.4470229148864746,
            Top: 0.535284161567688,
          },
          Polygon: [
            { X: 0.4470229148864746, Y: 0.535284161567688 },
            { X: 0.46994876861572266, Y: 0.535285234451294 },
            { X: 0.4699511229991913, Y: 0.5639243721961975 },
            { X: 0.44702523946762085, Y: 0.5639232397079468 },
          ],
        },
        Id: "f5036f4b-8228-49f6-80d7-00744e696173",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36656951904297,
        Text: "Apache",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10563737899065018,
            Height: 0.02628360316157341,
            Left: 0.47634583711624146,
            Top: 0.5370699167251587,
          },
          Polygon: [
            { X: 0.47634583711624146, Y: 0.5370699167251587 },
            { X: 0.5819809436798096, Y: 0.5370750427246094 },
            { X: 0.581983208656311, Y: 0.5633535385131836 },
            { X: 0.47634801268577576, Y: 0.5633481740951538 },
          ],
        },
        Id: "478b0ddb-ea8b-4dc4-b840-14be34d7aec1",
      },
      {
        BlockType: "WORD",
        Confidence: 98.19825744628906,
        Text: "spark",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08690358698368073,
            Height: 0.021587735041975975,
            Left: 0.5977298617362976,
            Top: 0.5453974008560181,
          },
          Polygon: [
            { X: 0.5977298617362976, Y: 0.5453974008560181 },
            { X: 0.6846314668655396, Y: 0.5454016327857971 },
            { X: 0.6846334934234619, Y: 0.5669851303100586 },
            { X: 0.5977317690849304, Y: 0.5669807195663452 },
          ],
        },
        Id: "4c6e2ec2-a2cf-4f0c-9af1-34d83a5a962d",
      },
      {
        BlockType: "WORD",
        Confidence: 98.80303955078125,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.016285836696624756,
            Height: 0.025896668434143066,
            Left: 0.7050395607948303,
            Top: 0.5397683382034302,
          },
          Polygon: [
            { X: 0.7050395607948303, Y: 0.5397683382034302 },
            { X: 0.7213229537010193, Y: 0.539769172668457 },
            { X: 0.7213253974914551, Y: 0.5656650066375732 },
            { X: 0.7050419449806213, Y: 0.5656642317771912 },
          ],
        },
        Id: "330769ac-467d-4f4c-89db-7a020f1a62e9",
      },
      {
        BlockType: "WORD",
        Confidence: 99.34966278076172,
        Text: "Flunk",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09907114505767822,
            Height: 0.023422010242938995,
            Left: 0.7295132279396057,
            Top: 0.543043851852417,
          },
          Polygon: [
            { X: 0.7295132279396057, Y: 0.543043851852417 },
            { X: 0.8285820484161377, Y: 0.5430487394332886 },
            { X: 0.8285843729972839, Y: 0.5664658546447754 },
            { X: 0.7295153737068176, Y: 0.566460907459259 },
          ],
        },
        Id: "dda6bf5f-10a2-447e-a278-b68f14fc2143",
      },
      {
        BlockType: "WORD",
        Confidence: 96.38652038574219,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.01451823115348816,
            Height: 0.004806180018931627,
            Left: 0.09321800619363785,
            Top: 0.5964889526367188,
          },
          Polygon: [
            { X: 0.09321800619363785, Y: 0.5964889526367188 },
            { X: 0.10773591697216034, Y: 0.5964897274971008 },
            { X: 0.10773623734712601, Y: 0.6012951135635376 },
            { X: 0.09321831911802292, Y: 0.6012943387031555 },
          ],
        },
        Id: "367736c6-7ef9-4da4-9d84-02ca4aef854f",
      },
      {
        BlockType: "WORD",
        Confidence: 98.17149353027344,
        Text: "Cloud",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09505657851696014,
            Height: 0.021390488371253014,
            Left: 0.11079498380422592,
            Top: 0.5868740081787109,
          },
          Polygon: [
            { X: 0.11079498380422592, Y: 0.5868740081787109 },
            { X: 0.2058500498533249, Y: 0.5868789553642273 },
            { X: 0.20585155487060547, Y: 0.6082645058631897 },
            { X: 0.11079639941453934, Y: 0.6082594394683838 },
          ],
        },
        Id: "3ff69bb6-042d-407c-84b0-9e8242041087",
      },
      {
        BlockType: "WORD",
        Confidence: 68.04627227783203,
        Text: "search",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10081164538860321,
            Height: 0.01911812089383602,
            Left: 0.22548897564411163,
            Top: 0.5873842239379883,
          },
          Polygon: [
            { X: 0.22548897564411163, Y: 0.5873842239379883 },
            { X: 0.32629916071891785, Y: 0.5873894691467285 },
            { X: 0.32630062103271484, Y: 0.60650235414505 },
            { X: 0.22549033164978027, Y: 0.606497049331665 },
          ],
        },
        Id: "e94d3e53-e78f-47c7-8964-9c224583b83f",
      },
      {
        BlockType: "WORD",
        Confidence: 90.83443450927734,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.007759845349937677,
            Height: 0.014358659274876118,
            Left: 0.3448973298072815,
            Top: 0.5903122425079346,
          },
          Polygon: [
            { X: 0.3448973298072815, Y: 0.5903122425079346 },
            { X: 0.3526560664176941, Y: 0.590312659740448 },
            { X: 0.35265716910362244, Y: 0.6046708822250366 },
            { X: 0.34489843249320984, Y: 0.6046704649925232 },
          ],
        },
        Id: "733d3960-e842-4344-89d3-4c2eee31379c",
      },
      {
        BlockType: "WORD",
        Confidence: 98.81375885009766,
        Text: "Fully",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06845260411500931,
            Height: 0.0251480583101511,
            Left: 0.3727635145187378,
            Top: 0.5876338481903076,
          },
          Polygon: [
            { X: 0.3727635145187378, Y: 0.5876338481903076 },
            { X: 0.44121408462524414, Y: 0.5876374244689941 },
            { X: 0.4412161111831665, Y: 0.6127819418907166 },
            { X: 0.3727654814720154, Y: 0.6127782464027405 },
          ],
        },
        Id: "8991bcc2-413e-4293-bb7c-e6c57700d6cb",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36693572998047,
        Text: "managed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12536928057670593,
            Height: 0.02561083622276783,
            Left: 0.4629303514957428,
            Top: 0.587952733039856,
          },
          Polygon: [
            { X: 0.4629303514957428, Y: 0.587952733039856 },
            { X: 0.588297426700592, Y: 0.5879592299461365 },
            { X: 0.5882996320724487, Y: 0.6135635375976562 },
            { X: 0.46293243765830994, Y: 0.6135568618774414 },
          ],
        },
        Id: "05431e41-8245-4b4a-ba6c-d58815b4402c",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36576843261719,
        Text: "by",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.030519336462020874,
            Height: 0.02227284386754036,
            Left: 0.6030470728874207,
            Top: 0.5887662172317505,
          },
          Polygon: [
            { X: 0.6030470728874207, Y: 0.5887662172317505 },
            { X: 0.6335644125938416, Y: 0.5887677669525146 },
            { X: 0.6335664391517639, Y: 0.6110390424728394 },
            { X: 0.6030490398406982, Y: 0.6110374331474304 },
          ],
        },
        Id: "f40e7604-e701-425f-926a-6baba1799c84",
      },
      {
        BlockType: "WORD",
        Confidence: 94.3775405883789,
        Text: "AWS",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05812302231788635,
            Height: 0.02335694432258606,
            Left: 0.6594395637512207,
            Top: 0.5877166390419006,
          },
          Polygon: [
            { X: 0.6594395637512207, Y: 0.5877166390419006 },
            { X: 0.7175604104995728, Y: 0.5877196192741394 },
            { X: 0.7175625562667847, Y: 0.6110735535621643 },
            { X: 0.6594416499137878, Y: 0.611070454120636 },
          ],
        },
        Id: "0c8a0c8c-83d9-448f-adee-f3dfa1a3ffb8",
      },
      {
        BlockType: "WORD",
        Confidence: 97.31270599365234,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014975287020206451,
            Height: 0.00492735905572772,
            Left: 0.0992547869682312,
            Top: 0.6394599080085754,
          },
          Polygon: [
            { X: 0.0992547869682312, Y: 0.6394599080085754 },
            { X: 0.11422973871231079, Y: 0.6394607424736023 },
            { X: 0.11423006653785706, Y: 0.6443872451782227 },
            { X: 0.09925510734319687, Y: 0.6443864703178406 },
          ],
        },
        Id: "c77d0dcd-9688-499c-aed6-7c3e1cc344a7",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35269165039062,
        Text: "Elastic",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0981290265917778,
            Height: 0.020863965153694153,
            Left: 0.11994772404432297,
            Top: 0.6301288604736328,
          },
          Polygon: [
            { X: 0.11994772404432297, Y: 0.6301288604736328 },
            { X: 0.21807527542114258, Y: 0.6301342248916626 },
            { X: 0.21807675063610077, Y: 0.6509928703308105 },
            { X: 0.11994911730289459, Y: 0.6509873867034912 },
          ],
        },
        Id: "bfc99461-5217-47b2-adfe-b01cb5986bfb",
      },
      {
        BlockType: "WORD",
        Confidence: 71.72865295410156,
        Text: "Search",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09264495968818665,
            Height: 0.018702300265431404,
            Left: 0.2322705090045929,
            Top: 0.6316003799438477,
          },
          Polygon: [
            { X: 0.2322705090045929, Y: 0.6316003799438477 },
            { X: 0.3249140679836273, Y: 0.6316054463386536 },
            { X: 0.32491546869277954, Y: 0.6503026485443115 },
            { X: 0.23227185010910034, Y: 0.6502975225448608 },
          ],
        },
        Id: "e666c708-f915-4116-b589-0b8c59718b8e",
      },
      {
        BlockType: "WORD",
        Confidence: 90.7107925415039,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.005848905071616173,
            Height: 0.014745289459824562,
            Left: 0.34280678629875183,
            Top: 0.6352688074111938,
          },
          Polygon: [
            { X: 0.34280678629875183, Y: 0.6352688074111938 },
            { X: 0.348654568195343, Y: 0.6352691650390625 },
            { X: 0.34865570068359375, Y: 0.6500141024589539 },
            { X: 0.34280791878700256, Y: 0.65001380443573 },
          ],
        },
        Id: "b1c3430d-0b46-4e5f-b41c-98afd5df2e9b",
      },
      {
        BlockType: "WORD",
        Confidence: 85.8834228515625,
        Text: "Managed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1175316721200943,
            Height: 0.02513299323618412,
            Left: 0.36246973276138306,
            Top: 0.6297962665557861,
          },
          Polygon: [
            { X: 0.36246973276138306, Y: 0.6297962665557861 },
            { X: 0.4799993336200714, Y: 0.6298027038574219 },
            { X: 0.48000141978263855, Y: 0.6549292802810669 },
            { X: 0.36247169971466064, Y: 0.6549226641654968 },
          ],
        },
        Id: "2ffcea7d-c860-46d8-9c19-2b8f3cbec6d3",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36578369140625,
        Text: "by",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.027450107038021088,
            Height: 0.02203645184636116,
            Left: 0.5001623034477234,
            Top: 0.6334637999534607,
          },
          Polygon: [
            { X: 0.5001623034477234, Y: 0.6334637999534607 },
            { X: 0.5276105403900146, Y: 0.6334652900695801 },
            { X: 0.5276123881340027, Y: 0.6555002331733704 },
            { X: 0.5001641511917114, Y: 0.655498743057251 },
          ],
        },
        Id: "091c683c-32dc-4b28-886e-db784c378750",
      },
      {
        BlockType: "WORD",
        Confidence: 99.26242065429688,
        Text: "Open",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06200173869729042,
            Height: 0.021077835932374,
            Left: 0.5589406490325928,
            Top: 0.6338815689086914,
          },
          Polygon: [
            { X: 0.5589406490325928, Y: 0.6338815689086914 },
            { X: 0.6209405064582825, Y: 0.6338849663734436 },
            { X: 0.6209424138069153, Y: 0.6549594402313232 },
            { X: 0.558942437171936, Y: 0.6549559235572815 },
          ],
        },
        Id: "71c87364-6e63-4484-bc94-695b55314b1a",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36705780029297,
        Text: "source",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09079290181398392,
            Height: 0.017172090709209442,
            Left: 0.6336194276809692,
            Top: 0.638036847114563,
          },
          Polygon: [
            { X: 0.6336194276809692, Y: 0.638036847114563 },
            { X: 0.7244107127189636, Y: 0.6380418539047241 },
            { X: 0.7244123220443726, Y: 0.655208945274353 },
            { X: 0.6336209774017334, Y: 0.6552038788795471 },
          ],
        },
        Id: "33054347-515a-4f49-bbd4-71814bbf6201",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36632537841797,
        Text: "services",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10656499117612839,
            Height: 0.020411057397723198,
            Left: 0.7478154301643372,
            Top: 0.6359873414039612,
          },
          Polygon: [
            { X: 0.7478154301643372, Y: 0.6359873414039612 },
            { X: 0.8543784022331238, Y: 0.6359931826591492 },
            { X: 0.8543804287910461, Y: 0.656398355960846 },
            { X: 0.74781733751297, Y: 0.6563923954963684 },
          ],
        },
        Id: "76a99a45-4e75-49e2-8897-59893947db43",
      },
      {
        BlockType: "WORD",
        Confidence: 98.43539428710938,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.014957834035158157,
            Height: 0.0059789507649838924,
            Left: 0.09840289503335953,
            Top: 0.6819766163825989,
          },
          Polygon: [
            { X: 0.09840289503335953, Y: 0.6819766163825989 },
            { X: 0.11336033046245575, Y: 0.6819774508476257 },
            { X: 0.11336073279380798, Y: 0.6879555583000183 },
            { X: 0.09840328991413116, Y: 0.6879546642303467 },
          ],
        },
        Id: "7c1bed59-377d-4a28-a388-895496ce4e7f",
      },
      {
        BlockType: "WORD",
        Confidence: 98.15638732910156,
        Text: "Kinesis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10964084416627884,
            Height: 0.024460041895508766,
            Left: 0.126067653298378,
            Top: 0.674176037311554,
          },
          Polygon: [
            { X: 0.126067653298378, Y: 0.674176037311554 },
            { X: 0.23570674657821655, Y: 0.6741822957992554 },
            { X: 0.23570850491523743, Y: 0.6986360549926758 },
            { X: 0.12606929242610931, Y: 0.69862961769104 },
          ],
        },
        Id: "a0e1885c-ca2e-4cea-87b8-ad2a9906fc88",
      },
      {
        BlockType: "WORD",
        Confidence: 99.34100341796875,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.007225071545690298,
            Height: 0.015363181941211224,
            Left: 0.2582762837409973,
            Top: 0.6804846525192261,
          },
          Polygon: [
            { X: 0.2582762837409973, Y: 0.6804846525192261 },
            { X: 0.2655002474784851, Y: 0.6804850697517395 },
            { X: 0.26550135016441345, Y: 0.6958478093147278 },
            { X: 0.25827741622924805, Y: 0.6958473920822144 },
          ],
        },
        Id: "387b67d6-0c5a-4a57-b6ad-bfb9ff5ef9e2",
      },
      {
        BlockType: "WORD",
        Confidence: 96.72480010986328,
        Text: "Streaming",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.12799622118473053,
            Height: 0.027118662372231483,
            Left: 0.2906518578529358,
            Top: 0.6773728132247925,
          },
          Polygon: [
            { X: 0.2906518578529358, Y: 0.6773728132247925 },
            { X: 0.4186459183692932, Y: 0.6773802042007446 },
            { X: 0.4186480939388275, Y: 0.7044914960861206 },
            { X: 0.29065388441085815, Y: 0.7044839262962341 },
          ],
        },
        Id: "9651ff79-924d-40fa-8d67-9363d706a4f2",
      },
      {
        BlockType: "WORD",
        Confidence: 77.27251434326172,
        Text: "2",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.020832674577832222,
            Height: 0.01809934712946415,
            Left: 0.4386851489543915,
            Top: 0.6797184944152832,
          },
          Polygon: [
            { X: 0.4386851489543915, Y: 0.6797184944152832 },
            { X: 0.45951634645462036, Y: 0.6797196865081787 },
            { X: 0.45951783657073975, Y: 0.697817862033844 },
            { X: 0.4386866092681885, Y: 0.6978166103363037 },
          ],
        },
        Id: "51d61a6e-ecb9-4a0c-80e9-bd4e62a179b6",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36698150634766,
        Text: "analyzing",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1356498897075653,
            Height: 0.027334395796060562,
            Left: 0.46989303827285767,
            Top: 0.6787107586860657,
          },
          Polygon: [
            { X: 0.46989303827285767, Y: 0.6787107586860657 },
            { X: 0.6055405139923096, Y: 0.6787185668945312 },
            { X: 0.6055428981781006, Y: 0.7060451507568359 },
            { X: 0.46989527344703674, Y: 0.7060371041297913 },
          ],
        },
        Id: "6ca2c2c4-2389-4808-9ef4-fd139697e0c0",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3660888671875,
        Text: "real",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05365389585494995,
            Height: 0.01948964037001133,
            Left: 0.6379846930503845,
            Top: 0.6823374032974243,
          },
          Polygon: [
            { X: 0.6379846930503845, Y: 0.6823374032974243 },
            { X: 0.6916368007659912, Y: 0.6823405027389526 },
            { X: 0.6916385889053345, Y: 0.7018270492553711 },
            { X: 0.637986421585083, Y: 0.701823890209198 },
          ],
        },
        Id: "f754c9a2-324a-4a83-9a2a-a6d2febd8c65",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3660659790039,
        Text: "time",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06393954902887344,
            Height: 0.021105708554387093,
            Left: 0.7109259366989136,
            Top: 0.6804969906806946,
          },
          Polygon: [
            { X: 0.7109259366989136, Y: 0.6804969906806946 },
            { X: 0.7748634815216064, Y: 0.6805006861686707 },
            { X: 0.7748655080795288, Y: 0.7016026973724365 },
            { X: 0.7109279036521912, Y: 0.7015989422798157 },
          ],
        },
        Id: "acab3faa-265b-45ec-b2bc-9073afc53942",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36692810058594,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06779445707798004,
            Height: 0.019772112369537354,
            Left: 0.7881926894187927,
            Top: 0.6816446781158447,
          },
          Polygon: [
            { X: 0.7881926894187927, Y: 0.6816446781158447 },
            { X: 0.8559852242469788, Y: 0.6816485524177551 },
            { X: 0.8559871912002563, Y: 0.7014167904853821 },
            { X: 0.7881945967674255, Y: 0.7014127969741821 },
          ],
        },
        Id: "d0575209-6417-47fd-ae5c-013fb2524151",
      },
      {
        BlockType: "WORD",
        Confidence: 98.98388671875,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0550447516143322,
            Height: 0.032168690115213394,
            Left: 0.26908689737319946,
            Top: 0.7137086987495422,
          },
          Polygon: [
            { X: 0.26908689737319946, Y: 0.7137086987495422 },
            { X: 0.324129194021225, Y: 0.7137120366096497 },
            { X: 0.32413163781166077, Y: 0.7458773851394653 },
            { X: 0.2690892517566681, Y: 0.7458739876747131 },
          ],
        },
        Id: "d8cb97e8-e0f3-4af9-a289-ee2ba4fd43b3",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35828399658203,
        Text: "Financial",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10004273802042007,
            Height: 0.02041328325867653,
            Left: 0.34157711267471313,
            Top: 0.7238507866859436,
          },
          Polygon: [
            { X: 0.34157711267471313, Y: 0.7238507866859436 },
            { X: 0.4416182041168213, Y: 0.7238568663597107 },
            { X: 0.4416198432445526, Y: 0.7442640662193298 },
            { X: 0.3415786623954773, Y: 0.7442578673362732 },
          ],
        },
        Id: "24d9d574-22b9-4b1e-83a1-b8451cbd0f69",
      },
      {
        BlockType: "WORD",
        Confidence: 99.35809326171875,
        Text: "markets",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09695439785718918,
            Height: 0.02024868130683899,
            Left: 0.45650890469551086,
            Top: 0.7269788384437561,
          },
          Polygon: [
            { X: 0.45650890469551086, Y: 0.7269788384437561 },
            { X: 0.5534615516662598, Y: 0.7269847393035889 },
            { X: 0.553463339805603, Y: 0.7472274899482727 },
            { X: 0.4565105736255646, Y: 0.7472215294837952 },
          ],
        },
        Id: "296a9ec8-571b-4226-9f87-332330475664",
      },
      {
        BlockType: "WORD",
        Confidence: 98.50399780273438,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.022085273638367653,
            Height: 0.0312744677066803,
            Left: 0.5649564862251282,
            Top: 0.7176337242126465,
          },
          Polygon: [
            { X: 0.5649564862251282, Y: 0.7176337242126465 },
            { X: 0.587039053440094, Y: 0.7176350355148315 },
            { X: 0.5870417952537537, Y: 0.7489082217216492 },
            { X: 0.5649592280387878, Y: 0.7489068508148193 },
          ],
        },
        Id: "1fe2ad1d-759b-4f94-b6e6-3eb38821ad84",
      },
      {
        BlockType: "WORD",
        Confidence: 99.27058410644531,
        Text: "sentimental",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15211522579193115,
            Height: 0.02205803245306015,
            Left: 0.5905951857566833,
            Top: 0.7279201149940491,
          },
          Polygon: [
            { X: 0.5905951857566833, Y: 0.7279201149940491 },
            { X: 0.7427083253860474, Y: 0.7279293537139893 },
            { X: 0.7427104115486145, Y: 0.7499781250953674 },
            { X: 0.5905971527099609, Y: 0.7499686479568481 },
          ],
        },
        Id: "0ecde017-ee98-4756-a5b2-a36e2e542a85",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36661529541016,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10557982325553894,
            Height: 0.022370556369423866,
            Left: 0.7626087069511414,
            Top: 0.7281625866889954,
          },
          Polygon: [
            { X: 0.7626087069511414, Y: 0.7281625866889954 },
            { X: 0.8681862950325012, Y: 0.7281689643859863 },
            { X: 0.8681885600090027, Y: 0.7505331039428711 },
            { X: 0.7626108527183533, Y: 0.7505265474319458 },
          ],
        },
        Id: "4f81bf24-81a5-4ab0-9ae8-2ab3a0aa2a56",
      },
      {
        BlockType: "WORD",
        Confidence: 97.54413604736328,
        Text: "/",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.016897698864340782,
            Height: 0.026585491374135017,
            Left: 0.8831480145454407,
            Top: 0.7225477695465088,
          },
          Polygon: [
            { X: 0.8831480145454407, Y: 0.7225477695465088 },
            { X: 0.9000430107116699, Y: 0.72254878282547 },
            { X: 0.9000456929206848, Y: 0.749133288860321 },
            { X: 0.8831506967544556, Y: 0.7491322159767151 },
          ],
        },
        Id: "3819d8e9-935d-43f9-a1d4-e6b3ede26dd3",
      },
      {
        BlockType: "WORD",
        Confidence: 11.10045051574707,
        Text: "sake",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.042860276997089386,
            Height: 0.016859060153365135,
            Left: 0.001462332671508193,
            Top: 0.7647098898887634,
          },
          Polygon: [
            { X: 0.001462332671508193, Y: 0.7647098898887634 },
            { X: 0.044321540743112564, Y: 0.7647125720977783 },
            { X: 0.04432260990142822, Y: 0.7815689444541931 },
            { X: 0.0014633703976869583, Y: 0.7815661430358887 },
          ],
        },
        Id: "c6a7bbfc-6646-4738-8294-fb72381824cd",
      },
      {
        BlockType: "WORD",
        Confidence: 99.30819702148438,
        Text: "social",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0783553346991539,
            Height: 0.019413912668824196,
            Left: 0.3411276638507843,
            Top: 0.7579241991043091,
          },
          Polygon: [
            { X: 0.3411276638507843, Y: 0.7579241991043091 },
            { X: 0.41948142647743225, Y: 0.7579291462898254 },
            { X: 0.4194829761981964, Y: 0.7773381471633911 },
            { X: 0.3411291241645813, Y: 0.77733314037323 },
          ],
        },
        Id: "236398ea-0694-4cc0-97e0-e29eb02fca2a",
      },
      {
        BlockType: "WORD",
        Confidence: 88.5826187133789,
        Text: "media",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08259252458810806,
            Height: 0.018824856728315353,
            Left: 0.4387325942516327,
            Top: 0.7581257224082947,
          },
          Polygon: [
            { X: 0.4387325942516327, Y: 0.7581257224082947 },
            { X: 0.5213235020637512, Y: 0.7581308484077454 },
            { X: 0.5213251113891602, Y: 0.7769505381584167 },
            { X: 0.43873411417007446, Y: 0.7769452929496765 },
          ],
        },
        Id: "3bc73f0c-3df4-4fa2-b311-9c99ed39631b",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36634063720703,
        Text: "feed",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.062066368758678436,
            Height: 0.023735864087939262,
            Left: 0.5408278703689575,
            Top: 0.7556236386299133,
          },
          Polygon: [
            { X: 0.5408278703689575, Y: 0.7556236386299133 },
            { X: 0.6028921008110046, Y: 0.7556275129318237 },
            { X: 0.6028942465782166, Y: 0.7793595194816589 },
            { X: 0.5408298969268799, Y: 0.779355525970459 },
          ],
        },
        Id: "0a1b5d2c-90ae-4797-90a5-39d1fdc6494c",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36094665527344,
        Text: "analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11069446802139282,
            Height: 0.02594204805791378,
            Left: 0.6157365441322327,
            Top: 0.7584473490715027,
          },
          Polygon: [
            { X: 0.6157365441322327, Y: 0.7584473490715027 },
            { X: 0.7264285683631897, Y: 0.7584542632102966 },
            { X: 0.7264310121536255, Y: 0.7843893766403198 },
            { X: 0.6157388687133789, Y: 0.7843822240829468 },
          ],
        },
        Id: "5bf6ee57-7c0c-4270-8a3b-1b081c32790b",
      },
      {
        BlockType: "WORD",
        Confidence: 98.0599136352539,
        Text: ")",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.01496323011815548,
            Height: 0.027269652113318443,
            Left: 0.7343283891677856,
            Top: 0.7581363320350647,
          },
          Polygon: [
            { X: 0.7343283891677856, Y: 0.7581363320350647 },
            { X: 0.7492890357971191, Y: 0.7581372857093811 },
            { X: 0.7492915987968445, Y: 0.7854059934616089 },
            { X: 0.734330952167511, Y: 0.7854050397872925 },
          ],
        },
        Id: "2b63568e-e41a-416e-b156-d77b152d6cee",
      },
      {
        BlockType: "WORD",
        Confidence: 98.88941955566406,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.013846560381352901,
            Height: 0.005142234265804291,
            Left: 0.09974343329668045,
            Top: 0.8144407868385315,
          },
          Polygon: [
            { X: 0.09974343329668045, Y: 0.8144407868385315 },
            { X: 0.11358965188264847, Y: 0.8144417405128479 },
            { X: 0.11358999460935593, Y: 0.8195830583572388 },
            { X: 0.09974376857280731, Y: 0.8195821046829224 },
          ],
        },
        Id: "d4e22620-0822-4b5d-b126-11fcb0388a35",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36685180664062,
        Text: "Data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06755414605140686,
            Height: 0.02125461772084236,
            Left: 0.13302454352378845,
            Top: 0.8052881360054016,
          },
          Polygon: [
            { X: 0.13302454352378845, Y: 0.8052881360054016 },
            { X: 0.20057718455791473, Y: 0.805292546749115 },
            { X: 0.2005786895751953, Y: 0.8265427350997925 },
            { X: 0.13302597403526306, Y: 0.8265382051467896 },
          ],
        },
        Id: "ad34595f-57b4-4bb8-8664-7f41110e1e82",
      },
      {
        BlockType: "WORD",
        Confidence: 90.93375396728516,
        Text: "Pipeline",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.11539297550916672,
            Height: 0.02566855400800705,
            Left: 0.2271159291267395,
            Top: 0.8079808950424194,
          },
          Polygon: [
            { X: 0.2271159291267395, Y: 0.8079808950424194 },
            { X: 0.34250694513320923, Y: 0.8079884648323059 },
            { X: 0.3425089120864868, Y: 0.8336494565010071 },
            { X: 0.22711776196956635, Y: 0.8336416482925415 },
          ],
        },
        Id: "c7bd0aed-d7ee-40c0-9f9a-595f6bda263e",
      },
      {
        BlockType: "WORD",
        Confidence: 94.98080444335938,
        Text: ":",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.007468861062079668,
            Height: 0.013610664755105972,
            Left: 0.34217536449432373,
            Top: 0.8160487413406372,
          },
          Polygon: [
            { X: 0.34217536449432373, Y: 0.8160487413406372 },
            { X: 0.34964317083358765, Y: 0.8160492181777954 },
            { X: 0.3496442139148712, Y: 0.8296594023704529 },
            { X: 0.3421764075756073, Y: 0.8296589255332947 },
          ],
        },
        Id: "d17076fc-1359-4728-ae28-dc8fae0f0654",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36641693115234,
        Text: "Allow",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0682419091463089,
            Height: 0.023293083533644676,
            Left: 0.37044772505760193,
            Top: 0.8098009824752808,
          },
          Polygon: [
            { X: 0.37044772505760193, Y: 0.8098009824752808 },
            { X: 0.4386877715587616, Y: 0.8098055124282837 },
            { X: 0.438689649105072, Y: 0.8330941200256348 },
            { X: 0.3704495429992676, Y: 0.8330894708633423 },
          ],
        },
        Id: "3b739bd2-50bd-4f40-98d5-b3944723e448",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36582946777344,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.023118089884519577,
            Height: 0.019376980140805244,
            Left: 0.44922253489494324,
            Top: 0.8139731287956238,
          },
          Polygon: [
            { X: 0.44922253489494324, Y: 0.8139731287956238 },
            { X: 0.47233903408050537, Y: 0.8139746785163879 },
            { X: 0.4723406136035919, Y: 0.8333501219749451 },
            { X: 0.4492241144180298, Y: 0.8333485722541809 },
          ],
        },
        Id: "0e07a290-1f0c-49c4-b81b-5e2e3e90cadc",
      },
      {
        BlockType: "WORD",
        Confidence: 99.3661117553711,
        Text: "move",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06842225044965744,
            Height: 0.014767107553780079,
            Left: 0.4931833744049072,
            Top: 0.81935715675354,
          },
          Polygon: [
            { X: 0.4931833744049072, Y: 0.81935715675354 },
            { X: 0.561604380607605, Y: 0.8193617463111877 },
            { X: 0.5616056323051453, Y: 0.8341242671012878 },
            { X: 0.4931846261024475, Y: 0.8341196775436401 },
          ],
        },
        Id: "5aeb1de2-222b-4ecf-90bc-ff24942cd54a",
      },
      {
        BlockType: "WORD",
        Confidence: 89.03912353515625,
        Text: "data",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05940445885062218,
            Height: 0.02094297483563423,
            Left: 0.5769162774085999,
            Top: 0.81419438123703,
          },
          Polygon: [
            { X: 0.5769162774085999, Y: 0.81419438123703 },
            { X: 0.6363188624382019, Y: 0.8141983151435852 },
            { X: 0.6363207101821899, Y: 0.8351373672485352 },
            { X: 0.5769180655479431, Y: 0.8351333737373352 },
          ],
        },
        Id: "bd4e28da-0814-4236-9aa6-92e97177cb84",
      },
      {
        BlockType: "WORD",
        Confidence: 98.42460632324219,
        Text: "from",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.058792222291231155,
            Height: 0.021654654294252396,
            Left: 0.6533634662628174,
            Top: 0.8141202926635742,
          },
          Polygon: [
            { X: 0.6533634662628174, Y: 0.8141202926635742 },
            { X: 0.7121536731719971, Y: 0.8141242265701294 },
            { X: 0.7121556997299194, Y: 0.8357749581336975 },
            { X: 0.653365433216095, Y: 0.8357709646224976 },
          ],
        },
        Id: "36dc582f-4220-4d07-b0d2-83564c676e8b",
      },
      {
        BlockType: "WORD",
        Confidence: 98.01655578613281,
        Text: "one",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.042120255529880524,
            Height: 0.015747716650366783,
            Left: 0.7266749143600464,
            Top: 0.8193239569664001,
          },
          Polygon: [
            { X: 0.7266749143600464, Y: 0.8193239569664001 },
            { X: 0.7687936425209045, Y: 0.8193267583847046 },
            { X: 0.7687951326370239, Y: 0.8350716233253479 },
            { X: 0.726676344871521, Y: 0.8350688219070435 },
          ],
        },
        Id: "11737fd9-449d-4096-acfb-0c6c9eb465c5",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36163330078125,
        Text: "place",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.06523266434669495,
            Height: 0.024413814768195152,
            Left: 0.7798241972923279,
            Top: 0.8152647614479065,
          },
          Polygon: [
            { X: 0.7798241972923279, Y: 0.8152647614479065 },
            { X: 0.8450544476509094, Y: 0.8152691125869751 },
            { X: 0.8450568914413452, Y: 0.8396785855293274 },
            { X: 0.7798265218734741, Y: 0.839674174785614 },
          ],
        },
        Id: "a0ff93ad-b5c5-4662-9e37-194daee88ccf",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36617279052734,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.02450064942240715,
            Height: 0.021250147372484207,
            Left: 0.8571269512176514,
            Top: 0.8172019720077515,
          },
          Polygon: [
            { X: 0.8571269512176514, Y: 0.8172019720077515 },
            { X: 0.8816254734992981, Y: 0.8172036409378052 },
            { X: 0.88162761926651, Y: 0.838452160358429 },
            { X: 0.8571290969848633, Y: 0.8384504914283752 },
          ],
        },
        Id: "0acd3210-dccb-41df-b6b3-47b9f0059975",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36631774902344,
        Text: "another",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.10192807018756866,
            Height: 0.021170292049646378,
            Left: 0.8962281346321106,
            Top: 0.8205779194831848,
          },
          Polygon: [
            { X: 0.8962281346321106, Y: 0.8205779194831848 },
            { X: 0.9981539249420166, Y: 0.8205847144126892 },
            { X: 0.9981561899185181, Y: 0.8417482376098633 },
            { X: 0.8962302803993225, Y: 0.8417412638664246 },
          ],
        },
        Id: "f706285a-5da8-4c86-894c-5bc0e384f3a3",
      },
      {
        BlockType: "WORD",
        Confidence: 99.02261352539062,
        Text: "(Ex:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.060830529779195786,
            Height: 0.03283416107296944,
            Left: 0.35828715562820435,
            Top: 0.8449699282646179,
          },
          Polygon: [
            { X: 0.35828715562820435, Y: 0.8449699282646179 },
            { X: 0.4191150665283203, Y: 0.8449741005897522 },
            { X: 0.41911768913269043, Y: 0.8778041005134583 },
            { X: 0.3582896888256073, Y: 0.8777998089790344 },
          ],
        },
        Id: "372de4f2-e467-4aa8-939f-c39c441e87f4",
      },
      {
        BlockType: "WORD",
        Confidence: 99.33150482177734,
        Text: "53",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.033183351159095764,
            Height: 0.025526143610477448,
            Left: 0.43460172414779663,
            Top: 0.8502435684204102,
          },
          Polygon: [
            { X: 0.43460172414779663, Y: 0.8502435684204102 },
            { X: 0.46778297424316406, Y: 0.8502458333969116 },
            { X: 0.4677850902080536, Y: 0.8757696747779846 },
            { X: 0.4346037805080414, Y: 0.8757673501968384 },
          ],
        },
        Id: "235d437c-4827-4d65-9bc1-d195b608aa90",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36628723144531,
        Text: "to",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.02693711780011654,
            Height: 0.01877870038151741,
            Left: 0.4918953776359558,
            Top: 0.8569340705871582,
          },
          Polygon: [
            { X: 0.4918953776359558, Y: 0.8569340705871582 },
            { X: 0.5188308954238892, Y: 0.8569359183311462 },
            { X: 0.5188325047492981, Y: 0.8757127523422241 },
            { X: 0.49189695715904236, Y: 0.8757108449935913 },
          ],
        },
        Id: "6659d41e-898e-4637-a986-8c289d29ed82",
      },
      {
        BlockType: "WORD",
        Confidence: 93.95523834228516,
        Text: "Dynmo",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.08846857398748398,
            Height: 0.0207601897418499,
            Left: 0.5364672541618347,
            Top: 0.8588476181030273,
          },
          Polygon: [
            { X: 0.5364672541618347, Y: 0.8588476181030273 },
            { X: 0.6249340176582336, Y: 0.8588536977767944 },
            { X: 0.6249358654022217, Y: 0.8796077966690063 },
            { X: 0.536469042301178, Y: 0.8796015977859497 },
          ],
        },
        Id: "fb358b1d-9d23-4694-be8c-fc08f84b5bb9",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36637115478516,
        Text: "DB",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0401591919362545,
            Height: 0.019662372767925262,
            Left: 0.6330834627151489,
            Top: 0.8603929877281189,
          },
          Polygon: [
            { X: 0.6330834627151489, Y: 0.8603929877281189 },
            { X: 0.6732408404350281, Y: 0.8603957891464233 },
            { X: 0.6732426881790161, Y: 0.8800553679466248 },
            { X: 0.6330852508544922, Y: 0.8800525665283203 },
          ],
        },
        Id: "fcfc601a-fba0-485c-a115-3fa3e3417a97",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36063385009766,
        Text: "or",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.030000515282154083,
            Height: 0.014706865884363651,
            Left: 0.6960378885269165,
            Top: 0.8650195598602295,
          },
          Polygon: [
            { X: 0.6960378885269165, Y: 0.8650195598602295 },
            { X: 0.7260370254516602, Y: 0.8650216460227966 },
            { X: 0.72603839635849, Y: 0.8797264099121094 },
            { X: 0.6960391998291016, Y: 0.8797243237495422 },
          ],
        },
        Id: "324f4da9-442d-405f-892f-a727d1f6676a",
      },
      {
        BlockType: "WORD",
        Confidence: 94.77433013916016,
        Text: "vise",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.054739609360694885,
            Height: 0.018811266869306564,
            Left: 0.7456771731376648,
            Top: 0.8600519895553589,
          },
          Polygon: [
            { X: 0.7456771731376648, Y: 0.8600519895553589 },
            { X: 0.8004149794578552, Y: 0.8600557446479797 },
            { X: 0.8004168272018433, Y: 0.8788632750511169 },
            { X: 0.7456789612770081, Y: 0.8788594007492065 },
          ],
        },
        Id: "4962f59b-56ef-4816-8946-0aee1058eb97",
      },
      {
        BlockType: "WORD",
        Confidence: 99.33374786376953,
        Text: "versa)",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0861811488866806,
            Height: 0.03313985466957092,
            Left: 0.809459388256073,
            Top: 0.8552144765853882,
          },
          Polygon: [
            { X: 0.809459388256073, Y: 0.8552144765853882 },
            { X: 0.8956371545791626, Y: 0.855220377445221 },
            { X: 0.89564049243927, Y: 0.8883543014526367 },
            { X: 0.8094626069068909, Y: 0.8883482217788696 },
          ],
        },
        Id: "17b28d09-cb18-4e29-8416-06db6fb1bcec",
      },
      {
        BlockType: "WORD",
        Confidence: 99.24164581298828,
        Text: "-",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0162858534604311,
            Height: 0.005912438500672579,
            Left: 0.09274922311306,
            Top: 0.9076521396636963,
          },
          Polygon: [
            { X: 0.09274922311306, Y: 0.9076521396636963 },
            { X: 0.10903468728065491, Y: 0.9076533317565918 },
            { X: 0.10903507471084595, Y: 0.9135645627975464 },
            { X: 0.09274961054325104, Y: 0.9135633707046509 },
          ],
        },
        Id: "6c4ef185-082d-4906-b3ac-471f4143baad",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36707305908203,
        Text: "Quick",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.09341633319854736,
            Height: 0.02430225908756256,
            Left: 0.12519687414169312,
            Top: 0.8975611925125122,
          },
          Polygon: [
            { X: 0.12519687414169312, Y: 0.8975611925125122 },
            { X: 0.21861149370670319, Y: 0.897567868232727 },
            { X: 0.21861322224140167, Y: 0.9218634366989136 },
            { X: 0.12519851326942444, Y: 0.9218566417694092 },
          ],
        },
        Id: "dd9a7a94-eb38-417c-b966-47d648df310e",
      },
      {
        BlockType: "WORD",
        Confidence: 73.82514190673828,
        Text: "Site:",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.0882362648844719,
            Height: 0.023941922932863235,
            Left: 0.22506126761436462,
            Top: 0.8984454274177551,
          },
          Polygon: [
            { X: 0.22506126761436462, Y: 0.8984454274177551 },
            { X: 0.31329572200775146, Y: 0.8984517455101013 },
            { X: 0.3132975399494171, Y: 0.9223873615264893 },
            { X: 0.22506298124790192, Y: 0.9223808646202087 },
          ],
        },
        Id: "a77af076-8a4f-492c-b221-820ce9d314b2",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36603546142578,
        Text: "Business",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1240152046084404,
            Height: 0.024111350998282433,
            Left: 0.3342474699020386,
            Top: 0.9004082679748535,
          },
          Polygon: [
            { X: 0.3342474699020386, Y: 0.9004082679748535 },
            { X: 0.4582606852054596, Y: 0.900417149066925 },
            { X: 0.4582626521587372, Y: 0.9245195984840393 },
            { X: 0.3342492878437042, Y: 0.9245104789733887 },
          ],
        },
        Id: "2c09e79c-3b21-40b0-bb38-e629198aed77",
      },
      {
        BlockType: "WORD",
        Confidence: 99.31625366210938,
        Text: "Analysis",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.1202981024980545,
            Height: 0.03177047148346901,
            Left: 0.48050829768180847,
            Top: 0.9021108746528625,
          },
          Polygon: [
            { X: 0.48050829768180847, Y: 0.9021108746528625 },
            { X: 0.6008036136627197, Y: 0.902119517326355 },
            { X: 0.6008064150810242, Y: 0.9338813424110413 },
            { X: 0.480510950088501, Y: 0.9338724613189697 },
          ],
        },
        Id: "4e8549d7-ad11-48c1-ba97-d21b092e433b",
      },
      {
        BlockType: "WORD",
        Confidence: 99.36620330810547,
        Text: "tool",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.05561862140893936,
            Height: 0.024585507810115814,
            Left: 0.623091995716095,
            Top: 0.9043671488761902,
          },
          Polygon: [
            { X: 0.623091995716095, Y: 0.9043671488761902 },
            { X: 0.6787083745002747, Y: 0.9043711423873901 },
            { X: 0.6787106394767761, Y: 0.9289526343345642 },
            { X: 0.6230942010879517, Y: 0.9289485812187195 },
          ],
        },
        Id: "aa74efe5-5063-4eb3-a7f4-0d50e4a7b49d",
      },
      {
        BlockType: "WORD",
        Confidence: 99.32781982421875,
        Text: "Dashboard",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.15633846819400787,
            Height: 0.03144114837050438,
            Left: 0.3312431871891022,
            Top: 0.9415791630744934,
          },
          Polygon: [
            { X: 0.3312431871891022, Y: 0.9415791630744934 },
            { X: 0.4875790476799011, Y: 0.9415907859802246 },
            { X: 0.48758167028427124, Y: 0.9730203151702881 },
            { X: 0.3312456011772156, Y: 0.973008394241333 },
          ],
        },
        Id: "a24e0f75-f41f-44b9-a97e-074ab5fc3e51",
      },
      {
        BlockType: "WORD",
        Confidence: 99.365966796875,
        Text: "with",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.055698178708553314,
            Height: 0.027209721505641937,
            Left: 0.506650984287262,
            Top: 0.9462136626243591,
          },
          Polygon: [
            { X: 0.506650984287262, Y: 0.9462136626243591 },
            { X: 0.5623468160629272, Y: 0.9462178349494934 },
            { X: 0.5623491406440735, Y: 0.9734233617782593 },
            { X: 0.5066532492637634, Y: 0.9734191298484802 },
          ],
        },
        Id: "8786558c-006b-4cf3-b664-f074db29f524",
      },
      {
        BlockType: "WORD",
        Confidence: 95.87861633300781,
        Text: "visualizations.",
        TextType: "HANDWRITING",
        Geometry: {
          BoundingBox: {
            Width: 0.2295478731393814,
            Height: 0.0276428684592247,
            Left: 0.5781998038291931,
            Top: 0.9503212571144104,
          },
          Polygon: [
            { X: 0.5781998038291931, Y: 0.9503212571144104 },
            { X: 0.8077449798583984, Y: 0.9503384828567505 },
            { X: 0.8077476620674133, Y: 0.9779641628265381 },
            { X: 0.5782021880149841, Y: 0.9779465198516846 },
          ],
        },
        Id: "84e62361-e1ac-4b1e-8c64-f1be1cd59bd0",
      },
    ],
    DetectDocumentTextModelVersion: "1.0",
    ResponseMetadata: {
      RequestId: "73da0e2e-87c5-403b-8140-4633d2e7e07f",
      HTTPStatusCode: 200,
      HTTPHeaders: {
        "x-amzn-requestid": "73da0e2e-87c5-403b-8140-4633d2e7e07f",
        "content-type": "application/x-amz-json-1.1",
        "content-length": "87596",
        date: "Thu, 16 Sep 2021 10:00:29 GMT",
      },
      RetryAttempts: 0,
    },
  };

  React.useEffect(() => {
    if (selectedText.length !== 0) {
      let para = selectedText.join(" ");
      const samplex = para.split(" ");
      setpreviewSelectedText(samplex);
    }
    setcopy(false);
  }, [SelectedImg, selectedText, AddingStatus]);

  const onSubmit = async () => {
    console.log("works");
  };

  const copyText = () => {
    let para = previewSelectedText.join(" ");
    navigator.clipboard.writeText(para);
    setcopy(true);
  };

  // const imageTypeChange = () => {
  //   console.log("wordks");
  // };

  // const imageUpload = async (image) => {
  //   setProccessStatus(2);
  //   const config = {
  //     bucketName: "handwrittenimagesbucket",
  //     region: "us-east-1",
  //     accessKeyId: "AKIAXTEHORJDUQ3CNBUV",
  //     secretAccessKey: "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",
  //   };
  //   await S3FileUpload.uploadFile(image, config)
  //     .then(async (res) => {
  //       await getProcessedData();
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  // const resizeImage = async () => {
  //   new Compressor(SelectedImg, {
  //     quality: 0.6,
  //     success(result) {
  //       console.log(result);
  //       setSelectedImg(result);
  //       imageUpload(result);
  //     },
  //     error(err) {
  //       console.log(err.message);
  //     },
  //   });
  // };

  // const getProcessedData = async () => {
  //   setProccessStatus(3);
  //   let resKey = SelectedImg.name;
  //   resKey = resKey.split(".");
  //   const key = resKey[0];
  //   let times = 0;
  //   const getData = setInterval(async () => {
  //     const response = await axios.get(
  //       `https://handwrittenresponss3.s3.amazonaws.com/${key}.json`
  //     );

  //     if (response.status === 200 || times <= 10) {
  //       if (response.status !== 200) {
  //         alert("Data Fetching losted please try again");
  //       } else {
  //         setResponse(response);
  //         setProccessStatus(0);
  //         clearInterval(getData);
  //       }
  //     }
  //     console.log(times);
  //     times++;
  //   }, 2000);
  // };

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

  const setImageRealSize = (height, width) => {
    setrealHeight(height);
    setrealWidth(width);
  };

  const imagesize = {
    width: (windowWidth * 41) / 100,
    height: ratio * realHeight,
  };

  const setText = (text) => {
    console.log(previewSelectedText);
    if (AddingStatus === undefined) {
      console.log("sample");
      setselectedText([...selectedText, text]);
    } else {
      const selectedText = text.split(" ");
      let wordArray = previewSelectedText;
      wordArray.splice(AddingStatus, 0, ...selectedText);
      console.log(wordArray);
      setselectedText(wordArray);
    }
  };

  function process() {
    const textItemArray = [];
    data.Blocks.map((item, index) => {
      // Response.data.Blocks.map((item, index) => {
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

  return (
    <div>
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
                        <div>
                          <label className="switch">
                            <input
                              type="checkbox"
                              onChange={() => setType(!Type)}
                            />
                            <span className="slider round"></span>
                          </label>
                          Show Word By Word
                        </div>
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
                        {process().map((item, index) => {
                          return item;
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div style={{ position: "relative" }}>
                      <label className="switch">
                        <input
                          type="checkbox"
                          onChange={() => setType(!Type)}
                        />
                        <span className="slider round"></span>
                      </label>
                      show word by word
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
              {/* <textarea
                onChange
                className="textfeild"
                type="text"
                value={processSelectedText}
                onChange={(e) => setprocessSelectedText(e.target.value)}
              /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sample;
