// import React, { useState } from 'react';

// const data = [
//     {
//         TruckID: '#TRK 8521',
//         Company: 'Bluedart Logistics',
//         LastService: '2025/05/05',
//         ServiceType: 'Oil Change',
//         status: 'Healthy',
//     },
//     {
//         TruckID: '#TRK 8521',
//         Company: 'Bluedart Logistics',
//         LastService: '2025/05/05',
//         ServiceType: 'Oil Change',
//         status: 'Due Soon',
//     },
//     {
//         TruckID: '#TRK 8521',
//         Company: 'Bluedart Logistics',
//         LastService: '2025/05/05',
//         ServiceType: 'Oil Change',
//         status: 'Over Due',
//     },
//     {
//         TruckID: '#TRK 8521',
//         Company: 'Bluedart Logistics',
//         LastService: '2025/05/05',
//         ServiceType: 'Oil Change',
//         status: 'Due Soon',
//     },
//     {
//         TruckID: '#TRK 8521',
//         Company: 'Bluedart Logistics',
//         LastService: '2025/05/05',
//         ServiceType: 'Oil Change',
//         status: 'Healthy',
//     },
// ];

// const VehicleandHealthMaintanenceTable = () => {
//     const [showDropdown, setShowDropdown] = useState(null);
//     const [createRolePopup, setCreateRolePopup] = useState(false);
//     const [editPopup, setEditPopup] = useState({ open: false, role: null });
//     const [enabled, setEnabled] = useState(false);
//     const [roleName, setRoleName] = useState('');
//     const [description, setDescription] = useState('');
//     const [selectedTab, setSelectedTab] = useState("Pending");

//     const [permissions, setPermissions] = useState({
//         Shipment: false,
//         Billing: false,
//         Users: false,
//         Company: false,
//         Create: false,
//         Edit: false,
//         Delete: false,
//         View: false,
//         Moderate: false,
//     });


//     const closeEditPopup = () => {
//         console.log('Closing Edit popup');
//         setEditPopup({ open: false, role: null });
//     };

//     const handleSaveChanges = () => {
//         console.log('Saving changes for role:', {
//             roleName,
//             description,
//             permissions,
//         });
//         closeEditPopup();
//     };


//     const handlePermissionChange = (perm) => {
//         setPermissions((prev) => ({
//             ...prev,
//             [perm]: !prev[perm],
//         }));
//     };

//     return (
//         <>
//             <div className="flex justify-between mb-2">
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Vehicle Health & Maintenance</p>
//             </div>

//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Truck ID</th>
//                             <th className="px-5">Company</th>
//                             <th className="px-5">Last Service</th>
//                             <th className="px-5">Service Type</th>
//                             <th className="px-5">Status</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.TruckID}</td>
//                                 <td className="px-5">{role.Company}</td>
//                                 <td className="px-5">{role.LastService}</td>
//                                 <td className="px-5">{role.ServiceType}</td>
//                                 <td className="px-5">
//                                     <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
//                                         role.status === 'Due Soon' ? 'bg-[#E8B931] w-[125px]' :
//                                             role.status === 'Healthy' ? 'bg-[#14AE5C]' : 'bg-[#EC221F] w-[110px]'}`}>
//                                         {role.status}
//                                     </span>

//                                 </td>
//                                 <td className="px-5 relative">
//                                     <label className="flex gap-2 items-center cursor-pointer">
//                                         <input
//                                             type="checkbox"
//                                             name=""
//                                             id=""
//                                             className="hidden"
//                                             onChange={(e) => {
//                                                 const outerSpan = e.target.nextSibling;
//                                                 const innerSpan = outerSpan.querySelector('span');
//                                                 if (e.target.checked) {
//                                                     outerSpan.classList.remove('bg-opacity-30');
//                                                     outerSpan.classList.add('bg-opacity-100');
//                                                     innerSpan.classList.add('opacity-100');
//                                                 } else {
//                                                     outerSpan.classList.remove('bg-opacity-100');
//                                                     outerSpan.classList.add('bg-opacity-30');
//                                                     innerSpan.classList.remove('opacity-100');
//                                                 }
//                                             }}
//                                         />
//                                         <span
//                                             className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
//                                         >
//                                             <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
//                                                 <svg
//                                                     className="w-full h-full text-white"
//                                                     fill="none"
//                                                     stroke="currentColor"
//                                                     viewBox="0 0 24 24"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     <path
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         strokeWidth="2"
//                                                         d="M5 13l4 4L19 7"
//                                                     />
//                                                 </svg>
//                                             </span>
//                                         </span>
//                                         <span className="text-white">Mark as Serviced</span>
//                                     </label>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Create Role Popup */}
//             {createRolePopup && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#080625',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeCreateRolePopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter role name"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                     placeholder="Enter short description"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex items-center gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked={permissions[perm]}
//                                             onChange={() => handlePermissionChange(perm)}
//                                             className="w-4 h-4 bg-transparent border border-[#FFFFFF] rounded focus:outline-none"
//                                         />
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex items-center gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked={permissions[perm]}
//                                             onChange={() => handlePermissionChange(perm)}
//                                             className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                                         />
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <select
//                                     name=""
//                                     id=""
//                                     className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                                     placeholder="Select"
//                                 >
//                                     <option value="">Select</option>
//                                 </select>
//                                 <div className="">
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input type="checkbox" className="sr-only peer" />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeCreateRolePopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleCreateRole}
//                             >
//                                 Create Role
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Edit Role Popup */}
//             {editPopup.open && (
//                 <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//                     <div
//                         className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//                         style={{
//                             width: '594px',
//                             height: '490px',
//                             background: '#131060',
//                             border: '1px solid #FFFFFF',
//                             borderRadius: '16px',
//                             padding: '24px',
//                         }}
//                     >
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl"
//                             onClick={closeEditPopup}
//                         >
//                             <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//                         </button>
//                         <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.roleName}</h2>
//                         <div className="flex gap-2">
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                                 <input
//                                     type="text"
//                                     value={roleName}
//                                     onChange={(e) => setRoleName(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                                 <input
//                                     type="text"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Module Access</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                                     <label key={perm} className="flex items-center gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked={permissions[perm]}
//                                             onChange={() => handlePermissionChange(perm)}
//                                             className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                                         />
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//                             <div className="flex flex-wrap gap-4">
//                                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                                     <label key={perm} className="flex items-center gap-2">
//                                         <input
//                                             type="checkbox"
//                                             checked={permissions[perm]}
//                                             onChange={() => handlePermissionChange(perm)}
//                                             className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                                         />
//                                         <span className="text-sm text-white">{perm}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <div className="flex justify-between mb-1">
//                                 <p className="text-[12px] font-normal">Assign User</p>
//                                 <p className="text-[12px] font-normal">Status</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <select
//                                     name=""
//                                     id=""
//                                     className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                                     placeholder="Select"
//                                 >
//                                     <option value="">Select</option>
//                                 </select>


//                                 <div className="">
//                                     <label className="relative inline-flex items-center cursor-pointer">
//                                         <input type="checkbox" className="sr-only peer" />
//                                         <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
//                                         <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-end gap-4 mt-auto">
//                             <button
//                                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                                 onClick={closeEditPopup}
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                                 onClick={handleSaveChanges}
//                             >
//                                 Save Changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default VehicleandHealthMaintanenceTable;
import React, { useState, useEffect } from 'react';
import apiService from '../../ApiController/ApiService'; // Adjust the path as needed

const VehicleandHealthMaintanenceTable = () => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [createRolePopup, setCreateRolePopup] = useState(false);
    const [editPopup, setEditPopup] = useState({ open: false, role: null });
    const [enabled, setEnabled] = useState(false);
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTab, setSelectedTab] = useState("Pending");
    const [vehicleData, setVehicleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        page: 1,
        limit: 10,
        fromDate: '',
        toDate: ''
    });

    const [permissions, setPermissions] = useState({
        Shipment: false,
        Billing: false,
        Users: false,
        Company: false,
        Create: false,
        Edit: false,
        Delete: false,
        View: false,
        Moderate: false,
    });

    const closeEditPopup = () => {
        console.log('Closing Edit popup');
        setEditPopup({ open: false, role: null });
    };

    const handleSaveChanges = () => {
        console.log('Saving changes for role:', {
            roleName,
            description,
            permissions,
        });
        closeEditPopup();
    };

    const handlePermissionChange = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    const closeCreateRolePopup = () => {
        setCreateRolePopup(false);
    };

    const handleCreateRole = () => {
        console.log('Creating role:', {
            roleName,
            description,
            permissions,
        });
        setCreateRolePopup(false);
    };

    const fetchVehicleData = async () => {
        setLoading(true);
        try {
            const response = await apiService.getAllVehicleHealthAndMaintenance(
                filters.page,
                filters.limit,
                filters.fromDate,
                filters.toDate
            );
            setVehicleData(response?.docs || []);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicleData();
    }, [filters]);

    return (
        <>
            <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Vehicle Health & Maintenance</p>
            </div>

            {loading && <p className="text-white">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Truck Number</th>
                            <th className="px-5">Inspection Date</th>
                            <th className="px-5">Remarks</th>
                            <th className="px-5">Trailer Number</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleData.map((vehicle, index) => (
                            <tr
                                key={vehicle._id}
                                className={`bg-[#131060] text-white h-[90px] ${index !== vehicleData.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{vehicle.vehicleTruckNumber?.vehicleNumber || 'N/A'}</td>
                                <td className="px-5">{vehicle.vehicleInspectionDate ? new Date(vehicle.vehicleInspectionDate).toLocaleDateString() : 'N/A'}</td>
                                <td className="px-5">{vehicle.remarks || 'N/A'}</td>
                                <td className="px-5">{vehicle.trailerNumber || 'N/A'}</td>
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                                        vehicle.conditionOfTheAboveVehicleIsSatisfactory ? 'bg-[#14AE5C]' :
                                        vehicle.aboveDefectsNeed ? 'bg-[#E8B931] w-[125px]' : 'bg-[#EC221F] w-[110px]'}`}>
                                        {vehicle.conditionOfTheAboveVehicleIsSatisfactory ? 'Healthy' :
                                         vehicle.aboveDefectsNeed ? 'Due Soon' : 'Over Due'}
                                    </span>
                                </td>
                                <td className="px-5 relative">
                                    <label className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name=""
                                            id=""
                                            className="hidden"
                                            onChange={(e) => {
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span
                                            className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                        >
                                            <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-white">Mark as Serviced</span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {createRolePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#080625',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeCreateRolePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter role name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter short description"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-transparent border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign User</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <select
                                    name=""
                                    id=""
                                    className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
                                    placeholder="Select"
                                >
                                    <option value="">Select</option>
                                </select>
                                <div className="">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeCreateRolePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleCreateRole}
                            >
                                Create Role
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeEditPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role?.roleName}</h2>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign User</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <select
                                    name=""
                                    id=""
                                    className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
                                    placeholder="Select"
                                >
                                    <option value="">Select</option>
                                </select>
                                <div className="">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeEditPopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VehicleandHealthMaintanenceTable;