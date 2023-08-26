import React, { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import { Input, NumberInput, Select, Table, TextInput, Textarea } from "@mantine/core";
import { FiSearch } from "react-icons/fi";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group,useMantineTheme } from '@mantine/core';


import {
  AiOutlineOrderedList,
  AiFillEdit,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiCopyDuotone } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const InventoryOverview = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [displayState, setDisplayState] = useState(false);
  const [displayState2, setDisplayState2] = useState(false);
  const images = [
    {
      id: 1,
      link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      link: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      link: "https://plus.unsplash.com/premium_photo-1666273190872-1ad5f89e39f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      link: "https://plus.unsplash.com/premium_photo-1661476072172-359e53eb83d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const elements = [
    {
      No: 1,
      name: "abcd",
      account: "ab",
      date: "-",
      time: "10,000",
      filesize: "20",
      action: (
        <div className="  flex  ">
          <Group >
            <Button onClick={open}>
            
              <IoMdAdd className=" cursor-pointer hover:text-blue-700" />
            </Button>
          </Group>
          <Group position="center">
        <Button> <AiFillEdit className="cursor-pointer hover:text-blue-700" /></Button>
      </Group>
      <Group position="center">
        <Button > <AiOutlineArrowRight className="cursor-pointer hover:text-blue-700" /></Button>
      </Group>
         
        </div>
      ),
    },
    {
      No: 2,
      name: "efgh",
      account: "ef",
      date: "-",
      time: "10,000",
      filesize: "20",
      action: (
        <div className="  flex  ">
          <Group >
            <Button onClick={open}>
            
              <IoMdAdd className=" cursor-pointer hover:text-blue-700" />
            </Button>
          </Group>
          <Group position="center">
        <Button> <AiFillEdit className="cursor-pointer hover:text-blue-700" /></Button>
      </Group>
      <Group position="center">
        <Button > <AiOutlineArrowRight className="cursor-pointer hover:text-blue-700" /></Button>
      </Group>
         
        </div>
      ),
    },
    {
      No: 3,
      name: "ijkl",
      account: "ij",
      date: "-",
      time: "10,000",
      filesize: "20",
      action: (
        <div className="  flex  ">
        <Group >
          <Button onClick={open}>
          
            <IoMdAdd className=" cursor-pointer hover:text-blue-700" />
          </Button>
        </Group>
        <Group position="center">
      <Button> <AiFillEdit className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
    <Group position="center">
      <Button > <AiOutlineArrowRight className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
       
      </div>
      ),
    },
    {
      No: 4,
      name: "mnop",
      account: "mn",
      date: "-",
      time: "10,000",
      filesize: "20",
      action: (
        <div className="  flex  ">
        <Group >
          <Button onClick={open}>
          
            <IoMdAdd className=" cursor-pointer hover:text-blue-700" />
          </Button>
        </Group>
        <Group position="center">
      <Button> <AiFillEdit className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
    <Group position="center">
      <Button > <AiOutlineArrowRight className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
       
      </div>
      ),
    },
    {
      No: 5,
      name: "qrst",
      account: "qr",
      date: "-",
      time: "10,000",
      filesize: "20",
      action: (
        <div className="  flex  ">
        <Group >
          <Button onClick={open}>
          
            <IoMdAdd className=" cursor-pointer hover:text-blue-700" />
          </Button>
        </Group>
        <Group position="center">
      <Button> <AiFillEdit className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
    <Group position="center">
      <Button > <AiOutlineArrowRight className="cursor-pointer hover:text-blue-700" /></Button>
    </Group>
       
      </div>
      ),
    },
  ];
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

  return (
    <div>
             <Modal className=" mdbox" opened={opened} onClose={close} title="Add Stock">
       
        <NumberInput
        defaultValue={0}
          data-autofocus
          withAsterisk
          label="Quantity"
          placeholder="Enter quantity"
          mt="md"
        />
         <Textarea label="More" placeholder=" Enter more " />
         <Button className=" " variant="outline" >
            Add Stock
          </Button>
      </Modal>
      <div className=" flex justify-between items-center">
        <Breadcrumb
        showBtn={false}
          title={"Products"}
          firstRoute={"Inventory"}
          secondRoute={"Products"}
        />
        <div className="  ">
          <button className=" hover:border-blue-300 hover:text-white mx-8 px-6 py-2   font-bold  border  border-white rounded-sm text-blue-300 ">
            Go to shop
          </button>
         <Link  >
         <button className=" hover:opacity-80 px-6 py-2   font-bold  border  rounded-sm text-black bg-blue-300 ">
            + Add Product
          </button>
         </Link>
        </div>
      </div>
      <div>
        <h1 className=" mt-10 text-4xl text-white ">Product Overview</h1>
        <div className="flex items-center justify-between">
          <Input
            icon={<FiSearch />}
            variant="unstyled"
            placeholder="Search"
            radius="xs"
            className=" border border-gray-400 w-[400px] rounded-xl text-gray-400"
          />
          <div className=" flex  items-center justify-around ">
            <p className=" ">Sort:</p>
            <Select
              label="Your favorite framework/library"
              placeholder="Pick one"
              defaultValue="Last"
              radius="xs"
              variant="unstyled"
              className="  w-[100px] h-[170px]  my-auto mx-6"
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              data={[
                { value: "react", label: "Last" },
                { value: "ng", label: "First" },

                ,
              ]}
            />
          </div>
          <div className=" flex  items-center justify-evenly ">
            <p className=" ">Sort:</p>
            <Select
              label="Your favorite framework/library"
              placeholder="Pick one"
              defaultValue="Last"
              radius="xs"
              variant="unstyled"
              className="  w-[100px] h-[170px]  my-auto mx-6"
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              data={[
                { value: "react", label: "All File" },
                { value: "ng", label: "Some File" },

                ,
              ]}
            />
          </div>
          <div className="">
            <AiOutlineOrderedList
              onClick={() => setDisplayState(false) && setDisplayState2(true)}
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
          className={`${!displayState ? "block" : "hidden"} overflow-y-auto`}
        >
          <Table>
            <thead>
              <tr>
                <th className=" text-gray-300">NO</th>
                <th className=" text-gray-300">NAME</th>
                <th className=" text-gray-300">BRAND</th>
                <th className=" text-gray-300">UNIT</th>
                <th className=" text-gray-300">SALE PRICE</th>
                <th className=" text-gray-300">TOTAL STOCK</th>
                <th className=" text-gray-300"></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
        <div
          className={`${
            displayState ? "flex" : "hidden"
          }   my-6 overflow-y-auto  flex-wrap  justify-center gap-10 items-center`}
        >
          {images.map((i) => {
            return (
              <div key={i.id}>
                <img
                  src={i.link}
                  className=" border  rounded-lg border-y-white block cursor-pointer  hover:opacity-80  w-[300px] h-[200px]"
                  alt=""
                />
                <div className="  border border-white opacity-50">
                  <p className=" mx-4 text-3xl font-bold tracking-wider  text-right">
                    Abcd
                  </p>
                  <p className=" mx-4 text-xl font-thin tracking-normal text-right">
                    price
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InventoryOverview;
