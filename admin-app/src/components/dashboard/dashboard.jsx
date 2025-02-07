import "./dashboard.css";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { BsQrCodeScan } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import PostEvent from "../posteventpage/postevent";
import DashMain from "../dashmain/dashmain";
import { use } from "react";

const Dashboard = () => {

  const [currentPage, setcurrentPage] = useState("home");
  const [submitbtn, setsubmitbtn] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <DashMain />;

      case "postevent":
        return <PostEvent />;
    }
  };

  return (
    <>
    <div className="dashboard">
      { renderContent()}

    </div>

    <div className="dash-header">
      <ul>
        <li id="home-icon" onClick={()=>{setcurrentPage('home'); setsubmitbtn(false)}}>
        <HiOutlineHome />
        </li>
        <li id="user-icon">
        <FaRegUser />
        </li>
        <li id="scan-icon">
        <BsQrCodeScan />
        </li>
        <li>
          <button onClick={()=>{setcurrentPage('postevent'); setsubmitbtn(true); }} className={submitbtn ? 'submitbtn' : ''}>
            {submitbtn ? 'Submit' : 'Post Event'}
          </button>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Dashboard;
