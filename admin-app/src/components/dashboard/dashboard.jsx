import "./dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import PostEvent from "../posteventpage/postevent";
import DashMain from "../dashmain/dashmain";

const Dashboard = () => {

  const [currentPage, setcurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <DashMain />;

      case "postevent":
        return <PostEvent setcurrentPage={setcurrentPage}/>;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <div className="nav">
          <div className="circle home-icon" onClick={()=>setcurrentPage("home")}>
            <HiOutlineHome />
          </div>
          <div className="circle account">
            <FaRegUser />
          </div>
          <div className="circle scan">
            <BsQrCodeScan />
          </div>
          <div className="circle postevent" onClick={()=>setcurrentPage("postevent")}>
            <IoMdAdd />
          </div>
          <div className="circle logout">
            <MdOutlineLogout />
          </div>
        </div>
      </div>

      <div className="dashboard-body">
        <div className="dash-main">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
