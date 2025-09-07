// import React, { useState } from 'react';

// const data = [
//     {
//         roleName: '#SIP-89456',
//         description: 'John Smith',
//         assignedUser: 'Chicago,IL->NewYork,NY',
//         permissionSummary: '#TRK-8521 John Smith',
//         status: 'Pending',
//         date: 'Apr 14,2025'
//     },
//     {
//         roleName: '#SIP-89456',
//         description: 'John Smith',
//         assignedUser: 'Chicago,IL->NewYork,NY',
//         permissionSummary: '#TRK-8521 John Smith',
//         status: 'In transit',
//         date: 'Apr 14,2025'
//     },
//     {
//         roleName: '#SIP-89456',
//         description: 'John Smith',
//         assignedUser: 'Chicago,IL->NewYork,NY',
//         permissionSummary: '#TRK-8521 John Smith',
//         status: 'Delivered',
//         date: 'Apr 14,2025'
//     },
//     {
//         roleName: '#SIP-89456',
//         description: 'John Smith',
//         assignedUser: 'Chicago,IL->NewYork,NY',
//         permissionSummary: '#TRK-8521 John Smith',
//         status: 'Pending',
//         date: 'Apr 14,2025'
//     },
//     {
//         roleName: '#SIP-89456',
//         description: 'John Smith',
//         assignedUser: 'Chicago,IL->NewYork,NY',
//         permissionSummary: '#TRK-8521 John Smith',
//         status: 'Pending',
//         date: 'Apr 14,2025'
//     },
// ];

// const ManageAllShipments = () => {
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

//     const handleActionClick = (index) => {
//         setShowDropdown((prev) => (prev === index ? null : index));
//     };


//     const openEditPopup = (role) => {
//         console.log('Opening Edit popup for role:', role.roleName);
//         setEditPopup({ open: true, role });
//         setRoleName(role.roleName);
//         setDescription(role.description);
//         // Parse permissionSummary to set checkboxes for Action Permission
//         const perms = role.permissionSummary.split(', ').reduce((acc, perm) => {
//             acc[perm] = true;
//             return acc;
//         }, {
//             Shipment: false,
//             Billing: false,
//             Users: false,
//             Company: false,
//             Create: false,
//             Edit: false,
//             Delete: false,
//             View: false,
//             Moderate: false,
//         });
//         if (role.permissionSummary === 'All Permissions') {
//             perms.Create = true;
//             perms.Edit = true;
//             perms.Delete = true;
//             perms.View = true;
//             perms.Moderate = true;
//         }
//         setPermissions(perms);
//         setShowDropdown(null);
//     };

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

//     const handleDelete = (roleName) => {
//         console.log('Deleting role:', roleName);
//         setShowDropdown(null);
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
//                 <p className="text-[#fff] text-[22px] font-semibold py-3">Manage All Shipments</p>
//             </div>
//             <div className="w-full overflow-hidden mb-6">
//                 <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
//                     {/* Trucks Tab */}
//                     <div
//                         onClick={() => setSelectedTab("Pending")}
//                         className={`w-[220px] h-[48px]  flex items-center justify-center font-semibold text-[22px] cursor-pointer ${selectedTab === "Pending"
//                                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                                 : "text-white"
//                             }`}
//                     >
//                         Pending
//                     </div>

//                     {/* Drivers Tab */}
//                     <div
//                         onClick={() => setSelectedTab("In transit")}
//                         className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${selectedTab === "In transit"
//                                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                                 : "text-[#BFBFBF]"
//                             }`}
//                     >
//                         In transit
//                     </div>

//                     <div
//                         onClick={() => setSelectedTab("Delivered")}
//                         className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${selectedTab === "Delivered"
//                                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                                 : "text-[#BFBFBF]"
//                             }`}
//                     >
//                         Delivered
//                     </div>
//                 </div>
//             </div>
//             <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//                 <table className="min-w-[1000px] w-full text-left">
//                     <thead>
//                         <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                             <th className="px-5">Shipment ID</th>
//                             <th className="px-5">Client</th>
//                             <th className="px-5">Origin → Destination</th>
//                             <th className="px-5">Truck & Driver</th>
//                             <th className="px-5">Status</th>
//                             <th className="px-5">ETA</th>
//                             <th className="px-5">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((role, index) => (
//                             <tr
//                                 key={index}
//                                 className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                             >
//                                 <td className="px-5">{role.roleName}</td>
//                                 <td className="px-5">{role.description}</td>
//                                 <td className="px-5">{role.assignedUser}</td>
//                                 <td className="px-5">{role.permissionSummary}</td>
//                                 <td className="px-5">
//                              <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
//                                         role.status === 'In transit' ? 'bg-[#E8B931]' :
//                                             role.status === 'Delivered' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'}`}>
//                                         {role.status}
//                                     </span>

//                                 </td>
//                                 <td className="px-5">{role.date}</td>
//                                 <td className="px-5 relative">
//                                     <img
//                                         src="/tableAction.svg"
//                                         alt="Action"
//                                         className="w-5 h-5 cursor-pointer"
//                                         onClick={() => handleActionClick(index)}
//                                     />
//                                     {showDropdown === index && (
//                                         <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-32">
//                                             <div
//                                                 className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b"
//                                                 onClick={() => openEditPopup(role)}
//                                             >
//                                                 View
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() =>
//                                                     handleDelete(role.roleName)
//                                                 }
//                                             >
//                                                 Update Status
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() =>
//                                                     handleDelete(role.roleName)
//                                                 }
//                                             >
//                                                 Contact Driver
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() =>
//                                                     handleDelete(role.roleName)
//                                                 }
//                                             >
//                                                 Cancel
//                                             </div>
//                                             <div
//                                                 className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                                                 onClick={() =>
//                                                     handleDelete(role.roleName)
//                                                 }
//                                             >
//                                                 Edit
//                                             </div>
//                                         </div>
//                                     )}
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

// export default ManageAllShipments;
///////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import apiService from '../../components/ApiController/ApiService'; // Import the apiService

// const ManageAllShipments = () => {
//   const [showDropdown, setShowDropdown] = useState(null);
//   const [createRolePopup, setCreateRolePopup] = useState(false);
//   const [editPopup, setEditPopup] = useState({ open: false, role: null });
//   const [enabled, setEnabled] = useState(false);
//   const [roleName, setRoleName] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Pending');
//   const [shipments, setShipments] = useState([]); // State to store API data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   const [permissions, setPermissions] = useState({
//     Shipment: false,
//     Billing: false,
//     Users: false,
//     Company: false,
//     Create: false,
//     Edit: false,
//     Delete: false,
//     View: false,
//     Moderate: false,
//   });

//   // Fetch shipments based on the selected tab
//   useEffect(() => {
//     const fetchShipments = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         let data;
//         if (selectedTab === 'Pending') {
//           data = await apiService.getAllPendingShipment();
//         } else if (selectedTab === 'In Transit') {
//           data = await apiService.getAllInTransitShipment();
//         } else if (selectedTab === 'Delivered') {
//           data = await apiService.getAllCompletedShipment();
//         }
//         setShipments(data);
//       } catch (err) {
//         setError('Failed to fetch shipments. Please try again.');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShipments();
//   }, [selectedTab]);

//   const handleActionClick = (index) => {
//     setShowDropdown((prev) => (prev === index ? null : index));
//   };

//   const openEditPopup = (role) => {
//     console.log('Opening Edit popup for role:', role.Id);
//     setEditPopup({ open: true, role });
//     setRoleName(role.Id);
//     setDescription(role.description);
//     // Parse permissionSummary or set default permissions
//     const perms = {
//       Shipment: false,
//       Billing: false,
//       Users: false,
//       Company: false,
//       Create: false,
//       Edit: false,
//       Delete: false,
//       View: false,
//       Moderate: false,
//     };
//     setPermissions(perms);
//     setShowDropdown(null);
//   };

//   const closeEditPopup = () => {
//     console.log('Closing Edit popup');
//     setEditPopup({ open: false, role: null });
//   };

//   const handleSaveChanges = () => {
//     console.log('Saving changes for role:', {
//       roleName,
//       description,
//       permissions,
//     });
//     closeEditPopup();
//   };

//   const handleDelete = (roleName) => {
//     console.log('Deleting role:', roleName);
//     setShowDropdown(null);
//   };

//   const handlePermissionChange = (perm) => {
//     setPermissions((prev) => ({
//       ...prev,
//       [perm]: !prev[perm],
//     }));
//   };

//   const closeCreateRolePopup = () => {
//     setCreateRolePopup(false);
//   };

//   const handleCreateRole = () => {
//     console.log('Creating role:', { roleName, description, permissions });
//     setCreateRolePopup(false);
//   };

//   return (
//     <>
//       <div className="flex justify-between mb-2">
//         <p className="text-[#fff] text-[22px] font-semibold py-3">Manage All Shipments</p>
//       </div>
//       <div className="w-full overflow-hidden mb-6">
//         <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
//           <div
//             onClick={() => setSelectedTab('Pending')}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === 'Pending' ? 'bg-[#0A0666] text-white rounded-[5px]' : 'text-white'
//             }`}
//           >
//             Pending
//           </div>
//           <div
//             onClick={() => setSelectedTab('In Transit')}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === 'In Transit' ? 'bg-[#0A0666] text-white rounded-[5px]' : 'text-[#BFBFBF]'
//             }`}
//           >
//             In Transit
//           </div>
//           <div
//             onClick={() => setSelectedTab('Delivered')}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === 'Delivered' ? 'bg-[#0A0666] text-white rounded-[5px]' : 'text-[#BFBFBF]'
//             }`}
//           >
//             Delivered
//           </div>
//         </div>
//       </div>
//       {loading && <p className="text-white">Loading shipments...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       {!loading && !error && (
//         <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//           <table className="min-w-[1000px] w-full text-left">
//             <thead>
//               <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                 <th className="px-5">Shipment ID</th>
//                 <th className="px-5">Client</th>
//                 <th className="px-5">Origin → Destination</th>
//                 <th className="px-5">Truck & Driver</th>
//                 <th className="px-5">Status</th>
//                 <th className="px-5">ETA</th>
//                 {/* <th className="px-5">Action</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {shipments.map((role, index) => (
//                 <tr
//                   key={index}
//                   className={`bg-[#131060] text-white h-[90px] ${index !== shipments.length - 1 ? 'border-b border-[#fff]' : ''}`}
//                 >
//                   <td className="px-5">{role.Id}</td>
//                   <td className="px-5">{role.userId?.fullName || 'N/A'}</td>
//                   <td className="px-5">{`${role.origin} → ${role.destination}`}</td>
//                   <td className="px-5">{`${role.vehicleNumber} - ${role.driverContactNumber}`}</td>
//                   <td className="px-5">
//                     <span
//                       className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
//                         role.status === 'In Transit'
//                           ? 'bg-[#E8B931]'
//                           : role.status === 'Delivered'
//                           ? 'bg-[#14AE5C]'
//                           : 'bg-[#EC221F]'
//                       }`}
//                     >
//                       {role.status}
//                     </span>
//                   </td>
//                   <td className="px-5">{role.extimateDeliveryDate ? new Date(role.extimateDeliveryDate).toLocaleDateString() : role.dropOffDate ? new Date(role.dropOffDate).toLocaleDateString() : 'N/A'}</td>
//                   {/* <td className="px-5 relative">
//                     <img
//                       src="/tableAction.svg"
//                       alt="Action"
//                       className="w-5 h-5 cursor-pointer"
//                       onClick={() => handleActionClick(index)}
//                     />
//                     {showDropdown === index && (
//                       <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-32">
//                         <div
//                           className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b"
//                           onClick={() => openEditPopup(role)}
//                         >
//                           View
//                         </div>
//                         <div
//                           className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                           onClick={() => handleDelete(role.Id)}
//                         >
//                           Update Status
//                         </div>
//                         <div
//                           className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                           onClick={() => handleDelete(role.Id)}
//                         >
//                           Contact Driver
//                         </div>
//                         <div
//                           className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                           onClick={() => handleDelete(role.Id)}
//                         >
//                           Cancel
//                         </div>
//                         <div
//                           className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                           onClick={() => handleDelete(role.Id)}
//                         >
//                           Edit
//                         </div>
//                       </div>
//                     )}
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Create Role Popup */}
//       {createRolePopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div
//             className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//             style={{
//               width: '594px',
//               height: '490px',
//               background: '#080625',
//               border: '1px solid #FFFFFF',
//               borderRadius: '16px',
//               padding: '24px',
//             }}
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl"
//               onClick={closeCreateRolePopup}
//             >
//               <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//             </button>
//             <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
//             <div className="flex gap-2">
//               <div className="mb-4">
//                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                 <input
//                   type="text"
//                   value={roleName}
//                   onChange={(e) => setRoleName(e.target.value)}
//                   className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                   placeholder="Enter role name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                   placeholder="Enter short description"
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-400 mb-2">Module Access</p>
//               <div className="flex flex-wrap gap-4">
//                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                   <label key={perm} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={permissions[perm]}
//                       onChange={() => handlePermissionChange(perm)}
//                       className="w-4 h-4 bg-transparent border border-[#FFFFFF] rounded focus:outline-none"
//                     />
//                     <span className="text-sm text-white">{perm}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//               <div className="flex flex-wrap gap-4">
//                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                   <label key={perm} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={permissions[perm]}
//                       onChange={() => handlePermissionChange(perm)}
//                       className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                     />
//                     <span className="text-sm text-white">{perm}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <div className="flex justify-between mb-1">
//                 <p className="text-[12px] font-normal">Assign User</p>
//                 <p className="text-[12px] font-normal">Status</p>
//               </div>
//               <div className="flex justify-between">
//                 <select
//                   name=""
//                   id=""
//                   className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                   placeholder="Select"
//                 >
//                   <option value="">Select</option>
//                 </select>
//                 <div className="">
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
//                     <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-4 mt-auto">
//               <button
//                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                 onClick={closeCreateRolePopup}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                 onClick={handleCreateRole}
//               >
//                 Create Role
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Role Popup */}
//       {editPopup.open && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div
//             className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//             style={{
//               width: '594px',
//               height: '490px',
//               background: '#131060',
//               border: '1px solid #FFFFFF',
//               borderRadius: '16px',
//               padding: '24px',
//             }}
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-xl"
//               onClick={closeEditPopup}
//             >
//               <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
//             </button>
//             <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.Id}</h2>
//             <div className="flex gap-2">
//               <div className="mb-4">
//                 <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
//                 <input
//                   type="text"
//                   value={roleName}
//                   onChange={(e) => setRoleName(e.target.value)}
//                   className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="text-sm text-gray-400 mb-1">Role Description</label>
//                 <input
//                   type="text"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-400 mb-2">Module Access</p>
//               <div className="flex flex-wrap gap-4">
//                 {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
//                   <label key={perm} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={permissions[perm]}
//                       onChange={() => handlePermissionChange(perm)}
//                       className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                     />
//                     <span className="text-sm text-white">{perm}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <p className="text-sm text-gray-400 mb-2">Action Permission</p>
//               <div className="flex flex-wrap gap-4">
//                 {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
//                   <label key={perm} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={permissions[perm]}
//                       onChange={() => handlePermissionChange(perm)}
//                       className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
//                     />
//                     <span className="text-sm text-white">{perm}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//             <div className="mb-4">
//               <div className="flex justify-between mb-1">
//                 <p className="text-[12px] font-normal">Assign User</p>
//                 <p className="text-[12px] font-normal">Status</p>
//               </div>
//               <div className="flex justify-between">
//                 <select
//                   name=""
//                   id=""
//                   className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
//                   placeholder="Select"
//                 >
//                   <option value="">Select</option>
//                 </select>
//                 <div className="">
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
//                     <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-4 mt-auto">
//               <button
//                 className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
//                 onClick={closeEditPopup}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
//                 onClick={handleSaveChanges}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ManageAllShipments;
// import React, { useState, useEffect } from "react";
// import apiService from "../../components/ApiController/ApiService"; // Adjust path as needed

// const ManageAllShipments = () => {
//   const [selectedTab, setSelectedTab] = useState("Pending");
//   const [shipments, setShipments] = useState([]);
//   const [companies, setCompanies] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalDocs, setTotalDocs] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//     const [showDropdown, setShowDropdown] = useState(null);

//   // Fetch companies for dropdown
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await apiService.getCompany({ page: 1, limit: 100 });
//         setCompanies(response.data?.docs || []);
//       } catch (err) {
//         console.error("Failed to fetch companies:", err);
//         setError("Failed to fetch companies. Please try again.");
//       }
//     };
//     fetchCompanies();
//   }, []);
//     const handleActionClick = (index) => {
//         setShowDropdown((prev) => (prev === index ? null : index));
//     };

//   // Fetch shipments based on tab, page, and company
//   useEffect(() => {
//     const fetchShipments = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const params = { page: currentPage, limit: 10 };
//         if (selectedCompany) params.companyId = selectedCompany;

//         let response;
//         if (selectedTab === "Pending") {
//           response = await apiService.getAllPendingShipment(params);
//         } else if (selectedTab === "In Transit") {
//           response = await apiService.getAllInTransitShipment(params);
//         } else if (selectedTab === "Delivered") {
//           response = await apiService.getAllCompletedShipment(params);
//         }

//         // Handle response consistently
//         const shipmentDocs = response.data?.docs || [];
//         setShipments(shipmentDocs);
//         setTotalPages(response.data?.totalPages || 1);
//         setTotalDocs(response.data?.totalDocs || shipmentDocs.length);
//       } catch (err) {
//         setError("Failed to fetch shipments. Please try again.");
//         console.error("Shipment fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShipments();
//   }, [selectedTab, currentPage, selectedCompany]);

//   // Handle page change
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // Map companyId to company fullName
//   const getCompanyName = (companyId) => {
//     if (!companyId) return "N/A";
//     const company = companies.find((c) => c._id === companyId);
//     return company ? company.fullName : "N/A";
//   };

//   return (
//     <div className="text-white w-full p-6">
//       <div className="flex justify-between mb-2">
//         <p className="text-[22px] font-semibold py-3">Manage All Shipments</p>
//       </div>


//       <div className="w-full overflow-hidden mb-6">
//         <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
//           <div
//             onClick={() => {
//               setSelectedTab("Pending");
//               setCurrentPage(1); // Reset to first page on tab change
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Pending"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-white"
//             }`}
//           >
//             Pending
//           </div>
//           <div
//             onClick={() => {
//               setSelectedTab("In Transit");
//               setCurrentPage(1); // Reset to first page on tab change
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "In Transit"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-[#BFBFBF]"
//             }`}
//           >
//             In Transit
//           </div>
//           <div
//             onClick={() => {
//               setSelectedTab("Delivered");
//               setCurrentPage(1); // Reset to first page on tab change
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Delivered"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-[#BFBFBF]"
//             }`}
//           >
//             Delivered
//           </div>
//         </div>
//       </div>

//       {/* Shipments Table */}
//       {loading ? (
//         <p className="text-white text-center py-4">Loading shipments...</p>
//       ) : error ? (
//         <p className="text-red-500 text-center py-4">{error}</p>
//       ) : shipments.length === 0 ? (
//         <p className="text-white text-center py-4">No shipments found.</p>
//       ) : (
//         <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//           <table className="min-w-[1000px] w-full text-left">
//             <thead>
//               <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                 <th className="px-5">Shipment ID</th>
//                 <th className="px-5">Client</th>
//                 <th className="px-5">Origin → Destination</th>
//                 <th className="px-5">Truck & Driver</th>
//                 <th className="px-5">Status</th>
//                 <th className="px-5">ETA</th>
//                <th className="px-5">Action</th>

//               </tr>
//             </thead>
//             <tbody>
//               {shipments.map((shipment, index) => (
//                 <tr
//                   key={shipment._id || index}
//                   className={`bg-[#131060] text-white h-[90px] ${
//                     index !== shipments.length - 1 ? "border-b border-[#fff]" : ""
//                   }`}
//                 >
//                   <td className="px-5">{shipment.orderId || shipment.Id || "N/A"}</td>
//                   <td className="px-5">{getCompanyName(shipment.userId?._id)}</td>
//                   <td className="px-5">{`${shipment.origin || "N/A"} → ${shipment.destination || "N/A"}`}</td>
//                   <td className="px-5">{`${shipment.vehicleNumber || "N/A"} - ${shipment.driverContactNumber || "N/A"}`}</td>
//                   <td className="px-5">
//                     <span
//                       className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
//                         shipment.status === "In Transit"
//                           ? "bg-[#E8B931]"
//                           : shipment.status === "Delivered"
//                           ? "bg-[#14AE5C]"
//                           : "bg-[#EC221F]"
//                       }`}
//                     >
//                       {shipment.status || "N/A"}
//                     </span>
//                   </td>
//                   <td className="px-5">
//                     {shipment.extimateDeliveryDate
//                       ? new Date(shipment.extimateDeliveryDate).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "numeric",
//                           day: "numeric",
//                         })
//                       : shipment.dropOffDate
//                       ? new Date(shipment.dropOffDate).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "numeric",
//                           day: "numeric",
//                         })
//                       : "N/A"}
//                   </td>
//                    <td className="px-5 relative">
//          <img
//                       src="/tableAction.svg"
//                       alt="Action"
//                       className="w-5 h-5 cursor-pointer"
//                       onClick={() => handleActionClick(index)}
//                     />
//                     {showDropdown === index && (
//                       <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-32">
                       
//                         <div
//                           className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                           onClick={() => handleDelete(role.Id)}
//                         >
//                           Update Status
//                         </div>
                       
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <p className="text-sm text-white/70">
//           Showing {shipments.length} out of {totalDocs} results
//         </p>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span className="text-white">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Commented Out Role-Related Code */}
//       {/*
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//         <div
//           className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
//           style={{
//             width: "594px",
//             height: "490px",
//             background: "#080625",
//             border: "1px solid #FFFFFF",
//             borderRadius: "16px",
//             padding: "24px",
//           }}
//         >
//           ... (Role creation popup code)
//         </div>
//       </div>
//       */}
//     </div>
//   );
// };

// export default ManageAllShipments;
// import React, { useState, useEffect } from "react";
// import apiService from "../../components/ApiController/ApiService";
// import Swal from "sweetalert2";

// const ManageAllShipments = () => {
//   const [selectedTab, setSelectedTab] = useState("Pending");
//   const [shipments, setShipments] = useState([]);
//   const [companies, setCompanies] = useState([]);
//   const [selectedCompany, setSelectedCompany] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalDocs, setTotalDocs] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(null);

//   // Fetch companies for dropdown
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await apiService.getCompany({ page: 1, limit: 100 });
//         setCompanies(response.data?.docs || []);
//       } catch (err) {
//         console.error("Failed to fetch companies:", err);
//         setError("Failed to fetch companies. Please try again.");
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // Fetch shipments based on tab, page, and company
//   useEffect(() => {
//     const fetchShipments = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const params = { page: currentPage, limit: 10 };
//         if (selectedCompany) params.companyId = selectedCompany;

//         let response;
//         if (selectedTab === "Pending") {
//           response = await apiService.getAllPendingShipment(params);
//         } else if (selectedTab === "In Transit") {
//           response = await apiService.getAllInTransitShipment(params);
//         } else if (selectedTab === "Delivered") {
//           response = await apiService.getAllCompletedShipment(params);
//         }

//         const shipmentDocs = response.data?.docs || [];
//         setShipments(shipmentDocs);
//         setTotalPages(response.data?.totalPages || 1);
//         setTotalDocs(response.data?.totalDocs || shipmentDocs.length);
//       } catch (err) {
//         setError("Failed to fetch shipments. Please try again.");
//         console.error("Shipment fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchShipments();
//   }, [selectedTab, currentPage, selectedCompany]);

//   // Handle page change
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // Handle action click for dropdown
//   const handleActionClick = (index) => {
//     setShowDropdown((prev) => (prev === index ? null : index));
//   };

//   // Handle marking shipment as complete
//   const handleMarkComplete = async (shipmentId) => {
//     try {
//       await apiService.markCompleteShipment(shipmentId);
//       setShowDropdown(null);
//       Swal.fire({
//         icon: "success",
//         title: "Success",
//         text: "Order status changed to completed successfully!",
//         timer: 3000,
//         showConfirmButton: false,
//       });
//       // Refresh shipments
//       const params = { page: currentPage, limit: 10 };
//       if (selectedCompany) params.companyId = selectedCompany;
//       let response;
//       if (selectedTab === "Pending") {
//         response = await apiService.getAllPendingShipment(params);
//       } else if (selectedTab === "In Transit") {
//         response = await apiService.getAllInTransitShipment(params);
//       }
//       setShipments(response.data?.docs || []);
//       setTotalPages(response.data?.totalPages || 1);
//       setTotalDocs(response.data?.totalDocs || response.data?.docs?.length || 0);
//     } catch (err) {
//       setError("Failed to mark shipment as complete. Please try again.");
//       console.error("Mark complete error:", err);
//     }
//   };

//   // Map companyId to company fullName
//   const getCompanyName = (companyId) => {
//     if (!companyId) return "N/A";
//     const company = companies.find((c) => c._id === companyId);
//     return company ? company.fullName : "N/A";
//   };

//   return (
//     <div className="text-white w-full p-6">
//       <div className="flex justify-between mb-2">
//         <p className="text-[22px] font-semibold py-3">Manage All Shipments</p>
//       </div>

//       <div className="w-full overflow-hidden mb-6">
//         <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
//           <div
//             onClick={() => {
//               setSelectedTab("Pending");
//               setCurrentPage(1);
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Pending"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-white"
//             }`}
//           >
//             Pending
//           </div>
//           <div
//             onClick={() => {
//               setSelectedTab("In Transit");
//               setCurrentPage(1);
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "In Transit"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-[#BFBFBF]"
//             }`}
//           >
//             In Transit
//           </div>
//           <div
//             onClick={() => {
//               setSelectedTab("Delivered");
//               setCurrentPage(1);
//             }}
//             className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
//               selectedTab === "Delivered"
//                 ? "bg-[#0A0666] text-white rounded-[5px]"
//                 : "text-[#BFBFBF]"
//             }`}
//           >
//             Delivered
//           </div>
//         </div>
//       </div>

//       {/* Shipments Table */}
//       {loading ? (
//         <p className="text-white text-center py-4">Loading shipments...</p>
//       ) : error ? (
//         <p className="text-red-500 text-center py-4">{error}</p>
//       ) : shipments.length === 0 ? (
//         <p className="text-white text-center py-4">No shipments found.</p>
//       ) : (
//         <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
//           <table className="min-w-[1000px] w-full text-left">
//             <thead>
//               <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
//                 <th className="px-5">Shipment ID</th>
//                 <th className="px-5">Client</th>
//                 <th className="px-5">Origin → Destination</th>
//                 <th className="px-5">Truck & Driver</th>
//                 <th className="px-5">Status</th>
//                 <th className="px-5">ETA</th>
//                 {selectedTab !== "Delivered" && <th className="px-5">Action</th>}
//               </tr>
//             </thead>
//             <tbody>
//               {shipments.map((shipment, index) => (
//                 <tr
//                   key={shipment._id || index}
//                   className={`bg-[#131060] text-white h-[90px] ${
//                     index !== shipments.length - 1 ? "border-b border-[#fff]" : ""
//                   }`}
//                 >
//                   <td className="px-5">{shipment.orderId || shipment.Id || "N/A"}</td>
//                   <td className="px-5">{getCompanyName(shipment.userId?._id)}</td>
//                   <td className="px-5">{`${shipment.origin || "N/A"} → ${shipment.destination || "N/A"}`}</td>
//                   <td className="px-5">{`${shipment.vehicleNumber || "N/A"} - ${shipment.driverContactNumber || "N/A"}`}</td>
//                   <td className="px-5">
//                     <span
//                       className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
//                         shipment.status === "In Transit"
//                           ? "bg-[#E8B931]"
//                           : shipment.status === "Delivered"
//                           ? "bg-[#14AE5C]"
//                           : "bg-[#EC221F]"
//                       }`}
//                     >
//                       {shipment.status || "N/A"}
//                     </span>
//                   </td>
//                   <td className="px-5">
//                     {shipment.extimateDeliveryDate
//                       ? new Date(shipment.extimateDeliveryDate).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "numeric",
//                           day: "numeric",
//                         })
//                       : shipment.dropOffDate
//                       ? new Date(shipment.dropOffDate).toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "numeric",
//                           day: "numeric",
//                         })
//                       : "N/A"}
//                   </td>
//                   {selectedTab !== "Delivered" && (
//                     <td className="px-5 relative">
//                       <img
//                         src="/tableAction.svg"
//                         alt="Action"
//                         className="w-5 h-5 cursor-pointer"
//                         onClick={() => handleActionClick(index)}
//                       />
//                       {showDropdown === index && (
//                         <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-32">
//                           <div
//                             className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
//                             onClick={() => handleMarkComplete(shipment._id)}
//                           >
//                             Mark as Complete
//                           </div>
//                         </div>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <p className="text-sm text-white/70">
//           Showing {shipments.length} out of {totalDocs} results
//         </p>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span className="text-white">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageAllShipments;
import React, { useState, useEffect } from "react";
import apiService from "../../components/ApiController/ApiService";
import Swal from "sweetalert2";

const ManageAllShipments = () => {
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [shipmentsCache, setShipmentsCache] = useState({
    Pending: { shipments: [], totalPages: 1, totalDocs: 0, currentPage: 1, selectedCompany: "" },
    "In Transit": { shipments: [], totalPages: 1, totalDocs: 0, currentPage: 1, selectedCompany: "" },
    Delivered: { shipments: [], totalPages: 1, totalDocs: 0, currentPage: 1, selectedCompany: "" },
  });
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const [cacheKey, setCacheKey] = useState(""); // To track changes in tab, page, and company

  // Fetch companies for dropdown
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await apiService.getCompany({ page: 1, limit: 100 });
        setCompanies(response.data?.docs || []);
      } catch (err) {
        console.error("Failed to fetch companies:", err);
        setError("Failed to fetch companies. Please try again.");
      }
    };
    fetchCompanies();
  }, []);

  // Fetch shipments based on tab, page, and company
  useEffect(() => {
    const currentCacheKey = `${selectedTab}-${currentPage}-${selectedCompany}`;
    if (cacheKey === currentCacheKey && shipmentsCache[selectedTab].shipments.length > 0) {
      return; // Skip fetching if cache is valid
    }

    const fetchShipments = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = { page: currentPage, limit: 10 };
        if (selectedCompany) params.companyId = selectedCompany;

        let response;
        if (selectedTab === "Pending") {
          response = await apiService.getAllPendingShipment(params);
        } else if (selectedTab === "In Transit") {
          response = await apiService.getAllInTransitShipment(params);
        } else if (selectedTab === "Delivered") {
          response = await apiService.getAllCompletedShipment(params);
        }

        const shipmentDocs = response.data?.docs || [];
        setShipmentsCache((prev) => ({
          ...prev,
          [selectedTab]: {
            shipments: shipmentDocs,
            totalPages: response.data?.totalPages || 1,
            totalDocs: response.data?.totalDocs || shipmentDocs.length,
            currentPage,
            selectedCompany,
          },
        }));
        setCacheKey(currentCacheKey);
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
    if (page >= 1 && page <= shipmentsCache[selectedTab].totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle action click for dropdown
  const handleActionClick = (index) => {
    setShowDropdown((prev) => (prev === index ? null : index));
  };

  // Handle marking shipment as complete
  const handleMarkComplete = async (shipmentId) => {
    try {
      await apiService.markCompleteShipment(shipmentId);
      setShowDropdown(null);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Order status changed to completed successfully!",
        timer: 3000,
        showConfirmButton: false,
      });
      // Clear cache for Pending and In Transit tabs to force refresh
      setShipmentsCache((prev) => ({
        ...prev,
        Pending: { shipments: [], totalPages: 1, totalDocs: 0, currentPage: 1, selectedCompany: "" },
        "In Transit": { shipments: [], totalPages: 1, totalDocs: 0, currentPage: 1, selectedCompany: "" },
      }));
      // Refresh shipments for the current tab
      const params = { page: currentPage, limit: 10 };
      if (selectedCompany) params.companyId = selectedCompany;
      let response;
      if (selectedTab === "Pending") {
        response = await apiService.getAllPendingShipment(params);
      } else if (selectedTab === "In Transit") {
        response = await apiService.getAllInTransitShipment(params);
      }
      setShipmentsCache((prev) => ({
        ...prev,
        [selectedTab]: {
          shipments: response.data?.docs || [],
          totalPages: response.data?.totalPages || 1,
          totalDocs: response.data?.totalDocs || response.data?.docs?.length || 0,
          currentPage,
          selectedCompany,
        },
      }));
      setCacheKey(`${selectedTab}-${currentPage}-${selectedCompany}`);
    } catch (err) {
      setError("Failed to mark shipment as complete. Please try again.");
      console.error("Mark complete error:", err);
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
      <div className="flex justify-between mb-2">
        <p className="text-[22px] font-semibold py-3">Manage All Shipments</p>
      </div>

      <div className="w-full overflow-hidden mb-6">
        <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
          <div
            onClick={() => {
              setSelectedTab("Pending");
              setCurrentPage(1);
            }}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Pending"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-white"
            }`}
          >
            Pending
          </div>
          <div
            onClick={() => {
              setSelectedTab("In Transit");
              setCurrentPage(1);
            }}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "In Transit"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-[#BFBFBF]"
            }`}
          >
            In Transit
          </div>
          <div
            onClick={() => {
              setSelectedTab("Delivered");
              setCurrentPage(1);
            }}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Delivered"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-[#BFBFBF]"
            }`}
          >
            Delivered
          </div>
        </div>
      </div>

      {/* Shipments Table */}
      {loading ? (
        <p className="text-white text-center py-4">Loading shipments...</p>
      ) : error ? (
        <p className="text-red-500 text-center py-4">{error}</p>
      ) : shipmentsCache[selectedTab].shipments.length === 0 ? (
        <p className="text-white text-center py-4">No shipments found.</p>
      ) : (
        <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
          <table className="min-w-[1000px] w-full text-left">
            <thead>
              <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                <th className="px-5">Shipment ID</th>
                {/* <th className="px-5">Client</th> */}
                <th className="px-5">Origin → Destination</th>
                <th className="px-5">Truck & Driver</th>
                <th className="px-5">Status</th>
                <th className="px-5">ETA</th>
                {selectedTab !== "Delivered" && <th className="px-5">Action</th>}
              </tr>
            </thead>
            <tbody>
              {shipmentsCache[selectedTab].shipments.map((shipment, index) => (
                <tr
                  key={shipment._id || index}
                  className={`bg-[#131060] text-white h-[90px] ${
                    index !== shipmentsCache[selectedTab].shipments.length - 1 ? "border-b border-[#fff]" : ""
                  }`}
                >
                  <td className="px-5">{shipment.orderId || shipment.Id || "N/A"}</td>
                  {/* <td className="px-5">{getCompanyName(shipment.userId?._id)}</td> */}
                  <td className="px-5">{`${shipment.origin || "N/A"} → ${shipment.destination || "N/A"}`}</td>
                  <td className="px-5">{`${shipment.vehicleNumber || "N/A"} - ${shipment.driverContactNumber || "N/A"}`}</td>
                  <td className="px-5">
                    <span
                      className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                        shipment.status === "In Transit"
                          ? "bg-[#E8B931]"
                          : shipment.status === "Delivered"
                          ? "bg-[#14AE5C]"
                          : "bg-[#EC221F]"
                      }`}
                    >
                      {shipment.status || "N/A"}
                    </span>
                  </td>
                  <td className="px-5">
                    {shipment.extimateDeliveryDate
                      ? new Date(shipment.extimateDeliveryDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : shipment.dropOffDate
                      ? new Date(shipment.dropOffDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                      : "N/A"}
                  </td>
                  {selectedTab !== "Delivered" && (
                    <td className="px-5 relative">
                      <img
                        src="/tableAction.svg"
                        alt="Action"
                        className="w-5 h-5 cursor-pointer"
                        onClick={() => handleActionClick(index)}
                      />
                      {showDropdown === index && (
                        <div className="absolute right-4 top-14 bg-[#0B0741] text-white border rounded-md z-50 w-32">
                          <div
                            className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                            onClick={() => handleMarkComplete(shipment._id)}
                          >
                            Mark as Complete
                          </div>
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-white/70">
          Showing {shipmentsCache[selectedTab].shipments.length} out of {shipmentsCache[selectedTab].totalDocs} results
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
            Page {currentPage} of {shipmentsCache[selectedTab].totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === shipmentsCache[selectedTab].totalPages}
            className="px-3 py-1 bg-[#0A0666] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllShipments;