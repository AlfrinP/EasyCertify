import React from "react";
import { Button, ButtonGroup } from "@material-tailwind/react";
import {
  Select,
  Option,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import BlueClear from "../../assets/General/Blueclear.svg";
import Download from "../../assets/General/material-symbols_download.png";
import Delete from "../../assets/General/deletered.svg";
import DatePicker from "./DatePicker";
import LargeView from "./LargeView";
import Print from "./Print";
const ViewCertificate = ({ isOpen, handleOpen, data = "" }) => {
  const [openPrint, setOpenPrint] = React.useState(false);
  const handleOpenPrint = () => setOpenPrint(!openPrint);

  return (
    <Dialog open={isOpen} handler={handleOpen} className="p-4">
      <DialogHeader>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold text-gray-600">Uploaded Details</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 float-right"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </DialogHeader>
      <DialogBody>
        <div className="flex flex-row w-full justify-center">
          <Print isOpen={openPrint} handleOpen={handleOpenPrint} />
          <form className="flex flex-col w-full">
            <h3 className="mb-2 underline">Activity Name</h3>
            <span className="font-semibold text-lg">{data.name}</span>

            <h3 className="mb-2 mt-2 underline">Category</h3>
            <span className="font-semibold text-lg">{data.category}</span>

            <h3 className="mb-2 mt-2 underline">Level</h3>
            <span className="font-semibold text-lg">{data.level}</span>

            <h3 className="mb-2 mt-2 underline">Date</h3>
            <span className="font-semibold text-lg">{new Date(data.date).toLocaleDateString()}</span>
          </form>
          <div>
            <div className="flex flex-row center gap-2">
              <Button
                onClick={handleOpenPrint}
                className="flex flex-row bg-green-100 w-fit p-1 px-4 rounded-md text-lowercase capitalize"
                style={{ color: "#076F2C" }}
              >
                <img src={Download} alt="download" className=" w-[19px]" />
                Download
              </Button>
              <Button
                className="flex flex-row bg-red-200 w-fit p-1 px-4 rounded-md text-lowercase capitalize"
                style={{ color: "#FF3333" }}
              >
                <img src={Delete} alt="delete" />
                Delete
              </Button>
            </div>
            <LargeView />
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default ViewCertificate;
