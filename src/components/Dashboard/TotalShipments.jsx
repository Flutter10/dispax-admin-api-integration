import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import CustomTable from "../../hooks/CustomTable";
import CustomPagination from "../../hooks/CustomPagination";
import TotalShipmentsTable from "./TotalShipmentsTable";


const TotalShipment = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="text-white w-full p-6">
      {/* Back Button + Heading */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Total Shipments</h1>
      </div>



      {/* Table + Pagination */}
      <div className="w-full">
        <TotalShipmentsTable />
        
      </div>
    </div>
  );
};

export default TotalShipment;
