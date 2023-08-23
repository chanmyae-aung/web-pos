import { Group } from "@mantine/core";
import { useGetMediaQuery } from '../../Feature/API/mediaSlice';

import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { BsImages, BsFillGridFill } from "react-icons/bs";
import React, { useState } from "react";
import { Table } from "@mantine/core";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiCopyDuotone } from "react-icons/pi";
import Breadcrumb from "../../Components/Breadcrumb";
import { useUploadMediaMutation } from "../../Feature/API/mediaSlice";
import Cookies from "js-cookie";
const elements = [
  {
    No: 1,
    name: "thurein zaw",
    account: "C0123",
    date: "12/7/2023",
    time: "10:00 a.m",
    filesize: "20.0mb",
    action: (
      <div className="  flex">
        <RiDeleteBin5Line className=" cursor-pointer hover:text-red-700" />
        <PiCopyDuotone className="cursor-pointer hover:text-blue-700" />
      </div>
    ),
  },
  {
    No: 2,
    name: "htetarkar zaw",
    account: "C678",
    date: "16/7/2023",
    time: "12:00 a.m",
    filesize: "20.0mb",
    action: (
      <div className=" flex">
        <RiDeleteBin5Line className=" cursor-pointer hover:text-red-700" />
        <PiCopyDuotone className="cursor-pointer hover:text-blue-700" />
      </div>
    ),
  },
  {
    No: 3,
    name: "Min arkar zaw",
    account: "C7896",
    date: "18/72023",
    time: "1:00 a.m",
    filesize: "20.0mb",
    action: (
      <div className=" flex">
        <RiDeleteBin5Line className=" cursor-pointer hover:text-red-700" />
        <PiCopyDuotone className="cursor-pointer hover:text-blue-700" />
      </div>
    ),
  },
  {
    No: 4,
    name: "htet nadi",
    account: "C5676",
    date: "1/72023",
    time: "10:00 p.m",
    filesize: "20.0mb",
    action: (
      <div className=" flex">
        <RiDeleteBin5Line className=" cursor-pointer hover:text-red-700" />
        <PiCopyDuotone className="cursor-pointer hover:text-blue-700" />
      </div>
    ),
  },
  {
    No: 5,
    name: "Wai yan zaw",
    account: "C2345",
    date: "5/7/2023",
    time: "1:00 a.m",
    filesize: "20.0mb",
    action: (
      <div className=" flex">
        <RiDeleteBin5Line className=" cursor-pointer hover:text-red-700" />
        <PiCopyDuotone className="cursor-pointer hover:text-blue-700" />
      </div>
    ),
  },
];

const ExpandedImageView = ({ image, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={onClose}
        className="mt-4  py-2  bg-transparent text-white rounded-lg"
      >
        <AiOutlineClose className=" text-3xl" />
      </button>
      <img src={image.link} alt="" className="rounded-lg" />
    </div>
  </div>
);
const rows = elements.map((element) => (
  <tr key={element.No}>
    <td className=" text-white">{element.No}</td>
    <td className=" text-white">{element.name}</td>
    <td className=" text-white">{element.account}</td>
    <td className=" text-white">{element.date}</td>
    <td className=" text-white">{element.time}</td>
    <td className=" text-white">{element.filesize}</td>
    <td className=" text-white">{element.action}</td>
  </tr>
));

// const images = [
//   {
//     id: 1,
//     link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 2,
//     link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 3,
//     link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 4,
//     link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 5,
//     link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     id: 6,
//     link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//   },
// ];

const Mediapgwpic = (props) => {
  const token=Cookies.get('token');
  const [uploadMedia]=useUploadMediaMutation();
  const { data: mediaData, isLoading, isError } = useGetMediaQuery();
  const media = mediaData || [];
  const [expandedImageId, setExpandedImageId] = useState(null);
  const [displayState, setDisplayState] = useState(false);
  const [displayState2, setDisplayState2] = useState(false);
  const handleDropzoneUpload = async (acceptedFiles) => {
    try {
      // Collect selected files in an array
     console.log(acceptedFiles);
     const photos=new FormData();
     for(let i=0;i<acceptedFiles.length;i++){
      photos.append('photos[]',acceptedFiles[i],acceptedFiles[i].name)
     }
       for (const  value of photos.entries()) {
        console.log(value);
        console.log(token);
        
       }
      // Use the mutation hook to upload the array of files
      const result = await uploadMedia({photos,token});
  
      if (result.error) {
        // Handle any errors here
        console.error('Error uploading files:', result.error);
      } else {
        // Handle success, e.g., update your component state
        console.log('Files uploaded successfully:', result.data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const images =mediaData?.data;
console.log(images);
  return (
    <div className="  ">
      <div className=" p-10">
        <Breadcrumb
          title={"Media"}
          firstRoute={"Media"}
          secondRoute={"Uploader"}
          butt
        />
        <Dropzone
          className=" mt-6 mb-10 bg-softblack  hover:bg-softblack border border-solid"
          onDrop={handleDropzoneUpload} // Call the upload function here
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
        >
          <Group
            className=" mx-auto w-[250px] rounded-lg   "
            position="center"
            spacing="xl"
            style={{ minHeight: "220px", pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <AiOutlineCloudUpload />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <FcCancel />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <BsImages className="   text-blue-700  text-5xl " />
            </Dropzone.Idle>

            <div className="  ">
              <p className=" text-white text-lg ">
                <span className=" text-blue-600 underline">Browse</span> or drag
                an image
              </p>
            </div>
          </Group>
        </Dropzone>
        <div className=" pb-4 flex justify-between items-center">
          <Breadcrumb firstRoute={"Media"} secondRoute={"Uploaded photo"} />
          <div className="">
            <AiOutlineOrderedList
              onClick={() => setDisplayState(false) && setDisplayState2(true) }
              className={`${displayState ? "text-blue-800" : "text-gray-300"} ${
                displayState ? "border-blue-800" : "border-gray-300"
              } hover:text-blue-800 hover:border-blue-800 text-gray-300 border cursor-pointer border-solid border-gray-300 mx-2 inline`}
            />
            <BsFillGridFill
              onClick={() => setDisplayState(true) && setDisplayState2(false)}
              className={`${
                !displayState ? "text-blue-800" : "text-gray-300"
              } ${
                !displayState ? "border-blue-800" : "border-gray-300"
              } hover:text-blue-800 hover:border-blue-800 text-gray-300  cursor-pointer border border-solid border-gray-300 inline`}
            />
          </div>
        </div>
        <div
          className={`${
            displayState ? "flex" : "hidden"
          }   my-6 overflow-y-auto  flex-wrap  justify-center gap-10 items-center`}
        >
          {images?.map((i) => {
            console.log(i.url);
            return (
              <img
                key={i.id}
                src={i.url}
                className=" cursor-pointer  hover:opacity-80  rounded-2xl w-[300px] h-[200px]"
                onClick={() =>
                  setExpandedImageId(i.id === expandedImageId ? null : i.id)
                }
                alt=""
              />
            );
          })}
          {expandedImageId !== null && (
            <ExpandedImageView
              image={images.find((img) => img.id === expandedImageId)}
              onClose={() => setExpandedImageId(null)}
            />
          )}
        </div>
        <div
          className={`${!displayState ? "block" : "hidden"} overflow-y-auto`}
        >
          <Table>
            <thead>
              <tr>
                <th className=" text-gray-300">NO</th>
                <th className=" text-gray-300">NAME</th>
                <th className=" text-gray-300">ACCOUNT</th>
                <th className=" text-gray-300">DATE</th>
                <th className=" text-gray-300">TIME</th>
                <th className=" text-gray-300">FILE SIZE</th>
                <th className=" text-gray-300">ACTION</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Mediapgwpic;
