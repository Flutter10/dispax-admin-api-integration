// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const data = [
//     {
//         id: '1',
//         ShipmentID: 'SIP #89745564',
//         Customer: 'John Smith',
//         Route: 'FromChicago, ILToNewyork, NY',
//         Status: 'In transit',
//         DriverTruck: 'BaTRK-2548John Smithsic',
//         Date: 'Expected2025/05/05',
//         Weight: '5,200 lbs',
//     },
//     {
//         id: '1',
//         ShipmentID: 'SIP #89745564',
//         Customer: 'John Smith',
//         Route: 'FromChicago, ILToNewyork, NY',
//         Status: 'Delayed',
//         DriverTruck: 'BaTRK-2548John Smithsic',
//         Date: 'Expected2025/05/05',
//         Weight: '5,200 lbs',
//     },
//     {
//         id: '1',
//         ShipmentID: 'SIP #89745564',
//         Customer: 'John Smith',
//         Route: 'FromChicago, ILToNewyork, NY',
//         Status: 'Scheduled',
//         DriverTruck: 'BaTRK-2548John Smithsic',
//         Date: 'Expected2025/05/05',
//         Weight: '5,200 lbs',
//     },
//     {
//         id: '1',
//         ShipmentID: 'SIP #89745564',
//         Customer: 'John Smith',
//         Route: 'FromChicago, ILToNewyork, NY',
//         Status: 'Delivered',
//         DriverTruck: 'BaTRK-2548John Smithsic',
//         Date: 'Expected2025/05/05',
//         Weight: '5,200 lbs',
//     },
//     // ... other data items remain the same
// ];

// const statusSteps = [
//     { key: 'scheduled', label: 'Scheduled' },
//     { key: 'inTransit', label: 'In Transit' },
//     { key: 'nearDestination', label: 'Near Destination' },
//     { key: 'delivered', label: 'Delivered' },
// ];

// const CheckIcon = () => (
//     <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//     </svg>
// );

// const NearDestinationIcon = () => (
//     <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//     </svg>
// );
// const shipmentStats = [
//     { label: "Total Shipment", value: 2457, note: "+124 this month", noteColor: "text-[#14AE5C]" },
//     { label: "In-Transit", value: 87, note: "42 due today", noteColor: "text-[#6763F1]" },
//     { label: "Delivered Shipment", value: 2156, note: "98% on time", noteColor: "text-[#14AE5C]" },
//     { label: "Issue Reported", value: 14, note: "5 required attention", noteColor: "text-[#EC221F]" },
// ];

// const TotalShipmentsTable = () => {
//     const [showDropdown, setShowDropdown] = useState(null);
//     const [editPopup, setEditPopup] = useState({ open: false, role: null });
//     const [trackPopup, setTrackPopup] = useState({ open: false, role: null });
//     const editPopupRef = useRef(null);
//     const trackPopupRef = useRef(null);

//     const handleActionClick = (index) => {
//         setShowDropdown((prev) => (prev === index ? null : index));
//     };

//     const openEditPopup = (role) => {
//         console.log('Opening Edit popup for role:', role.ShipmentID);
//         setEditPopup({ open: true, role });
//         setShowDropdown(null);
//     };

//     const closeEditPopup = () => {
//         console.log('Closing Edit popup');
//         setEditPopup({ open: false, role: null });
//     };

//     const openTrackPopup = (role) => {
//         console.log('Opening Track popup for role:', role.ShipmentID);
//         setTrackPopup({ open: true, role });
//         setShowDropdown(null);
//     };

//     const closeTrackPopup = () => {
//         console.log('Closing Track popup');
//         setTrackPopup({ open: false, role: null });
//     };

//     // Handle click outside for both popups
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (editPopupRef.current && !editPopupRef.current.contains(event.target)) {
//                 closeEditPopup();
//             }
//             if (trackPopupRef.current && !trackPopupRef.current.contains(event.target)) {
//                 closeTrackPopup();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             {/* Dropdown + Stats */}
//             <div className="flex flex-col gap-4 mb-8">
//                 <div className="flex items-center gap-4">
//                     <label htmlFor="company" className="text-[#F9F9F9] font-poppins font-medium text-[16px]">
//                         Monitor Shipment of
//                     </label>
//                     <select
//                         id="company"
//                         className="w-[244px] h-[56px] rounded-[8px] bg-[#F7F7F7] text-black px-4"
//                     >
//                         <option value="Company A">Company A</option>
//                         <option value="Company B">Company B</option>
//                         <option value="Company C">Company C</option>
//                     </select>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                     {shipmentStats.map((stat, i) => (
//                         <div
//                             key={i}
//                             className="w-full h-[101px] border border-[#1C1889] rounded-md px-6 py-2"
//                             style={{
//                                 background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
//                             }}
//                         >
//                             <div className="font-semibold text-[#BFBFBF] text-[16px]">{stat.label}</div>
//                             <div className="font-semibold text-[24px] mt-1">{stat.value}</div>
//                             <div className={`font-semibold text-[16px] mt-1 ${stat.noteColor}`}>{stat.note}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1200px] table-auto text-left w-full">
//                     <thead>
//                         <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Shipment ID</th>
//                             <th className="px-5">Customer</th>
//                             <th className="px-5">Route</th>
//                             <th className="px-5">Status</th>
//                             <th className="px-5">Driver/Truck</th>
//                             <th className="px-5">Date</th>
//                             <th className="px-5">Weight</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.ShipmentID}</td>
//                                 <td className="px-5">{role.Customer}</td>
//                                 <td className="px-5">
//                                     <div className="text-sm">
//                                         <div className="text-xs text-gray-300">From</div>
//                                         <div className="font-semibold">
//                                             {role.Route.split('To')[0]?.replace('From', '').trim()}
//                                         </div>
//                                         <div className="text-xs text-gray-300 mt-1">To</div>
//                                         <div className="font-semibold">
//                                             {role.Route.split('To')[1]?.trim()}
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td className="px-5">
//                                     <span
//                                         className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.Status === 'In transit'
//                                             ? 'bg-[#6763F1]'
//                                             : role.Status === 'Delivered'
//                                                 ? 'bg-[#14AE5C]'
//                                                 : role.Status === 'Scheduled'
//                                                     ? 'bg-[#9414AE]'
//                                                     : 'bg-[#E8B931]'
//                                             }`}
//                                     >
//                                         {role.Status}
//                                     </span>
//                                 </td>
//                                 <td className="px-5">{role.DriverTruck}</td>
//                                 <td className="px-5">{role.Date}</td>
//                                 <td className="px-5">{role.Weight}</td>
//                                 <td className="px-5 relative">
//                                     <img
//                                         src="/tableAction.svg"
//                                         alt="Action"
//                                         className="w-5 h-5 cursor-pointer"
//                                         onClick={() => handleActionClick(index)}
//                                     />
//                                     {showDropdown === index && (
//                                         <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[150px]">
//                                             <div
//                                                 className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b"
//                                                 onClick={() => openEditPopup(role)}
//                                             >
//                                                 View Detail
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() => openTrackPopup(role)}
//                                             >
//                                                 Track Location
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
//                                             >
//                                                 Contact Driver
//                                             </div>
//                                         </div>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* View Detail Popup */}
//             {editPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         ref={editPopupRef}
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '581px',
//                             height: '493px',
//                             background: '#131060',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <p className="text-[22px] font-semibold mb-2">Global Shipment Co.</p>
//                         <div className="flex justify-between mb-4">
//                             <span>Shipment ID-</span>
//                             <span className="font-medium">{editPopup.role.ShipmentID}</span>
//                         </div>
//                         <div className="flex justify-between mb-4">
//                             <span>Customer-</span>
//                             <span className="font-medium">{editPopup.role.Customer}</span>
//                         </div>
//                         <div className="flex justify-between items-center mb-4">
//                             <span>Route-</span>
//                             <span className="text-sm">
//                                 From <span className="font-semibold">{editPopup.role.Route.split('To')[0]?.replace('From', '').trim()}</span> - To{' '}
//                                 <span className="font-semibold">{editPopup.role.Route.split('To')[1]?.trim()}</span>
//                             </span>
//                         </div>
//                         <div className="flex justify-between items-center mb-4">
//                             <span>Status-</span>
//                             <span
//                                 className={`text-white px-4 py-1 rounded-full text-sm ${editPopup.role.Status === 'In transit'
//                                     ? 'bg-[#6763F1]'
//                                     : editPopup.role.Status === 'Delivered'
//                                         ? 'bg-[#14AE5C]'
//                                         : editPopup.role.Status === 'Scheduled'
//                                             ? 'bg-[#9414AE]'
//                                             : 'bg-[#E8B931]'
//                                     }`}
//                             >
//                                 {editPopup.role.Status}
//                             </span>
//                         </div>
//                         <div className="flex justify-between mb-4">
//                             <span>Driver/Truck-</span>
//                             <span className="font-medium">{editPopup.role.DriverTruck}</span>
//                         </div>
//                         <div className="flex justify-between mb-4">
//                             <span>Expected Date-</span>
//                             <span className="font-medium">{editPopup.role.Date}</span>
//                         </div>
//                         <div className="flex justify-between mb-4">
//                             <span>Weight-</span>
//                             <span className="font-medium">{editPopup.role.Weight}</span>
//                         </div>
//                         <div className="mt-auto self-end">
//                             <button className="border border-[#900B09] text-[#fff] px-4 py-1 rounded-md hover:bg-[#ff4d6d1a] transition">
//                                 Report Issue
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Track Location Popup */}
//             {trackPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         ref={trackPopupRef}
//                         className="flex gap-4 w-[90%] lg:w-[70%] max-h-[80vh] lg:max-h-[500px] border border-[#fff] rounded-2xl text-white bg-[#131060] overflow-hidden"
//                     >
//                         {/* Left: Status Timeline */}
//                         <div className="w-full lg:w-[40%] bg-[#131060] rounded-l-2xl p-4 lg:p-5 flex flex-col">
//                             <h1 className="text-[18px] lg:text-[20px] font-semibold mb-3">Global Shipment Co.</h1>
//                             <div className="flex justify-between mb-2">
//                                 <p className="text-[12px] lg:text-[13px] text-[#B7B7B7]">Status</p>
//                             </div>
//                             <div className="flex justify-between mb-3">
//                                 <p className="text-[14px] lg:text-[15px] text-[#FFFFFF]">SIP #894561</p>
//                             </div>
//                             <div className="border border-[#595959] mb-2"></div>
//                             <p className='text-[16px] mb-3'>Driver Details</p>
//                             <div className="border border-[#fff] mb-4 px-3 py-3 lg:px-4 lg:py-4 rounded-xl">
//                                 <div className="flex items-center gap-2 mb-2">
//                                     <img
//                                         src="https://randomuser.me/api/portraits/men/1.jpg"
//                                         alt="driver"
//                                         className="w-[28px] h-[28px] lg:w-[30px] lg:h-[30px] rounded-2xl border-2 border-[#009951]"
//                                     />
//                                     <div>
//                                         <p className="text-white font-medium text-[14px] lg:text-[15px]">{trackPopup.role.Customer}</p>
//                                         <p className="text-white text-[14px] lg:text-[15px] font-medium">{trackPopup.role.DriverTruck.split('John')[0]}</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className="text-[#FFFFFF] text-[10px] lg:text-[11px] mt-1">Total Deliveries - 256</p>
//                                     <p className="text-[#FFFFFF] text-[10px] lg:text-[11px] mt-1">On Time Deliveries - 210</p>
//                                     <p className="text-[#FFFFFF] text-[10px] lg:text-[11px] mt-1">
//                                         Reviews - <span className="text-yellow-400">4.5★</span>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="border border-[#595959] mb-2"></div>
//                             <div className="flex flex-col gap-3 mt-1">
//                                 {statusSteps.map((step, idx) => (
//                                     <div key={step.key} className="flex items-center gap-2">
//                                         <span>
//                                             {idx < statusSteps.findIndex((s) => s.label.toLowerCase() === trackPopup.role.Status.toLowerCase()) ? (
//                                                 <CheckIcon />
//                                             ) : idx === statusSteps.findIndex((s) => s.label.toLowerCase() === trackPopup.role.Status.toLowerCase()) ? (
//                                                 <NearDestinationIcon />
//                                             ) : (
//                                                 <span className="w-5 h-5 lg:w-6 lg:h-6 inline-block"></span>
//                                             )}
//                                         </span>
//                                         <span
//                                             className={`text-white text-[13px] lg:text-[14px] ${idx === statusSteps.findIndex((s) => s.label.toLowerCase() === trackPopup.role.Status.toLowerCase()) && 'font-semibold'
//                                                 }`}
//                                         >
//                                             {step.label}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         {/* Right: Map Placeholder */}
//                         <div className="flex-1 overflow-hidden relative">
//                             <iframe
//                                 title="Live Tracking Map"
//                                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 referrerPolicy="no-referrer-when-downgrade"
//                                 className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default TotalShipmentsTable;
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import apiService from '../ApiController/ApiService'; // Adjust path if needed

const OutlinedInput = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="relative mb-6 w-full">
      <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
      />
    </div>
  );
};

const OutlinedSelect = ({ label, options, value, onChange, required }) => {
  return (
    <div className="relative mb-6 w-full">
      <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#080625]">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] appearance-none"
      >
        <option value="" disabled>Select {label}</option>
        {options.map((opt) => (
          <option key={opt.id || opt} value={opt.id || opt} className="text-black">
            {opt.title || opt}
          </option>
        ))}
      </select>
    </div>
  );
};

const TotalShipmentsTable = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [createRolePopup, setCreateRolePopup] = useState(false);
  const [editPopup, setEditPopup] = useState({ open: false, role: null });
  const [packages, setPackages] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [companyData, setCompanyData] = useState({
    mobileNumber: '',
    email: '',
    fullName: '',
    fleetSizeDriver: '',
    fleetSizeTruck: '',
    packageId: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [packageData, companyResponse] = await Promise.all([
          apiService.getPackage().catch((err) => {
            console.warn('getPackage API failed:', err);
            return [];
          }),
          apiService.getCompany(),
        ]);
        console.log('Fetched packages:', packageData);
        console.log('Fetched companies:', companyResponse);
        setPackages(packageData);

        const transformedCompanies = companyResponse.docs.map((company) => ({
          id: company._id,
          company: company.fullName || 'Unknown',
          totalShipment: company.totalShipment || 0,
          totalPendingShipment: company.totalPendingShipment || 0,
          totalInProcessShipment: company.totalInProcessShipment || 0,
          totalCompletedShipment: company.totalCompletedShipment || 0,
        }));
        setCompanies(transformedCompanies);
      } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch data. Please try again.';
        setError(errorMessage);
        console.error('Error fetching data:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
          stack: error.stack,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleActionClick = (index) => {
    setShowDropdown((prev) => (prev === index ? null : index));
  };

  const openCreateRolePopup = () => {
    console.log('Opening Create Company popup');
    setCompanyData({
      mobileNumber: '',
      email: '',
      fullName: '',
      fleetSizeDriver: '',
      fleetSizeTruck: '',
      packageId: '',
    });
    setCreateRolePopup(true);
  };

  const closeCreateRolePopup = () => {
    console.log('Closing Create Company popup');
    setCreateRolePopup(false);
  };

  const handleCreateCompany = async () => {
    const { mobileNumber, email, fullName, fleetSizeDriver, fleetSizeTruck, packageId } = companyData;
    if (!mobileNumber || !email || !fullName || !fleetSizeDriver || !fleetSizeTruck || !packageId) {
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      return;
    }

    try {
      const response = await apiService.addCompany(companyData);
      console.log('Company created:', response);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company added successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName || 'Unknown',
        totalShipment: company.totalShipment || 0,
        totalPendingShipment: company.totalPendingShipment || 0,
        totalInProcessShipment: company.totalInProcessShipment || 0,
        totalCompletedShipment: company.totalCompletedShipment || 0,
      }));
      setCompanies(transformedCompanies);
      closeCreateRolePopup();
    } catch (error) {
      console.error('Error creating company:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message || 'Failed to add company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const handleDelete = async (roleId) => {
    try {
      await apiService.removeCompany(roleId);
      console.log('Company deleted:', roleId);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company deleted successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName || 'Unknown',
        totalShipment: company.totalShipment || 0,
        totalPendingShipment: company.totalPendingShipment || 0,
        totalInProcessShipment: company.totalInProcessShipment || 0,
        totalCompletedShipment: company.totalCompletedShipment || 0,
      }));
      setCompanies(transformedCompanies);
      setShowDropdown(null);
    } catch (error) {
      console.error('Error deleting company:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message || 'Failed to delete company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const openEditPopup = async (role) => {
    console.log('Opening Edit popup for company:', role.company);
    try {
      const company = await apiService.getCompanyById(role.id);
      setCompanyData({
        mobileNumber: company.mobileNumber || '',
        email: company.email || '',
        fullName: company.fullName || '',
        fleetSizeDriver: company.fleetSizeDriver || '',
        fleetSizeTruck: company.fleetSizeTruck || '',
        packageId: company.packageId || '',
      });
      setEditPopup({ open: true, role });
    } catch (error) {
      console.error('Error fetching company data:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message || 'Failed to load company data. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const closeEditPopup = () => {
    console.log('Closing Edit popup');
    setEditPopup({ open: false, role: null });
  };

  const handleSaveChanges = async () => {
    const { mobileNumber, email, fullName, fleetSizeDriver, fleetSizeTruck, packageId } = companyData;
    if (!mobileNumber || !email || !fullName || !fleetSizeDriver || !fleetSizeTruck || !packageId) {
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'All fields are required. Please fill in all fields.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      return;
    }

    try {
      await apiService.updateCompany(editPopup.role.id, companyData);
      console.log('Company updated:', companyData);
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Company updated successfully!',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
      const companyResponse = await apiService.getCompany();
      const transformedCompanies = companyResponse.docs.map((company) => ({
        id: company._id,
        company: company.fullName || 'Unknown',
        totalShipment: company.totalShipment || 0,
        totalPendingShipment: company.totalPendingShipment || 0,
        totalInProcessShipment: company.totalInProcessShipment || 0,
        totalCompletedShipment: company.totalCompletedShipment || 0,
      }));
      setCompanies(transformedCompanies);
      closeEditPopup();
    } catch (error) {
      console.error('Error updating company:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message || 'Failed to update company. Please try again.',
        confirmButtonColor: '#6F1AFF',
        background: '#080625',
        color: '#fff',
      });
    }
  };

  const handleInputChange = (field, value) => {
    setCompanyData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="flex justify-between mb-2">
        {/* <p className="text-[#fff] text-[22px] font-semibold py-3">Total Shipments</p>
        <button
          className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
          onClick={openCreateRolePopup}
        >
          Add Company
        </button> */}
      </div>
      <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
        <table className="min-w-[800px] table-auto text-left w-full">
          <thead>
            <tr className="bg-[#131060] h-[40px] text-white text-sm border-b border-[#fff]">
              <th className="px-5">Company Name</th>
              <th className="px-5">Total Shipments</th>
              <th className="px-5">Pending Shipments</th>
              <th className="px-5">In-Process Shipments</th>
              <th className="px-5">Completed Shipments</th>
              <th className="px-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center text-white py-4">
                  Loading companies...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center text-red-500 py-4">
                  {error}
                </td>
              </tr>
            ) : companies.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-white py-4">
                  No companies available
                </td>
              </tr>
            ) : (
              companies.map((role, index) => (
                <tr
                  key={role.id || index}
                  className={`bg-[#131060] text-white h-[90px] ${index !== companies.length - 1 ? 'border-b border-[#fff]' : ''}`}
                >
                  <td className="px-5">{role.company}</td>
                  <td className="px-5">{role.totalShipment}</td>
                  <td className="px-5">{role.totalPendingShipment}</td>
                  <td className="px-5">{role.totalInProcessShipment}</td>
                  <td className="px-5">{role.totalCompletedShipment}</td>
                  <td className="px-5 relative">
                    <img
                      src="/tableAction.svg"
                      alt="Action"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleActionClick(index)}
                    />
                    {showDropdown === index && (
                      <div
                        className="absolute bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[150px]"
                        style={{ top: '30px', right: '20px' }}
                      >
                        <div
                          className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850] text-[16px]"
                          onClick={() => openEditPopup(role)}
                        >
                          Edit Company
                        </div>
                        <div
                          className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] text-[16px]"
                          onClick={() => handleDelete(role.id)}
                        >
                          Delete Company
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {createRolePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px] overflow-y-auto hide-scrollbar custom-scrollbar"
            style={{
              width: '594px',
              maxHeight: '80vh',
              background: '#080625',
              border: '1px solid #FFFFFF',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div className="flex mb-6">
              <p className="text-[22px] font-semibold">Create Company</p>
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeCreateRolePopup}
              >
                <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>
            <OutlinedInput
              type="text"
              label="Company Name"
              placeholder="Enter Company Name"
              value={companyData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
            <OutlinedInput
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={companyData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <OutlinedInput
              type="text"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              value={companyData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Trucks)"
              placeholder="Enter Number of Trucks"
              value={companyData.fleetSizeTruck}
              onChange={(e) => handleInputChange('fleetSizeTruck', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Drivers)"
              placeholder="Enter Number of Drivers"
              value={companyData.fleetSizeDriver}
              onChange={(e) => handleInputChange('fleetSizeDriver', e.target.value)}
              required
            />
            <OutlinedSelect
              label="Subscription Package"
              options={packages}
              value={companyData.packageId}
              onChange={(e) => handleInputChange('packageId', e.target.value)}
              required
            />
            <button
              className="bg-[#6F1AFF] text-[#fff] text-[18px] font-semibold rounded-lg py-[12px] px-[20px] mt-4"
              onClick={handleCreateCompany}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {editPopup.open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px] hide-scrollbar overflow-y-auto custom-scrollbar"
            style={{
              width: '594px',
              maxHeight: '80vh',
              background: '#080625',
              border: '1px solid #FFFFFF',
              borderRadius: '16px',
              padding: '24px',
            }}
          >
            <div className="flex mb-6">
              <p className="text-[22px] font-semibold">Edit Company</p>
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeEditPopup}
              >
                <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
              </button>
            </div>
            <OutlinedInput
              type="text"
              label="Company Name"
              placeholder="Enter Company Name"
              value={companyData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
            <OutlinedInput
              type="email"
              label="Email"
              placeholder="Enter Email"
              value={companyData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <OutlinedInput
              type="text"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              value={companyData.mobileNumber}
              onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Trucks)"
              placeholder="Enter Number of Trucks"
              value={companyData.fleetSizeTruck}
              onChange={(e) => handleInputChange('fleetSizeTruck', e.target.value)}
              required
            />
            <OutlinedInput
              type="number"
              label="Fleet Size (Drivers)"
              placeholder="Enter Number of Drivers"
              value={companyData.fleetSizeDriver}
              onChange={(e) => handleInputChange('fleetSizeDriver', e.target.value)}
              required
            />
            <OutlinedSelect
              label="Subscription Package"
              options={packages}
              value={companyData.packageId}
              onChange={(e) => handleInputChange('packageId', e.target.value)}
              required
            />
            <button
              className="bg-[#6F1AFF] text-[#fff] text-[18px] font-semibold rounded-lg py-[12px] px-[20px] mt-4"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TotalShipmentsTable;