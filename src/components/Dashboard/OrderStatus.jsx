

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomTable from "../../hooks/CustomTable";
// import CustomPagination from "../../hooks/CustomPagination";

//   const OrderData = [
//     {
//       id: "1",
//       OrderId: "ORD- #458",
//       Company: "Bluedart Logistics",
//       Items: "56",
//       Date: "2025/05/05",
//       Status: "Pending",
//       Total: "$28,596",
//     },
//     {
//       id: "2",
//     OrderId: "ORD- #458",
//       Company: "Bluedart Logistics",
//       Items: "56",
//       Date: "2025/05/05",
//       Status: "Pending",
//       Total: "$28,596",
//     },
//     {
//       id: "3",
//       OrderId: "ORD- #458",
//       Company: "Bluedart Logistics",
//       Items: "56",
//       Date: "2025/05/05",
//       Status: "Completed",
//       Total: "$28,596",
//     },
//   ];
// const OrderStatus = () => {
//   const navigate = useNavigate();
//   const [selectedTab, setSelectedTab] = useState("Trucks");
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10;

//   return (
//     <div className="text-white w-full p-6">
//       {/* Back Button + Heading */}
//       <div className="flex items-center gap-4 mb-6">
//         <img
//           src="/dashboardicons/backbutton.svg"
//           alt="Back"
//           className="w-[42px] h-[42px] rounded-full cursor-pointer"
//           onClick={() => navigate(-1)}
//         />
//         <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
//           Orders
//         </h1>
//       </div>

//       {/* Dropdown */}
//       <div className="flex items-center gap-4 mb-6">
//         <label
//           htmlFor="company"
//           className="text-[#F9F9F9] font-poppins font-medium text-[16px]"
//         >
//           Monitor Trucks/Drivers of
//         </label>
//         <select
//           id="company"
//           className="w-[244px] h-[56px] rounded-[8px] bg-[#F7F7F7] text-black px-4"
//         >
//           <option value="Company A">Company A</option>
//           <option value="Company B">Company B</option>
//           <option value="Company C">Company C</option>
//         </select>
//       </div>

//       {/* Tabs */}
//       <div className="w-full overflow-hidden mb-6 ">
//         <div className=" inline-flex bg-[#070539] p-1 rounded-[5px]">
//           <div
//             onClick={() => setSelectedTab("Trucks")}
//             className={`w-[220px] h-[48px]  flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Trucks"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : " text-white"
//             }`}
//           >
//             Pending
//           </div>

//           <div
//             onClick={() => setSelectedTab("Drivers")}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Drivers"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : " text-[#BFBFBF]"
//             }`}
//           >
//             Completed
//           </div>
//         </div>
//       </div>

//              <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//           <table className="min-w-[1200px] table-auto text-left w-full">
//             <thead>
//               <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
//                 <th className="px-5">Order ID</th>
//                 <th className="px-5">Company</th>
//                 <th className="px-5">Items</th>
//                 <th className="px-5">Date</th>
//                 <th className="px-5">Status</th>
//                 <th className="px-5">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {OrderData.map((driver, index) => (
//                 <tr
//                   key={index}
//                   className={`bg-[#131060] text-white h-[90px] ${index !== OrderData.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                 >
//                   <td className="px-5">{driver.OrderId}</td>
//                   <td className="px-5">{driver.Company}</td>
//                   <td className="px-5">{driver.Items}</td>
//                   <td className="px-5">{driver.Date}</td>
//                   <td className="px-5">
//                     <span
//                       className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[100px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
//                         driver.Status === 'On Break'
//                           ? 'bg-[#6763F1]'
//                           : driver.Status === 'Completed'
//                           ? 'bg-[#14AE5C]'
//                           : 'bg-[#E8B931]'
//                       }`}
//                     >
//                       {driver.Status}
//                     </span>
//                   </td>
//                   <td className="px-5">{driver.Total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
          
//         <div className="flex justify-between items-center mt-4">
//           <p className="text-sm text-white/70">Showing 6 out of 120 results</p>
//           <CustomPagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//           />
//       </div>
//     </div>
//   );
// };

// export default OrderStatus;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../ApiController/ApiService"; // Adjust the path to your apiService

const OrderStatus = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [shipments, setShipments] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDocs, setTotalDocs] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch companies for dropdown
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await apiService.getCompany({ page: 1, limit: 100 });
        console.log("Companies response:", response);
        setCompanies(response.data?.docs || []);
      } catch (err) {
        console.error("Failed to fetch companies:", err);
        setError("Failed to fetch companies. Please try again.");
      }
    };
    fetchCompanies();
  }, []);

  // Fetch shipments based on selected tab
  useEffect(() => {
    const fetchShipments = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = { page: currentPage, limit: 10 };
        if (selectedCompany) params.companyId = selectedCompany;
        const response = await (selectedTab === "Pending"
          ? apiService.getAllPendingShipment(params)
          : apiService.getAllCompletedShipment(params));
        console.log("Shipments response:", response);
        const shipmentDocs = Array.isArray(response) ? response : response.data?.docs || [];
        setShipments(shipmentDocs);
        console.log("Set shipments:", shipmentDocs);
        setTotalPages(response.data?.totalPages || Math.ceil(shipmentDocs.length / 10));
        setTotalDocs(response.data?.totalDocs || shipmentDocs.length);
      } catch (err) {
        setError("Failed to fetch shipments. Please try again.");
        console.error("Shipment fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchShipments();
  }, [selectedTab, currentPage, selectedCompany]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Map companyId to company fullName
  const getCompanyName = (companyId) => {
    if (!companyId) return "N/A";
    const company = companies.find((c) => c._id === companyId);
    return company ? company.fullName : "N/A";
  };

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
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Orders
        </h1>
      </div>

      {/* Dropdown */}
      {/* <div className="flex items-center gap-4 mb-6">
        <label
          htmlFor="company"
          className="text-[#F9F9F9] font-poppins font-medium text-[16px]"
        >
          Monitor Trucks/Drivers of
        </label>
        <select
          id="company"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-[244px] h-[56px] rounded-[8px] bg-[#F7F7F7] text-black px-4"
        >
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.fullName}
            </option>
          ))}
        </select>
      </div> */}

      {/* Tabs */}
      <div className="w-full overflow-hidden mb-6">
        <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
          <div
            onClick={() => setSelectedTab("Pending")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Pending"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-white"
            }`}
          >
            Pending
          </div>
          <div
            onClick={() => setSelectedTab("Completed")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Completed"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-[#BFBFBF]"
            }`}
          >
            Completed
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
        {loading ? (
          <p className="text-white text-center py-4">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center py-4">{error}</p>
        ) : shipments.length === 0 ? (
          <p className="text-white text-center py-4">No shipments found.</p>
        ) : (
          <table className="min-w-[1200px] table-auto text-left w-full">
            <thead>
              <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
                <th className="px-5">Order ID</th>
                <th className="px-5">Company</th>
                <th className="px-5">Items</th>
                <th className="px-5">Date</th>
                <th className="px-5">Status</th>
                <th className="px-5">Total</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, index) => (
                <tr
                  key={shipment._id}
                  className={`bg-[#131060] text-white h-[90px] ${
                    index !== shipments.length - 1 ? "border-b border-[#fff]" : ""
                  }`}
                >
                  <td className="px-5">{shipment.orderId || "N/A"}</td>
                  <td className="px-5">{getCompanyName(shipment.companyId)}</td>
                  <td className="px-5">{shipment.noOfPallets || "N/A"}</td>
                  <td className="px-5">
                    {shipment.pickUpDate
                      ? new Date(shipment.pickUpDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : "N/A"}
                  </td>
                  <td className="px-5">
                    <span
                      className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[100px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                        shipment.status === "Completed"
                          ? "bg-[#14AE5C]"
                          : "bg-[#E8B931]"
                      }`}
                    >
                      {shipment.status || "N/A"}
                    </span>
                  </td>
                  <td className="px-5">
                    {shipment.weightInTons
                      ? `${shipment.weightInTons} tons`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-white/70">
          Showing {shipments.length} out of {totalDocs} results
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;