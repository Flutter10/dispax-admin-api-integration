// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
// } from "recharts";

// const shipmentData = [
//   { date: "Apr 07", shipment: 60, delivery: 30 },
//   { date: "Apr 08", shipment: 45, delivery: 28 },
//   { date: "Apr 09", shipment: 55, delivery: 25 },
//   { date: "Apr 10", shipment: 48, delivery: 30 },
//   { date: "Apr 11", shipment: 63, delivery: 33 },
// ];

// const revenueData = [
//   { month: "Jan", revenue: 40 },
//   { month: "Feb", revenue: 70 },
//   { month: "Mar", revenue: 50 },
//   { month: "Apr", revenue: 60 },
//   { month: "May", revenue: 55 },
//   { month: "Jun", revenue: 60 },
//   { month: "Jul", revenue: 45 },
//   { month: "Aug", revenue: 50 },
//   { month: "Sep", revenue: 40 },
//   { month: "Oct", revenue: 30 },
//   { month: "Nov", revenue: 25 },
//   { month: "Dec", revenue: 20 },
// ];

// const DashboardWidgets = () => {
//   return (
//     <div className=" text-white">
//       <div className="grid xl:grid-cols-[2fr_1fr] gap-6">
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6">
//           {/* Activity Overview */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[515px] p-6">
//             <h2 className="text-[22px] font-semibold mb-1">Activity Overview</h2>
//             <p className="text-[16px] font-semibold mb-4">Shipment and Deliveries over time</p>
//             <div className="w-full h-[378px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={shipmentData}>
//                   <defs>
//                     <linearGradient id="colorShipment" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#5D5FEF" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#5D5FEF" stopOpacity={0} />
//                     </linearGradient>
//                     <linearGradient id="colorDelivery" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#ED7B50" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#ED7B50" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="date" tick={{ fill: "#fff" }} />
//                   <YAxis tick={{ fill: "#fff" }} />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="shipment"
//                     stroke="#5D5FEF"
//                     fillOpacity={1}
//                     fill="url(#colorShipment)"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="delivery"
//                     stroke="#ED7B50"
//                     fillOpacity={1}
//                     fill="url(#colorDelivery)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="flex justify-between mt-4 px-16">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-[#5D5FEF] rounded-full"></div>
//                 <span className="text-[12px] font-bold">Shipment</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-[#ED7B50] rounded-full"></div>
//                 <span className="text-[12px] font-bold">Deliveries</span>
//               </div>
//             </div>
//           </div>

//           {/* Active Trucks & Drivers */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[158px] p-4">
//             <h3 className="text-[22px] font-semibold mb-4">Active Truck & Drivers</h3>
//             <div className="flex gap-4">
//               <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
//                 <p className="text-[16px] font-medium">Trucks</p>
//                 <p className="text-[22px] font-semibold">253</p>
//               </div>
//               <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
//                 <p className="text-[16px] font-medium">Drivers</p>
//                 <p className="text-[22px] font-semibold">253</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-6">
//           {/* Revenue */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[268px] p-6">
//             <h3 className="text-[16px] font-semibold mb-1">Revenue</h3>
//             <p className="text-[22px] font-semibold mb-4">$45,895</p>
//             <div className="w-full h-[131px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={revenueData}>
//                   <XAxis dataKey="month" tick={{ fill: "#fff" }} />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="revenue"
//                     stroke="#ffffff"
//                     strokeWidth={2}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Order Overview */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[405px] p-6">
//             <h3 className="text-[22px] font-semibold mb-4">Order Overview</h3>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">Pending</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#FFD057] h-full w-[50%] rounded-full"></div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">In Progress</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#00B2FF] h-full w-[60%] rounded-full"></div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">Completed</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#3BC057] h-full w-[80%] rounded-full"></div>
//               </div>
//             </div>
//             <div className="border-t border-[#F2F2F2] mt-16 pt-3 flex justify-between">
//               <span className="text-[16px] font-medium">Total Order</span>
//               <span className="text-[16px] font-medium">234</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWidgets;
// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
// } from "recharts";
// import apiService from "../../components/ApiController/ApiService"; // Adjust path as needed

// const DashboardWidgets = () => {
//   const [shipmentData, setShipmentData] = useState([]);
//   const [revenueData, setRevenueData] = useState([]);
//   const [totalRevenue, setTotalRevenue] = useState("$0.00");
//   const [orderData, setOrderData] = useState({
//     pending: 0,
//     inProgress: 0,
//     completed: 0,
//     total: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch shipment data
//         const shipmentResponse = await apiService.getShipmentDeliveriesOverview();
//         const formattedShipmentData = shipmentResponse.map(item => ({
//           date: item.monthName,
//           shipment: item.shipmentCount,
//           delivery: item.deliveryCount,
//         }));
//         setShipmentData(formattedShipmentData);

//         // Fetch revenue data
//         const revenueResponse = await apiService.getRevenue();
//         const formattedRevenueData = revenueResponse.data.months.map(item => ({
//           month: item.monthName,
//           revenue: item.totalRevenue,
//         }));
//         setRevenueData(formattedRevenueData);
//         setTotalRevenue(revenueResponse.data.summary.formattedTotalRevenue);

//         // Fetch order overview data
//         const orderResponse = await apiService.getOrderOverView();
//         setOrderData({
//           pending: orderResponse.pending || 0,
//           inProgress: orderResponse.inProgress || 0,
//           completed: orderResponse.completed || 0,
//           total: orderResponse.total || 0,
//         });

//         setLoading(false);
//       } catch (err) {
//         setError(err.message || "Failed to fetch data");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate progress bar widths as percentages
//   const pendingWidth = orderData.total > 0 ? (orderData.pending / orderData.total * 100).toFixed(0) : 0;
//   const inProgressWidth = orderData.total > 0 ? (orderData.inProgress / orderData.total * 100).toFixed(0) : 0;
//   const completedWidth = orderData.total > 0 ? (orderData.completed / orderData.total * 100).toFixed(0) : 0;

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className=" text-white">
//       <div className="grid xl:grid-cols-[2fr_1fr] gap-6">
//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6">
//           {/* Activity Overview */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[515px] p-6">
//             <h2 className="text-[22px] font-semibold mb-1">Activity Overview</h2>
//             <p className="text-[16px] font-semibold mb-4">Shipment and Deliveries over time</p>
//             <div className="w-full h-[378px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={shipmentData}>
//                   <defs>
//                     <linearGradient id="colorShipment" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#5D5FEF" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#5D5FEF" stopOpacity={0} />
//                     </linearGradient>
//                     <linearGradient id="colorDelivery" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#ED7B50" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#ED7B50" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <XAxis dataKey="date" tick={{ fill: "#fff" }} />
//                   <YAxis tick={{ fill: "#fff" }} />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="shipment"
//                     stroke="#5D5FEF"
//                     fillOpacity={1}
//                     fill="url(#colorShipment)"
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="delivery"
//                     stroke="#ED7B50"
//                     fillOpacity={1}
//                     fill="url(#colorDelivery)"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//             <div className="flex justify-between mt-4 px-16">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-[#5D5FEF] rounded-full"></div>
//                 <span className="text-[12px] font-bold">Shipment</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-[#ED7B50] rounded-full"></div>
//                 <span className="text-[12px] font-bold">Deliveries</span>
//               </div>
//             </div>
//           </div>

//           {/* Active Trucks & Drivers */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[158px] p-4">
//             <h3 className="text-[22px] font-semibold mb-4">Active Truck & Drivers</h3>
//             <div className="flex gap-4">
//               <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
//                 <p className="text-[16px] font-medium">Trucks</p>
//                 <p className="text-[22px] font-semibold">253</p>
//               </div>
//               <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
//                 <p className="text-[16px] font-medium">Drivers</p>
//                 <p className="text-[22px] font-semibold">253</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-6">
//           {/* Revenue */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[268px] p-6">
//             <h3 className="text-[16px] font-semibold mb-1">Revenue</h3>
//             <p className="text-[22px] font-semibold mb-4">{totalRevenue}</p>
//             <div className="w-full h-[131px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={revenueData}>
//                   <XAxis dataKey="month" tick={{ fill: "#fff" }} />
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="revenue"
//                     stroke="#ffffff"
//                     strokeWidth={2}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Order Overview */}
//           <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[405px] p-6">
//             <h3 className="text-[22px] font-semibold mb-4">Order Overview</h3>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">Pending ({orderData.pending})</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#FFD057] h-full" style={{ width: `${pendingWidth}%` }}></div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">In Progress ({orderData.inProgress})</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#00B2FF] h-full" style={{ width: `${inProgressWidth}%` }}></div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-[16px] font-semibold mb-1 py-2">Completed ({orderData.completed})</p>
//               <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
//                 <div className="bg-[#3BC057] h-full" style={{ width: `${completedWidth}%` }}></div>
//               </div>
//             </div>
//             <div className="border-t border-[#F2F2F2] mt-16 pt-3 flex justify-between">
//               <span className="text-[16px] font-medium">Total Order</span>
//               <span className="text-[16px] font-medium">{orderData.total}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWidgets;
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import apiService from "../../components/ApiController/ApiService"; // Adjust path as needed

const DashboardWidgets = () => {
  const [shipmentData, setShipmentData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState("$0.00");
  const [orderData, setOrderData] = useState({
    pending: 0,
    inProgress: 0,
    completed: 0,
    total: 0,
  });
  const [dashboardData, setDashboardData] = useState({
    activeTruck: 0,
    activeDriver: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch shipment data
        const shipmentResponse = await apiService.getShipmentDeliveriesOverview();
        const formattedShipmentData = shipmentResponse.map(item => ({
          date: item.monthName,
          shipment: item.shipmentCount,
          delivery: item.deliveryCount,
        }));
        setShipmentData(formattedShipmentData);

        // Fetch revenue data
        const revenueResponse = await apiService.getRevenue();
        const formattedRevenueData = revenueResponse.data.months.map(item => ({
          month: item.monthName,
          revenue: item.totalRevenue,
        }));
        setRevenueData(formattedRevenueData);
        setTotalRevenue(revenueResponse.data.summary.formattedTotalRevenue);

        // Fetch order overview data
        const orderResponse = await apiService.getOrderOverView();
        setOrderData({
          pending: orderResponse.pending || 0,
          inProgress: orderResponse.inProgress || 0,
          completed: orderResponse.completed || 0,
          total: orderResponse.total || 0,
        });

        // Fetch dashboard data for trucks and drivers
        const dashboardResponse = await apiService.getDashboard();
        setDashboardData({
          activeTruck: dashboardResponse.data.activeTruck || 0,
          activeDriver: dashboardResponse.data.activeDriver || 0,
        });

        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate progress bar widths as percentages
  const pendingWidth = orderData.total > 0 ? (orderData.pending / orderData.total * 100).toFixed(0) : 0;
  const inProgressWidth = orderData.total > 0 ? (orderData.inProgress / orderData.total * 100).toFixed(0) : 0;
  const completedWidth = orderData.total > 0 ? (orderData.completed / orderData.total * 100).toFixed(0) : 0;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" text-white">
      <div className="grid xl:grid-cols-[2fr_1fr] gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Activity Overview */}
          <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[515px] p-6">
            <h2 className="text-[22px] font-semibold mb-1">Activity Overview</h2>
            <p className="text-[16px] font-semibold mb-4">Shipment and Deliveries over time</p>
            <div className="w-full h-[378px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={shipmentData}>
                  <defs>
                    <linearGradient id="colorShipment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5D5FEF" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#5D5FEF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorDelivery" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ED7B50" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ED7B50" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" tick={{ fill: "#fff" }} />
                  <YAxis tick={{ fill: "#fff" }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="shipment"
                    stroke="#5D5FEF"
                    fillOpacity={1}
                    fill="url(#colorShipment)"
                  />
                  <Area
                    type="monotone"
                    dataKey="delivery"
                    stroke="#ED7B50"
                    fillOpacity={1}
                    fill="url(#colorDelivery)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-4 px-16">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#5D5FEF] rounded-full"></div>
                <span className="text-[12px] font-bold">Shipment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ED7B50] rounded-full"></div>
                <span className="text-[12px] font-bold">Deliveries</span>
              </div>
            </div>
          </div>

          {/* Active Trucks & Drivers */}
          <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[158px] p-4">
            <h3 className="text-[22px] font-semibold mb-4">Active Truck & Drivers</h3>
            <div className="flex gap-4">
              <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
                <p className="text-[16px] font-medium">Trucks</p>
                <p className="text-[22px] font-semibold">{dashboardData.activeTruck}</p>
              </div>
              <div className="w-full h-[77px] bg-[#080646] border border-[#1C1889] rounded-[8px] text-center flex justify-between px-5 items-center">
                <p className="text-[16px] font-medium">Drivers</p>
                <p className="text-[22px] font-semibold">{dashboardData.activeDriver}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Revenue */}
          <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[268px] p-6">
            <h3 className="text-[16px] font-semibold mb-1">Revenue</h3>
            <p className="text-[22px] font-semibold mb-4">{totalRevenue}</p>
            <div className="w-full h-[131px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="month" tick={{ fill: "#fff" }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#ffffff"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Overview */}
          <div className="bg-[#131060] border border-[#1C1889] rounded-[16px] w-full h-[405px] p-6">
            <h3 className="text-[22px] font-semibold mb-4">Order Overview</h3>
            <div className="mb-4">
              <p className="text-[16px] font-semibold mb-1 py-2">Pending ({orderData.pending})</p>
              <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                <div className="bg-[#FFD057] h-full" style={{ width: `${pendingWidth}%` }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[16px] font-semibold mb-1 py-2">In Progress ({orderData.inProgress})</p>
              <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
                <div className="bg-[#00B2FF] h-full" style={{ width: `${inProgressWidth}%` }}></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[16px] font-semibold mb-1 py-2">Completed ({orderData.completed})</p>
              <div className="bg-white/20 rounded-full overflow-hidden">
                <div className="bg-[#3BC057] h-full" style={{ width: `${completedWidth}%` }}></div>
              </div>
            </div>
            <div className="border-t border-[#F2F2F2] mt-16 pt-3 flex justify-between">
              <span className="text-[16px] font-medium">Total Order</span>
              <span className="text-[16px] font-medium">{orderData.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;