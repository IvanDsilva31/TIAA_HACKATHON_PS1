import "./addbusdetails.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar-busop/Navbar-busop";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Addbus from "../../components/BusOperator/addbus";
const New = ({ inputs, title }) => {
  // const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add bus Details</h1>
        </div>
        <div className="bottom">
        <Addbus></Addbus>
        
          
        </div>
      </div>
    </div>
  );
};

export default New;